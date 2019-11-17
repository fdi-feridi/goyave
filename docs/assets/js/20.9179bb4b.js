(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{226:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"responses"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#responses"}},[t._v("#")]),t._v(" Responses")]),t._v(" "),e("p",[t._v("Handlers receive a "),e("code",[t._v("goyave.Response")]),t._v(" and a "),e("code",[t._v("goyave.Request")]),t._v(" as parameters. This section is a technical reference of the "),e("code",[t._v("Response")]),t._v(" object. This object brings a number of methods to write HTTP responses.")]),t._v(" "),e("p",[t._v("If you don't write anything before the request lifecycle ends, "),e("code",[t._v("204 No Content")]),t._v(" is automatically written.")]),t._v(" "),e("p",[t._v("All functions below require the "),e("code",[t._v("goyave")]),t._v(" package to be imported.")]),t._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/System-Glitch/goyave"')]),t._v("\n")])])]),e("h4",{attrs:{id:"response-header"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-header"}},[t._v("#")]),t._v(" Response.Header")]),t._v(" "),e("p",[t._v("Returns the Header map that will be sent.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Parameters")]),t._v(" "),e("th",[t._v("Return")])])]),t._v(" "),e("tbody",[e("tr",[e("td"),t._v(" "),e("td",[e("code",[t._v("http.Header")])])])])]),t._v(" "),e("p",[e("strong",[t._v("Example:")])]),t._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[t._v("header "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" response"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Header")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nheader"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Set")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-Type"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application/json"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h4",{attrs:{id:"response-status"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-status"}},[t._v("#")]),t._v(" Response.Status")]),t._v(" "),e("p",[t._v("Write the given status code.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Parameters")]),t._v(" "),e("th",[t._v("Return")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("status int")])]),t._v(" "),e("td",[e("code",[t._v("void")])])])])]),t._v(" "),e("p",[e("strong",[t._v("Example:")])]),t._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[t._v("response"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Status")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("http"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("StatusOK"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h4",{attrs:{id:"response-json"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-json"}},[t._v("#")]),t._v(" Response.JSON")]),t._v(" "),e("p",[t._v("Write JSON data as a response. This method automatically sets the "),e("code",[t._v("Content-Type")]),t._v(" header.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Parameters")]),t._v(" "),e("th",[t._v("Return")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("responseCode int")])]),t._v(" "),e("td",[e("code",[t._v("void")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("data interface{}")])]),t._v(" "),e("td")])])]),t._v(" "),e("p",[e("strong",[t._v("Example:")])]),t._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[t._v("response"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("JSON")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("http"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("StatusOK"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("map")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"John Doe"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tags"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tag1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tag2"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h4",{attrs:{id:"response-string"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-string"}},[t._v("#")]),t._v(" Response.String")]),t._v(" "),e("p",[t._v("Write a string as a response.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Parameters")]),t._v(" "),e("th",[t._v("Return")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("responseCode int")])]),t._v(" "),e("td",[e("code",[t._v("void")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("message string")])]),t._v(" "),e("td")])])]),t._v(" "),e("p",[e("strong",[t._v("Example:")])]),t._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[t._v("response"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("String")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("http"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("StatusOK"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello there!"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h4",{attrs:{id:"response-write"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-write"}},[t._v("#")]),t._v(" Response.Write")]),t._v(" "),e("p",[t._v("Write the data as a response. Can be used to write in-memory files. This method can be called successively.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Parameters")]),t._v(" "),e("th",[t._v("Return")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("data []byte")])]),t._v(" "),e("td",[e("code",[t._v("void")])])])])]),t._v(" "),e("p",[e("strong",[t._v("Example:")])]),t._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[t._v("response"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("byte")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello there!"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h4",{attrs:{id:"response-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-file"}},[t._v("#")]),t._v(" Response.File")]),t._v(" "),e("p",[t._v("Write a file as an inline element.")]),t._v(" "),e("p",[t._v('Automatically detects the file MIME type and sets the "Content-Type" header accordingly. It is advised to call '),e("code",[t._v("filesystem.FileExists()")]),t._v(" before sending a file to avoid a panic and return a 404 error. The given path can be relative or absolute.")]),t._v(" "),e("p",[t._v('If you want the file to be sent as a download ("Content-Disposition: attachment"), use the "Download" function instead.')]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Parameters")]),t._v(" "),e("th",[t._v("Return")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("file string")])]),t._v(" "),e("td",[e("code",[t._v("void")])])])])]),t._v(" "),e("p",[e("strong",[t._v("Example:")])]),t._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[t._v("response"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("File")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/to/file"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h4",{attrs:{id:"response-download"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-download"}},[t._v("#")]),t._v(" Response.Download")]),t._v(" "),e("p",[t._v("Write a file as an attachment element.")]),t._v(" "),e("p",[t._v('Automatically detects the file MIME type and sets the "Content-Type" header accordingly. It is advised to call '),e("code",[t._v("filesystem.FileExists()")]),t._v(" before sending a file to avoid a panic and return a 404 error if the file doesn't exist. The given path can be relative or absolute.")]),t._v(" "),e("p",[t._v('If you want the file to be sent as a download ("Content-Disposition: attachment"), use the "Download" function instead.')]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Parameters")]),t._v(" "),e("th",[t._v("Return")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("file string")])]),t._v(" "),e("td",[e("code",[t._v("void")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("fileName string")])]),t._v(" "),e("td",[e("code",[t._v("void")])])])])]),t._v(" "),e("p",[e("strong",[t._v("Example:")])]),t._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[t._v("response"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Download")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/to/file"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"awesome.txt"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h4",{attrs:{id:"response-error"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-error"}},[t._v("#")]),t._v(" Response.Error")]),t._v(" "),e("p",[t._v("Print the error in the console and return it with an error code 500. If debugging is enabled in the config, the error is also written in the response using the JSON format, and the stacktrace is printed in the console.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Parameters")]),t._v(" "),e("th",[t._v("Return")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("err interface{}")])]),t._v(" "),e("td",[e("code",[t._v("void")])])])])]),t._v(" "),e("p",[e("strong",[t._v("Example:")])]),t._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[t._v("v"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" strconv"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Atoi")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-42"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nresponse"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Error")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h4",{attrs:{id:"response-cookie"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-cookie"}},[t._v("#")]),t._v(" Response.Cookie")]),t._v(" "),e("p",[t._v("Add a Set-Cookie header to the response. The provided cookie must have a valid Name. Invalid cookies may be silently dropped.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Parameters")]),t._v(" "),e("th",[t._v("Return")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("cookie *http.Cookie*")])]),t._v(" "),e("td",[e("code",[t._v("void")])])])])]),t._v(" "),e("p",[e("strong",[t._v("Example:")])]),t._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[t._v("cookie "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("http"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Cookie"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cookie-name"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"value"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nresponse"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Cookie")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cookie"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h4",{attrs:{id:"response-redirect"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-redirect"}},[t._v("#")]),t._v(" Response.Redirect")]),t._v(" "),e("p",[t._v("Send a permanent redirect response. (HTTP 308)")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Parameters")]),t._v(" "),e("th",[t._v("Return")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("url string")])]),t._v(" "),e("td",[e("code",[t._v("void")])])])])]),t._v(" "),e("p",[e("strong",[t._v("Example:")])]),t._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[t._v("response"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Redirect")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/login"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h4",{attrs:{id:"response-temporaryredirect"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-temporaryredirect"}},[t._v("#")]),t._v(" Response.TemporaryRedirect")]),t._v(" "),e("p",[t._v("Send a temporary redirect response. (HTTP 307)")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Parameters")]),t._v(" "),e("th",[t._v("Return")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("url string")])]),t._v(" "),e("td",[e("code",[t._v("void")])])])])]),t._v(" "),e("p",[e("strong",[t._v("Example:")])]),t._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[t._v("response"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("TemporaryRedirect")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/maintenance"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h4",{attrs:{id:"response-createtestresponse"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-createtestresponse"}},[t._v("#")]),t._v(" Response.CreateTestResponse")]),t._v(" "),e("p",[t._v("Create an empty response with the given response writer. This function is aimed at making it easier to unit test Responses.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Parameters")]),t._v(" "),e("th",[t._v("Return")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("recorder http.ResponseWriter")])]),t._v(" "),e("td",[e("code",[t._v("void")])])])])]),t._v(" "),e("p",[e("strong",[t._v("Example:")])]),t._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[t._v("writer "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" httptest"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewRecorder")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nresponse "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" goyave"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("CreateTestResponse")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("writer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nresponse"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Status")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("http"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("StatusNoContent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nresult "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" writer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Result")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfmt"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("StatusCode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 204")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);