(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{131:function(e,t,n){e.exports={preloader:"preloader_preloader__2oMrM"}},166:function(e,t,n){},170:function(e,t,n){},21:function(e,t,n){e.exports={nav:"navbar_nav__1Q4Z6",link:"navbar_link__4fBxv",activeLink:"navbar_activeLink__36yEm"}},288:function(e,t,n){"use strict";n.r(t);var s=n(0),r=n(1),a=n.n(r),c=n(65),i=n.n(c),o=(n(166),n(25)),u=n(26),l=n(28),j=n(27),p=n(12),d=n(9),b=(n(170),n.p+"static/media/preloader.5788b05c.svg"),f=n(131),h=n.n(f),O=function(){return Object(s.jsx)("div",{children:Object(s.jsx)("img",{className:h.a.preloader,src:b,alt:""})})},g=n(10),m=n(4),x=function(e){return{inAuth:e.auth.inAuth}},v=function(e){var t=function(t){Object(l.a)(r,t);var n=Object(j.a)(r);function r(){return Object(o.a)(this,r),n.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){return this.props.inAuth?Object(s.jsx)(e,Object(m.a)({},this.props)):Object(s.jsx)(d.a,{to:"/login"})}}]),r}(a.a.Component);return Object(p.b)(x)(t)},S=n(69),w="SEND_MESSAGE",k={messages:[{id:1,message:"Hi, how are you?"},{id:2,message:"It's my first message"},{id:3,message:"YoYoYo"},{id:4,message:"Hi"}],users:[{id:1,name:"Vlad"},{id:2,name:"Alex"}]},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:var n={id:5,message:t.newText};return Object(m.a)(Object(m.a)({},e),{},{messages:[].concat(Object(S.a)(e.messages),[n])});default:return e}},_=n(127),y=n(128),A=n(73),I=n(52),N=n.n(I),P=function(e){e.input;var t=e.meta,n=Object(A.a)(e,["input","meta"]),r=t.error&&t.touched;return Object(s.jsxs)("div",{className:N.a.input+" "+(r&&N.a.error),children:[Object(s.jsx)("div",{children:n.children}),r&&Object(s.jsx)("span",{children:t.error})]})},E=function(e){var t=e.input,n=(e.meta,e.child,Object(A.a)(e,["input","meta","child"]));return Object(s.jsx)(P,Object(m.a)(Object(m.a)({},e),{},{children:Object(s.jsx)("input",Object(m.a)(Object(m.a)({},t),n))}))},T=function(e){var t=e.input,n=(e.meta,e.child,Object(A.a)(e,["input","meta","child"]));return Object(s.jsx)(P,Object(m.a)(Object(m.a)({},e),{},{children:Object(s.jsx)("textarea",Object(m.a)(Object(m.a)({},t),n))}))},L=function(e){if(!e)return"It is required field"},U=function(e){return function(t){if(t.length>e)return"max length is ".concat(e," symbols")}},G=n(42),Q=n.n(G),M=function(e){return Object(s.jsx)("div",{children:e.message})},B=function(e){return Object(s.jsx)("div",{children:e.name})},J=U(100),F=Object(y.a)({form:"messageDialogs"})((function(e){return Object(s.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(s.jsx)(_.a,{validate:[L,J],component:T,name:"message",type:"text",placeholder:"entry your message",className:Q.a.input}),Object(s.jsx)("button",{className:Q.a.btnSend,children:"send message"})]})})),H=function(e){var t=e.messages.map((function(e){return Object(s.jsx)(M,{message:e.message},e.id)})),n=e.users.map((function(e){return Object(s.jsx)(B,{name:e.name},e.id)}));return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:Q.a.dialogs,children:[Object(s.jsx)("div",{className:Q.a.users,children:n}),Object(s.jsxs)("div",{className:Q.a.messages,children:[t,Object(s.jsx)(F,{onSubmit:function(t){e.sendMessage(t.message)}})]})]}),Object(s.jsx)("div",{})]})},D=Object(g.d)(Object(p.b)((function(e){return{messages:e.dialogsPage.messages,users:e.dialogsPage.users,newText:e.dialogsPage.newText}}),{sendMessage:function(e){return{type:w,newText:e}}}),v)(H),R=n(11),Y=n.n(R),V=n(19),W=n(37),z=n(133).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"122542c3-2d9d-43ec-8ad9-376b033362fb"}}),Z=function(e,t){return z.get("users?count=".concat(e,"&page=").concat(t)).then((function(e){return e.data}))},X=function(e){return z.delete("follow/".concat(e)).then((function(e){return e.data}))},q=function(e){return z.post("follow/".concat(e),{}).then((function(e){return e.data}))},K=function(){return z.get("auth/me").then((function(e){return e.data}))},$=function(e){return z.get("profile/"+e).then((function(e){return e.data}))},ee=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return z.post("auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))},te=function(){return z.delete("auth/login").then((function(e){return e.data}))},ne=function(e){return z.get("profile/status/"+e).then((function(e){return e.data}))},se=function(e){return z.put("profile/status",{status:e}).then((function(e){return e.data}))},re="SET_USER",ae="IN_AUTH",ce={userId:null,login:null,email:null,inAuth:!1},ie=function(e,t,n){return{type:re,data:{userId:e,login:t,email:n}}},oe=function(e){return{type:ae,inAuth:e}},ue=function(){return function(){var e=Object(V.a)(Y.a.mark((function e(t){var n,s,r,a,c;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K();case 2:0===(n=e.sent).resultCode&&(s=n.data,r=s.id,a=s.login,c=s.email,t(ie(r,a,c)),t(oe(!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case re:return Object(m.a)(Object(m.a)({},e),t.data);case ae:return Object(m.a)(Object(m.a)({},e),{},{inAuth:t.inAuth});default:return e}},je=n(16),pe=n.p+"static/media/logo.f49df683.jpg",de=n(96),be=n.n(de),fe=function(e){return Object(s.jsxs)("div",{className:be.a.header,children:[Object(s.jsx)("img",{src:pe,alt:""}),Object(s.jsx)("h1",{children:"social network"}),e.inAuth?Object(s.jsxs)("span",{children:[e.login,Object(s.jsx)("button",{onClick:e.logout,children:"logout"})]}):Object(s.jsx)(je.b,{className:be.a.login,to:"/login",children:Object(s.jsx)("p",{children:"log IN"})})]})},he=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(s.jsx)(fe,Object(m.a)({},this.props))}}]),n}(a.a.Component),Oe=Object(p.b)((function(e){return{userId:e.auth.userId,login:e.auth.login,inAuth:e.auth.inAuth}}),{inAuthCheck:ue,logout:function(){return function(){var e=Object(V.a)(Y.a.mark((function e(t){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te();case 2:0===e.sent.resultCode&&(t(ie(null,null,null)),t(oe(!1)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(he),ge=Object(y.a)({form:"login"})((function(e){return Object(s.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(s.jsx)("div",{children:Object(s.jsx)(_.a,{validate:[L],component:E,type:"text",name:"login",placeholder:"Login"})}),Object(s.jsx)("div",{children:Object(s.jsx)(_.a,{validate:[L],component:E,type:"password",name:"password",placeholder:"password"})}),Object(s.jsxs)("div",{children:[Object(s.jsx)(_.a,{component:E,type:"checkbox",name:"rememberMe"})," Remember Me"]}),e.error&&Object(s.jsx)("div",{className:N.a.someErrorLogin,children:e.error}),Object(s.jsx)("button",{children:"Login"})]})})),me=Object(p.b)((function(e){return{inAuth:e.auth.inAuth}}),{login:function(e,t,n){return function(){var s=Object(V.a)(Y.a.mark((function s(r){var a,c;return Y.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,ee(e,t,n);case 2:0===(a=s.sent).resultCode?r(ue()):(c=a.messages?a.messages[0]:"some error",r(Object(W.a)("login",{_error:c})));case 4:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}()}})((function(e){return e.inAuth?Object(s.jsx)(d.a,{to:"/profile"}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{children:"Login"}),Object(s.jsx)(ge,{onSubmit:function(t){e.login(t.login,t.password,t.rememberMe)}})]})})),xe=n(21),ve=n.n(xe),Se=function(){return Object(s.jsxs)("div",{className:ve.a.nav,children:[Object(s.jsx)("div",{className:ve.a.link,children:Object(s.jsx)(je.b,{activeClassName:ve.a.activeLink,to:"/profile",children:"Profile"})}),Object(s.jsx)("div",{className:ve.a.link,children:Object(s.jsx)(je.b,{activeClassName:ve.a.activeLink,to:"/dialogs",children:"Dialogs"})}),Object(s.jsx)("div",{className:ve.a.link,children:Object(s.jsx)(je.b,{activeClassName:ve.a.activeLink,to:"/users",children:"Users"})}),Object(s.jsx)("div",{className:ve.a.link,children:Object(s.jsx)(je.b,{activeClassName:ve.a.activeLink,to:"/music",children:"Music"})}),Object(s.jsx)("div",{className:ve.a.link,children:Object(s.jsx)(je.b,{activeClassName:ve.a.activeLink,to:"/setting",children:"Setting"})})]})},we="ADD_POST",ke="SET_PROFILE",Ce="SET_STATUS",_e={posts:[{id:1,message:"Hi, how are you?",likesCount:12},{id:2,message:"It's my first post",likesCount:11},{id:3,message:"Blabla",likesCount:11},{id:4,message:"Dada",likesCount:11}],profile:null,status:""},ye=function(e){return{type:ke,profile:e}},Ae=function(e){return{type:Ce,status:e}},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case we:var n={id:5,message:t.post,likesCount:0};return Object(m.a)(Object(m.a)({},e),{},{posts:[n].concat(Object(S.a)(e.posts))});case ke:return Object(m.a)(Object(m.a)({},e),{},{profile:t.profile});case Ce:return Object(m.a)(Object(m.a)({},e),{},{status:t.status});default:return e}},Ne=n.p+"static/media/wrapper.d855d2aa.jpg",Pe="data:image/png;base64,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",Ee=n(71),Te=n.n(Ee),Le=function(e){return e.profile?Object(s.jsxs)("div",{className:Te.a.itemMessage,children:[Object(s.jsx)("img",{className:Te.a.userPhoto,src:null==e.profile.photos.small?Pe:e.profile.photos.small,alt:""}),Object(s.jsxs)("span",{children:[" ",Object(s.jsx)("p",{className:Te.a.message,children:e.message})]}),Object(s.jsxs)("div",{children:["Likes ",e.likesCount]})]}):Object(s.jsx)(O,{})},Ue=n(43),Ge=n.n(Ue),Qe=n(44),Me=n.n(Qe),Be=n(55),Je=n(97),Fe=n.n(Je),He=function(e){var t=Object(r.useState)(!1),n=Object(Be.a)(t,2),a=n[0],c=n[1],i=Object(r.useState)(e.status),o=Object(Be.a)(i,2),u=o[0],l=o[1];Object(r.useEffect)((function(){l(e.status)}),[e.status]);return Object(s.jsxs)("div",{className:Fe.a.status,children:[!a&&Object(s.jsx)("div",{className:Fe.a.statusActive,children:Object(s.jsxs)("span",{onClick:function(){c(!0)},children:["Status: ",e.status]})}),a&&Object(s.jsx)("div",{children:Object(s.jsx)("input",{onChange:function(e){l(e.currentTarget.value)},autoFocus:!0,onBlur:function(){c(!1),e.changeStatus(u)},value:u})})]})},De=function(e){return e.profile?Object(s.jsxs)("div",{children:[Object(s.jsx)(He,{status:e.status,changeStatus:e.changeStatus}),Object(s.jsxs)("div",{className:Me.a.user,children:[Object(s.jsx)("div",{className:Me.a.photo,children:Object(s.jsx)("img",{src:e.profile.photos.large?e.profile.photos.large:Pe,alt:""})}),Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{className:Me.a.name,children:e.profile.fullName}),Object(s.jsxs)("p",{children:["SEARCHING WORK: ",e.profile.lookingForAJob?Object(s.jsx)("span",{className:Me.a.green,children:"search"}):Object(s.jsx)("span",{className:Me.a.green,children:"don`t search"})]})]})]})]}):Object(s.jsx)(O,{})},Re=U(30),Ye=Object(y.a)({form:"post"})((function(e){return Object(s.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(s.jsx)(_.a,{validate:[L,Re],className:Ge.a.inputMessage,placeholder:"entry your post",type:"text",name:"post",component:E}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{className:Ge.a.btnSend,children:"send"})})]})})),Ve=function(e){var t=e.posts.map((function(t){return Object(s.jsx)(Le,{profile:e.profile,message:t.message,likesCount:t.likesCount},t.id)}));return Object(s.jsxs)("div",{className:Ge.a.profile,children:[Object(s.jsx)("div",{children:Object(s.jsx)("img",{className:Ge.a.wrapperImg,src:Ne,alt:""})}),Object(s.jsx)(De,{profile:e.profile,changeStatus:e.changeStatus,status:e.status}),Object(s.jsx)("h2",{children:"My posts"}),Object(s.jsx)(Ye,{onSubmit:function(t){e.addPost(t.post)}}),Object(s.jsx)("div",{className:Ge.a.container,children:t})]})},We=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.UserId;e||(e=this.props.userId)||this.props.history.push("/login"),this.props.getProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return Object(s.jsx)(Ve,Object(m.a)(Object(m.a)({},this.props),{},{posts:this.props.posts,newPostText:this.props.newPostText,addPost:this.props.addPost,profile:this.props.profile,status:this.props.status,changeStatus:this.props.changeStatus}))}}]),n}(a.a.Component),ze=Object(g.d)(Object(p.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText,profile:e.profilePage.profile,userId:e.auth.userId,status:e.profilePage.status}}),{addPost:function(e){return{type:we,post:e}},getProfile:function(e){return function(){var t=Object(V.a)(Y.a.mark((function t(n){var s;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,$(e);case 2:s=t.sent,n(ye(s));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},changeStatus:function(e){return function(){var t=Object(V.a)(Y.a.mark((function t(n){return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,se(e);case 2:0===t.sent.resultCode&&n(Ae(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getStatus:function(e){return function(){var t=Object(V.a)(Y.a.mark((function t(n){var s;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ne(e);case 2:s=t.sent,n(Ae(s));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),d.f)(We),Ze="FOLLOW",Xe="UNFOLLOW",qe="SET_USERS",Ke="TOTAL_USERS_COUNT",$e="PAGE_NUMBER",et="TOGGLE_IS_FETCHING",tt={users:[],count:10,page:1,totalUsersCount:0,isFetching:!1},nt=function(e){return{type:Ze,id:e}},st=function(e){return{type:Xe,id:e}},rt=function(e){return{type:qe,users:e}},at=function(e){return{type:et,isFetching:e}},ct=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ze:return Object(m.a)(Object(m.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(m.a)(Object(m.a)({},e),{},{followed:!0}):e}))});case Xe:return Object(m.a)(Object(m.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(m.a)(Object(m.a)({},e),{},{followed:!1}):e}))});case qe:return Object(m.a)(Object(m.a)({},e),{},{users:t.users});case Ke:return Object(m.a)(Object(m.a)({},e),{},{totalUsersCount:t.totalCount});case $e:return Object(m.a)(Object(m.a)({},e),{},{page:t.pageNumber});case et:return Object(m.a)(Object(m.a)({},e),{},{isFetching:t.isFetching});default:return e}},it=n(134),ot=function(e){return e.usersPage.totalUsersCount},ut=function(e){return e.usersPage.count},lt=function(e){return e.usersPage.page},jt=function(e){return e.usersPage.isFetching},pt=Object(it.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),dt=n(72),bt=n.n(dt),ft=function(e){for(var t=Math.ceil(e.totalUsersCount/e.count),n=[],a=1;a<=t;a++)n.push(a);var c=Math.ceil(t/e.portionSize),i=Object(r.useState)(1),o=Object(Be.a)(i,2),u=o[0],l=o[1],j=(u-1)*e.portionSize+1,p=u*e.portionSize;return Object(s.jsxs)("div",{className:bt.a.paginator,children:[u>1&&Object(s.jsx)("button",{onClick:function(){l(u-1)},children:"PREV"}),n.filter((function(e){return e>=j&&e<=p})).map((function(t){return Object(s.jsx)("span",{className:e.page===t?bt.a.activePage:bt.a.nonActivePage,onClick:function(){e.onClick(t)},children:t})})),c>u&&Object(s.jsx)("button",{onClick:function(){l(u+1)},children:"NEXT"})]})},ht=n(56),Ot=n.n(ht),gt=function(e){return Object(s.jsx)("div",{children:e.users.map((function(t){return Object(s.jsxs)("div",{className:Ot.a.user,children:[Object(s.jsx)("div",{children:Object(s.jsx)(je.b,{to:"/profile/"+t.id,children:Object(s.jsx)("img",{className:Ot.a.userPhoto,src:t.photos.small?t.photos.small:Pe,alt:""})})}),Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{children:t.name}),Object(s.jsx)("p",{children:t.status}),t.followed?Object(s.jsx)("button",{onClick:function(){e.unfollow(t.id)},className:Ot.a.btnSend,children:"unfollow"}):Object(s.jsx)("button",{onClick:function(){e.follow(t.id)},className:Ot.a.btnSend,children:"follow"})]})]},t.id)}))})},mt=function(e){return e.users?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(gt,{users:e.users,unfollow:e.unfollow,follow:e.follow}),Object(s.jsx)(ft,{page:e.page,totalUsersCount:e.totalUsersCount,count:e.count,onClick:e.onClick,portionSize:20})]}):Object(s.jsx)(O,{})},xt=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).onClick=function(t){e.props.setPage(t),e.props.getUsers(e.props.count,t)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.count,this.props.page)}},{key:"render",value:function(){return Object(s.jsxs)(s.Fragment,{children:[this.props.isFetching?Object(s.jsx)(O,{}):null,Object(s.jsx)(mt,{page:this.props.page,onClick:this.onClick,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow,totalUsersCount:this.props.totalUsersCount,count:this.props.count,isFetching:this.props.isFetching})]})}}]),n}(a.a.Component),vt=Object(g.d)(Object(p.b)((function(e){return{users:pt(e),totalUsersCount:ot(e),count:ut(e),page:lt(e),isFetching:jt(e)}}),{unfollow:function(e){return function(){var t=Object(V.a)(Y.a.mark((function t(n){return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,X(e);case 2:0===t.sent.resultCode&&n(st(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},follow:function(e){return function(){var t=Object(V.a)(Y.a.mark((function t(n){return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,q(e);case 2:0===t.sent.resultCode&&n(nt(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getUsers:function(e,t){return function(){var n=Object(V.a)(Y.a.mark((function n(s){var r;return Y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s(at(!0)),n.next=3,Z(e,t);case 3:r=n.sent,s(at(!1)),s(rt(r.items)),s((a=r.totalCount,{type:Ke,totalCount:a}));case 7:case"end":return n.stop()}var a}),n)})));return function(e){return n.apply(this,arguments)}}()},setPage:function(e){return{type:$e,pageNumber:e}}}),v)(xt),St="INITIALIZED_SECCESS",wt={innitialized:!1},kt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:wt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case St:return Object(m.a)(Object(m.a)({},e),{},{innitialized:!0});default:return e}},Ct=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.innitialized?Object(s.jsxs)("div",{className:"app-wrapper",children:[Object(s.jsx)(Oe,{}),Object(s.jsx)(Se,{}),Object(s.jsxs)("div",{className:"app-wrapper-content",children:[Object(s.jsx)(d.b,{path:"/profile/:UserId?",render:function(){return Object(s.jsx)(ze,{})}}),Object(s.jsx)(d.b,{path:"/dialogs",render:function(){return Object(s.jsx)(D,{})}}),Object(s.jsx)(d.b,{path:"/users",render:function(){return Object(s.jsx)(vt,{})}}),Object(s.jsx)(d.b,{path:"/login",render:function(){return Object(s.jsx)(me,{})}})]})]}):Object(s.jsx)(O,{})}}]),n}(a.a.Component),_t=Object(p.b)((function(e){return{innitialized:e.app.innitialized}}),{initializeApp:function(){return function(e){var t=e(ue());Promise.all([t]).then((function(){e({type:St})}))}}})(Ct),yt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,289)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),s(e),r(e),a(e),c(e)}))},At=n(129),It=n(135),Nt=Object(g.c)({profilePage:Ie,dialogsPage:C,usersPage:ct,auth:le,form:At.a,app:kt}),Pt=Object(g.e)(Nt,Object(g.a)(It.a));i.a.render(Object(s.jsx)(je.a,{children:Object(s.jsx)(p.a,{store:Pt,children:Object(s.jsx)(_t,{})})}),document.getElementById("root")),yt()},42:function(e,t,n){e.exports={users:"dialogs_users__3-rpU",messages:"dialogs_messages__13FEL",dialogs:"dialogs_dialogs__3EuFw",input:"dialogs_input__2DKnV",btnSend:"dialogs_btnSend__ipH7N"}},43:function(e,t,n){e.exports={profile:"profile_profile__3AvGI",wrapperImg:"profile_wrapperImg__1HZz1",btnSend:"profile_btnSend__1XOG5",inputMessage:"profile_inputMessage__5Cd9x",container:"profile_container__2sp5i"}},44:function(e,t,n){e.exports={user:"profileInfo_user__3xyVI",photo:"profileInfo_photo__cfHqA",green:"profileInfo_green__1CCsS",red:"profileInfo_red__3SCtK",name:"profileInfo_name__1OszT"}},52:function(e,t,n){e.exports={input:"formControl_input__1QLlZ",error:"formControl_error__2I6k1",someErrorLogin:"formControl_someErrorLogin__1eSkZ"}},56:function(e,t,n){e.exports={userPhoto:"users_userPhoto__39byl",userItem:"users_userItem__kSQF7",user:"users_user__3kyxj",btnSend:"users_btnSend__3skZK",activePage:"users_activePage__1dizV",nonActivePage:"users_nonActivePage__skJ-c"}},71:function(e,t,n){e.exports={message:"post_message__2PzN4",itemMessage:"post_itemMessage__32BvX",userPhoto:"post_userPhoto__3qFF5"}},72:function(e,t,n){e.exports={activePage:"paginator_activePage__3Yr9I",nonActivePage:"paginator_nonActivePage__2fyhw",paginator:"paginator_paginator__377X5"}},96:function(e,t,n){e.exports={header:"header_header__1-_y4",login:"header_login__2gDv_"}},97:function(e,t,n){e.exports={status:"profileStatus_status__3LDv6",statusActive:"profileStatus_statusActive__11mmn"}}},[[288,1,2]]]);
//# sourceMappingURL=main.c151b03c.chunk.js.map