"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[754],{2754:function(n,e,t){t.r(e),t.d(e,{default:function(){return K}});var i,o,r,a,c,p,d,l,s,x,u,f,h,g,m,b=t(1686),Z=t.n(b),w=t(8980),v=t(168),y=t(7924),j=y.ZP.li(i||(i=(0,v.Z)(["\n  position: relative;\n  border: 1px solid #e6b8ca;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-radius: 10px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n  padding: 10px;\n\n  @media (min-width: 768px) {\n    flex-basis: calc((100% - 168px) / 2);\n    margin-bottom: 20px;\n  }\n\n  @media (min-width: 1440px) {\n    flex-basis: calc((100% - 240px) / 4);\n    margin-bottom: 20px;\n  }\n"]))),k=y.ZP.div(o||(o=(0,v.Z)(["\n  width: 300px;\n  height: 300px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),P=y.ZP.img(r||(r=(0,v.Z)(["\n  width: 80%;\n"]))),C=y.ZP.h2(a||(a=(0,v.Z)(["\n  color: #e6b8ca;\n  text-align: center;\n"]))),_=y.ZP.div(c||(c=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),z=y.ZP.p(p||(p=(0,v.Z)(["\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  background-color: #e6b8ca;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  padding: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 16px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n"]))),q=y.ZP.p(d||(d=(0,v.Z)(["\n  text-align: center;\n"]))),I=y.ZP.button(l||(l=(0,v.Z)(["\n  font-family: inherit;\n  font-weight: 400;\n  background-color: #556b2f;\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n  margin-top: 20px;\n  &:hover {\n    background-color: #e6b8ca;\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.5);\n  }\n"]))),F=y.ZP.input(s||(s=(0,v.Z)(["\n  width: 50px;\n  padding: 5px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  text-align: center;\n  background-color: #e6b8ca;\n  margin-top: 15px;\n"]))),N=y.ZP.div(x||(x=(0,v.Z)(["\n  display: flex;\n  align-items: baseline;\n  gap: 20px;\n"]))),R=t(9434),S=t(184),T={width:"340px",titleFontSize:"20px",messageFontSize:"18px",titleColor:"#556b2f",okButtonBackground:"#556b2f"},B={fontSize:"17px",success:{background:"#e6b8ca",textColor:"#161616"}},Y=function(n){var e=n.bouquet,t=e._id,i=e.url,o=e.name,r=e.price,a=e.description,c=e.quantity,p=(0,R.I0)();return(0,S.jsxs)(j,{children:[(0,S.jsxs)(k,{children:[(0,S.jsx)(P,{src:i,alt:o})," "]}),(0,S.jsxs)(_,{children:[(0,S.jsx)(C,{children:o}),(0,S.jsxs)(z,{children:[r," \u20ac"]}),(0,S.jsx)(q,{children:a})]}),(0,S.jsxs)(N,{children:[(0,S.jsx)(F,{type:"number",value:c||0,onChange:function(n){var e=parseInt(n.target.value)||0;p(e<=0?(0,w.h2)(t):(0,w.x)({quantity:e,productId:t}))}}),(0,S.jsx)(I,{onClick:function(){return function(n){var e=n._id,t=n.name;Z().Confirm.show("Removing","Remove a ".concat(t," from the cart?"),"Yes","No",(function(){p((0,w.h2)(e)),Z().Notify.success("".concat(t," removed successfully from cart!"),B)}),(function(){}),T)}({_id:t,name:o})},children:"Remove"})]})]})},$=t(2894),E=y.ZP.div(u||(u=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 300px;\n  font-size: 36px;\n  font-weight: 500;\n  color: rgba(22, 22, 22, 0.7);\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);\n  margin-bottom: 20px;\n"]))),L=y.ZP.ul(f||(f=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 30px;\n  margin: 30px auto;\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n  }\n"]))),U=y.ZP.div(h||(h=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding-left: 20px;\n  padding-bottom: 70px;\n"]))),A=y.ZP.p(g||(g=(0,v.Z)(["\n  font-size: 28px;\n  font-weight: 500;\n  color: var(--main-dark-text-color);\n"]))),D=y.ZP.button(m||(m=(0,v.Z)(["\n  font-family: inherit;\n  font-size: 18px;\n  font-weight: 400;\n  width: 200px;\n  height: 50px;\n  background-color: var(--main-green-color);\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  padding: 10px 15px;\n  cursor: pointer;\n  transition: var(--main-transition);\n\n  &:hover {\n    background-color: var(--main-pink-color);\n  }\n"]))),G=t(1087),H=t(3675),J=function(){var n=(0,R.v9)($.$),e=(0,H.a)().isLoggedIn;return(0,S.jsxs)(S.Fragment,{children:[0===n.length?(0,S.jsx)(E,{children:"Your cart is empty"}):(0,S.jsx)(L,{children:n.map((function(n){return(0,S.jsx)(Y,{bouquet:n},n._id)}))}),(0,S.jsxs)(U,{children:[(0,S.jsxs)(A,{children:["Total price: ",function(){var e=0;return n.forEach((function(n){e+=n.price*n.quantity})),e}()," eur"]}),e?(0,S.jsx)(G.rU,{to:"/payment",children:(0,S.jsx)(D,{children:"To pay"})}):(0,S.jsx)(D,{onClick:function(){return Z().Notify.failure("Please login")},children:"To pay"})]})]})};function K(){return(0,S.jsx)(J,{})}},2894:function(n,e,t){t.d(e,{$:function(){return i}});var i=function(n){return n.cartProducts.products}}}]);
//# sourceMappingURL=754.45081821.chunk.js.map