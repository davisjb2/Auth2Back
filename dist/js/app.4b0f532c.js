(function(t){function e(e){for(var r,o,i=e[0],c=e[1],u=e[2],p=0,d=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={app:0},s=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"002d":function(t,e,a){},"034f":function(t,e,a){"use strict";var r=a("64a9"),n=a.n(r);n.a},"29ea":function(t,e,a){},"3d3a":function(t,e,a){"use strict";var r=a("002d"),n=a.n(r);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("b-navbar",[r("template",{slot:"brand"},[r("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/"}}},[r("img",{attrs:{src:a("cf05")}})])],1),r("template",{slot:"start"},[r("b-navbar-item",{attrs:{tag:"div"}},[r("div",{staticClass:"buttons"},[t.loggedIn?t._e():r("button",{staticClass:"button is-info diff-button",on:{click:function(e){return t.goRouter("home")}}},[r("strong",[t._v("Home")])]),t.loggedIn?r("button",{staticClass:"button is-info diff-button",on:{click:function(e){return t.goRouter("dashboard")}}},[t._v("\n                      Dashboard\n                  ")]):t._e(),t.loggedIn?r("button",{staticClass:"button is-light diff-button",on:{click:function(e){return t.goRouter("tasks")}}},[t._v("\n                      Tasks\n                  ")]):t._e(),t.loggedIn?r("button",{staticClass:"button is-light diff-button",on:{click:function(e){return t.goRouter("tasksMove")}}},[t._v("\n                      Tasks Move\n                  ")]):t._e(),t.loggedIn?r("button",{staticClass:"button is-light diff-button",on:{click:function(e){return t.goRouter("account")}}},[t._v("\n                      Account\n                  ")]):t._e()])])],1),r("template",{slot:"end"},[r("b-navbar-item",{attrs:{tag:"div"}},[r("div",{staticClass:"buttons"},[t.loggedIn?t._e():r("button",{staticClass:"button is-info",on:{click:function(e){return t.goRouter("register")}}},[r("strong",[t._v("Sign up")])]),t.loggedIn?t._e():r("button",{staticClass:"button is-light",on:{click:function(e){return t.goRouter("login")}}},[t._v("\n                      Log in\n                  ")]),t.loggedIn?r("button",{staticClass:"button is-light",on:{click:t.logoutUser}},[t._v("\n                      Logout\n                  ")]):t._e()])])],1)],2),r("router-view")],1)},s=[],o=(a("8e6e"),a("ac6a"),a("456d"),a("7f7f"),a("bd86")),i=a("2f62");function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(a,!0).forEach((function(e){Object(o["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var l={name:"app",methods:u({},Object(i["b"])("user",["logout"]),{goRouter:function(t){if(t!=this.$route.name)return this.$router.push({name:t})},logoutUser:function(){console.log("logout"),this.logout()}}),computed:u({},Object(i["c"])("user",["loggedIn"]),{},Object(i["c"])("application",["getErrors"])),watch:{getErrors:function(){this.getErrors.length&&this.$buefy.snackbar.open({message:this.getErrors[this.getErrors.length-1],type:"is-warning",position:"is-top",actionText:"Ok",indefinite:!0})}}},p=l,d=(a("034f"),a("2877")),b=Object(d["a"])(p,n,s,!1,null,null,null),f=b.exports,m=a("8c4f"),g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticClass:"title"},[t._v("Welcome!")]),a("h1",{staticClass:"subtitle"},[t._v("Please login or signup!")])])}],h={name:"home"},O=h,k=Object(d["a"])(O,g,v,!1,null,"19ce1c98",null),y=k.exports,w=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",{staticClass:"title"},[t._v("Dashboard Page")]),r("img",{attrs:{src:a("71ca")}})])}],_={name:"dashboard"},P=_,C=Object(d["a"])(P,w,j,!1,null,"16411740",null),E=C.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"title"},[t._v("Login Page")]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"}),a("div",{staticClass:"column"},[a("b-field",{attrs:{label:"Name","label-position":"on-border"}},[a("b-input",{attrs:{type:"text",name:"username"},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}})],1),a("b-field",{attrs:{label:"Password","label-position":"on-border"}},[a("b-input",{attrs:{type:"password",name:"password"},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}})],1),a("b-button",{staticClass:"button is-info",attrs:{tag:"input","native-type":"submit",value:"Submit"},on:{click:t.submit}})],1),a("div",{staticClass:"column"})])])])},D=[];function N(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function R(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?N(a,!0).forEach((function(e){Object(o["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):N(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var S={name:"login",data:function(){return{user:{email:"",password:""}}},methods:R({},Object(i["b"])("user",["login"]),{submit:function(){var t=this,e=this.user;console.log(JSON.stringify(e,null,2)),this.login(e).then((function(e){t.$router.push({name:"dashboard"}),console.log(e)})).catch((function(t){console.log(t)}))}})},T=S,$=Object(d["a"])(T,x,D,!1,null,"fd14420e",null),A=$.exports,I=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},J=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Logout Page")])])}],L={name:"logout"},U=L,M=Object(d["a"])(U,I,J,!1,null,"3a3e48a4",null),K=M.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"title"},[t._v("Register Page")]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"}),a("div",{staticClass:"column"},[a("b-field",{attrs:{label:"Name","label-position":"on-border"}},[a("b-input",{attrs:{type:"text",name:"username"},model:{value:t.user.username,callback:function(e){t.$set(t.user,"username",e)},expression:"user.username"}})],1),a("b-field",{attrs:{label:"Email","label-position":"on-border"}},[a("b-input",{attrs:{type:"email",name:"email"},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}})],1),a("b-field",{attrs:{label:"Password","label-position":"on-border"}},[a("b-input",{attrs:{type:"password",name:"password"},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}})],1),a("b-field",{attrs:{label:"First Name","label-position":"on-border"}},[a("b-input",{attrs:{type:"text",name:"firstName"},model:{value:t.user.firstName,callback:function(e){t.$set(t.user,"firstName",e)},expression:"user.firstName"}})],1),a("b-field",{attrs:{label:"Last Name","label-position":"on-border"}},[a("b-input",{attrs:{type:"lastName",name:"lastName"},model:{value:t.user.lastName,callback:function(e){t.$set(t.user,"lastName",e)},expression:"user.lastName"}})],1),a("br"),a("b-button",{staticClass:"button is-info",attrs:{tag:"input","native-type":"submit",value:"Submit"},on:{click:t.submit}})],1),a("div",{staticClass:"column"})])])])},F=[];function H(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function W(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?H(a,!0).forEach((function(e){Object(o["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):H(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var q={name:"register",data:function(){return{user:{username:"",email:"",password:"",firstName:"",lastName:""}}},methods:W({},Object(i["b"])("user",["register"]),{submit:function(){var t=this,e=this.user;console.log(JSON.stringify(e,null,2)),this.register(e).then((function(e){t.$router.push({name:"dashboard"}),console.log(e)})).catch((function(t){console.error(t)}))}})},z=q,B=Object(d["a"])(z,G,F,!1,null,"7eaf0ef8",null),Q=B.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"title"},[t._v("Account Page")]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"}),a("div",{staticClass:"column"},[a("b-field",{attrs:{label:"Name","label-position":"on-border"}},[a("b-input",{attrs:{disabled:t.disabled,type:"text",name:"username"},model:{value:t.user.username,callback:function(e){t.$set(t.user,"username",e)},expression:"user.username"}})],1),a("b-field",{attrs:{label:"Email","label-position":"on-border"}},[a("b-input",{attrs:{disabled:t.disabled,type:"email",name:"email"},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}})],1),a("b-field",{attrs:{label:"Password","label-position":"on-border"}},[a("b-input",{attrs:{disabled:t.disabled,type:"password",name:"password"},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}})],1),a("b-field",{attrs:{label:"First Name","label-position":"on-border"}},[a("b-input",{attrs:{disabled:t.disabled,type:"text",name:"firstName"},model:{value:t.user.firstName,callback:function(e){t.$set(t.user,"firstName",e)},expression:"user.firstName"}})],1),a("b-field",{attrs:{label:"Last Name","label-position":"on-border"}},[a("b-input",{attrs:{disabled:t.disabled,type:"lastName",name:"lastName"},model:{value:t.user.lastName,callback:function(e){t.$set(t.user,"lastName",e)},expression:"user.lastName"}})],1),a("br"),t.disabled?a("b-button",{staticClass:"button is-info",attrs:{tag:"input","native-type":"submit",value:"Edit"},on:{click:t.edit}}):a("b-button",{staticClass:"button is-info",attrs:{tag:"input","native-type":"submit",value:"Submit"},on:{click:t.submit}})],1),a("div",{staticClass:"column"})])])])},X=[];function Y(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function Z(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?Y(a,!0).forEach((function(e){Object(o["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):Y(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var tt={name:"account",data:function(){return{user:{username:"",email:"",password:"",firstName:"",lastName:""},disabled:!0}},methods:Z({},Object(i["b"])("user",["updateAccount"]),{submit:function(){var t=this.user;console.log(JSON.stringify(t,null,2)),this.updateAccount(t).then((function(t){alert(t)})).catch((function(t){console.error(t)}))},edit:function(){var t=confirm("Do you want to edit?");this.disabled=!t}}),computed:Z({},Object(i["c"])("user",["getUser"])),watch:{getUser:function(t){console.log(this.getUser()),this.user=JSON.parse(JSON.stringify(t))}},mounted:function(){this.user=JSON.parse(JSON.stringify(this.getUser))}},et=tt,at=Object(d["a"])(et,V,X,!1,null,"9462c23a",null),rt=at.exports,nt=(a("96cf"),a("3b8d")),st=a("bc3a"),ot=a.n(st),it={user:{username:"",firstName:"",lastName:"",email:"",password:""},loggedIn:!1},ct={LOGIN:function(t,e){t.user=e,t.loggedIn=!0},LOGOUT:function(t){t.user={username:"",firstName:"",lastName:"",email:"",password:""},t.loggedIn=!1}},ut={register:function(){var t=Object(nt["a"])(regeneratorRuntime.mark((function t(e,a){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,ot.a.post("/auth/register",{username:a.username,password:a.password,firstName:a.firstName,lastName:a.lastName,email:a.email});case 3:if(n=t.sent,200!=n.data.status){t.next=7;break}return r("LOGIN",{username:n.data.result.username,password:n.data.result.password,firstName:n.data.result.firstName,lastName:n.data.result.lastName,email:n.data.result.email}),t.abrupt("return",{success:!0});case 7:return console.log("error creating account",n),r("application/ERROR",n.data.error),t.abrupt("return",{success:!1});case 10:case"end":return t.stop()}}),t)})));function e(e,a){return t.apply(this,arguments)}return e}(),login:function(){var t=Object(nt["a"])(regeneratorRuntime.mark((function t(e,a){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,ot.a.post("/auth/login",{username:a.email,password:a.password});case 3:if(n=t.sent,200!=n.data.status){t.next=7;break}return r("LOGIN",{username:n.data.result.username,password:n.data.result.password,firstName:n.data.result.firstName,lastName:n.data.result.lastName,email:n.data.result.email}),t.abrupt("return",{success:!0});case 7:return console.log("error logging in",n),r("application/ERROR",n.data.error),t.abrupt("return",{success:!1});case 10:case"end":return t.stop()}}),t)})));function e(e,a){return t.apply(this,arguments)}return e}(),logout:function(){var t=Object(nt["a"])(regeneratorRuntime.mark((function t(e){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,t.next=3,ot.a.get("/auth/logout");case 3:if(r=t.sent,200!=r.data.status){t.next=7;break}return a("LOGOUT"),t.abrupt("return",{success:!0});case 7:return console.log("error logging out",r),a("application/ERROR",r.data.error),t.abrupt("return",{success:!1});case 10:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),updateAccount:function(){var t=Object(nt["a"])(regeneratorRuntime.mark((function t(e,a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.commit,console.log(a);case 2:case"end":return t.stop()}}),t)})));function e(e,a){return t.apply(this,arguments)}return e}()},lt={loggedIn:function(t){return t.loggedIn},getUser:function(t){return t.user}},pt={namespaced:!0,state:it,actions:ut,mutations:ct,getters:lt},dt=(a("20d6"),{tasks:[]}),bt={CREATE_TASK:function(t,e){t.tasks.push(e)},DELETE_TASK:function(t,e){t.tasks.filter((function(t){return t.id!=e}))},UPDATE_TASK:function(t,e){var a=t.tasks.findIndex((function(t){return t.id===e.id}));t.tasks[a]=e}},ft={createTask:function(){var t=Object(nt["a"])(regeneratorRuntime.mark((function t(e,a){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,ot.a.post("/tasks/create",a);case 3:if(n=t.sent,200!=n.data.status){t.next=7;break}return r("CREATE_TASK",n.data.result),t.abrupt("return",{success:!0});case 7:return console.log("Error creating task"),r("application/ERROR","Error creating task"),t.abrupt("return",{success:!1});case 10:case"end":return t.stop()}}),t)})));function e(e,a){return t.apply(this,arguments)}return e}(),updateTask:function(){var t=Object(nt["a"])(regeneratorRuntime.mark((function t(e,a){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,ot.a.post("/tasks/update/".concat(a.id),a);case 3:if(n=t.sent,200!=n.data.status){t.next=7;break}return r("UPDATE_TASK",n.data.result),t.abrupt("return",{success:!0});case 7:return console.log("Error updating task",n.data.error),r("application/ERROR","Error updating task"),t.abrupt("return",{success:!1});case 10:case"end":return t.stop()}}),t)})));function e(e,a){return t.apply(this,arguments)}return e}(),deleteTask:function(){var t=Object(nt["a"])(regeneratorRuntime.mark((function t(e,a){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,ot.a.post("/tasks/delete/".concat(a));case 3:if(n=t.sent,200!=n.data.status){t.next=7;break}return r("DELETE_TASK",a),t.abrupt("return",{success:!0});case 7:return console.log("Error deleting task"),r("application/ERROR","Error deleting task"),t.abrupt("return",{success:!1});case 10:case"end":return t.stop()}}),t)})));function e(e,a){return t.apply(this,arguments)}return e}()},mt={getTasks:function(t){return t.tasks}},gt={namespaced:!0,state:dt,actions:ft,mutations:bt,getters:mt},vt={errors:[]},ht={ERROR:function(t,e){t.errors.push(e)}},Ot={pushError:function(t,e){var a=t.commit;console.log(e),a("ERROR",e)}},kt={getErrors:function(t){return t.errors}},yt={namespaced:!0,state:vt,actions:Ot,mutations:ht,getters:kt};r["a"].use(i["a"]);var wt=new i["a"].Store({strict:!1,modules:{user:pt,application:yt,task:gt}}),jt=function(t,e,a){if(console.log(wt.state.user),e&&t&&e.name&&t.name&&t.name===e.name)return a(!1);if(wt.state.user.loggedIn)switch(t.name){case"login":case"logout":case"register":case"home":return a({name:"dashboard"})}else switch(t.name){case"dashboard":case"account":return a({name:"login"})}return a()},_t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"title"},[t._v("Tasks")]),a("b-button",{staticClass:"button is-info",attrs:{tag:"input",value:"Create New Task"},on:{click:t.create}}),a("b-table",{attrs:{data:t.taskData,columns:t.columns},on:{select:t.edit}})],1),a("b-modal",{attrs:{active:t.modalActive,"has-modal-card":""},on:{"update:active":function(e){t.modalActive=e}}},[a("create-task")],1),a("b-modal",{attrs:{active:t.modalEditActive,"has-modal-card":""},on:{"update:active":function(e){t.modalEditActive=e}}},[a("edit-task",t._b({},"edit-task",t.formProps,!1))],1)],1)},Pt=[],Ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[t._m(0),a("section",{staticClass:"modal-card-body"},[a("b-field",{attrs:{label:"Name","label-position":"on-border"}},[a("b-input",{attrs:{type:"text"},model:{value:t.task.name,callback:function(e){t.$set(t.task,"name",e)},expression:"task.name"}})],1),a("b-field",{attrs:{label:"Due Date","label-position":"on-border"}},[a("b-datepicker",{attrs:{icon:"calendar-today"},model:{value:t.task.dueDate,callback:function(e){t.$set(t.task,"dueDate",e)},expression:"task.dueDate"}})],1),a("b-checkbox",{model:{value:t.task.completed,callback:function(e){t.$set(t.task,"completed",e)},expression:"task.completed"}},[t._v("Completed?")])],1),a("footer",{staticClass:"modal-card-foot"},[a("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(e){return t.$parent.close()}}},[t._v("Close")]),a("button",{staticClass:"button is-primary",on:{click:t.create}},[t._v("Create")])])])},Et=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v("New Task")])])}];function xt(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function Dt(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?xt(a,!0).forEach((function(e){Object(o["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):xt(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var Nt={name:"create",data:function(){return{task:{name:"",completed:!1,dueDate:new Date,lane:0}}},methods:Dt({},Object(i["b"])("task",["createTask"]),{create:function(){var t=this,e=this.task;console.log(JSON.stringify(e,null,2)),this.createTask(e).then((function(){t.$parent.close()})).catch((function(t){console.error(t)}))}})},Rt=Nt,St=Object(d["a"])(Rt,Ct,Et,!1,null,"1fd2bc5f",null),Tt=St.exports,$t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[t._m(0),a("section",{staticClass:"modal-card-body"},[a("b-field",{attrs:{label:"Name","label-position":"on-border"}},[a("b-input",{attrs:{type:"text"},model:{value:t.task.name,callback:function(e){t.$set(t.task,"name",e)},expression:"task.name"}})],1),a("b-field",{attrs:{label:"Due Date","label-position":"on-border"}},[a("b-datepicker",{attrs:{icon:"calendar-today"},model:{value:t.task.dueDate,callback:function(e){t.$set(t.task,"dueDate",e)},expression:"task.dueDate"}})],1),a("b-checkbox",{model:{value:t.task.completed,callback:function(e){t.$set(t.task,"completed",e)},expression:"task.completed"}},[t._v("Completed?")])],1),a("footer",{staticClass:"modal-card-foot"},[a("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(e){return t.$parent.close()}}},[t._v("Close")]),a("button",{staticClass:"button is-primary",on:{click:t.edit}},[t._v("Edit")])])])},At=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v("Edit Task")])])}];function It(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function Jt(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?It(a,!0).forEach((function(e){Object(o["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):It(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var Lt={name:"edit",props:["task"],methods:Jt({},Object(i["b"])("task",["updateTask"]),{edit:function(){var t=this,e=this.task;this.updateTask(e).then((function(){t.$parent.close()})).catch((function(t){console.error(t)}))}})},Ut=Lt,Mt=Object(d["a"])(Ut,$t,At,!1,null,"4338b320",null),Kt=Mt.exports;function Gt(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function Ft(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?Gt(a,!0).forEach((function(e){Object(o["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):Gt(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var Ht={name:"tasks",data:function(){return{taskData:[],columns:[{field:"id",label:"ID",width:"40",numeric:!0},{field:"name",label:"Title"},{field:"dueDate",label:"Due Date"},{field:"completed",label:"Completed",centered:!0}],modalActive:!1,modalEditActive:!1,formProps:{task:{id:0,dueDate:"",name:"",completed:!1}}}},components:{createTask:Tt,editTask:Kt},methods:{create:function(){this.modalActive=!0},edit:function(t){this.formProps.task=t,this.modalEditActive=!0}},computed:Ft({},Object(i["c"])("task",["getTasks"])),watch:{getTasks:function(){this.taskData=JSON.parse(JSON.stringify(this.getTasks))}},mounted:function(){this.taskData=JSON.parse(JSON.stringify(this.getTasks)),console.log("taskData mounted")}},Wt=Ht,qt=(a("3d3a"),Object(d["a"])(Wt,_t,Pt,!1,null,null,null)),zt=qt.exports,Bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"title"},[t._v("Moving Tasks")]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column box"},[a("lane",{attrs:{id:"0",title:"Todo"}})],1),a("div",{staticClass:"column box"},[a("lane",{attrs:{id:"1",title:"In Progress"}})],1),a("div",{staticClass:"column box"},[a("lane",{attrs:{id:"2",title:"Done"}})],1)])])])},Qt=[],Vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[a("h4",[t._v(t._s(t.title))]),a("div",[a("draggable",{staticClass:"lane-body",attrs:{options:{group:"default"}},on:{change:t.doChange},model:{value:t.taskData,callback:function(e){t.taskData=e},expression:"taskData"}},t._l(t.taskData,(function(t){return a("div",{key:t.id},[a("card",{attrs:{task:t}})],1)})),0)],1)])},Xt=[],Yt=a("310e"),Zt=a.n(Yt),te=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",[a("h5",[t._v("\n            "+t._s(t.task.id)+"\n        ")]),a("h4",[t._v("\n            "+t._s(t.task.name)+"\n        ")])])])},ee=[],ae={name:"card",props:["task"]},re=ae,ne=(a("f33f"),Object(d["a"])(re,te,ee,!1,null,null,null)),se=ne.exports;function oe(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function ie(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?oe(a,!0).forEach((function(e){Object(o["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):oe(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var ce={name:"lane",data:function(){return{taskData:[]}},props:["id","title"],components:{draggable:Zt.a,card:se},methods:ie({},Object(i["b"])("task",["updateTask"]),{doChange:function(t){if(t.added){var e=t.added.element;e.lane=this.id,this.updateTask(e).then((function(){})).catch((function(t){console.error(t)}))}}}),computed:ie({},Object(i["c"])("task",["getTasks"])),watch:{getTasks:function(){var t=this;this.taskData=JSON.parse(JSON.stringify(this.getTasks)).filter((function(e){return e.lane==t.id}))}},mounted:function(){var t=this;this.taskData=JSON.parse(JSON.stringify(this.getTasks)).filter((function(e){return e.lane==t.id}))}},ue=ce,le=(a("ecb7"),Object(d["a"])(ue,Vt,Xt,!1,null,null,null)),pe=le.exports,de={name:"taskMove",components:{lane:pe}},be=de,fe=Object(d["a"])(be,Bt,Qt,!1,null,"65bc7444",null),me=fe.exports;r["a"].use(m["a"]);var ge=new m["a"]({mode:"history",routes:[{path:"/",name:"home",component:y},{path:"/dashboard",name:"dashboard",component:E},{path:"/login",name:"login",component:A},{path:"/logout",name:"logout",component:K},{path:"/register",name:"register",component:Q},{path:"/account",name:"account",component:rt},{path:"/tasks",name:"tasks",component:zt},{path:"/tasksMove",name:"tasksMove",component:me}]});ge.beforeEach(jt);var ve=ge,he=a("289d");a("5abe");ot.a.defaults.baseURL="https://murmuring-atoll-93655.herokuapp.com/api/",ot.a.defaults.withCredentials=!0,r["a"].use(he["a"]),r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(f)},router:ve,store:wt}).$mount("#app")},"64a9":function(t,e,a){},"71ca":function(t,e,a){t.exports=a.p+"img/Design1.c6866b74.jpg"},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"},ecb7:function(t,e,a){"use strict";var r=a("eecc"),n=a.n(r);n.a},eecc:function(t,e,a){},f33f:function(t,e,a){"use strict";var r=a("29ea"),n=a.n(r);n.a}});
//# sourceMappingURL=app.4b0f532c.js.map