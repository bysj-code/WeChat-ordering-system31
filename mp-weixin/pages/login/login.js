(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"143f":function(e,t,n){"use strict";var o;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o}));var i=function(){var e=this,t=e.$createElement;e._self._c},r=[]},"3fe2":function(e,t,n){"use strict";(function(e){n("9785");o(n("66fd"));var t=o(n("9461"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"732e":function(e,t,n){"use strict";var o=n("ef1f"),i=n.n(o);i.a},"7fce":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("a34a")),i=r(n("b0c9"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n,o,i,r,a){try{var u=e[r](a),s=u.value}catch(c){return void n(c)}u.done?t(s):Promise.resolve(s).then(o,i)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var r=e.apply(t,n);function u(e){a(r,o,i,u,s,"next",e)}function s(e){a(r,o,i,u,s,"throw",e)}u(void 0)}))}}var s={data:function(){return{username:"",password:"",codes:[{num:1,color:"#000",rotate:"10deg",size:"16px"},{num:2,color:"#000",rotate:"10deg",size:"16px"},{num:3,color:"#000",rotate:"10deg",size:"16px"},{num:4,color:"#000",rotate:"10deg",size:"16px"}],options:["请选择登录用户类型"],optionsValues:["","yonghu","shangjia"],index:0,roleNum:0}},onLoad:function(){var e=["请选择登录用户类型"],t=i.default.list();this.menuList=t;for(var n=0;n<this.menuList.length;n++)"是"==this.menuList[n].hasFrontLogin&&(e.push(this.menuList[n].roleName),this.roleNum++);1==this.roleNum&&(this.index=1),this.options=e,this.styleChange()},methods:{styleChange:function(){this.$nextTick((function(){}))},onRegisterTap:function(t){e.setStorageSync("loginTable",t),this.$utils.jump("../register/register")},onForgetTap:function(){this.$utils.jump("../forget/forget")},onLoginTap:function(){var t=this;return u(o.default.mark((function n(){var i;return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.optionsValues[t.index]){n.next=3;break}return t.$utils.msg("请选择登陆用户类型"),n.abrupt("return");case 3:return n.next=5,t.$api.login("".concat(t.optionsValues[t.index]),{username:t.username,password:t.password});case 5:return i=n.sent,e.removeStorageSync("useridTag"),e.setStorageSync("token",i.token),e.setStorageSync("nickname",t.username),e.setStorageSync("nowTable","".concat(t.optionsValues[t.index])),n.next=12,t.$api.session("".concat(t.optionsValues[t.index]));case 12:i=n.sent,e.setStorageSync("userid",i.data.id),i.data.vip&&e.setStorageSync("vip",i.data.vip),e.setStorageSync("role","".concat(t.options[t.index])),t.$utils.tab("../index/index");case 17:case"end":return n.stop()}}),n)})))()},optionsChange:function(e){this.index=e.target.value}}};t.default=s}).call(this,n("543d")["default"])},9461:function(e,t,n){"use strict";n.r(t);var o=n("143f"),i=n("e80d");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("732e"),n("b9e6");var a,u=n("f0c5"),s=Object(u["a"])(i["default"],o["b"],o["c"],!1,null,"4061d6eb",null,!1,o["a"],a);t["default"]=s.exports},b9e6:function(e,t,n){"use strict";var o=n("bf0f"),i=n.n(o);i.a},bf0f:function(e,t,n){},e80d:function(e,t,n){"use strict";n.r(t);var o=n("7fce"),i=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);t["default"]=i.a},ef1f:function(e,t,n){}},[["3fe2","common/runtime","common/vendor"]]]);