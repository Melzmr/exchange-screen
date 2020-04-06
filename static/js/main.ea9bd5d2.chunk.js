(this.webpackJsonprevolut=this.webpackJsonprevolut||[]).push([[0],{19:function(e,a,t){e.exports=t(50)},24:function(e,a,t){},25:function(e,a,t){},26:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},50:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(4),o=t.n(c),l=(t(24),t(1)),u=t(2),s=(t(25),t(26),function(e){var a=e.exchangeOnClick,t=e.selectedTop,n=e.selectedBottom,c=e.crossRate,o=e.disabled;return r.a.createElement("div",{className:"header_container"},r.a.createElement("header",{className:"header_inner_container"},r.a.createElement("div",{className:"header_cancel"},"Cancel"),t.name!==n.name&&r.a.createElement("div",{className:"header_currency"},r.a.createElement("span",{className:"header_currency_symbol"},t.currency),"1 = ",r.a.createElement("span",{className:"header_currency_symbol"},n.currency),c),r.a.createElement("div",{className:"header_exchange"},r.a.createElement("button",{className:"header_exchange_button ".concat(o?"header_exchange_disabled_button":""),onClick:a,disabled:o},"Exchange"))))});s.displayName="Header";var i=function(e){var a=e.children;return r.a.createElement("div",{className:"page_container"},r.a.createElement("div",{className:"page_content"},a))};i.displayName="ErroredPage";var m=function(e){var a=e.children;return r.a.createElement("div",{className:"page_container"},r.a.createElement("div",{className:"page_content"},a))};m.displayName="LoadingPage";var p=t(5),d=t(18),f=t(17),v=t.n(f),b=function(e){var a=e.children,t=e.className,n=Object(d.a)(e,["children","className"]),c={dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,className:"".concat(t||""),accessibility:!0,arrows:!1};return r.a.createElement(v.a,Object.assign({},c,n),a)};b.displayName="ScrollableBlock";t(47),t(48);var _=function(e){var a=e.value,t=e.onChange,n=e.style;return r.a.createElement("input",{className:"input_base",type:"text",style:n,value:a,onChange:t,inputMode:"decimal"})};_.displayName="Input";var h=function(e){var a=e.pocket,t=e.onAmountChange,n=e.amount,c=e.amountPrefix,o=e.className,s=e.bottomLabel,i=r.a.useState(1),m=Object(u.a)(i,2),p=m[0],d=m[1];r.a.useEffect((function(){var e=n.toString().length;d(e||1)}),[n]);return r.a.createElement("div",{className:"input_block_inner_container ".concat(o||"")},r.a.createElement("div",{className:"input_block_col_left"},r.a.createElement("div",{className:"input_block_name"},a.name),r.a.createElement("div",{className:"input_block_balance"},"You have ",r.a.createElement("span",{className:"input_block_currency_symbol"},a.currency),a.value)),r.a.createElement("div",{className:"input_block_col_right"},r.a.createElement("label",{className:"input_label"},n&&r.a.createElement("span",{className:"input_prefix"},c),r.a.createElement(_,{style:{width:p+"ch"},value:n,onChange:function(e){var n,r=null===(n=e.target.value.match(/^[0-9]{0,4}[.,]?[0-9]{0,2}/))||void 0===n?void 0:n[0].replace(",",".");t(r?Object(l.a)({},a,{value:r}):"")}}),s&&r.a.createElement("div",{className:"input_block_bottom_label"},s))))};h.displayName="InputBlock";var y,E=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return e.toFixed(a)},g=t(3),N=t.n(g),O=t(7),x=function(e,a){var t=new AbortController,n=t.signal;return{abort:function(){return t.abort()},ready:fetch(e,Object(l.a)({},a,{signal:n}))}},k=function(){var e=Object(O.a)(N.a.mark((function e(a,t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.then((function(e){if(e.ok)return e.json();throw new Error("Failed to fetch ".concat(e.url,"."))})).then((function(e){return e})).catch((function(e){t(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),j={documentation:"https://www.exchangerate-api.com/docs/free",terms_of_use:"https://www.exchangerate-api.com/terms",time_zone:"UTC",time_last_update:1585699599,time_next_update:1585787189,time_eol:0,base:"USD",rates:{USD:1,AED:3.67,ARS:64.41,AUD:1.63,BGN:1.78,BRL:5.19,BSD:1,CAD:1.42,CHF:.964,CLP:852.83,CNY:7.1,COP:4030,CZK:24.89,DKK:6.8,DOP:53.7,EGP:15.72,EUR:.91,FJD:2.28,GBP:.808,GTQ:7.71,HKD:7.75,HRK:6.95,HUF:327.51,IDR:16419.5,ILS:3.56,INR:75.55,ISK:141.61,JPY:108.14,KRW:1223.23,KZT:447.78,MXN:23.88,MYR:4.32,NOK:10.49,NZD:1.68,PAB:1,PEN:3.44,PHP:50.97,PKR:164.97,PLN:4.14,PYG:6510,RON:4.4,RUB:78.66,SAR:3.76,SEK:10.03,SGD:1.43,THB:32.76,TRY:6.59,TWD:30.26,UAH:27.69,UYU:43.6,ZAR:17.9}},w=function(){var e=Object(O.a)(N.a.mark((function e(a){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=x("https://api.exchangerate-api.com/v5/latest"),e.next=3,k(t.ready,(function(){return a({type:"update_exchange_rate_data",payload:j})}));case 3:return(n=e.sent)&&a({type:"update_exchange_rate_data",payload:n}),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();!function(e){e.TOP="top",e.BOTTOM="bottom"}(y||(y={}));var P=function(){var e=Object(p.c)((function(e){return e.pockets})),a=Object.values(e),t=Object(p.c)((function(e){return e.exchangeRateData})),n=t.data,c=t.errors,o=Object(p.b)(),d=r.a.useState(a[0]),f=Object(u.a)(d,2),v=f[0],_=f[1],g=r.a.useState(a[0]),x=Object(u.a)(g,2),k=x[0],j=x[1],P=r.a.useState(""),S=Object(u.a)(P,2),C=S[0],R=S[1],T=r.a.useState(""),D=Object(u.a)(T,2),B=D[0],U=D[1],F=r.a.useState(y.TOP),A=Object(u.a)(F,2),K=A[0],I=A[1],L=r.a.useState(!1),G=Object(u.a)(L,2),H=G[0],M=G[1];if(r.a.useEffect((function(){var e=function(e){var a,t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e4;function r(){return c.apply(this,arguments)}function c(){return(c=Object(O.a)(N.a.mark((function c(){return N.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e();case 2:t=c.sent,a=window.setTimeout(r,n);case 4:case"end":return c.stop()}}),c)})))).apply(this,arguments)}return a=window.setTimeout(r,n),function(){var e;clearInterval(a),null===(e=t)||void 0===e||e.abort()}}((function(){return w(o)}),1e4);return function(){return e()}}),[o]),r.a.useEffect((function(){_((function(a){return e[a.name]})),j((function(a){return e[a.name]}))}),[e]),r.a.useEffect((function(){C&&B&&(K===y.BOTTOM?Q(Object(l.a)({},k,{value:B})):X(Object(l.a)({},v,{value:C})))}),[n]),c)return r.a.createElement(i,null,c.message);if(!n)return r.a.createElement(m,null,"Loading");var Y,J,Z,W,z=(Y=v,J=k,Z=n.rates,W=n.base,E(Y.name===W?Z[J.name]:Z[J.name]/Z[Y.name],4)),Q=function(e){var a=n.rates[v.name],t=n.rates[k.name],r=parseFloat(e.value);a===t||isNaN(r)?R(e.value):e.name===n.base?R(E(r*a)):R(E(r*a/t))},X=function(e){var a=n.rates[v.name],t=n.rates[k.name],r=parseFloat(e.value);a===t||isNaN(r)?U(e.value):e.name===n.base?U(E(r*t)):U(E(r*t/a))},$=function(e){I(y.TOP),e?(M(!1),X(e),R(e.value)):V()},q=function(e){I(y.BOTTOM),e?(M(!1),Q(e),U(e.value)):V()},V=function(){M(!1),R(""),U("")};return r.a.createElement("div",{className:"page_container"},r.a.createElement(s,{exchangeOnClick:function(){if(C&&B){if(parseFloat(C)>parseFloat(v.value))return void M(!0);o({type:"subtract_money",payload:Object(l.a)({},v,{value:C})}),o({type:"add_money",payload:Object(l.a)({},k,{value:B})}),V()}},selectedTop:v,selectedBottom:k,crossRate:z,disabled:!C||!B}),r.a.createElement(b,{afterChange:function(e){V(),_(a[e])},beforeChange:V,className:"input_container_top"},a.map((function(e,a){return r.a.createElement(h,{key:a,pocket:e,amount:C,onAmountChange:$,amountPrefix:"-",bottomLabel:H&&r.a.createElement("span",{className:"insufficient_funds_error"},"Insufficient funds")})}))),r.a.createElement(b,{afterChange:function(e){V(),j(a[e])},beforeChange:V,className:"triangle input_container_bottom"},a.map((function(e,a){return r.a.createElement(h,{key:a,pocket:e,amount:B,onAmountChange:q,amountPrefix:"+",bottomLabel:v.name!==k.name&&r.a.createElement("span",{className:"input_block_bottom_currency"},r.a.createElement("span",{className:"input_block_currency_symbol"},v.currency),"1 = ",r.a.createElement("span",{className:"input_block_currency_symbol"},k.currency),z)})}))))};P.displayName="ExchangePage";var S=t(6),C={pockets:{USD:{name:"USD",value:"100.00",currency:"$"},GBP:{name:"GBP",value:"50.00",currency:"\xa3"},EUR:{name:"EUR",value:"20.00",currency:"\u20ac"}},exchangeRateData:{data:null,errors:null}},R=Object(S.c)(Object(S.b)({pockets:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C.pockets,a=arguments.length>1?arguments[1]:void 0;switch(e=Object(l.a)({},e),a.type){case"add_money":return e[a.payload.name].value=E(parseFloat(e[a.payload.name].value)+parseFloat(a.payload.value)),e;case"subtract_money":return e[a.payload.name].value=E(parseFloat(e[a.payload.name].value)-parseFloat(a.payload.value)),e;default:return e}},exchangeRateData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C.exchangeRateData,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"update_exchange_rate_data":return{data:a.payload,errors:null};case"set_exchange_rate_errors":return Object(l.a)({},e,{errors:a.payload});default:return e}}}),C);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p.a,{store:R},r.a.createElement(P,null))),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.ea9bd5d2.chunk.js.map