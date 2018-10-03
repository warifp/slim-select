(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["install"],{"06c3":function(s,e,t){"use strict";var i=t("8c86"),l=t.n(i);l.a},"8c86":function(s,e,t){},9224:function(s){s.exports={name:"slim-select",description:"Slim advanced select dropdown",version:"1.18.0",author:"Brian Voelker <brian@webiswhatido.com> (http://webiswhatido.com)",homepage:"https://slimselectjs.com",license:"MIT",bugs:{url:"https://github.com/brianvoe/slim-select/issues"},engines:{node:">=8"},main:"dist/slimselect.min.js",style:"dist/slimselect.min.css",sass:"src/slim-select/slimselect.scss",types:"dist/index.d.ts",repository:{type:"git",url:"git+https://github.com/brianvoe/slim-select.git"},keywords:["select","vanilla","dropdown","search","multiselect"],scripts:{dev:"vue-cli-service serve",library:"rm -r dist && cd src/slim-select && webpack && cd ../../ && npm run cleanDist && npm run renameDist",cleanDist:"rm dist/slimselectcss.min.js && rm dist/slimselectcss.js",renameDist:"mv 'dist/slimselectcss.css' 'dist/slimselect.css' && mv 'dist/slimselectcss.min.css' 'dist/slimselect.min.css'",docs:"vue-cli-service build",build:"npm run docs && npm run library",lint:"vue-cli-service lint"},devDependencies:{"@vue/cli-plugin-babel":"^3.0.4","@vue/cli-plugin-typescript":"^3.0.4","@vue/cli-service":"^3.0.4",ajv:"^6.5.4",chance:"^1.0.16",clipboard:"^2.0.1","node-sass":"^4.9.0","optimize-css-assets-webpack-plugin":"^5.0.1",prismjs:"^1.15.0","sass-loader":"^7.0.1",typescript:"^3.1.1",vue:"^2.5.17","vue-router":"^3.0.1","vue-template-compiler":"^2.5.17",vuex:"^3.0.1","webpack-cli":"^3.1.2"}}},b467:function(s,e,t){"use strict";t.r(e);var i=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"content",attrs:{id:"install-content"}},[s._m(0),t("div",{staticClass:"cdn-content"},[t("h2",[s._v("Cdn")]),t("pre",{staticClass:"install-code"},[s._v("      "),t("code",{staticClass:"language-html"},[s._v('\n        <script src="https://cdnjs.cloudflare.com/ajax/libs/slim-select/'+s._s(s.version)+'/slimselect.min.js"><\/script>\n        <link href="https://cdnjs.cloudflare.com/ajax/libs/slim-select/'+s._s(s.version)+'/slimselect.min.css" rel="stylesheet"></link>\n      ')]),s._v("\n    ")]),s._m(1)])])},l=[function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"npm-content"},[t("h2",[s._v("Npm")]),t("pre",{staticClass:"install-code"},[s._v("      "),t("code",{staticClass:"language-bash"},[s._v("\n        npm install slim-select\n      ")]),s._v("\n    ")]),t("pre",{staticClass:"example-code"},[s._v("      "),t("code",{staticClass:"language-javascript"},[s._v("\n        import SlimSelect from 'slim-select'\n\n        new SlimSelect({\n          select: '#slim-select'\n        })\n      ")]),s._v("\n    ")])])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("pre",{staticClass:"example-code"},[s._v("      "),t("code",{staticClass:"language-javascript"},[s._v("\n        new SlimSelect({\n          select: '#slim-select'\n        })\n      ")]),s._v("\n    ")])}],c=(t("ba4b"),t("9224")),n={data:function(){return{version:c.version}}},a=n,r=(t("06c3"),t("2877")),m=Object(r["a"])(a,i,l,!1,null,null,null);m.options.__file="install.vue";e["default"]=m.exports}}]);
//# sourceMappingURL=install.993bab42.js.map