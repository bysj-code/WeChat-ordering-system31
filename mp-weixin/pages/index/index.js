(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"55ed":function(i,n,e){"use strict";(function(i){e("9785");t(e("66fd"));var n=t(e("c2ab"));function t(i){return i&&i.__esModule?i:{default:i}}i(n.default)}).call(this,e("543d")["createPage"])},"566a":function(i,n,e){"use strict";(function(i){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=s(e("a34a")),o=s(e("b0c9"));function s(i){return i&&i.__esModule?i:{default:i}}function u(i,n){var e;if("undefined"===typeof Symbol||null==i[Symbol.iterator]){if(Array.isArray(i)||(e=a(i))||n&&i&&"number"===typeof i.length){e&&(i=e);var t=0,o=function(){};return{s:o,n:function(){return t>=i.length?{done:!0}:{done:!1,value:i[t++]}},e:function(i){throw i},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,u=!0,r=!1;return{s:function(){e=i[Symbol.iterator]()},n:function(){var i=e.next();return u=i.done,i},e:function(i){r=!0,s=i},f:function(){try{u||null==e.return||e.return()}finally{if(r)throw s}}}}function a(i,n){if(i){if("string"===typeof i)return r(i,n);var e=Object.prototype.toString.call(i).slice(8,-1);return"Object"===e&&i.constructor&&(e=i.constructor.name),"Map"===e||"Set"===e?Array.from(i):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(i,n):void 0}}function r(i,n){(null==n||n>i.length)&&(n=i.length);for(var e=0,t=new Array(n);e<n;e++)t[e]=i[e];return t}function l(i,n,e,t,o,s,u){try{var a=i[s](u),r=a.value}catch(l){return void e(l)}a.done?n(r):Promise.resolve(r).then(t,o)}function c(i){return function(){var n=this,e=arguments;return new Promise((function(t,o){var s=i.apply(n,e);function u(i){l(s,t,o,u,a,"next",i)}function a(i){l(s,t,o,u,a,"throw",i)}u(void 0)}))}}e("29f5");var m=function(){Promise.all([e.e("common/vendor"),e.e("components/uni-ui/lib/uni-icons/uni-icons")]).then(function(){return resolve(e("d970"))}.bind(null,e)).catch(e.oe)},h={components:{uniIcons:m},data:function(){return{rows:2,column:4,iconArr:["cuIcon-same","cuIcon-deliver","cuIcon-evaluate","cuIcon-shop","cuIcon-ticket","cuIcon-cascades","cuIcon-discover","cuIcon-question","cuIcon-pic","cuIcon-filter","cuIcon-footprint","cuIcon-pulldown","cuIcon-pullup","cuIcon-moreandroid","cuIcon-refund","cuIcon-qrcode","cuIcon-remind","cuIcon-profile","cuIcon-home","cuIcon-message","cuIcon-link","cuIcon-lock","cuIcon-unlock","cuIcon-vip","cuIcon-weibo","cuIcon-activity","cuIcon-friendadd","cuIcon-friendfamous","cuIcon-friend","cuIcon-goods","cuIcon-selection"],role:"",menuList:[],swiperMenuList:[],user:{},tableName:"",btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],queryList:[{queryName:"美食名称"}],queryIndex:0,searchForm:{meishixinximeishimingcheng:""},CustomBar:"0",autoplaySwiper:!0,intervalSwiper:5e3,swiperList:[],meishixinxilist:[],homemeishixinxilist:[],news:[]}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var n=this;return c(t.default.mark((function e(){var s,u,a;return t.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n.role=i.getStorageSync("role"),s=i.getStorageSync("nowTable"),e.next=4,n.$api.session(s);case 4:u=e.sent,n.user=u.data,n.tableName=s,a=o.default.list(),n.menuList=a,n.menuList.forEach((function(i,e){n.role==i.roleName&&i.frontMenu.forEach((function(i,e){i.child[0].buttons.indexOf("查看")>-1&&n.swiperMenuList.push(i)}))}));case 10:case"end":return e.stop()}}),e)})))()},onShow:function(){var i=this;return c(t.default.mark((function n(){var e,o,s,a,r;return t.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i.btnColor=i.btnColor.sort((function(){return.5-Math.random()})),e=[],n.next=4,i.$api.page("config",{page:1,limit:5});case 4:o=n.sent,s=u(o.data.list);try{for(s.s();!(a=s.n()).done;)r=a.value,r.name.indexOf("picture")>=0&&r.value&&""!=r.value&&null!=r.value&&e.push({img:r.value,title:r.name})}catch(t){s.e(t)}finally{s.f()}return e&&(i.swiperList=e),n.next=10,i.$api.list("news",{page:1,limit:6});case 10:return o=n.sent,i.news=o.data.list,n.next=14,i.$api.recommend("meishixinxi",{sfsh:"是",page:1,limit:4});case 14:return o=n.sent,i.meishixinxilist=o.data.list,n.next=18,i.$api.list("meishixinxi",{page:1,limit:6});case 18:o=n.sent,i.homemeishixinxilist=o.data.list;case 20:case"end":return n.stop()}}),n)})))()},methods:{queryChange:function(i){this.queryIndex=i.detail.value,this.searchForm.meishixinximeishimingcheng=""},onSwiperTap:function(i){},onNewsDetailTap:function(i){this.$utils.jump("../news-detail/news-detail?id=".concat(i))},onDetailTap:function(i,n){this.$utils.jump("../".concat(i,"/detail?id=").concat(n))},onPageTap:function(n){0==this.queryIndex&&(i.setStorageSync("indexQueryCondition",this.searchForm.meishixinximeishimingcheng),this.searchForm.meishixinximeishimingcheng=""),i.navigateTo({url:"../".concat(n,"/list"),fail:function(){i.switchTab({url:"../".concat(n,"/list")})}})},onPageTap2:function(n){i.setStorageSync("useridTag",0),i.navigateTo({url:n,fail:function(){i.switchTab({url:n})}})}}};n.default=h}).call(this,e("543d")["default"])},"8ee0":function(i,n,e){},c2ab:function(i,n,e){"use strict";e.r(n);var t=e("edcc"),o=e("e456");for(var s in o)"default"!==s&&function(i){e.d(n,i,(function(){return o[i]}))}(s);e("cdf7");var u,a=e("f0c5"),r=Object(a["a"])(o["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],u);n["default"]=r.exports},cdf7:function(i,n,e){"use strict";var t=e("8ee0"),o=e.n(t);o.a},e456:function(i,n,e){"use strict";e.r(n);var t=e("566a"),o=e.n(t);for(var s in t)"default"!==s&&function(i){e.d(n,i,(function(){return t[i]}))}(s);n["default"]=o.a},edcc:function(i,n,e){"use strict";var t;e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return t}));var o=function(){var i=this,n=i.$createElement,e=(i._self._c,i.__map(i.menuList,(function(n,e){var t=i.__get_orig(n),o=i.__map(n.frontMenu,(function(e,t){var o=i.__get_orig(e),s=i.role==n.roleName?i.__map(e.child,(function(n,e){var t=i.__get_orig(n),o=i.__map(n.buttons,(function(e,t){var o=i.__get_orig(e),s="查看"==e&&"yifahuodingdan"!=n.tableName&&"yituikuandingdan"!=n.tableName&&"yiquxiaodingdan"!=n.tableName&&"weizhifudingdan"!=n.tableName&&"yizhifudingdan"!=n.tableName&&"yiwanchengdingdan"!=n.tableName?n.menu.split("列表"):null;return{$orig:o,g0:s}}));return{$orig:t,l0:o}})):null;return{$orig:o,l1:s}}));return{$orig:t,l2:o}}))),t=i.meishixinxilist.length>0&&i.meishixinxilist[0].meishitupian?i.meishixinxilist[0].meishitupian.split(","):null,o=i.meishixinxilist.length>1&&i.meishixinxilist[1].meishitupian?i.meishixinxilist[1].meishitupian.split(","):null,s=i.meishixinxilist.length>2&&i.meishixinxilist[2].meishitupian?i.meishixinxilist[2].meishitupian.split(","):null,u=i.meishixinxilist.length>3&&i.meishixinxilist[3].meishitupian?i.meishixinxilist[3].meishitupian.split(","):null,a=i.meishixinxilist.length>4&&i.meishixinxilist[4].meishitupian?i.meishixinxilist[4].meishitupian.split(","):null,r=i.meishixinxilist.length>5&&i.meishixinxilist[5].meishitupian?i.meishixinxilist[5].meishitupian.split(","):null,l=i.homemeishixinxilist.length>0&&i.homemeishixinxilist[0].meishitupian?i.homemeishixinxilist[0].meishitupian.split(","):null,c=i.homemeishixinxilist.length>1&&i.homemeishixinxilist[1].meishitupian?i.homemeishixinxilist[1].meishitupian.split(","):null,m=i.homemeishixinxilist.length>2&&i.homemeishixinxilist[2].meishitupian?i.homemeishixinxilist[2].meishitupian.split(","):null,h=i.homemeishixinxilist.length>3&&i.homemeishixinxilist[3].meishitupian?i.homemeishixinxilist[3].meishitupian.split(","):null,f=i.homemeishixinxilist.length>4&&i.homemeishixinxilist[4].meishitupian?i.homemeishixinxilist[4].meishitupian.split(","):null,d=i.homemeishixinxilist.length>5&&i.homemeishixinxilist[5].meishitupian?i.homemeishixinxilist[5].meishitupian.split(","):null;i.$mp.data=Object.assign({},{$root:{l3:e,g1:t,g2:o,g3:s,g4:u,g5:a,g6:r,g7:l,g8:c,g9:m,g10:h,g11:f,g12:d}})},s=[]}},[["55ed","common/runtime","common/vendor"]]]);