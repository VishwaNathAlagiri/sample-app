(this["webpackJsonpsample-react-app"]=this["webpackJsonpsample-react-app"]||[]).push([[0],{114:function(e,a,t){},115:function(e,a,t){},116:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(9),o=t.n(c),l=t(21),i=t.n(l),s=t(36),m=t(12),u=t(41),p=t(56),d=t(3),f=t(168),E=t(169),g=t(163),h=t(157),b=t(165),v=t(22),y=t(121),w=t(170),x=t(179),C=t(183),F=t(172),j=t(173),S=t(174),O=t(175),N=t(167),k=t(171),D=t(58),B=t(181),T=t(57),I=t(180),_=t(158),L=t(159),A=t(160),R=t(161),H=t(162),z=t(164),U=t(166),q=t(154),P=t(74),W=t(30),G=t.n(W),Y=t(31),Z=t.n(Y),J="",M="",Q="",X="",K="",$="";P.defaultConfigurations.enableCustomTheme?(J=G.a.primary,G.a.secondary,K=G.a.secondaryBlue,Q=G.a.errors,M=G.a.infos,X=G.a.successColor,$=G.a.warningColor):(J=Z.a.primary,Z.a.secondary,K=Z.a.secondaryBlue,Q=Z.a.errors,M=Z.a.infos,X=Z.a.successColor,$=Z.a.warningColor);var V=Object(q.a)((function(e){return{root:{maxWidth:900,backgroundColor:"#F6F8FA",height:550},media:{height:150},paper:{height:4},paperContent:{height:150,padding:10},large:{width:e.spacing(7),height:e.spacing(7)},grid:{margin:"auto"}}}));function ee(e){var a=Object(q.a)((function(e){return{calendar:{backgroundColor:"#F2F2F2",padding:e.spacing(1,1),display:"flex",flexDirection:"row",justifyContent:"center",marginTop:15,marginLeft:20}}}))();return r.a.createElement(T.a,{className:a.calendar,elevation:0},r.a.createElement(h.a,null,"calendar_today"),r.a.createElement(v.a,{variant:"body1"},e.date))}function ae(e){var a;return r.a.createElement(I.a,{position:"relative",display:"inline-flex",style:{marginTop:"15px",marginLeft:"10px"}},r.a.createElement(_.a,Object.assign({variant:"static"},e,{style:{color:(a=Math.round(e.value),a<35?Q:a>35&&a<80?M:X)}})),r.a.createElement(I.a,{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},r.a.createElement(v.a,{variant:"overline",component:"div",color:"textSecondary"},"".concat(Math.round(e.value),"%"))))}function te(e){var a=V(),t=function(e){switch(e){case"onTrack":return K;case"delayed":return Q;case"onHold":return $;default:return J}};return r.a.createElement(L.a,{className:a.root},r.a.createElement(A.a,{action:r.a.createElement(h.a,{style:{color:J}},"more_horiz"),title:r.a.createElement(v.a,{align:"left",variant:"h6"},e.props.description)}),e.props.courseList.map((function(n){return r.a.createElement(R.a,{className:a.media},r.a.createElement(L.a,{square:!0},r.a.createElement(T.a,{className:a.paper,style:{backgroundColor:t(e.props.title)},square:!0}),r.a.createElement(A.a,{title:r.a.createElement(v.a,{align:"left",style:{marginTop:-10}},n.name,Boolean(n.notification)&&r.a.createElement(H.a,{badgeContent:n.notification,color:"primary"},r.a.createElement(h.a,{style:{color:J}},"notifications"))),action:r.a.createElement(g.a,{"aria-label":"settings"},r.a.createElement(h.a,{style:{color:J}},"more_verti"))}),r.a.createElement(z.a,null,r.a.createElement(b.a,{container:!0,direction:"row",alignItems:"flex-start",justify:"flex-start",lg:8},r.a.createElement(U.a,{max:2},n.teacher.map((function(e,t){return r.a.createElement(y.a,{alt:"Remy Sharp",src:e,className:a.large})}))),n.more&&r.a.createElement(h.a,{style:{color:J}},"add_circle_outline")),r.a.createElement(b.a,{container:!0,direction:"row",alignItems:"flex-end",justify:"flex-end",lg:11},r.a.createElement(ee,{date:n.date}),r.a.createElement(ae,{variant:"static",value:n.progress})))))})))}var ne=t(78),re=t.n(ne).a.create({baseURL:"http://localhost:8001/",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}}),ce=function(){return re},oe=function(e){return ce().get("userDetails/".concat(e)).then((function(e){return e.data})).catch((function(e){return e.response}))},le=function(e){return ce().get("OnTrack/".concat(e)).then((function(e){return e.data})).catch((function(e){return e.response}))},ie=function(e){return ce().get("onDelayed/".concat(e)).then((function(e){return e.data})).catch((function(e){return e.response}))},se=function(e){return ce().get("onHold/".concat(e)).then((function(e){return e.data})).catch((function(e){return e.response}))};t(55);function me(e){var a=r.a.useState({}),t=Object(m.a)(a,2),c=t[0],o=t[1],l=r.a.useState({}),u=Object(m.a)(l,2),p=u[0],d=u[1],f=r.a.useState({}),E=Object(m.a)(f,2),g=E[0],h=E[1],v=r.a.useState(!1),y=Object(m.a)(v,2),w=(y[0],y[1]);Object(n.useEffect)((function(){x(),C(),F()}),[]);var x=function(){var a=Object(s.a)(i.a.mark((function a(){var t;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,le(e.userID);case 2:404===(t=a.sent).status?w(!0):o(t);case 4:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}(),C=function(){var a=Object(s.a)(i.a.mark((function a(){var t;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,ie(e.userID);case 2:404===(t=a.sent).status?w(!0):d(t);case 4:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}(),F=function(){var a=Object(s.a)(i.a.mark((function a(){var t;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,se(e.userID);case 2:404===(t=a.sent).status?w(!0):h(t);case 4:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(b.a,{container:!0,direction:"row",spacing:4},c.data&&r.a.createElement(b.a,{item:!0,xs:12,lg:4},r.a.createElement(te,{props:c.data})),p.data&&r.a.createElement(b.a,{item:!0,xs:12,lg:4},r.a.createElement(te,{props:p.data})),g.data&&r.a.createElement(b.a,{item:!0,xs:12,lg:4},r.a.createElement(te,{props:g.data}))))}var ue=t(13),pe=Object(q.a)((function(e){return{root:{display:"flex"},imgDrawer:{width:"100px",height:"100px"},imgNavigation:{width:"50px",height:"60px"},large:{width:e.spacing(7),height:e.spacing(7)},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(170,"px)"),marginLeft:170,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:170,flexShrink:0},drawerPaper:{width:170,backgroundColor:J},drawerHeader:Object(p.a)(Object(p.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),margin:{margin:e.spacing(1),border:"1px solid #0000FF"}}}));function de(e){var a=pe(),t=Object(ue.a)(),n=r.a.useState("1"),c=Object(m.a)(n,2),o=c[0],l=c[1],i=r.a.useState("3"),s=Object(m.a)(i,2),p=s[0],T=s[1],I=r.a.useState(!1),_=Object(m.a)(I,2),L=_[0],A=_[1],R=r.a.useState(!1),H=Object(m.a)(R,2),z=H[0],U=H[1];return r.a.createElement("div",{className:a.root},r.a.createElement(N.a,null),!z&&r.a.createElement(f.a,{color:"red",elevation:0,position:"fixed",className:Object(d.a)(a.appBar,Object(u.a)({},a.appBarShift,L))},r.a.createElement(E.a,null,r.a.createElement(g.a,{color:"inherit","aria-label":"open drawer",onClick:function(){return A(!0)},edge:"start",className:Object(d.a)(a.menuButton,L&&a.hide)},r.a.createElement(h.a,{style:{color:J}},"menu")),!L&&r.a.createElement("img",{alt:"Logo",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQSH8H4SdO7nsrpdXZiLtfG2kYnu1-P3ZcYUw&usqp=CAU",className:a.imgNavigation}),r.a.createElement(b.a,{container:!0,direction:"row",alignItems:"flex-start",justify:"flex-start"},r.a.createElement(v.a,{variant:"h5",noWrap:!0},"\xa0",e.props.title)),r.a.createElement(b.a,{container:!0,direction:"row",alignItems:"flex-end",justify:"flex-end",spacing:1},r.a.createElement(b.a,{item:!0},r.a.createElement(g.a,{className:a.margin,size:"small",onClick:function(){return U(!0)}},r.a.createElement(h.a,{style:{color:J}},"search"))),r.a.createElement(b.a,{item:!0},r.a.createElement(g.a,{className:a.margin,size:"small"},r.a.createElement(h.a,{style:{color:J}},"add_circle_outline"))),r.a.createElement(b.a,{item:!0},r.a.createElement(y.a,{alt:"Remy Sharp",src:"https://image.freepik.com/free-vector/vector-avatar-smiling-man-facial-expression_102172-203.jpg",className:a.large})),r.a.createElement(b.a,{item:!0},r.a.createElement(v.a,{variant:"body1"},e.props.userName)))),r.a.createElement(D.a,{value:o},r.a.createElement(f.a,{position:"static",color:"red",elevation:0},r.a.createElement(B.a,{onChange:function(e,a){return l(a)}},e.props.mainTabContent.map((function(e,a){return r.a.createElement(w.a,{label:r.a.createElement(v.a,{variant:"body1",style:{textTransform:"capitalize"}},e),value:(1+a).toString()})})))),r.a.createElement(D.a,{value:p},r.a.createElement(f.a,{position:"static",color:"",elevation:1},r.a.createElement(b.a,{container:!0,direction:"row"},r.a.createElement(b.a,{item:!0,lg:10},r.a.createElement(B.a,{onChange:function(e,a){return T(a)},"aria-label":"simple tabs example"},e.props.subTabContent.map((function(e,a){return r.a.createElement(w.a,{label:r.a.createElement(v.a,{variant:"body1",style:{textTransform:"capitalize"}},e),value:(1+a).toString()})})))),r.a.createElement(b.a,null,r.a.createElement(b.a,{container:!0,item:!0,direction:"row",spacing:1},r.a.createElement(b.a,{item:!0},r.a.createElement(h.a,{style:{color:J}},"apps")),r.a.createElement(b.a,{item:!0},r.a.createElement(v.a,{variant:"subtitle1"},"Fields")),r.a.createElement(b.a,{item:!0},r.a.createElement(h.a,{style:{color:J}},"import_export")),r.a.createElement(b.a,{item:!0},r.a.createElement(v.a,{variant:"body1"},"Sort")),r.a.createElement(b.a,{item:!0},r.a.createElement(h.a,{style:{color:J}},"filter_alt")),r.a.createElement(b.a,{item:!0},r.a.createElement(v.a,{variant:"body1"},"Filter")))))),r.a.createElement(k.a,{value:"1"},"Data Related to List"),r.a.createElement(k.a,{value:"2"},"Data Related to List"),r.a.createElement(k.a,{value:"3"},Boolean(e.props.userID)&&r.a.createElement(me,{userID:e.props.userID})),r.a.createElement(k.a,{value:"4"},"Data Related to Calendar"),r.a.createElement(k.a,{value:"5"},"Data Related to Pivot"),r.a.createElement(k.a,{value:"6"},"Data Related to Process")))),z&&r.a.createElement(f.a,{color:"red",elevation:5,position:"fixed",className:Object(d.a)(a.appBar,Object(u.a)({},a.appBarShift,L))},r.a.createElement(E.a,null,r.a.createElement(x.a,{id:"standard-basic",label:"Search",fullWidth:!0}),r.a.createElement(h.a,{onClick:function(){return U(!1)}},"close"))),r.a.createElement(C.a,{className:a.drawer,variant:"persistent",anchor:"left",open:L,classes:{paper:a.drawerPaper}},r.a.createElement("div",{className:a.drawerHeader},r.a.createElement("img",{alt:"Logo",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQSH8H4SdO7nsrpdXZiLtfG2kYnu1-P3ZcYUw&usqp=CAU",className:a.imgDrawer}),r.a.createElement(g.a,{onClick:function(){return A(!1)}},"ltr"===t.direction?r.a.createElement(h.a,{style:{color:"#FFFFFF"}},"keyboard_arrow_left"):r.a.createElement(h.a,{style:{color:"#FFFFFF"}},"keyboard_arrow_right"))),r.a.createElement(F.a,null,[{name:"Home",icon:"home"},{name:"Search",icon:"search"},{name:"Board",icon:"developer_board"},{name:"Resources",icon:"people"},{name:"Statistics",icon:"analytics"}].map((function(e,a){return r.a.createElement(j.a,{button:!0,key:a},r.a.createElement(S.a,null,r.a.createElement(h.a,{style:{color:"#FFFFFF"}},e.icon)),r.a.createElement(O.a,{style:{color:"#FFFFFF"}},e.name))})))))}var fe=t(176),Ee=t(177),ge=t(178);function he(){var e=r.a.useState(""),a=Object(m.a)(e,2),t=a[0],n=a[1],c=r.a.useState(!0),o=Object(m.a)(c,2),l=o[0],u=o[1],p=r.a.useState(!1),d=Object(m.a)(p,2),f=d[0],E=d[1],v=r.a.useState({title:"",userName:"",userNo:"",mainTabContent:[],subTabContent:[]}),y=Object(m.a)(v,2),w=y[0],C=y[1],F=function(){var e=Object(s.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe(t);case 2:404===(a=e.sent).status?(E(!0),u(!0)):(u(!1),C(a.data));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,!f&&r.a.createElement(fe.a,{open:l},r.a.createElement(Ee.a,null,"Login"),r.a.createElement(ge.a,null,r.a.createElement(b.a,{container:!0,spacing:1,alignItems:"flex-end"},r.a.createElement(b.a,{item:!0},r.a.createElement(x.a,{autoFocus:!0,margin:"dense",label:"Enter User ID",fullWidth:!0,value:t,onChange:function(e){return n(e.target.value)},style:{color:J}})),r.a.createElement(b.a,{item:!0},r.a.createElement(g.a,{size:"large",onClick:F},r.a.createElement(h.a,{style:{color:J}},"search")))))),f&&r.a.createElement(fe.a,{open:l},r.a.createElement(Ee.a,null,"Login Failed! ",r.a.createElement(h.a,{style:{color:Q}},"error")),r.a.createElement(ge.a,null,"User ID does not exists")),!l&&r.a.createElement(de,{props:{title:w.title,userName:w.userName,userID:w.userNo,mainTabContent:w.mainTabContent,subTabContent:w.subTabContent}}))}t(114);var be=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(he,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(115);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(be,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},30:function(e,a,t){e.exports={primary:"#694ed6",secondary:"#c137a2",secondaryBlue:"#f05055",errors:"red",infos:"#2196f3",successColor:"green",warningColor:"#ffc107"}},31:function(e,a,t){e.exports={primary:"#813588",secondary:"#c137a2",secondaryBlue:"#6FD3B6",errors:"red",infos:"blue",successColor:"#02782E",warningColor:"#FFDF00"}},74:function(e){e.exports=JSON.parse('{"serverSettings":{"baseUrl":"https://localhost:3000/"},"defaultConfigurations":{"enableCustomTheme":false},"localizationAndLanguageSettings":{"localizationKey":"en"}}')},89:function(e,a,t){e.exports=t(116)}},[[89,1,2]]]);
//# sourceMappingURL=main.eb0d423c.chunk.js.map