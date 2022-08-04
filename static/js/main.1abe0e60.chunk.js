(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(6),l=n.n(c),s=(n(17),n(8)),i=n(2),r=(n(18),n(0)),u=function(e){var t=e.onCancel,n=e.onAddExpense,c=Object(a.useState)(""),l=Object(i.a)(c,2),s=l[0],u=l[1],j=Object(a.useState)(""),o=Object(i.a)(j,2),d=o[0],b=o[1],x=Object(a.useState)(""),h=Object(i.a)(x,2),m=h[0],O=h[1];return Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n({id:Math.random().toString(),title:s,amount:+d,date:new Date(m)}),u(""),b(""),O(""),t()},children:[Object(r.jsxs)("div",{className:"new-expense__controls",children:[Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{htmlFor:"title",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(r.jsx)("input",{id:"title",type:"text",value:s,onChange:function(e){u(e.target.value)}})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{htmlFor:"amount",children:"\u0426\u0435\u043d\u0430"}),Object(r.jsx)("input",{id:"amount",type:"number",min:"0.01",step:"0.01",value:d,onChange:function(e){b(e.target.value)}})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{htmlFor:"date",children:"\u0414\u0430\u0442\u0430"}),Object(r.jsx)("input",{id:"date",type:"date",min:"2019-01-01",max:"2022-12-31",value:m,onChange:function(e){O(e.target.value)}})]})]}),Object(r.jsxs)("div",{className:"new-expense__actions",children:[Object(r.jsx)("button",{type:"button",onClick:t,children:"\u041e\u0442\u043c\u0435\u043d\u0430"}),Object(r.jsx)("button",{type:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0440\u0430\u0441\u0445\u043e\u0434"})]})]})},j=(n(20),function(e){var t=e.onAddExpense,n=Object(a.useState)(!1),c=Object(i.a)(n,2),l=c[0],s=c[1],j=function(){s((function(e){return!e}))};return Object(r.jsxs)("div",{className:"new-expense",children:[!l&&Object(r.jsx)("button",{onClick:j,style:{margin:"0px"},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u0440\u0430\u0441\u0445\u043e\u0434"}),l&&Object(r.jsx)(u,{onAddExpense:t,onCancel:j})]})}),o=(n(21),function(e){var t="card "+e.className;return Object(r.jsx)("div",{className:t,children:e.children})}),d=(n(22),function(e){var t=e.onChangeFilter,n=e.filteredYear;return Object(r.jsx)("div",{className:"expenses-filter",children:Object(r.jsxs)("div",{className:"expenses-filter__control",children:[Object(r.jsx)("label",{htmlFor:"yearFilter",children:"\u0424\u0438\u043b\u044c\u0442\u0440 \u043f\u043e \u0433\u043e\u0434\u0430\u043c"}),Object(r.jsxs)("select",{value:n,id:"yearFilter",onChange:t,children:[Object(r.jsx)("option",{value:"2019",children:"2019"}),Object(r.jsx)("option",{value:"2020",children:"2020"}),Object(r.jsx)("option",{value:"2021",children:"2021"}),Object(r.jsx)("option",{value:"2022",children:"2022"})]})]})})}),b=(n(23),function(e){var t,n=e.date,a=(t=n.toLocaleString("ru-RU",{month:"long"}))[0].toUpperCase()+t.slice(1),c=n.toLocaleString("ru-RU",{day:"2-digit"}),l=n.getFullYear();return Object(r.jsxs)("div",{className:"expense-date",children:[Object(r.jsx)("div",{className:"expense-date__month",children:a}),Object(r.jsx)("div",{className:"expense-date__year",children:l}),Object(r.jsx)("div",{className:"expense-date__day",children:c})]})}),x=(n(24),function(e){var t=e.date,n=e.title,a=e.amount;return Object(r.jsx)("li",{children:Object(r.jsxs)(o,{className:"expense-item",children:[Object(r.jsx)(b,{date:t}),Object(r.jsxs)("div",{className:"expense-item__description",children:[Object(r.jsx)("h2",{children:n}),Object(r.jsxs)("div",{className:"expense-item__price",children:[a," \u20bd"]})]})]})})}),h=(n(25),function(e){var t=e.items;e.filterValue;return t.length?Object(r.jsx)("ul",{className:"expenses-list",children:t.map((function(e){return Object(r.jsx)(x,{date:e.date,title:e.title,amount:e.amount},e.id)}))}):Object(r.jsx)("h2",{className:"expenses-list__fallback",children:"\u0422\u0440\u0430\u0442 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e."})}),m=(n(26),n(7)),O=(n(27),function(e){var t=e.maxValue,n=e.value,a=e.label,c="0%";return t>0&&(c=Math.round(n/t*100)+"%"),Object(r.jsxs)("div",{className:"chart-bar",children:[Object(r.jsx)("div",{className:"chart-bar__inner",children:Object(r.jsx)("div",{className:"chart-bar__fill",style:{height:c}})}),Object(r.jsx)("div",{className:"chart-bar__label",children:a})]})}),v=(n(28),function(e){var t=e.dataPoints,n=t.map((function(e){return e.value})).reduce((function(e,t){return e+t}),0);return Object(r.jsx)("div",{className:"chart",children:t.map((function(e){return Object(r.jsx)(O,{value:e.value,maxValue:n,label:e.label},e.label)}))})}),p=function(e){var t,n=e.expenses,a=[{label:"\u042f\u043d\u0432.",value:0},{label:"\u0424\u0435\u0432.",value:0},{label:"\u041c\u0430\u0440\u0442",value:0},{label:"\u0410\u043f\u0440.",value:0},{label:"\u041c\u0430\u0439",value:0},{label:"\u0418\u044e\u043d.",value:0},{label:"\u0418\u044e\u043b.",value:0},{label:"\u0410\u0432\u0433.",value:0},{label:"\u0421\u0435\u043d\u0442.",value:0},{label:"\u041e\u043a\u0442.",value:0},{label:"\u041d\u043e\u044f\u0431.",value:0},{label:"\u0414\u0435\u043a.",value:0}],c=Object(m.a)(n);try{for(c.s();!(t=c.n()).done;){var l=t.value;a[l.date.getMonth()].value+=l.amount}}catch(s){c.e(s)}finally{c.f()}return Object(r.jsx)(v,{dataPoints:a})},f=function(e){var t=e.items,n=Object(a.useState)("2019"),c=Object(i.a)(n,2),l=c[0],s=c[1],u=t.filter((function(e){return e.date.getFullYear().toString()===l}));return Object(r.jsxs)(o,{className:"expenses",children:[Object(r.jsx)(d,{filteredYear:l,onChangeFilter:function(e){s(e.target.value)}}),Object(r.jsx)(p,{expenses:u}),Object(r.jsx)(h,{items:u})]})},_=[{id:"e1",title:"\u041c\u0438\u043a\u0440\u043e\u0432\u043e\u043b\u043d\u043e\u0432\u043a\u0430",amount:5663.12,date:new Date(2019,7,14)},{id:"e2",title:"\u041d\u043e\u0432\u044b\u0439 \u0442\u0435\u043b\u0435\u0432\u0438\u0437\u043e\u0440",amount:14032.49,date:new Date(2021,2,12)},{id:"e3",title:"\u041c\u0430\u0448\u0438\u043d\u043a\u0430 \u0434\u043b\u044f \u0431\u0440\u0438\u0442\u0432\u044b",amount:5442.67,date:new Date(2021,2,28)},{id:"e4",title:"\u041d\u043e\u0432\u044b\u0439 \u0441\u0442\u043e\u043b",amount:8032,date:new Date(2021,5,12)}],g=function(){var e=Object(a.useState)(_),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(j,{onAddExpense:function(e){c((function(t){return[e].concat(Object(s.a)(t))}))}}),Object(r.jsx)(f,{items:n})]})};l.a.createRoot(document.getElementById("root")).render(Object(r.jsx)(g,{}))}],[[29,1,2]]]);
//# sourceMappingURL=main.1abe0e60.chunk.js.map