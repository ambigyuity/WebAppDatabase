(this["webpackJsonp4353-assignment2"]=this["webpackJsonp4353-assignment2"]||[]).push([[0],{137:function(e,a,t){e.exports=t(150)},145:function(e,a){},146:function(e,a){},150:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),o=t.n(l),i=t(28),c=t(38),s=t(113),u=t(114),m=t(121),d={user:{}};function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,a=arguments.length>1?arguments[1]:void 0;return a.type,e}t(145);var E={};function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,a=arguments.length>1?arguments[1]:void 0;return a.type,e}t(146);var b={};function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,a=arguments.length>1?arguments[1]:void 0;return a.type,e}function g(e){return Object(c.combineReducers)({router:Object(m.a)(e),profiles:h,history:v,auth:p})}var f=t(8),y=t(23),x=t(195),w=t(216),S=t(21),j=t(200),O=t(201),C=t(197),k=t(199),D=t(202),P=Object(x.a)((function(){return{root:{flexGrow:1},title:{flexGrow:1}}}));var A=function(){var e=P();return r.a.createElement("div",{className:e.root},r.a.createElement(C.a,{position:"static"},r.a.createElement(k.a,null,r.a.createElement(j.a,{container:!0,justify:"space-evenly"},r.a.createElement(j.a,{item:!0},r.a.createElement(O.a,{component:S.a,to:"/app/history",variant:"body2",color:"textSecondary"},r.a.createElement(D.a,{color:"secondary"}," History"))),r.a.createElement(j.a,{item:!0},r.a.createElement(O.a,{component:S.a,to:"/app/profiles",variant:"body2",color:"textSecondary"},r.a.createElement(D.a,{color:"secondary"}," Profiles"))),r.a.createElement(j.a,{item:!0},r.a.createElement(O.a,{component:S.a,to:"/app/fuelquote",variant:"body2",color:"textSecondary"},r.a.createElement(D.a,{color:"secondary"},"Fuel Quote"))),r.a.createElement(j.a,{item:!0},r.a.createElement(D.a,{color:"secondary"},"Logout"))))))},W=Object(x.a)((function(e){return{root:{display:"flex",height:"100%",overflow:"hidden",width:"100%"},wrapper:{display:"flex",flex:"1 1 auto",overflow:"hidden",paddingTop:64,paddingLeft:20,paddingRight:20},contentContainer:{display:"flex",flex:"1 1 auto",overflow:"hidden"},content:{flex:"1 1 auto",height:"100%",overflow:"auto"}}}));var I=function(e){var a=e.children,t=W();return r.a.createElement("div",null,r.a.createElement(A,null),r.a.createElement("div",{className:t.wrapper},r.a.createElement("div",{className:t.contentContainer},r.a.createElement("div",{className:t.content},a))))},N=t(122),L=t(123);var M=function(e){var a=e.component,t=e.render,n=Object(L.a)(e,["component","render"]);return t?t(Object(N.a)({},n)):r.a.createElement(a,n)},q=t(204),B=t(214),T=t(205),H=t(206),R=t(82),V=t(207),z=t(75),F=t.n(z),G=t(88),J=(t(3),t(52)),K=t(98),Q=t(203),U=t(155),Y=Object(x.a)((function(){return{root:{}}}));var Z=function(e){var a=e.onSubmitSuccess,t=Y();return Object(i.d)(),r.a.createElement(K.a,{initialValues:{email:"default@project.io",password:"user"},validationSchema:J.a().shape({email:J.b().email("Must be a valid email").max(255).required("Email is required"),password:J.b().max(255).required("Password is required")}),onSubmit:function(){var e=Object(G.a)(F.a.mark((function e(t,n){var r,l,o,i;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n.setErrors,l=n.setStatus,o=n.setSubmitting;try{a()}catch(t){i=t.response&&t.response.data.message||"Something went wrong",l({success:!1}),r({submit:i}),o(!1)}case 2:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()},(function(e){var a=e.errors,n=e.handleBlur,l=e.handleChange,o=e.handleSubmit,i=e.isSubmitting,c=e.touched,s=e.values;return r.a.createElement("form",{noValidate:!0,className:t.root,onSubmit:o},r.a.createElement(Q.a,{error:Boolean(c.email&&a.email),fullWidth:!0,autoFocus:!0,helperText:c.email&&a.email,label:"Email Address",margin:"normal",name:"email",onBlur:n,onChange:l,type:"email",value:s.email,variant:"outlined"}),r.a.createElement(Q.a,{error:Boolean(c.password&&a.password),fullWidth:!0,helperText:c.password&&a.password,label:"Password",margin:"normal",name:"password",onBlur:n,onChange:l,type:"password",value:s.password,variant:"outlined"}),r.a.createElement(B.a,{mt:2},r.a.createElement(D.a,{color:"secondary",disabled:i,fullWidth:!0,size:"large",type:"submit",variant:"contained"},"Log In"),a.submit&&r.a.createElement(B.a,{mt:3},r.a.createElement(U.a,{error:!0},a.submit))))}))},X=Object(x.a)((function(e){return{}}));var $=function(){X();var e=Object(f.g)();return r.a.createElement(q.a,{maxWidth:"md"},r.a.createElement(B.a,{mb:8,display:"flex",alignItems:"center"}),r.a.createElement(T.a,{style:{backgroundColor:"lightgrey",border:"2px solid black"}},r.a.createElement(H.a,null,r.a.createElement(R.a,{variant:"h2",color:"textPrimary"},"Login"),r.a.createElement(B.a,{mt:2}),r.a.createElement(B.a,{mt:3},r.a.createElement(Z,{onSubmitSuccess:function(){e.push("/app")}})),r.a.createElement(B.a,{my:2},r.a.createElement(V.a,null)),r.a.createElement(O.a,{component:S.a,to:"/register",variant:"body2",color:"textSecondary"},"Create new account"))))},_=Object(x.a)((function(){return{root:{}}}));var ee=function(e){var a=e.onSubmitSuccess,t=_();return Object(i.d)(),r.a.createElement(K.a,{initialValues:{email:"default@project.io",password:"user"},validationSchema:J.a().shape({email:J.b().email("Must be a valid email").max(255).required("Email is required"),password:J.b().max(255).required("Password is required")}),onSubmit:function(){var e=Object(G.a)(F.a.mark((function e(t,n){var r,l,o,i;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n.setErrors,l=n.setStatus,o=n.setSubmitting;try{a()}catch(t){i=t.response&&t.response.data.message||"Something went wrong",l({success:!1}),r({submit:i}),o(!1)}case 2:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()},(function(e){var a=e.errors,n=e.handleBlur,l=e.handleChange,o=e.handleSubmit,i=e.isSubmitting,c=e.touched,s=e.values;return r.a.createElement("form",{noValidate:!0,className:t.root,onSubmit:o},r.a.createElement(Q.a,{error:Boolean(c.email&&a.email),fullWidth:!0,autoFocus:!0,helperText:c.email&&a.email,label:"Email Address",margin:"normal",name:"email",onBlur:n,onChange:l,type:"email",value:s.email,variant:"outlined"}),r.a.createElement(Q.a,{error:Boolean(c.password&&a.password),fullWidth:!0,helperText:c.password&&a.password,label:"Password",margin:"normal",name:"password",onBlur:n,onChange:l,type:"password",value:s.password,variant:"outlined"}),r.a.createElement(B.a,{mt:2},r.a.createElement(O.a,{component:S.a,to:"/login",variant:"body2",color:"textSecondary"},r.a.createElement(D.a,{color:"secondary",disabled:i,fullWidth:!0,size:"large",type:"submit",variant:"contained"},"Create")),a.submit&&r.a.createElement(B.a,{mt:3},r.a.createElement(U.a,{error:!0},a.submit))))}))},ae=Object(x.a)((function(e){return{}}));var te=function(){ae();var e=Object(f.g)();return r.a.createElement(q.a,{maxWidth:"md"},r.a.createElement(B.a,{mb:8,display:"flex",alignItems:"center"}),r.a.createElement(T.a,{style:{backgroundColor:"lightgrey",border:"2px solid black"}},r.a.createElement(H.a,null,r.a.createElement(R.a,{variant:"h2",color:"textPrimary"},"Register"),r.a.createElement(B.a,{mt:2}),r.a.createElement(B.a,{mt:3},r.a.createElement(ee,{onSubmitSuccess:function(){e.push("/app")}})),r.a.createElement(B.a,{my:2},r.a.createElement(V.a,null)))))},ne=t(20),re=t(208),le=t(154),oe=t(160),ie=t(156),ce=t(159),se=t(215),ue=["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","IllinoisIndiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","MontanaNebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","PennsylvaniaRhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"],me=Object(x.a)((function(e){return{root:{},formControl:{minWidth:160},formControl2:{width:"100%"},cardHeader:{textAlign:"center"}}}));var de=function(e){var a=me(),t=r.a.useState(),n=Object(ne.a)(t,2),l=n[0],o=n[1],i=r.a.useState(),c=Object(ne.a)(i,2),s=c[0],u=c[1],m=r.a.useState(),d=Object(ne.a)(m,2),p=d[0],E=d[1],h=r.a.useState(),b=Object(ne.a)(h,2),v=b[0],g=b[1],f=r.a.useState(),y=Object(ne.a)(f,2),x=y[0],w=y[1],S=r.a.useState(),O=Object(ne.a)(S,2),C=O[0],k=O[1];return r.a.createElement(T.a,{style:{backgroundColor:"lightgrey",border:"2px solid black"}},r.a.createElement(re.a,{className:a.cardHeader,title:e.formTitle}),r.a.createElement(V.a,null),r.a.createElement(H.a,null,r.a.createElement(j.a,{container:!0,spacing:1},r.a.createElement(j.a,{item:!0,xs:!0},r.a.createElement(Q.a,{label:"Full Name",fullWidth:!0,variant:"outlined",onChange:function(e){o(e.target.value)},InputLabelProps:{shrink:!0},value:l}))),r.a.createElement(B.a,{p:1}),r.a.createElement(j.a,{container:!0,spacing:1},r.a.createElement(j.a,{item:!0,xs:!0},r.a.createElement(Q.a,{label:"Address One",fullWidth:!0,variant:"outlined",onChange:function(e){u(e.target.value)},InputLabelProps:{shrink:!0},value:s}))),r.a.createElement(j.a,{container:!0,spacing:1},r.a.createElement(j.a,{item:!0,xs:!0},r.a.createElement(Q.a,{label:"Address Two(optional)",fullWidth:!0,variant:"outlined",onChange:function(e){E(e.target.value)},InputLabelProps:{shrink:!0},value:p}))),r.a.createElement(B.a,{p:1}),r.a.createElement(j.a,{container:!0,spacing:1},r.a.createElement(j.a,{item:!0,xs:!0},r.a.createElement(Q.a,{label:"City",fullWidth:!0,variant:"outlined",onChange:function(e){g(e.target.value)},InputLabelProps:{shrink:!0},value:v})),r.a.createElement(j.a,{item:!0,xs:!0},r.a.createElement(le.a,{variant:"outlined",className:a.formControl2},r.a.createElement(oe.a,{shrink:!0},"State"),r.a.createElement(ie.a,{MenuProps:{getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"left"}},displayEmpty:!0,value:x,onChange:function(e){w(e.target.value)},input:r.a.createElement(ce.a,{notched:!0,labelWidth:"45"})},ue.map((function(e,a){return r.a.createElement(se.a,{value:e},e)})))))),r.a.createElement(B.a,{p:1}),r.a.createElement(j.a,{container:!0,spacing:1},r.a.createElement(j.a,{item:!0,xs:!0},r.a.createElement(Q.a,{label:"Zip Code",fullWidth:!0,variant:"outlined",onChange:function(e){k(e.target.value)},InputLabelProps:{shrink:!0},value:C})))))},pe=Object(x.a)((function(e){return{root:{}}}));var Ee=function(e){pe(),Object(f.g)(),Object(i.d)();var a=r.a.useState({}),t=Object(ne.a)(a,2),n=(t[0],t[1]),l=r.a.useState({}),o=Object(ne.a)(l,2);return o[0],o[1],r.a.createElement(j.a,{style:{paddingLeft:"20"},container:!0,justify:"space-between"},r.a.createElement(j.a,{item:!0,xs:!0,style:{paddingRight:15}},r.a.createElement(de,{formTitle:"Profile Details",saveProfile:function(e){console.log("profile:",e),n(e)}})))},he=t(209),be=t(213),ve=t(212),ge=t(210),fe=t(211),ye=Object(x.a)({table:{border:"2px solid black",backgroundColor:"lightgrey"}}),xe=[{gallons:1,DeliveryDate:"01-12-12",Price:12,AmountDue:12,DeliveryAddress:"123 test address"},{gallons:1,DeliveryDate:"01-12-12",Price:12,AmountDue:12,DeliveryAddress:"123 test address"},{gallons:1,DeliveryDate:"01-12-12",Price:12,AmountDue:12,DeliveryAddress:"123 test address"},{gallons:1,DeliveryDate:"01-12-12",Price:12,AmountDue:12,DeliveryAddress:"123 test address"}];function we(){var e=ye();return r.a.createElement(he.a,{className:e.table,"aria-label":"simple table"},r.a.createElement(ge.a,null,r.a.createElement(fe.a,null,r.a.createElement(ve.a,null,"Gallons Requested"),r.a.createElement(ve.a,null,"Delivery Date"),r.a.createElement(ve.a,null,"Price"),r.a.createElement(ve.a,null,"Amount Due"),r.a.createElement(ve.a,null,"Delivery Address"))),r.a.createElement(be.a,null,xe.map((function(e,a){return r.a.createElement(fe.a,{key:a},r.a.createElement(ve.a,null,e.gallons),r.a.createElement(ve.a,null,e.DeliveryDate),r.a.createElement(ve.a,null,e.Price),r.a.createElement(ve.a,null,e.AmountDue),r.a.createElement(ve.a,null,e.DeliveryAddress))}))))}var Se=Object(x.a)((function(e){return{root:{},cardHeader:{textAlign:"center"}}}));var je=function(e){var a=Se(),t=(Object(f.g)(),r.a.useState("")),n=Object(ne.a)(t,2),l=n[0],o=n[1],i=r.a.useState(""),c=Object(ne.a)(i,2),s=c[0],u=c[1],m=r.a.useState(""),d=Object(ne.a)(m,2),p=d[0],E=d[1],h=r.a.useState(""),b=Object(ne.a)(h,2),v=b[0],g=b[1],y=r.a.useState(""),x=Object(ne.a)(y,2),w=x[0],S=x[1];return r.a.createElement(j.a,{container:!0,justify:"space-between"},r.a.createElement(j.a,{item:!0,xs:!0,style:{marginLeft:15}},r.a.createElement(T.a,{style:{backgroundColor:"lightgrey",border:"2px solid black"}},r.a.createElement(re.a,{className:a.cardHeader,title:"Fuel Quote"}),r.a.createElement(V.a,null),r.a.createElement(H.a,null,r.a.createElement(j.a,{container:!0,spacing:1},r.a.createElement(j.a,{item:!0,xs:!0},r.a.createElement(Q.a,{label:"Gallons Requested",fullWidth:!0,variant:"outlined",onChange:function(e){o(e.target.value)},InputLabelProps:{shrink:!0},value:l})),r.a.createElement(j.a,{item:!0,xs:!0},r.a.createElement(Q.a,{label:"Delivery Date",fullWidth:!0,variant:"outlined",onChange:function(e){E(e.target.value)},InputLabelProps:{shrink:!0},value:p}))),r.a.createElement(B.a,{p:1}),r.a.createElement(j.a,{container:!0,spacing:1},r.a.createElement(j.a,{item:!0,xs:!0},r.a.createElement(Q.a,{label:"Price",fullWidth:!0,variant:"outlined",onChange:function(e){g(e.target.value)},InputLabelProps:{shrink:!0},value:v})),r.a.createElement(j.a,{item:!0,xs:!0},r.a.createElement(Q.a,{label:"Amount Due",fullWidth:!0,variant:"outlined",onChange:function(e){S(e.target.value)},InputLabelProps:{shrink:!0},value:w}))),r.a.createElement(B.a,{p:1}),r.a.createElement(j.a,{container:!0,spacing:1},r.a.createElement(j.a,{item:!0,xs:!0},r.a.createElement(Q.a,{label:"Delivery Address",fullWidth:!0,variant:"outlined",onChange:function(e){u(e.target.value)},InputLabelProps:{shrink:!0},value:s})))))))};var Oe=function(){return r.a.createElement(f.d,null,r.a.createElement(f.a,{exact:!0,from:"/",to:"/login"}),r.a.createElement(f.b,{exact:!0,path:"/login",component:$}),r.a.createElement(f.b,{exact:!0,path:"/register",component:te}),r.a.createElement(M,{path:"/app",render:function(e){return r.a.createElement(I,e,r.a.createElement(f.d,null,r.a.createElement(f.a,{exact:!0,from:"/app",to:"/app/profiles"}),r.a.createElement(f.b,{exact:!0,path:"/app/history",component:we}),r.a.createElement(f.b,{exact:!0,path:"/app/profiles",component:Ee}),r.a.createElement(f.b,{exact:!0,path:"/app/fuelquote",component:je})))}}))},Ce=Object(y.a)(),ke=Object(x.a)((function(){return Object(w.a)({"@global":{"*":{boxSizing:"border-box",margin:0,padding:0},html:{"-webkit-font-smoothing":"antialiased","-moz-osx-font-smoothing":"grayscale",height:"100%",width:"100%"},body:{height:"100%",width:"100%"},"#root":{height:"100%",width:"100%"}}})}));var De=function(){return ke(),r.a.createElement(f.c,{history:Ce},r.a.createElement(Oe,null))},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=[s.a],t=Object(u.composeWithDevTools)(c.applyMiddleware.apply(void 0,a)),n=[t],r=c.compose.apply(void 0,n),l=Object(c.createStore)(g,e,r);return l}();o.a.render(r.a.createElement(i.a,{store:Pe},r.a.createElement(De,null)),document.getElementById("root"))}},[[137,1,2]]]);
//# sourceMappingURL=main.501260be.chunk.js.map