package validation

import (
	"bufio"
	"fmt"
	"reflect"
	"strings"
	"unicode/utf8"
)

// PathType type of the element being explored.
type PathType int

const (
	// PathTypeElement the explored element is used as a final element (leaf).
	PathTypeElement PathType = iota

	// PathTypeArray the explored element is used as an array and not a final element.
	// All elements in the array will be explored using the next PathItem.
	PathTypeArray

	// PathTypeObject the explored element is used as an object (`map[string]interface{}`)
	// and not a final element.
	PathTypeObject
)

// PathItem step in exploration.
// Items NOT having `PathTypeElement` as a `Type` are expected to have a non-nil `Next`.
type PathItem struct {
	Next *PathItem
	Name string
	Type PathType
}

// WalkContext information sent to walk function.
type WalkContext struct {
	Value    interface{}
	Parent   interface{} // Either map[string]interface{} or a slice
	Name     string      // Name of the current element
	Index    int         // If parent is a slice, the index of the current element in the slice, else -1
	NotFound bool        // True if the path could not be completely explored
}

// Walk this path and execute the given behavior for each matching element.
// The given "f" function is executed for each final element matched. If the path
// cannot be completed because the step's name doesn't exist in the currently explored map,
// the function will be executed as well, with a the `WalkContext`'s `NotFound` field set to `true`.
func (p *PathItem) Walk(currentElement interface{}, f func(WalkContext)) {
	p.walk(currentElement, nil, -1, f)
}

func (p *PathItem) walk(currentElement interface{}, parent interface{}, index int, f func(WalkContext)) {
	element := currentElement
	if p.Name != "" {
		ce, ok := currentElement.(map[string]interface{})
		if ok {
			element, ok = ce[p.Name]
			index = -1
		}
		if !ok {
			f(WalkContext{
				Value:    nil,
				Parent:   currentElement,
				Name:     p.Name,
				Index:    index,
				NotFound: true,
			})
			return
		}
		parent = currentElement
	}

	switch p.Type {
	case PathTypeElement:
		f(WalkContext{
			Value:  element,
			Parent: parent,
			Name:   p.Name,
			Index:  index,
		})
	case PathTypeArray:
		list := reflect.ValueOf(element)
		if list.Kind() != reflect.Slice {
			f(WalkContext{
				Value:    nil,
				Parent:   parent,
				Name:     p.Name,
				Index:    index,
				NotFound: true,
			})
			return
		}
		length := list.Len()
		for i := 0; i < length; i++ {
			v := list.Index(i)
			value := v.Interface()
			p.Next.walk(value, element, i, f)
		}
	case PathTypeObject:
		p.Next.walk(element, parent, index, f)
	}
}

// HasArray returns true if a least one step in the path involves an array.
func (p *PathItem) HasArray() bool {
	step := p
	for step != nil {
		if step.Type == PathTypeArray {
			return true
		}
		step = step.Next
	}
	return false
}

// LastParent returns the last step in the path that is not a PathTypeElement, excluding
// the first step in the path, or nil.
func (p *PathItem) LastParent() *PathItem {
	step := p
	for step != nil {
		if step.Next != nil && step.Next.Type == PathTypeElement {
			return step
		}
		step = step.Next
	}
	return nil
}

// ComputePath transform given path string representation into usable PathItem.
//
// Example paths:
//   name
//   object.field
//   object.subobject.field
//   object.array[]
//   object.arrayOfObjects[].field
func ComputePath(p string) (*PathItem, error) {
	rootPath := &PathItem{}
	path := rootPath

	scanner := createPathScanner(p)
	for scanner.Scan() {
		t := scanner.Text()
		switch t {
		case "[]":
			if path.Type == PathTypeArray {
				path.Next = &PathItem{
					Type: PathTypeArray,
				}
				path = path.Next
			} else {
				path.Type = PathTypeArray
			}
		case ".":
			if path.Type == PathTypeArray {
				path.Next = &PathItem{
					Type: PathTypeObject,
					Next: &PathItem{
						Type: PathTypeElement,
					},
				}
				path = path.Next.Next
			} else {
				path.Type = PathTypeObject
				path.Next = &PathItem{
					Type: PathTypeElement,
				}
				path = path.Next
			}
		default:
			path.Name = t
		}
	}

	if err := scanner.Err(); err != nil {
		return nil, err
	}

	if path.Type != PathTypeElement {
		path.Next = &PathItem{
			Type: PathTypeElement,
		}
	}

	return rootPath, nil
}

func createPathScanner(path string) *bufio.Scanner {
	scanner := bufio.NewScanner(strings.NewReader(path))
	split := func(data []byte, atEOF bool) (int, []byte, error) {
		if len(path) == 0 || path[0] == '.' {
			return len(data), data[:], fmt.Errorf("Illegal syntax: %q", path)
		}
		for width, i := 0, 0; i < len(data); i += width {
			var r rune
			r, width = utf8.DecodeRune(data[i:])

			if i+width < len(data) {
				next, _ := utf8.DecodeRune(data[i+width:])
				if isValidSyntax(r, next) {
					return len(data), data[:], fmt.Errorf("Illegal syntax: %q", path)
				}

				if r == '.' && i == 0 {
					return i + width, data[:i+width], nil
				} else if next == '.' || next == '[' {
					return i + width, data[:i+width], nil
				}
			} else if r == '.' || r == '[' {
				return len(data), data[:], fmt.Errorf("Illegal syntax: %q", path)
			}
		}
		if atEOF && len(data) > 0 {
			return len(data), data[:], nil
		}
		return 0, nil, nil
	}
	scanner.Split(split)
	return scanner
}

func isValidSyntax(r rune, next rune) bool {
	return (r == '.' && next == '.') ||
		(r == '[' && next != ']') ||
		(r == '.' && (next == ']' || next == '[')) ||
		(r != '.' && r != '[' && next == ']') ||
		(r == ']' && next != '[' && next != '.')
}