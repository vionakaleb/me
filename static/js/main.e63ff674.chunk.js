(this.webpackJsonpme=this.webpackJsonpme||[]).push([[0],{24:function(e,t,s){},27:function(e,t,s){},39:function(e,t,s){"use strict";s.r(t);var c=s(2),a=s(14),n=s.n(a),i=(s(24),s(5)),r=s(7),l=s(8),o=s(6),j=s(15),d=s(17),h=s.n(d),b=(s(27),s(18)),m=s(9),u=s.n(m),O=s(1),x=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){var e;if(!this.props.data)return null;var t=this.props.data,s=t.name,c=t.description,a=null===(e=this.props.data.social)||void 0===e?void 0:e.find((function(e){return"Github"===e.name}));return Object(O.jsxs)("header",{id:"home",children:[Object(O.jsx)(b.a,{type:"circle",bg:!0}),Object(O.jsxs)("nav",{id:"nav-wrap",children:[Object(O.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(O.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(O.jsxs)("ul",{id:"nav",className:"nav",children:[Object(O.jsx)("li",{className:"current",children:Object(O.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Projects"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(O.jsx)("div",{className:"row banner",children:Object(O.jsxs)("div",{className:"banner-text",children:[Object(O.jsx)("img",{className:"bg-picture",src:"images/profile-bg.JPG",alt:"Viona Kaleb Profile Pic"}),Object(O.jsx)(u.a,{bottom:!0,children:Object(O.jsx)("h1",{className:"responsive-headline mt-10rem",children:s})}),Object(O.jsx)(u.a,{bottom:!0,duration:1200,children:Object(O.jsxs)("h3",{children:["- ",c," -"]})}),Object(O.jsx)("hr",{}),Object(O.jsx)(u.a,{bottom:!0,duration:2e3,children:Object(O.jsx)("ul",{className:"social",children:Object(O.jsxs)("a",{href:null===a||void 0===a?void 0:a.url,target:"_blank",className:"button btn github-btn",rel:"noreferrer",children:[Object(O.jsx)("i",{className:null===a||void 0===a?void 0:a.className}),"Github"]})})})]})}),Object(O.jsx)("p",{className:"scrolldown",children:Object(O.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(O.jsx)("i",{className:"icon-down-circle"})})})]})}}]),s}(c.Component),p=x,f=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return this.props.data?Object(O.jsx)("footer",{children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)(u.a,{bottom:!0,children:Object(O.jsx)("div",{className:"twelve columns",children:Object(O.jsxs)("ul",{className:"copyright",children:[Object(O.jsx)("li",{className:"copyright-name",children:"\xa9 Viona Zatil Aqmar Kaleb"}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{title:"Styleshout",href:"http://www.styleshout.com/",children:"Styleshout"})})]})})}),Object(O.jsx)("div",{id:"go-top",children:Object(O.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(O.jsx)("i",{className:"icon-up-open"})})})]})}):null}}]),s}(c.Component),v=f,N=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){var e,t,s,c;if(!this.props.data)return null;var a=this.props.data,n=a.fullname,i=a.bios,r=a.bios2,l=a.bios3,o=a.address,j=o.street,d=o.city,h=o.country,b=o.gmaps,m="images/"+this.props.data.image,x=null===(e=this.props.data.social)||void 0===e||null===(t=e.find((function(e){return"Email"===e.name})))||void 0===t?void 0:t.url,p=null===(s=this.props.data.social)||void 0===s||null===(c=s.find((function(e){return"LinkedIn"===e.name})))||void 0===c?void 0:c.url;return Object(O.jsx)("section",{id:"about",children:Object(O.jsx)(u.a,{duration:1e3,children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"three columns",children:Object(O.jsx)("img",{className:"profile-pic",src:m,alt:"Viona Kaleb Profile Pic"})}),Object(O.jsxs)("div",{className:"nine columns main-col",children:[Object(O.jsxs)("h2",{children:[Object(O.jsx)("i",{class:"fa fa-user"})," About Me"]}),i&&Object(O.jsx)("div",{children:null===i||void 0===i?void 0:i.map((function(e){return Object(O.jsx)("p",{className:"m-0",children:e})}))}),r&&Object(O.jsx)("div",{className:"mt-2",children:null===r||void 0===r?void 0:r.map((function(e){return Object(O.jsx)("p",{className:"m-0",children:e})}))}),l&&Object(O.jsx)("div",{className:"mt-2",children:null===l||void 0===l?void 0:l.map((function(e){return Object(O.jsx)("p",{className:"m-0",children:e})}))}),Object(O.jsx)("div",{className:"row mt-3",children:Object(O.jsxs)("div",{className:"columns contact-details",children:[Object(O.jsxs)("h2",{children:[Object(O.jsx)("i",{class:"fa fa-info-circle","aria-hidden":"true"})," Contact Details"]}),Object(O.jsxs)("p",{className:"address",children:[Object(O.jsx)("span",{children:Object(O.jsx)("a",{href:p,target:"_blank",rel:"noreferrer",style:{cursor:"pointer"},children:n})}),Object(O.jsx)("br",{}),Object(O.jsx)("span",{children:Object(O.jsxs)("a",{href:b,target:"_blank",rel:"noreferrer",style:{cursor:"pointer"},children:[j&&Object(O.jsxs)(O.Fragment,{children:[j,Object(O.jsx)("br",{})]}),d,", ",h]})}),Object(O.jsx)("br",{}),Object(O.jsx)("a",{onClick:function(){return window.open("mailto:".concat(x))},style:{cursor:"pointer"},children:x})]})]})})]})]})})})}}]),s}(c.Component),g=N,y=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"getRandomColor",value:function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}},{key:"render",value:function(){var e=this;if(!this.props.data)return null;var t=this.props.data.skillmessages,s=this.props.data.education.map((function(e){return Object(O.jsxs)("div",{className:"flex-row gap-2",children:[Object(O.jsx)("img",{className:"icon-logo",src:"images/campus.png",alt:""}),Object(O.jsxs)("div",{className:"flex-col",children:[Object(O.jsx)("h3",{className:"text-left",children:e.school}),Object(O.jsxs)("p",{className:"info text-left",children:[e.degree," ",Object(O.jsx)("span",{children:"\u2022"}),Object(O.jsx)("em",{className:"date",children:e.graduated})]}),Object(O.jsx)("p",{className:"text-left",children:e.description})]})]},e.school)})),c=this.props.data.work.map((function(e){var t,s;return Object(O.jsxs)("div",{className:"mb-6",children:[Object(O.jsxs)("div",{className:"flex-row gap-2",children:[Object(O.jsx)("img",{className:"icon-logo",src:"images/"+e.logo,alt:e.title}),Object(O.jsxs)("div",{className:"flex-col",children:[Object(O.jsx)("h3",{className:"text-left",children:e.company}),Object(O.jsxs)("p",{className:"info text-left",children:[e.title,Object(O.jsx)("span",{children:"\u2022"})," ",Object(O.jsx)("em",{className:"date",children:e.years})]})]})]}),e.description&&Object(O.jsx)("p",{className:"mb-1",children:e.description}),e.descriptions&&Object(O.jsx)("ul",{style:{listStyleType:"disc",marginLeft:"1.5rem"},className:"mb-2",children:null===(t=e.descriptions)||void 0===t?void 0:t.map((function(e){return e?Object(O.jsx)("li",{children:e}):Object(O.jsx)("br",{})}))}),Object(O.jsx)("div",{className:"skill-container",children:null===e||void 0===e||null===(s=e.skills)||void 0===s?void 0:s.map((function(e){return Object(O.jsxs)("div",{class:"skill-labels",children:["\u2714 ",e]})}))})]},e.company)})),a=this.props.data.skills.map((function(t){var s=e.getRandomColor(),c="bar-expand "+t.name.toLowerCase(),a=t.level;return Object(O.jsxs)("li",{children:[Object(O.jsx)("span",{style:{width:a,backgroundColor:s},className:c}),Object(O.jsx)("em",{children:t.name})]},t.name)}));return Object(O.jsxs)("section",{id:"resume",children:[Object(O.jsx)(u.a,{left:!0,duration:1300,children:Object(O.jsxs)("div",{className:"row work",children:[Object(O.jsx)("div",{className:"three columns header-col",children:Object(O.jsxs)("h1",{children:[Object(O.jsx)("i",{class:"fa fa-briefcase"})," ",Object(O.jsx)("span",{children:"Work"})]})}),Object(O.jsx)("div",{className:"nine columns main-col",children:c})]})}),Object(O.jsx)(u.a,{right:!0,duration:1300,children:Object(O.jsxs)("div",{className:"row education",children:[Object(O.jsx)("div",{className:"three columns header-col",children:Object(O.jsxs)("h1",{children:[Object(O.jsx)("i",{class:"fa fa-book"})," ",Object(O.jsx)("span",{children:"Education"})]})}),Object(O.jsx)("div",{className:"nine columns main-col",children:Object(O.jsx)("div",{className:"row item",children:Object(O.jsx)("div",{className:"twelve columns",children:s})})})]})}),Object(O.jsx)(u.a,{left:!0,duration:1300,children:Object(O.jsxs)("div",{className:"row skill",children:[Object(O.jsx)("div",{className:"three columns header-col",children:Object(O.jsxs)("h1",{children:[Object(O.jsx)("i",{class:"fa fa-file"})," ",Object(O.jsx)("span",{children:"Skills"})]})}),Object(O.jsxs)("div",{className:"nine columns main-col",children:[t.length>0&&Object(O.jsx)("div",{className:"mb-3",children:null===t||void 0===t?void 0:t.map((function(e){return Object(O.jsx)("p",{className:"m-0",children:e})}))}),Object(O.jsx)("div",{className:"bars",children:Object(O.jsx)("ul",{className:"skills",children:a})})]})]})})]})}}]),s}(c.Component),w=y,k=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){var e,t,s;if(!this.props.data)return null;var c=this.props.data.contactmessage,a=null===(e=this.props.data.social)||void 0===e||null===(t=e.find((function(e){return"Email"===e.name})))||void 0===t?void 0:t.url,n=null===(s=this.props.data.social)||void 0===s?void 0:s.find((function(e){return"LinkedIn"===e.name}));return Object(O.jsx)("section",{id:"contact",children:Object(O.jsx)(m.Fade,{bottom:!0,duration:1e3,children:Object(O.jsxs)("div",{className:"row section-head",children:[Object(O.jsx)("div",{className:"two columns header-col",children:Object(O.jsx)("h1",{children:Object(O.jsx)("span",{children:"Get In Touch"})})}),Object(O.jsxs)("div",{className:"ten columns",children:[Object(O.jsx)("p",{style:{margin:0,width:"100%"},children:Object(O.jsxs)("a",{onClick:function(){return window.open("mailto:".concat(a))},className:"button",style:{width:"100%"},children:[Object(O.jsx)("i",{class:"fa fa-envelope","aria-hidden":"true"})," ",c]})}),Object(O.jsx)("p",{style:{margin:"0 0 0 0.5rem",cursor:"pointer"},children:"Or reach me"}),Object(O.jsxs)("a",{href:null===n||void 0===n?void 0:n.url,target:"_blank",className:"button btn linkedin-btn",rel:"noreferrer",children:[Object(O.jsx)("i",{className:null===n||void 0===n?void 0:n.className})," ","LinkedIn"]})]})]})})})}}]),s}(c.Component),C=k,D=s(19),P=s.n(D),A=0,B=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.projects.map((function(e){var t="images/portfolio/"+e.image;return Object(O.jsx)("div",{className:"columns portfolio-item",children:Object(O.jsxs)("div",{className:"item-wrap",children:[Object(O.jsx)("div",{className:"portfolio-desc",children:e.title}),Object(O.jsx)(P.a,{alt:e.title,src:t,hotKey:!0,controller:!0,coverVisible:!0,hideOnScroll:!0})]})},A++)}));return Object(O.jsx)("section",{id:"portfolio",children:Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"twelve columns collapsed",children:[Object(O.jsxs)("div",{style:{textAlign:"center",paddingBottom:"4rem",marginBottom:"4rem",borderBottom:"1px dashed #95A3A3"},children:[Object(O.jsxs)("h1",{style:{marginBottom:"4rem"},children:[Object(O.jsx)("i",{class:"fa fa-folder-open"})," Work Projects"]}),Object(O.jsx)("a",{href:this.props.data.project,target:"_blank",className:"button btn github-btn",rel:"noreferrer",style:{padding:"5px 20px",marginBottom:"4rem",fontSize:"small"},children:"More Portfolio"}),Object(O.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]}),Object(O.jsxs)("div",{style:{textAlign:"center",paddingTop:"4rem"},children:[Object(O.jsxs)("h1",{style:{marginBottom:"4rem"},children:[Object(O.jsx)("i",{class:"fa fa-folder-open"})," Personal Projects"]}),this.props.data.project_web.map((function(e,t){var s;return Object(O.jsxs)("div",{className:"mb-6",children:[Object(O.jsx)("h5",{children:e.name}),Object(O.jsxs)("p",{className:"m-0",children:[Object(O.jsx)("i",{class:"fa fa-github"})," ",Object(O.jsx)("a",{href:e.github,target:"_blank",rel:"noreferrer",children:e.github})]}),Object(O.jsx)("p",{className:"mb-1",children:e.url?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("i",{class:"fa fa-eye"})," ",Object(O.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:e.url})]}):null}),Object(O.jsx)("div",{className:"skill-container",children:null===e||void 0===e||null===(s=e.technology)||void 0===s?void 0:s.map((function(e){return Object(O.jsxs)("div",{class:"skill-labels",children:["\u2714 ",e]})}))})]},t)}))]})]})})})}}]),s}(c.Component),S=B,F=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(e){var c;return Object(i.a)(this,s),(c=t.call(this,e)).state={foo:"bar",resumeData:{}},j.a.initialize("UA-110570651-1"),j.a.pageview(window.location.pathname),c}return Object(r.a)(s,[{key:"getResumeData",value:function(){h.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,s){console.log(s),alert(s)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(p,{data:this.state.resumeData.main}),Object(O.jsx)(g,{data:this.state.resumeData.main}),Object(O.jsx)(w,{data:this.state.resumeData.resume}),Object(O.jsx)(S,{data:this.state.resumeData.portfolio}),Object(O.jsx)(C,{data:this.state.resumeData.main}),Object(O.jsx)(v,{data:this.state.resumeData.main})]})}}]),s}(c.Component),_=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,40)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),n(e),i(e)}))};n.a.render(Object(O.jsx)(F,{}),document.getElementById("root")),_()}},[[39,1,2]]]);
//# sourceMappingURL=main.e63ff674.chunk.js.map