"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[797],{8797:function(e,r,n){n.r(r),n.d(r,{default:function(){return W}});var t,i,a,o,s=n(3433),d=n(5861),l=n(4687),c=n.n(l),u=(n(2791),n(1243)),p=n(1686),m=n.n(p),h=n(5705),f=n(6727),v=n(168),x=n(7924),b=(0,x.ZP)(h.l0)(t||(t=(0,v.Z)(["\n  max-width: 350px;\n  margin: 0 auto;\n  padding: 30px 0;\n"]))),N=x.ZP.div(i||(i=(0,v.Z)(["\n  margin-bottom: 20px;\n  position: relative;\n\n  label {\n    display: block;\n    margin-bottom: 5px;\n  }\n\n  input,\n  select {\n    width: 320px;\n    padding: 10px;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n    font-size: 16px;\n  }\n\n  .error {\n    position: absolute;\n    bottom: -16px;\n    right: 8px;\n    color: red;\n    font-size: 14px;\n  }\n"]))),w=x.ZP.button(a||(a=(0,v.Z)(["\n  padding: 10px 20px;\n  height: 50px;\n  background-color: var(--main-green-color);\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: var(--main-transition);\n\n  &:hover {\n    background-color: var(--main-pink-color);\n  }\n"]))),j=n(9434),y=n(2894),g="https://js.stripe.com/v3",S=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,_="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",E=function(e){var r=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(g).concat(r);var t=document.head||document.body;if(!t)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return t.appendChild(n),n},k=null,D=null,P=null,q=function(e){return null!==k?k:(k=new Promise((function(r,n){if("undefined"!==typeof window&&"undefined"!==typeof document)if(window.Stripe&&e&&console.warn(_),window.Stripe)r(window.Stripe);else try{var t=function(){for(var e=document.querySelectorAll('script[src^="'.concat(g,'"]')),r=0;r<e.length;r++){var n=e[r];if(S.test(n.src))return n}return null}();if(t&&e)console.warn(_);else if(t){if(t&&null!==P&&null!==D){var i;t.removeEventListener("load",P),t.removeEventListener("error",D),null===(i=t.parentNode)||void 0===i||i.removeChild(t),t=E(e)}}else t=E(e);P=function(e,r){return function(){window.Stripe?e(window.Stripe):r(new Error("Stripe.js not available"))}}(r,n),D=function(e){return function(){e(new Error("Failed to load Stripe.js"))}}(n),t.addEventListener("load",P),t.addEventListener("error",D)}catch(a){return void n(a)}else r(null)}))).catch((function(e){return k=null,Promise.reject(e)}))},Z=function(e,r,n){if(null===e)return null;var t=e.apply(void 0,r);return function(e,r){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"3.2.0",startTime:r})}(t,n),t},C=!1,F=function(){return o||(o=q(null).catch((function(e){return o=null,Promise.reject(e)})))};Promise.resolve().then((function(){return F()})).catch((function(e){C||console.warn(e)}));var R=n(3666),T=n(184),L={width:"340px",titleFontSize:"20px",messageFontSize:"18px",titleColor:"#556b2f",okButtonBackground:"#556b2f"},A={firstName:"",lastName:"",phoneNumber:"",address:"",deliveryDate:""},O=f.Ry().shape({firstName:f.Z_().required("Required"),lastName:f.Z_().required("Required"),phoneNumber:f.Z_().required("Required"),address:f.Z_().required("Required"),deliveryDate:f.hT().required("Required")}),B=function(){var e=(0,j.I0)(),r=(0,j.v9)(y.$),n=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];C=!0;var t=Date.now();return F().then((function(e){return Z(e,r,t)}))}({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_PUBLISHABLE_KEY),t=function(){var t=(0,d.Z)(c().mark((function t(i){var a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a={firstName:i.firstName,lastName:i.lastName,phoneNumber:i.phoneNumber,address:i.address,deliveryDate:i.deliveryDate,bouquets:(0,s.Z)(r)};try{m().Confirm.show("Order payment","Go to order payment?","Yes","No",(0,d.Z)(c().mark((function t(){var i,o,s,d;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e((0,R.p)(a)),i=r.map((function(e){return{price_data:{currency:"eur",product_data:{name:e.name,description:e.description},unit_amount:100*e.price},quantity:e.quantity}})),t.next=4,u.Z.post("https://floristry-backend.onrender.com/api/checkout",{lineItems:i});case 4:return o=t.sent,s=o.data,t.next=8,n;case 8:return d=t.sent,t.next=11,d.redirectToCheckout({sessionId:s.id});case 11:case"end":return t.stop()}}),t)}))),(function(){}),L)}catch(o){console.error("Error:",o.message)}case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return(0,T.jsx)(h.J9,{initialValues:A,validationSchema:O,onSubmit:t,children:function(e){var r=e.errors,n=e.touched;return(0,T.jsxs)(b,{children:[(0,T.jsxs)(N,{children:[(0,T.jsx)("label",{htmlFor:"firstName",children:"First Name"}),(0,T.jsx)(h.gN,{name:"firstName"}),r.firstName&&n.firstName&&(0,T.jsx)("div",{className:"error",children:r.firstName})]}),(0,T.jsxs)(N,{children:[(0,T.jsx)("label",{htmlFor:"lastName",children:"Last Name"}),(0,T.jsx)(h.gN,{name:"lastName"}),r.lastName&&n.lastName&&(0,T.jsx)("div",{className:"error",children:r.lastName})]}),(0,T.jsxs)(N,{children:[(0,T.jsx)("label",{htmlFor:"phoneNumber",children:"Phone Number"}),(0,T.jsx)(h.gN,{type:"tel",name:"phoneNumber",placeholder:"Enter phone number"}),r.phoneNumber&&n.phoneNumber&&(0,T.jsx)("div",{className:"error",children:r.phoneNumber})]}),(0,T.jsxs)(N,{children:[(0,T.jsx)("label",{htmlFor:"address",children:"Address"}),(0,T.jsx)(h.gN,{name:"address"}),r.address&&n.address&&(0,T.jsx)("div",{className:"error",children:r.address})]}),(0,T.jsxs)(N,{children:[(0,T.jsx)("label",{htmlFor:"deliveryDate",children:"Delivery Date"}),(0,T.jsx)(h.gN,{type:"date",name:"deliveryDate"}),r.deliveryDate&&n.deliveryDate&&(0,T.jsx)("div",{className:"error",children:r.deliveryDate})]}),(0,T.jsx)(w,{type:"submit",children:"Continue"})]})}})},I=function(){return(0,T.jsx)("div",{children:(0,T.jsx)(B,{})})};function W(){return(0,T.jsx)(I,{})}},2894:function(e,r,n){n.d(r,{$:function(){return t}});var t=function(e){return e.cartProducts.products}}}]);
//# sourceMappingURL=797.bded333b.chunk.js.map