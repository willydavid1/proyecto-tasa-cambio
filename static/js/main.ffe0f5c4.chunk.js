(this["webpackJsonpproject-pesos-dollars-bs"]=this["webpackJsonpproject-pesos-dollars-bs"]||[]).push([[0],{21:function(e,a,t){e.exports=t(35)},26:function(e,a,t){},28:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),s=t(17),r=t.n(s),l=t(9),c=t(5);function i(e){var a,t,n,s,r,l,c=e.indicatorsValues;return o.a.createElement("div",{className:"mb-5"},o.a.createElement("div",{className:"table-responsive container tabla"},o.a.createElement("h5",{className:"text-center"},"Indicadores Hoy ",null===c||void 0===c?void 0:null===(a=c._timestamp)||void 0===a?void 0:a.fecha_corta," \ud83d\udcb9\u303d"),o.a.createElement("table",{className:"table table-bordered mb-0"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"pesos a dolares:"),o.a.createElement("th",null,"oro:"),o.a.createElement("th",null,"pesos a bolivares:"),o.a.createElement("th",null,"precio del dolar en venezuela:"),o.a.createElement("th",null,"precio del euro en venezuela:"))),o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,null===c||void 0===c?void 0:null===(t=c.USDCOL)||void 0===t?void 0:t.ratecash),o.a.createElement("td",null,null===c||void 0===c?void 0:null===(n=c.GOLD)||void 0===n?void 0:n.rate," oz"),o.a.createElement("td",null,null===c||void 0===c?void 0:null===(s=c.COL)||void 0===s?void 0:s.efectivo),o.a.createElement("td",null,null===c||void 0===c?void 0:null===(r=c.USD)||void 0===r?void 0:r.transferencia,"bs x $"),o.a.createElement("td",null,null===c||void 0===c?void 0:null===(l=c.EUR)||void 0===l?void 0:l.transferencia,"bs x euro"))))))}t(26);var u=function(){return o.a.createElement("div",{className:"d-flex justify-content-center align-self-center mt-5"},o.a.createElement("div",{className:"lds-ring "},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null)))},d=t(11),m=t.n(d),p=t(20),v=function(){var e=Object(n.useState)({data:null,error:null,isLoading:!1,separator:",",type:"",quantity:"",customRate:null}),a=Object(p.a)(e,2),t=a[0],o=a[1];return Object(n.useEffect)((function(){!function(){var e;m.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return o(Object(c.a)({},t,{error:null,isLoading:!0})),a.prev=1,a.t0=m.a,a.next=5,m.a.awrap(fetch("https://s3.amazonaws.com/dolartoday/data.json"));case 5:return a.t1=a.sent.json(),a.next=8,a.t0.awrap.call(a.t0,a.t1);case 8:e=a.sent,o(Object(c.a)({},t,{data:e,isLoading:!1})),a.next=15;break;case 12:a.prev=12,a.t2=a.catch(1),o(Object(c.a)({},t,{error:a.t2,isLoading:!1}));case 15:case"end":return a.stop()}}),null,null,[[1,12]])}()}),[]),{exchangeRate:t,setExchangeRate:o}};t(28);var b=function(){var e,a=v(),t=a.exchangeRate,s=a.setExchangeRate,r=Object(n.useRef)(null);function d(e){("quantity"!==e.target.name||/^\d*$/.test(e.target.value))&&s(Object(c.a)({},t,Object(l.a)({},e.target.name,e.target.value)))}var m=Object(n.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,a)}),[]);function p(e){switch(e){case"pesosadolar":return{label:"Cuantos pesos quieres pasar a d\xf3lares?",from:"pesos",to:"d\xf3lares"};case"pesosabs":return{label:"Cuantos pesos quieres pasar a bs",from:"pesos",to:"bs"};case"bsadolar":return{label:"Cuantos bs quieres pasar a d\xf3lares",from:"bs",to:"d\xf3lares"};case"bsapesos":return{label:"Cuantos bs quieres pasar a pesos",from:"bs",to:"pesos"};case"dolaresapesos":return{label:"Cuantos d\xf3lares quieres pasar a pesos",from:"d\xf3lares",to:"pesos"}}}var b=function(e,a,n){switch(e){case"pesosadolar":return{conversion:(a/(n||t.data.USDCOL.ratecash)).toFixed(0),exchangeRateValue:t.data.USDCOL.ratecash};case"pesosabs":return{conversion:(a/(n||t.data.COL.efectivo)).toFixed(0),exchangeRateValue:t.data.COL.efectivo};case"bsadolar":return{conversion:(a/(n||t.data.USD.transferencia)).toFixed(0),exchangeRateValue:t.data.USD.transferencia};case"bsapesos":return{conversion:(a*(n||t.data.COL.efectivo)).toFixed(0),exchangeRateValue:t.data.COL.efectivo};case"dolaresapesos":return{conversion:(a*(n||t.data.USDCOL.ratecash)).toFixed(0),exchangeRateValue:t.data.USDCOL.ratecash}}};return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"base__contenido container-fluid color pb-3"},o.a.createElement("h1",{className:"h3 text-center"},"Bienvenido aqu\xed podr\xe1s saber cu\xe1nto vale tu dinero en otros pa\xedses - online"),o.a.createElement("div",{className:"separador"}),o.a.createElement("p",null,"Aqu\xed sabr\xe1s tu tasa de conversi\xf3n y saber cu\xe1nto vale tu dinero en otros pa\xedses (Con una tasa real o tu propia tasa de cambio), puedes sacar cuentas como:"),o.a.createElement("p",null,"- Pesos colombianos a D\xf3lares? (\xbfcu\xe1ntos d\xf3lares son mis pesos?)"),o.a.createElement("p",null,"- Pesos colombianos a bol\xedvares Soberanos? (\xbfcu\xe1ntos bs son mis pesos?)"),o.a.createElement("p",null,"- Bol\xedvares soberanos a d\xf3lares? (\xbfcu\xe1ntos d\xf3lares son mis bs?)"),o.a.createElement("p",null,"- Bol\xedvares soberanos a pesos? (\xbfcu\xe1ntos pesos son mis bs?)"),o.a.createElement("p",null,"- D\xf3lares a pesos? (\xbfcu\xe1ntos pesos son mis d\xf3lares?)"),o.a.createElement("p",null,"- Pronto m\xe1s operaciones.")),t.isLoading&&o.a.createElement(u,null),t.error&&o.a.createElement("div",{className:"p-3 mb-2 bg-danger text-white mt-5"},o.a.createElement("p",null,"Hubo un error y en este momento, intenta m\xe1s tarde")),!t.isLoading&&!t.error&&o.a.createElement("div",{className:"container"},o.a.createElement("h1",null,"Que enviaras?"),o.a.createElement("div",{className:"input-group mb-3"},o.a.createElement("div",{className:"input-group-prepend"},o.a.createElement("label",{className:"input-group-text",htmlFor:"inputGroupSelect01"},"Tipo de cambio...")),o.a.createElement("select",{value:t.type,name:"type",onChange:d,className:"custom-select",id:"inputGroupSelect01"},o.a.createElement("option",{value:"",disabled:!0,hidden:!0},"Selecciona un tipo de cambio."),o.a.createElement("option",{value:"pesosadolar"},"Pesos a D\xf3lares"),o.a.createElement("option",{value:"pesosabs"},"Pesos a bs"),o.a.createElement("option",{value:"bsadolar"},"Bol\xedvares a D\xf3lares"),o.a.createElement("option",{value:"bsapesos"},"Bol\xedvares a pesos"),o.a.createElement("option",{value:"dolaresapesos"},"D\xf3lares a pesos"))),t.type?o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:"mb-1"},null===(e=p(t.type))||void 0===e?void 0:e.label),o.a.createElement("div",{className:"input-group mb-3"},o.a.createElement("div",{className:"input-group-prepend"},o.a.createElement("span",{className:"input-group-text"},"$")),o.a.createElement("input",{ref:r,type:"text",className:"form-control",value:t.quantity,name:"quantity",onFocus:function(e){return s(Object(c.a)({},t,Object(l.a)({},e.target.name,e.target.value.toString().replace(/,|\./g,""))))},onBlur:function(e){return s(Object(c.a)({},t,Object(l.a)({},e.target.name,m(e.target.value,t.separator))))},onChange:d,onKeyUp:function(e){"Enter"===e.key&&e.target.blur()},autoFocus:!0}),o.a.createElement("div",{class:"input-group-append"},o.a.createElement("button",{class:"btn btn-outline-primary",type:"button",onClick:function(){return function(e){var a;s(Object(c.a)({},t,{separator:e,quantity:m(null===(a=t.quantity)||void 0===a?void 0:a.toString().replace(/,|\./g,""),e)}))}(","===t.separator?".":",")}}," Separador (",o.a.createElement("strong",null,t.separator),")")))):"No has seleccionado el tipo de cambio.",t.quantity&&function(){var e,a,n,s,r,l,c,i,u=parseInt(null===(e=t.quantity)||void 0===e?void 0:e.toString().replace(/,|\./g,"")),v=t.quantity.toString().includes(t.separator)?t.quantity:m(t.quantity,t.separator);return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"Tus ",v," ",null===(a=p(t.type))||void 0===a?void 0:a.from," son \xa0",m(null===(n=b(t.type,u))||void 0===n?void 0:n.conversion,t.separator)," ",null===(s=p(t.type))||void 0===s?void 0:s.to," \ud83d\udcb2\ud83d\udcb5 el cambio promedio esta en \xa0",o.a.createElement("input",{type:"Number",className:"inputModificadorTasaCambio",placeholder:null===(r=b(t.type,u))||void 0===r?void 0:r.exchangeRateValue,value:t.customRate,name:"customRate",onChange:d})),t.customRate&&o.a.createElement("div",{className:"mt-3 p-3 bg-success text-white"},"Tus ",v," ",null===(l=p(t.type))||void 0===l?void 0:l.from," son \xa0",null===(c=b(t.type,u,t.customRate))||void 0===c?void 0:c.conversion," ",null===(i=p(t.type))||void 0===i?void 0:i.to," \ud83d\udcb5 con tu nueva tasa personalizada de ",t.customRate))}()),t.data&&o.a.createElement(i,{indicatorsValues:t.data}))},E=t(7);function g(){return o.a.createElement("nav",{className:"menu color"},o.a.createElement(E.b,{to:"/proyecto-tasa-cambio/"},"Inicio"),o.a.createElement(E.b,{to:"/como-lo-hacemos"},"Como lo hacemos?"))}function f(){return o.a.createElement("div",{className:"container"},o.a.createElement("h3",{className:"mt-5"},"Bienvenido en esta App puedes saber cu\xe1nto equivale tu dinero en otros pa\xedses, incluso saber cu\xe1nto vale tu dinero en d\xf3lares u otras monedas."),o.a.createElement("p",null,"Sacamos los indicadores de DolarToday.com, la cual se actualiza cada 10 minutos con datos reales y exactos, Ya con esos indicadores la App los recibe y saca las cuentas basados en esos indicadores, no recopilamos ning\xfan dato que ingreses porque todo corre en el navegador."),o.a.createElement("p",null,"Las tasas e indicadores son solo de uso referencial."),o.a.createElement(E.b,{to:"/proyecto-tasa-cambio/"},"Aqu\xed puedes ver algunos indicadores (tabla ubicada en la parte inferior)"))}var h=t(6);var y=function(){return o.a.createElement(E.a,null,o.a.createElement(g,null),o.a.createElement(h.a,{exact:!0,path:"/proyecto-tasa-cambio/",component:b}),o.a.createElement(h.a,{exact:!0,path:"/",component:b}),o.a.createElement(h.a,{exact:!0,path:"/como-lo-hacemos",component:f}))};t(34);r.a.render(o.a.createElement(y,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.ffe0f5c4.chunk.js.map