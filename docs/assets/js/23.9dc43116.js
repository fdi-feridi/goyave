(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{231:function(t,e,a){"use strict";a.r(e);var n=a(0),o=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#introduction"}},[t._v("Introduction")])]),a("li",[a("a",{attrs:{href:"#environment-configuration"}},[t._v("Environment configuration")])]),a("li",[a("a",{attrs:{href:"#using-the-configuration"}},[t._v("Using the configuration")]),a("ul",[a("li",[a("a",{attrs:{href:"#getting-a-value"}},[t._v("Getting a value")])]),a("li",[a("a",{attrs:{href:"#setting-a-value"}},[t._v("Setting a value")])])])]),a("li",[a("a",{attrs:{href:"#custom-config-entries"}},[t._v("Custom config entries")])]),a("li",[a("a",{attrs:{href:"#configuration-reference"}},[t._v("Configuration reference")])]),a("li",[a("a",{attrs:{href:"#setting-up-https"}},[t._v("Setting up HTTPS")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("p",[t._v("The Goyave framework lets you configure its core and your application.\nTo configure your application, use the "),a("code",[t._v("config.json")]),t._v(" file at your project's root. If you are using the template project, copy "),a("code",[t._v("config.example.json")]),t._v(" to "),a("code",[t._v("config.json")]),t._v(". "),a("code",[t._v("config.json")]),t._v(" should be ignored in your "),a("code",[t._v(".gitignore")]),t._v(" file as it can differ from one developer to another. To avoid accidental commit or change to the default project's config, it is a good practice to ignore this file and define the project's default config in "),a("code",[t._v("config.example.json")]),t._v(".")]),t._v(" "),a("p",[t._v("If this config file misses some config entries, the default values will be used. All values from the framework's core are "),a("strong",[t._v("validated")]),t._v(". That means that the application will not start if you provided an invalid value in your config (For example if the specified port is not a number)."),a("br"),t._v("\nSee the "),a("a",{attrs:{href:"#configuration-reference"}},[t._v("configuration reference")]),t._v(" for more details.")]),t._v(" "),a("h2",{attrs:{id:"environment-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#environment-configuration"}},[t._v("#")]),t._v(" Environment configuration")]),t._v(" "),a("p",[t._v("Most projects need different configuration values based on the environment. For example, you won't connect to the same database if you're in local development, in a testing environment inside continuous integration pipelines, or in production. Goyave supports multiple configurations and will pick the appropriate one depending on the environment variable "),a("code",[t._v("GOYAVE_ENV")]),t._v(".")]),t._v(" "),a("p",[t._v("Since "),a("code",[t._v("v2.0.0")]),t._v(", you can use custom environments.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("GOYAVE_ENV")]),t._v(" "),a("th",[t._v("Config file")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("test")]),t._v(" "),a("td",[a("code",[t._v("config.test.json")])])]),t._v(" "),a("tr",[a("td",[t._v("production")]),t._v(" "),a("td",[a("code",[t._v("config.production.json")])])]),t._v(" "),a("tr",[a("td",[a("em",[t._v("custom_env")])]),t._v(" "),a("td",[a("code",[t._v("config.custom_env.json")])])]),t._v(" "),a("tr",[a("td",[t._v("local / localhost / "),a("em",[t._v("not set")])]),t._v(" "),a("td",[a("code",[t._v("config.json")])])])])]),t._v(" "),a("h2",{attrs:{id:"using-the-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-the-configuration"}},[t._v("#")]),t._v(" Using the configuration")]),t._v(" "),a("p",[t._v("Before being able to use the config, import the config package:")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/System-Glitch/goyave/config"')]),t._v("\n")])])]),a("p",[t._v("The configuration is loaded automatically when the server starts, but you can reload it manually if needed.")]),t._v(" "),a("h4",{attrs:{id:"config-load"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config-load"}},[t._v("#")]),t._v(" config.Load")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parameters")]),t._v(" "),a("th",[t._v("Return")])])]),t._v(" "),a("tbody",[a("tr",[a("td"),t._v(" "),a("td",[a("code",[t._v("error")])])])])]),t._v(" "),a("p",[a("strong",[t._v("Example:")])]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Load")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"getting-a-value"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-a-value"}},[t._v("#")]),t._v(" Getting a value")]),t._v(" "),a("h4",{attrs:{id:"config-get"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config-get"}},[t._v("#")]),t._v(" config.Get")]),t._v(" "),a("p",[t._v("Get a generic config entry. You may need to type-assert it before being able to use it. You can do so safely as the config values and types are validated. Panics if the entry doesn't exist.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parameters")]),t._v(" "),a("th",[t._v("Return")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("key string")])]),t._v(" "),a("td",[a("code",[t._v("interface{}")]),t._v(" or panic")])])])]),t._v(" "),a("p",[a("strong",[t._v("Example:")])]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"appName"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "goyave"')]),t._v("\n")])])]),a("h4",{attrs:{id:"config-getstring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config-getstring"}},[t._v("#")]),t._v(" config.GetString")]),t._v(" "),a("p",[t._v("Get a string config entry. Panics if the entry doesn't exist or is not a string.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parameters")]),t._v(" "),a("th",[t._v("Return")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("key string")])]),t._v(" "),a("td",[a("code",[t._v("string")]),t._v(" or panic")])])])]),t._v(" "),a("p",[a("strong",[t._v("Example:")])]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"protocol"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "http"')]),t._v("\n")])])]),a("h4",{attrs:{id:"config-getbool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config-getbool"}},[t._v("#")]),t._v(" config.GetBool")]),t._v(" "),a("p",[t._v("Get a bool config entry. Panics if the entry doesn't exist or is not a bool.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parameters")]),t._v(" "),a("th",[t._v("Return")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("key string")])]),t._v(" "),a("td",[a("code",[t._v("bool")]),t._v(" or panic")])])])]),t._v(" "),a("p",[a("strong",[t._v("Example:")])]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetBool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"debug"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),a("h3",{attrs:{id:"setting-a-value"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-a-value"}},[t._v("#")]),t._v(" Setting a value")]),t._v(" "),a("p",[t._v("You can set a config value at runtime with the "),a("code",[t._v("config.Set(key, value)")]),t._v(" function. Bear in mind that this change "),a("strong",[t._v("temporary")]),t._v(" and will be lost after your application restarts or if the config is reloaded. This function is mainly used for testing purposes. Values set using this function are still being validated, and your application will panic if the validation doesn't pass.")]),t._v(" "),a("h4",{attrs:{id:"config-set"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config-set"}},[t._v("#")]),t._v(" config.Set")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parameters")]),t._v(" "),a("th",[t._v("Return")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("key string")])]),t._v(" "),a("td",[a("code",[t._v("void")]),t._v(" or panic")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("value interface{}")])]),t._v(" "),a("td")])])]),t._v(" "),a("p",[a("strong",[t._v("Example:")])]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"appName"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my awesome app"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"custom-config-entries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom-config-entries"}},[t._v("#")]),t._v(" Custom config entries")]),t._v(" "),a("p",[t._v("The core of the framework contains default values covering most cases, but you can still add custom entries for your most specific needs to the config simply by appending a property to your application's config file. The custom properties are not validated, so you can use the data type you want.")]),t._v(" "),a("h2",{attrs:{id:"configuration-reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-reference"}},[t._v("#")]),t._v(" Configuration reference")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Entry")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Accepted values")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Note")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("appName")]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[t._v("any")]),t._v(" "),a("td",[t._v('"goyave"')]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("environment")]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[t._v("any")]),t._v(" "),a("td",[t._v('"localhost"')]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("host")]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[t._v("any")]),t._v(" "),a("td",[t._v('"127.0.0.1"')]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("port")]),t._v(" "),a("td",[a("code",[t._v("float64")])]),t._v(" "),a("td",[t._v("any")]),t._v(" "),a("td",[a("code",[t._v("8080")])]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("httpsPort")]),t._v(" "),a("td",[a("code",[t._v("float64")])]),t._v(" "),a("td",[t._v("any")]),t._v(" "),a("td",[a("code",[t._v("8081")])]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("protocol")]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[t._v('"http", "https"')]),t._v(" "),a("td",[t._v('"http"')]),t._v(" "),a("td",[t._v("See the "),a("a",{attrs:{href:"#setting-up-https"}},[t._v("HTTPS")]),t._v(" section")])]),t._v(" "),a("tr",[a("td",[t._v("tlsCert")]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[t._v("any")]),t._v(" "),a("td",[t._v("none")]),t._v(" "),a("td",[t._v("Path to your TLS cert")])]),t._v(" "),a("tr",[a("td",[t._v("tlsKey")]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[t._v("any")]),t._v(" "),a("td",[t._v("none")]),t._v(" "),a("td",[t._v("Path to your TLS key")])]),t._v(" "),a("tr",[a("td",[t._v("debug")]),t._v(" "),a("td",[a("code",[t._v("bool")])]),t._v(" "),a("td",[a("code",[t._v("true")]),t._v(", "),a("code",[t._v("false")])]),t._v(" "),a("td",[a("code",[t._v("true")])]),t._v(" "),a("td",[t._v("When activated, print stacktrace on error and sends error message in response. "),a("strong",[t._v("Disable this in production!")])])]),t._v(" "),a("tr",[a("td",[t._v("timeout")]),t._v(" "),a("td",[a("code",[t._v("float64")])]),t._v(" "),a("td",[t._v("any")]),t._v(" "),a("td",[a("code",[t._v("10")])]),t._v(" "),a("td",[t._v("Timeout in seconds")])]),t._v(" "),a("tr",[a("td",[t._v("maxUploadSize")]),t._v(" "),a("td",[a("code",[t._v("float64")])]),t._v(" "),a("td",[t._v("any")]),t._v(" "),a("td",[a("code",[t._v("10")])]),t._v(" "),a("td",[t._v("Max "),a("strong",[t._v("in-memory")]),t._v(" files sent in the request, in MiB")])]),t._v(" "),a("tr",[a("td",[t._v("defaultLanguage")]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[t._v("any")]),t._v(" "),a("td",[t._v('"en-US"')]),t._v(" "),a("td",[t._v("See the "),a("a",{attrs:{href:"./advanced/localization"}},[t._v("Localization")]),t._v(" guide")])]),t._v(" "),a("tr",[a("td",[t._v("dbConnection")]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[t._v('"none", "mysql", "postgres", "sqlite3", "mssql"')]),t._v(" "),a("td",[t._v('"none"')]),t._v(" "),a("td",[t._v("See the "),a("a",{attrs:{href:"./basics/database"}},[t._v("Database")]),t._v(" guide")])]),t._v(" "),a("tr",[a("td",[t._v("dbHost")]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[t._v("any")]),t._v(" "),a("td",[t._v('"127.0.0.1"')]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("dbPort")]),t._v(" "),a("td",[a("code",[t._v("float64")])]),t._v(" "),a("td",[t._v("any")]),t._v(" "),a("td",[a("code",[t._v("3306")])]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("dbName")]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[t._v("any")]),t._v(" "),a("td",[t._v('"goyave"')]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("dbUsername")]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[t._v("any")]),t._v(" "),a("td",[t._v('"root"')]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("dbPassword")]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[t._v("any")]),t._v(" "),a("td",[t._v('"root"')]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("dbOptions")]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[t._v("any")]),t._v(" "),a("td",[t._v('"charset=utf8&parseTime=true&loc=Local"')]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("dbMaxOpenConnections")]),t._v(" "),a("td",[a("code",[t._v("float64")])]),t._v(" "),a("td",[t._v("any")]),t._v(" "),a("td",[a("code",[t._v("100")])]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("dbMaxIdleConnections")]),t._v(" "),a("td",[a("code",[t._v("float64")])]),t._v(" "),a("td",[t._v("any")]),t._v(" "),a("td",[a("code",[t._v("20")])]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("dbAutoMigrate")]),t._v(" "),a("td",[a("code",[t._v("bool")])]),t._v(" "),a("td",[a("code",[t._v("true")]),t._v(", "),a("code",[t._v("false")])]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[t._v("When activated, migrate all registered models at startup")])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("Numeric values are parsed as "),a("code",[t._v("float64")]),t._v(" even if they are supposed to be integers so it covers the potential use-case of floats in the config.")])]),t._v(" "),a("h2",{attrs:{id:"setting-up-https"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-https"}},[t._v("#")]),t._v(" Setting up HTTPS")]),t._v(" "),a("p",[t._v("Setting up HTTPS on your Goyave application is easy. First, turn "),a("code",[t._v("protocol")]),t._v(" to "),a("code",[t._v("https")]),t._v(" in the config. Then, add the "),a("code",[t._v("tlsCert")]),t._v(" and "),a("code",[t._v("tlsKey")]),t._v(" entries in the config. These two entries represent respectively the path to your TLS certificate and your TLS key.")]),t._v(" "),a("p",[a("strong",[t._v("Certbot example:")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ...\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tlsCert"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/etc/letsencrypt/live/mydomain.com/cert.pem"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tlsKey"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/etc/letsencrypt/live/mydomain.com/privkey.pem"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ...\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Restart your server and you should now be able to connect securely to your Goyave application! All HTTP requests will automatically be redirected to HTTPS.")])])}),[],!1,null,null,null);e.default=o.exports}}]);