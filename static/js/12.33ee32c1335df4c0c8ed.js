webpackJsonp([12],{"/FXu":function(t,n){},h6Ct:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e={name:"notice",data:function(){return{columns1:[{title:"功能",key:"functionname",width:"100",className:"noticebox"},{title:"状态",key:"functionstast",className:"noticebox",width:"100",render:function(t,n){var i=n.row,e=1===i.functionstatus?"blue":2===i.functionstatus?"green":"red",o=1===i.functionstatus?"已获取":2===i.functionstatus?"可获取":"未获取";return t("Tag",{props:{type:"border",color:e,checkable:1===i.functionstatus?"true":2===i.functionstatus?"true":"false"}},o)}},{title:"申请条件",key:"condition",className:"noticebox"},{title:"功能说明",key:"functionurl",className:"noticebox",width:"100",render:function(t,n){return t("a",{attrs:{href:n.row.functionurl,target:"_blank"}},"功能介绍")}}],tableData3:[{functionname:"自营广告",functionstatus:1,condition:"符合条件的头条号可以申请开通自营广告",functionurl:"https://www.toutiao.com/i6487462122262364685/"},{functionname:"原创标签",functionstatus:2,condition:"优质原创头条号可申请开通原创标签。",functionurl:"https://www.toutiao.com/i6487462122262364685/"},{functionname:"千人万元",functionstatus:0,condition:"开通原创标签的个人帐号才可申请。",functionurl:"https://www.toutiao.com/i6487462122262364685/"},{functionname:"外图封面",functionstatus:0,condition:"累计粉丝数2000以上；头条号指数600以上。",functionurl:"https://www.toutiao.com/i6487462122262364685/"}]}},methods:{getdata:function(t){console.log(t)}}},o={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[this._m(0),this._v(" "),n("div",{staticClass:"pagebox",staticStyle:{margin:"10px 0"}},[n("Table",{attrs:{columns:this.columns1,data:this.tableData3,"disabled-hover":!0}})],1)])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"back-title"},[n("span",[this._v("账号功能")])])}]},a=i("VU/8")(e,o,!1,function(t){i("/FXu")},null,null);n.default=a.exports}});
//# sourceMappingURL=12.33ee32c1335df4c0c8ed.js.map