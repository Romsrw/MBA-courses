(this["webpackJsonpmba-app"]=this["webpackJsonpmba-app"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),i=c(6),r=c.n(i),a=(c(13),c(14),c(5)),l=c.n(a),o=c(7),j=c(3),d=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(!1),r=Object(j.a)(i,2),a=r[0],d=r[1],u=Object(n.useState)([]),b=Object(j.a)(u,2),h=b[0],x=b[1],p=function(){var e=Object(o.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(!0),e.next=4,fetch("https://ipo-cp.ru/api/v1/bootcamps/605c5f71bc557b46b4f42a56/courses");case 4:return t=e.sent,e.next=7,t.json();case 7:c=e.sent,x(c.data.slice(0,5)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),d(e.t0);case 14:return e.prev=14,s(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){p()}),[]),{courses:h,isError:a,isLoading:c}},u=(c(16),c(0)),b=function(){return Object(u.jsx)("div",{className:"loader-wrapper",children:Object(u.jsx)("div",{className:"loader"})})},h=c(8),x=c(2),p=c.n(x),m=function(){return Object(u.jsx)("div",{className:"module__icon",children:Object(u.jsx)("svg",{width:"20",height:"2",viewBox:"0 0 20 2",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(u.jsx)("rect",{width:"20",height:"2",rx:"1",fill:"white"})})})},O=function(){return Object(u.jsx)("div",{className:"module__icon",children:Object(u.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(u.jsx)("path",{d:"M10 1V19M18.9706 10H1",stroke:"#D9D9D9",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})},f=(c(18),function(e){var t=e.title,c=e.disciplines,s=e.isSingle,i=Object(n.useState)(!1),r=Object(j.a)(i,2),a=r[0],l=r[1];return Object(u.jsxs)("div",{className:p()("module",{module__single:s}),children:[Object(u.jsx)("span",{className:"module__line"}),Object(u.jsxs)("div",{className:p()("module__title_wrapper",{active:a}),onClick:function(){window.innerWidth<500&&l((function(e){return!e}))},children:[a?Object(u.jsx)(m,{}):Object(u.jsx)(O,{}),Object(u.jsx)("span",{className:"module__title",children:t})]}),Object(u.jsx)("ul",{className:p()("disciplines",{open:a}),children:c.map((function(e){return Object(u.jsx)("li",{className:"disciplines__item",children:Object(u.jsx)("span",{className:"disciplines__text",children:e.text})},e.id)}))})]})}),_=(c(19),function(e){var t=e.title,c=e.specializedSubjects,n=[{title:"1 \u043c\u043e\u0434\u0443\u043b\u044c",disciplines:c.slice(0,5).map((function(e,t){return{id:t,text:e}}))},{title:"2 \u043c\u043e\u0434\u0443\u043b\u044c",disciplines:c.slice(5,10).map((function(e,t){return{id:t,text:e}}))}].filter((function(e){return e.disciplines.length}));return Object(u.jsxs)("section",{className:"course",children:[Object(u.jsx)("h3",{className:"course__title",children:t}),Object(u.jsx)("div",{className:"course__modules",children:n.map((function(e){return Object(u.jsx)(f,Object(h.a)({isSingle:1===n.length},e),e.title)}))})]})}),v=(c(20),function(e){var t=e.courseInfo,c=e.type;return Object(u.jsxs)("div",{className:p()("rectangle",{rectangle__dark:"dark"===c,rectangle__red:"red"===c}),children:[Object(u.jsx)("h4",{className:"rectangle__title",children:t.title}),t.text.length>1?Object(u.jsx)("ul",{className:"attestation",children:t.text.map((function(e,t){return Object(u.jsx)("li",{className:"attestation__item",children:Object(u.jsx)("span",{className:"attestation__text",children:e})},t)}))}):Object(u.jsx)("span",{className:"rectangle__text",children:t.text})]})}),g=(c(21),function(e){var t=e.courses,c={red:{title:["\u041f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043c\u043e\u0434\u0443\u043b\u0438"],text:["\u0420\u0430\u0431\u043e\u0442\u0430 \u043d\u0430\u0434 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u0430\u043c\u0438:\n\u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0430 \u0433\u0440\u0443\u043f\u043f\u043e\u0432\u044b\u0445 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439,\n\u043a\u0435\u0439\u0441-\u043c\u0435\u0442\u043e\u0434\u044b, \u044d\u0441\u0441\u0435"]},dark:{title:["\u0418\u0442\u043e\u0433\u043e\u0432\u0430\u044f \u0430\u0442\u0442\u0435\u0441\u0442\u0430\u0446\u0438\u044f"],text:["\u0411\u0438\u0437\u043d\u0435\u0441-\u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 (\u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u0438\u0442\u043e\u0433\u043e\u0432\u043e\u0439 \u0430\u0442\u0442\u0435\u0441\u0442\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b, \u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u043e \u0431\u0438\u0437\u043d\u0435\u0441-\u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044e)","\u0417\u0430\u0449\u0438\u0442\u0430 \u0438\u0442\u043e\u0433\u043e\u0432\u043e\u0439 \u0430\u0442\u0442\u0435\u0441\u0442\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b"]}};return Object(u.jsxs)("main",{className:"program",children:[t.map((function(e){return Object(u.jsx)(_,{title:e.title,specializedSubjects:e.specializedSubjects},e._id)})),Object(u.jsxs)("div",{className:"rectangles",children:[Object(u.jsx)(v,{type:"red",courseInfo:c.red}),Object(u.jsx)(v,{type:"dark",courseInfo:c.dark})]})]})}),N=function(){var e=d(),t=e.courses,c=e.isLoading;return e.isError?Object(u.jsx)("div",{children:"...error"}):Object(u.jsx)("div",{className:"page",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"header",children:Object(u.jsx)("h2",{className:"header__title",children:"\u0421\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0434\u0438\u0441\u0446\u0438\u043f\u043b\u0438\u043d\u044b"})}),c?Object(u.jsx)(b,{}):Object(u.jsx)(g,{courses:t})]})})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,23)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),i(e),r(e)}))};r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(N,{})}),document.getElementById("root")),w()}],[[22,1,2]]]);
//# sourceMappingURL=main.e1ba97b3.chunk.js.map