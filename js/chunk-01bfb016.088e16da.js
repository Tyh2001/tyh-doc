(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-01bfb016"],{"05fa":function(e,s,t){},"30d8":function(e,s,t){"use strict";t("05fa")},"9ed6":function(e,s,t){"use strict";t.r(s);var r=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{attrs:{id:"loginIndex"}},[t("div",{staticClass:"photo"},[t("img",{attrs:{src:"http://r.photo.store.qq.com/psc?/V52OzcjM296N4D3IEo5e1DfOQZ1pM1IO/45NBuzDIW489QBoVep5mcQy2B2YFlT1RLRHihM9ad7lpFJGoQQE5khd*kn0j*bnbIzPkplEqpg*mdY5SN4ozH.WlbL0Nrtw5DOpFddNOqa0!/r"},on:{click:function(s){return e.$router.push("/")}}})]),t("p",{staticClass:"Welcome"},[e._v("Welcome to my website.")]),t("div",{staticClass:"loginBox"},[t("p",{staticClass:"title"},[e._v("用户名或账号")]),t("el-input",{attrs:{size:"small",clearable:"",placeholder:"请输入用户名"},model:{value:e.user.userName,callback:function(s){e.$set(e.user,"userName",s)},expression:"user.userName"}}),t("p",{staticClass:"title"},[e._v("密码")]),t("el-input",{attrs:{size:"small",type:"password",clearable:"",placeholder:"请输入密码"},model:{value:e.user.userPassword,callback:function(s){e.$set(e.user,"userPassword",s)},expression:"user.userPassword"}}),t("el-button",{attrs:{type:"success",size:"small",loading:e.loading},on:{click:e.subonLogin}},[e._v(" 登入 ")])],1),t("div",{staticClass:"registerBox"},[t("p",[e._v("没有账号？")]),t("p",{staticClass:"addNumber",on:{click:e.onRegister}},[e._v(" 创建一个账户 ")])]),t("p",{staticClass:"goHome",on:{click:function(s){return e.$router.push("/")}}},[e._v(" 返回首页 ")])])},n=[],a=t("1da1"),o=(t("96cf"),t("b775")),u=function(){return Object(o["a"])({method:"POST",url:"/tyh/onlogin"})},i={name:"loginIndex",data:function(){return{user:{userName:"",userPassword:""},loading:!1}},mounted:function(){this.$notify.info({title:"登录账号",message:"\n        游客登录测试账号：\n        <br />\n        账号：ceshi1234\n        <br />\n        密码：12345678\n      ",dangerouslyUseHTMLString:!0,duration:0,position:"top-left"})},methods:{subonLogin:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function s(){var t,r,n,a,o,i;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return e.loading=!0,s.next=3,u();case 3:t=s.sent,r=t.data,n=e.user.userName,a=e.user.userPassword,r.user1.userName===n&&r.user1.userPassword===a?(o=r.user1,e.$message({message:"游客登录成功",type:"success"}),e.$store.commit("changeUserInfo",o),e.$router.push("/")):r.user2.userName===n&&r.user2.userPassword===a?(i=r.user2,e.$message({message:"Hi,Tyh!",type:"success",duration:1e3,showClose:!0}),e.$store.commit("changeUserInfo",i),e.$router.push("/")):e.$message.error({message:"登录失败，账号或密码错误",duration:1e3}),e.loading=!1;case 9:case"end":return s.stop()}}),s)})))()},onRegister:function(){this.$message("注册功能暂时不能使用！")}}},c=i,l=(t("30d8"),t("2877")),d=Object(l["a"])(c,r,n,!1,null,"2f523ef0",null);s["default"]=d.exports}}]);
//# sourceMappingURL=chunk-01bfb016.088e16da.js.map