(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{75:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return b})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(7),l=(t(0),t(93)),b={},i={unversionedId:"content/string",id:"content/string",isDocsHomePage:!1,title:"string",description:"Content Family: String",source:"@site/docs/content/string.md",slug:"/content/string",permalink:"/synth/content/string",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/content/string.md",version:"current",sidebar:"docsSidebar",previous:{title:"number",permalink:"/synth/content/number"},next:{title:"object",permalink:"/synth/content/object"}},c=[{value:"Content Family: String",id:"content-family-string",children:[]}],o={toc:c};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"content-family-string"},"Content Family: String"),Object(l.b)("h4",{id:"content-stringpattern"},"Content: String::Pattern"),Object(l.b)("p",null,"String values generated by a regular expression in the ",Object(l.b)("inlineCode",{parentName:"p"},"pattern")," parameter. The below will generated Strings like ",Object(l.b)("inlineCode",{parentName:"p"},"bla")," or ",Object(l.b)("inlineCode",{parentName:"p"},"blabla")," or ",Object(l.b)("inlineCode",{parentName:"p"},"blablabla")," and so on."),Object(l.b)("h6",{id:"example"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'"bla_bla_bla" : {    \n    "pattern": "(bla)+",\n    "type": "string"\n}\n')),Object(l.b)("h6",{id:"example-output"},"Example Output"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'[\n    {\n      "bla_bla_bla": "blablablablablablablablablablablablablablablablablablablablabla"\n    },\n    {\n      "bla_bla_bla": "blablablablablablablablablablablablablablablablablablablablablablablablabla"\n    },\n    {\n      "bla_bla_bla": "blablablablablablablablablablablablabla"\n    },\n    {\n      "bla_bla_bla": "blablablablablablablablablablablablablabla"\n    },\n    {\n      "bla_bla_bla": "blablablablablablablablablablablablablablablablablablablablablablabla"\n    }\n]\n')),Object(l.b)("h4",{id:"content-stringfaker"},"Content: String::Faker"),Object(l.b)("p",null,"This offers integration with the python Faker library. Faker offers a variety of different fake data, in different locals and can be accessed easily from Synth."),Object(l.b)("p",null,"For more information on the different types of faker generators see Faker's ",Object(l.b)("a",{parentName:"p",href:"https://faker.readthedocs.io/en/master/"},"documentation"),"."),Object(l.b)("p",null,"The below example generates fake credit card numbers. "),Object(l.b)("p",null,"Since Faker generators can take arbitrary parameters, the ",Object(l.b)("inlineCode",{parentName:"p"},"String::Faker")," content type can accept arbitrary key/value pairs. In the below example this is ",Object(l.b)("inlineCode",{parentName:"p"},'"card_type" : "amex"')),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"String::Faker")," also supports locales, which can be specified using the ",Object(l.b)("em",{parentName:"p"},"optional")," ",Object(l.b)("inlineCode",{parentName:"p"},"locales")," property."),Object(l.b)("h6",{id:"example-1"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'"credit_card": {\n  "type": "string",\n  "faker": {\n    "generator": "credit_card_number",\n    "card_type": "amex",\n    "locales" : ["en_GB"]\n  }\n}\n')),Object(l.b)("h6",{id:"example-output-1"},"Example Output"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'[\n    {\n      "credit_card": "341906447099439"\n    },\n    {\n      "credit_card": "345700140739631"\n    },\n    {\n      "credit_card": "378500663476771"\n    },\n    {\n      "credit_card": "347802667649678"\n    },\n    {\n      "credit_card": "375235715161245"\n    }\n]\n')),Object(l.b)("h4",{id:"content-stringdatetime"},"Content: String::DateTime"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"String::DateTime")," is a content type representing ISO 8601 dates and times."),Object(l.b)("p",null,"The DateTime appearance can be set via the ",Object(l.b)("inlineCode",{parentName:"p"},"format")," property - as well as specifying the possible datetime intervals using the ",Object(l.b)("inlineCode",{parentName:"p"},"begin")," and ",Object(l.b)("inlineCode",{parentName:"p"},"end")," properties."),Object(l.b)("h6",{id:"example-2"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'"last_login_at" : {\n    "type": "string",\n    "date_time": {\n        "format": "%Y-%m-%dT%H:%M:%S%z",\n        "begin": "2015-01-01T00:00:00+0000",\n        "end": "2020-01-01T00:00:00+0000"\n    }\n}\n')),Object(l.b)("h6",{id:"example-output-2"},"Example Output"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'[\n    {\n      "last_login_at": "2016-07-28T15:00:48+0000"\n    },\n    {\n      "last_login_at": "2016-01-05T16:25:56+0000"\n    },\n    {\n      "last_login_at": "2015-03-26T16:01:41+0000"\n    },\n    {\n      "last_login_at": "2016-04-05T21:49:33+0000"\n    },\n    {\n      "last_login_at": "2015-01-03T03:10:53+0000"\n    }\n]\n')),Object(l.b)("h4",{id:"content-categoricalstring"},"Content: Categorical::String"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"String::Categorical")," is a content type which can take one out of a finite set of user-defined values."),Object(l.b)("p",null,"Categoricals also maintain a probability distribution under the hood which represents how many times a certain element has been seen by Synth. The distribution is derived from the number of occurences of each variant of the categorical."),Object(l.b)("h6",{id:"example-3"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'"chess_piece" : {\n     "type": "string",\n     "categorical": {\n         "pawn": 8,\n         "rook": 2,\n         "knight": 2,\n         "bishop": 2,\n         "queen": 1,\n         "king": 1\n     }\n}\n')),Object(l.b)("h6",{id:"example-output-3"},"Example Output"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'[\n    {\n      "chess_piece": "knight"\n    },\n    {\n      "chess_piece": "pawn"\n    },\n    {\n      "chess_piece": "pawn"\n    },\n    {\n      "chess_piece": "rook"\n    },\n    {\n      "chess_piece": "pawn"\n    }\n]\n')))}p.isMDXComponent=!0},93:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=r.a.createContext({}),p=function(e){var n=r.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),s=p(t),d=a,m=s["".concat(b,".").concat(d)]||s[d]||u[d]||l;return t?r.a.createElement(m,i(i({ref:n},o),{},{components:t})):r.a.createElement(m,i({ref:n},o))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,b=new Array(l);b[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,b[1]=i;for(var o=2;o<l;o++)b[o]=t[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);