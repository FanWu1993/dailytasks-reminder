(this["webpackJsonpdailytasks-reminder"]=this["webpackJsonpdailytasks-reminder"]||[]).push([[0],{32:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a(18),c=a.n(i),s=a(12),l=a(19),r=a(20),o=a(23),d=a(22),u=a(13),j=a(9),b=(a(32),a(2)),f=function(e){var t="card "+e.className;return Object(b.jsx)("div",{className:t,children:e.children})},h=(a(34),a(21)),O=(a(35),a(36),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(b.jsxs)("div",{className:"chart-bar",children:[Object(b.jsx)("div",{className:"chart-bar__inner",children:Object(b.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(b.jsx)("div",{className:"chart-bar__label",children:e.label})]})}),y=function(e){return Object(b.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(b.jsx)(O,{value:e.done,maxValue:e.value,label:e.label},e.label)}))})},m=function(e){var t,a=[],n=Object(h.a)(e.dailyTasks);try{var i=function(){var e=t.value,n=e.location,i=a.find((function(e){return e.label===n}));void 0===i?e.done?a.push({label:n,value:1,done:1}):a.push({label:n,value:1,done:0}):e.done?(a[a.indexOf(i)].value+=1,a[a.indexOf(i)].done+=1):a[a.indexOf(i)].value+=1};for(n.s();!(t=n.n()).done;)i()}catch(c){n.e(c)}finally{n.f()}return Object(b.jsx)(y,{dataPoints:a})},v=(a(37),function(e){var t=function(t){e.onChangeFilter(t.target)},a=["\u6240\u6709\u5730\u56fe"].concat(Object(s.a)(e.locations));return Object(b.jsx)("div",{className:"daily-filter",children:Object(b.jsxs)("div",{className:"daily-filter__control",children:[Object(b.jsx)("label",{children:"Filters"}),Object(b.jsx)("select",{value:e.selected.location,onChange:t,children:a.map((function(e){return Object(b.jsx)("option",{value:e,children:e},Math.random().toString())}))}),Object(b.jsx)("select",{value:e.selected.progress,onChange:t,children:["\u6240\u6709\u72b6\u6001","\u672a\u5b8c\u6210","\u5b8c\u6210"].map((function(e){return Object(b.jsx)("option",{value:e,children:e},Math.random().toString())}))})]})})}),x=(a(38),a(39),function(e){var t=Object(n.useState)(e.done),a=Object(j.a)(t,2),i=a[0],c=a[1];return Object(b.jsx)("li",{children:Object(b.jsxs)(f,{className:"daily-item",children:[Object(b.jsx)("div",{className:"daily-date",children:e.location}),Object(b.jsxs)("div",{className:"daily-item__description ",children:[Object(b.jsx)("h2",{children:e.task}),Object(b.jsx)("div",{onClick:function(t){i||(c(!i),e.onDoneDaily(t.target.parentNode.firstChild.innerText))},className:"daily-item__price",children:i?"\u5b8c\u6210":"\u672a\u5b8c\u6210"})," ",Object(b.jsx)("div",{onClick:function(t){window.confirm("\u786e\u5b9a\u8981\u5220\u9664\uff1f")&&e.onDeleteDaily(t.target.parentNode.firstChild.innerText)},className:"daily-item__price",children:"\u5220\u9664"})]})]})})}),p=function(e){return 0===e.items.length?Object(b.jsx)("h2",{className:"daily-list__fallback",children:"\u4e48\u5f97\u65e5\u5e38\u5566!"}):Object(b.jsx)("ul",{className:"daily-list",children:e.items.map((function(t){return Object(b.jsx)(x,{location:t.location,task:t.task,done:t.done,onDeleteDaily:e.onDeleteDaily,onDoneDaily:e.onDoneDaily},t.id)}))})},k=function(e){var t=Object(n.useState)("\u6240\u6709\u5730\u56fe"),a=Object(j.a)(t,2),i=a[0],c=a[1],l=Object(n.useState)("\u6240\u6709\u72b6\u6001"),r=Object(j.a)(l,2),o=r[0],d=r[1],u={location:i,progress:o},h=Object(s.a)(new Set(e.dailyTasks.map((function(e){return e.location})))),O="\u6240\u6709\u5730\u56fe"===i?e.dailyTasks:e.dailyTasks.filter((function(e){return e.location===i}));return O="\u6240\u6709\u72b6\u6001"===o?O:O.filter((function(e){return e.done===("\u5b8c\u6210"===o)})),Object(b.jsx)("div",{children:Object(b.jsxs)(f,{className:"daily",children:[Object(b.jsx)(v,{locations:h,selected:u,onChangeFilter:function(e){"\u6240\u6709\u72b6\u6001"===e.firstChild.value?d(e.value):c(e.value)}}),Object(b.jsx)(m,{dailyTasks:O}),Object(b.jsx)(p,{items:O,onDeleteDaily:e.onDeleteDaily,onDoneDaily:e.onDoneDaily})]})})},D=a(24),g=(a(40),function(e){var t=Object(n.useState)(""),a=Object(j.a)(t,2),i=a[0],c=a[1],s=Object(n.useState)(""),l=Object(j.a)(s,2),r=l[0],o=l[1];return Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a={location:i,task:r,done:!1};e.onSaveDailyData(a),c(""),o("")},children:[Object(b.jsxs)("div",{className:"new-daily__controls",children:[Object(b.jsxs)("div",{className:"new-daily__control",children:[Object(b.jsx)("label",{children:"\u5730\u56fe"}),Object(b.jsx)("input",{type:"text",value:i,onChange:function(e){c(e.target.value)}})]}),Object(b.jsxs)("div",{className:"new-daily__control",children:[Object(b.jsx)("label",{children:"\u4efb\u52a1"}),Object(b.jsx)("input",{type:"text",value:r,onChange:function(e){o(e.target.value)}})]})]}),Object(b.jsxs)("div",{className:"new-daily__actions",children:[Object(b.jsx)("button",{type:"button",onClick:e.onCancel,children:"\u53d6\u6d88"}),Object(b.jsx)("button",{type:"submit",children:"\u6dfb\u52a0\u65e5\u5e38"})]})]})}),S=(a(41),function(e){var t=Object(n.useState)(!1),a=Object(j.a)(t,2),i=a[0],c=a[1];return Object(b.jsxs)("div",{className:"new-daily",children:[!i&&Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{onClick:function(){c(!0)},children:"\u6dfb\u52a0\u65b0\u65e5\u5e38"}),Object(b.jsx)("button",{onClick:function(){e.onStartNewDay()},children:"\u5f00\u542f\u65b0\u4e00\u5929"})]}),i&&Object(b.jsx)(g,{onCancel:function(){c(!1)},onSaveDailyData:function(t){var a=Object(D.a)({id:Math.random().toString()},t);e.onAddDaily(a),c(!1)}})]})}),N={apiKey:"AIzaSyBt2EIaFdmrOUwRvDTxB9w65ioBs5xJG64",authDomain:"dailytasks-reminder.firebaseapp.com",databaseURL:"https://dailytasks-reminder-default-rtdb.firebaseio.com",projectId:"dailytasks-reminder",storageBucket:"dailytasks-reminder.appspot.com",messagingSenderId:"190850445875",appId:"1:190850445875:web:5e7cf5f4371edf732f6946"},_=(Math.random().toString(),Math.random().toString(),Math.random().toString(),Math.random().toString(),Math.random().toString(),Math.random().toString(),function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).getUserData=function(){u.a.database().ref("/daily").on("value",(function(e){var t=e.val();n.setState({dailyTasks:t})}))},n.componentDidMount=function(){u.a.apps.length?u.a.app():u.a.initializeApp(N),n.getUserData()},n.writeUserData=function(){u.a.database().ref("/daily").set(n.state.dailyTasks)},n.state={dailyTasks:[]},n}return Object(r.a)(a,[{key:"componentDidUpdate",value:function(e,t){t!==this.state&&this.writeUserData()}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{children:[Object(b.jsx)(S,{onAddDaily:function(t){e.setState({dailyTasks:[].concat(Object(s.a)(e.state.dailyTasks),[t])})},onStartNewDay:function(){var t=e.state.dailyTasks;t.map((function(e){return e.done=!1})),e.setState({dailyTasks:t})}}),Object(b.jsx)(k,{dailyTasks:this.state.dailyTasks,onDeleteDaily:function(t){var a=e.state.dailyTasks.filter((function(e){return e.task!==t}));e.setState({dailyTasks:a})},onDoneDaily:function(t){var a=e.state.dailyTasks;a[a.findIndex((function(e){return e.task===t}))].done=!0,e.setState({dailyTasks:a})}})]})}}]),a}(n.Component));a(42);c.a.render(Object(b.jsx)(_,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.dd30b7c5.chunk.js.map