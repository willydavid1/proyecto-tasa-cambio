(this["webpackJsonpproyecto-pesos-dolares-y-bs"]=this["webpackJsonpproyecto-pesos-dolares-y-bs"]||[]).push([[0],{19:function(e,a,t){e.exports=t(32)},25:function(e,a,t){},32:function(e,a,t){"use strict";t.r(a);var s=t(0),o=t.n(s),n=t(16),r=t.n(n),l=t(10),c=t.n(l),i=t(9);function u(e){return o.a.createElement("div",{className:"mb-5"},o.a.createElement("div",{className:"table-responsive container tabla"},o.a.createElement("h5",{className:"text-center"},"Indicadores Hoy ",e.indicadores._timestamp.fecha_corta," \ud83d\udcb9\u303d"),o.a.createElement("table",{className:"table table-bordered mb-0"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{scope:"col"},"pesos a dolares:"),o.a.createElement("th",{scope:"col"},"oro:"),o.a.createElement("th",{scope:"col"},"pesos a bolivares:"),o.a.createElement("th",{scope:"col"},"precio del dolar en venezuela:"),o.a.createElement("th",{scope:"col"},"precio del euro en venezuela:"))),o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,e.indicadores.USDCOL.ratecash),o.a.createElement("td",null,e.indicadores.GOLD.rate," oz"),o.a.createElement("td",null,e.indicadores.COL.efectivo),o.a.createElement("td",null,e.indicadores.USD.transferencia,"bs x $"),o.a.createElement("td",null,e.indicadores.EUR.transferencia,"bs x euro"))))))}t(25);function m(){var e=Object(s.useState)(""),a=Object(i.a)(e,2),t=a[0],o=a[1],n=Object(s.useState)(""),r=Object(i.a)(n,2),l=r[0],u=r[1],m=Object(s.useState)(!1),p=Object(i.a)(m,2),d=p[0],b=p[1],E=Object(s.useState)(!1),v=Object(i.a)(E,2),f=v[0],h=v[1];return Object(s.useEffect)((function(){!function(){var e,a;c.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.a.awrap(fetch("https://s3.amazonaws.com/dolartoday/data.json"));case 3:return e=t.sent,t.next=6,c.a.awrap(e.json());case 6:a=t.sent,b(a),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),h(t.t0);case 13:case"end":return t.stop()}}),null,null,[[0,10]])}()}),[]),{valor:t,setValor:o,moneda:l,setMoneda:u,indicadores:d,errorPeticion:f}}var p=function(e){var a=m(),t=a.valor,s=a.setValor,n=a.moneda,r=a.setMoneda,l=a.indicadores;return a.errorPeticion?o.a.createElement("div",{className:"p-3 mb-2 bg-danger text-white mt-5"},o.a.createElement("p",null,"Hubo un error y en este momento, intenta m\xe1s tarde")):o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"base__contenido container-fluid color pb-3"},o.a.createElement("h1",{className:"h3 text-center"},"Bienvenido aqu\xed podr\xe1s saber cu\xe1nto vale tu dinero en otros pa\xedses - online"),o.a.createElement("div",{className:"separador"}),o.a.createElement("p",null,"Aqu\xed sabr\xe1s tu tasa de conversi\xf3n y saber cu\xe1nto vale tu dinero en otros pa\xedses, puedes sacar cuentas como:"),o.a.createElement("p",null,"- Pesos colombianos a D\xf3lares? (\xbfcu\xe1ntos d\xf3lares son mis pesos?)"),o.a.createElement("p",null,"- Pesos colombianos a bol\xedvares Soberanos? (\xbfcu\xe1ntos bs son mis pesos?)"),o.a.createElement("p",null,"- Bol\xedvares soberanos a d\xf3lares? (\xbfcu\xe1ntos d\xf3lares son mis bs?)"),o.a.createElement("p",null,"- Bol\xedvares soberanos a pesos? (\xbfcu\xe1ntos pesos son mis bs?)"),o.a.createElement("p",null,"- D\xf3lares a pesos? (\xbfcu\xe1ntos pesos son mis d\xf3lares?)"),o.a.createElement("p",null,"- Pronto m\xe1s operaciones.")),o.a.createElement("div",{className:"container"},o.a.createElement("h1",null,"Que enviaras?"),o.a.createElement("div",{className:"input-group mb-3"},o.a.createElement("div",{className:"input-group-prepend"},o.a.createElement("label",{className:"input-group-text",htmlFor:"inputGroupSelect01"},"Tipo de cambio...")),o.a.createElement("select",{value:t,onChange:function(e){s(e.target.value)},className:"custom-select",id:"inputGroupSelect01"},o.a.createElement("option",{value:""},"Elije..."),o.a.createElement("option",{value:"pesosadolar"},"Pesos a D\xf3lares"),o.a.createElement("option",{value:"pesosabs"},"Pesos a bs"),o.a.createElement("option",{value:"bsadolar"},"Bol\xedvares a D\xf3lares"),o.a.createElement("option",{value:"bsapesos"},"Bol\xedvares a pesos"),o.a.createElement("option",{value:"dolaresapesos"},"D\xf3lares a pesos"))),t&&function(e){switch(e){case"pesosadolar":return"Cuantos pesos quieres pasar a d\xf3lares?";case"pesosabs":return"Cuantos pesos quieres pasar a bs";case"bsadolar":return"Cuantos bs quieres pasar a d\xf3lares";case"bsapesos":return"Cuantos bs quieres pasar a pesos";case"dolaresapesos":return"Cuantos d\xf3lares quieres pasar a pesos"}}(t),t?o.a.createElement("div",{className:"input-group mb-3"},o.a.createElement("div",{className:"input-group-prepend"},o.a.createElement("span",{className:"input-group-text"},"$")),o.a.createElement("input",{type:"text",className:"form-control",value:n,onChange:function(e){r(e.target.value)}})):"No has seleccionado nada",n&&function(){var e=parseInt(n),a=(new Intl.NumberFormat).format(e);return Number.isNaN(e)?o.a.createElement("div",{className:"p-3 mb-2 bg-warning text-dark"},o.a.createElement("p",null,"Parece que no estas escribiendo un n\xfamero, por favor escribe un n\xfamero")):"pesosadolar"===t?o.a.createElement("p",null,"Tus ",a," pesos son ",(n/l.USDCOL.ratecash).toFixed(2)," dolares \ud83d\udcb2\ud83d\udcb5 el cambio promedio en efectivo esta en ",l.USDCOL.ratecash," pesos colombianos"):"pesosabs"===t?o.a.createElement("p",null,"Tus ",a," pesos son ",(n/l.COL.efectivo).toFixed(0)," bolivares \u2705 la tasa de cambio esta en ",l.COL.efectivo):"bsadolar"===t?o.a.createElement("p",null,"Tus ",a," bolivares son ",(n/l.USD.transferencia).toFixed(2)," dolares \ud83d\udcb0\ud83d\udcb2 el dolar en venezuela esta en ",l.USD.transferencia):"bsapesos"===t?o.a.createElement("p",null,"Tus ",a," bolivares son ",(n*l.COL.efectivo-.005).toFixed(2)," pesos \u2705 la tasa de bolivares a pesos oscila en un aproximado de ",l.COL.efectivo-.008):"dolaresapesos"===t?o.a.createElement("p",null,"Tus ",a," dolares son ",(new Intl.NumberFormat).format((n*l.USDCOL.ratecash).toFixed(2))," pesos colombianos\u2705 la tasa de dolares a pesos oscila en un aproximado de ",l.USDCOL.ratecash):void 0}()),l&&o.a.createElement(u,{indicadores:l}))},d=t(6);function b(){return o.a.createElement("nav",{className:"menu color"},o.a.createElement(d.b,{to:"/proyecto-tasa-cambio/"},"Inicio"),o.a.createElement(d.b,{to:"/como-lo-hacemos"},"Como lo hacemos?"))}function E(e){return o.a.createElement("div",{className:"container"},o.a.createElement("h3",{className:"mt-5"},"Gracias a esta aplicaci\xf3n puedes saber cu\xe1nto equivale tu dinero en Venezuela, por si te estas preguntando cu\xe1nto vale mi dinero es otros pa\xedses? incluso saber cu\xe1nto vale tu dinero en d\xf3lares..."),o.a.createElement("p",null,"Sacamos los indicadores de DolarToday.com, la cual se actualiza cada 10 minutos con datos reales y exactos, Ya con esos indicadores el programa los recibe y saca las cuentas basados en esos indicadores, no recopilamos ning\xfan dato que ingreses as\xed que puedes estar tranquil@"),o.a.createElement("p",null,"Las tasas e indicadores son solo de uso referencial..."),o.a.createElement(d.b,{to:"/proyecto-tasa-cambio/"},"Aqu\xed puedes ver algunos indicadores (parte de abajo)"))}var v=t(5);var f=function(e){return o.a.createElement(d.a,null,o.a.createElement(b,null),o.a.createElement(v.a,{exact:!0,path:"/proyecto-tasa-cambio/",component:p}),o.a.createElement(v.a,{exact:!0,path:"/",component:p}),o.a.createElement(v.a,{exact:!0,path:"/como-lo-hacemos",component:E}))};t(31);r.a.render(o.a.createElement(f,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.58f972af.chunk.js.map