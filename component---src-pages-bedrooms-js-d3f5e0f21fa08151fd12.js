(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{270:function(e,n,t){"use strict";t.r(n);t(41),t(278);var a=t(11),r=t.n(a),u=t(0),o=t.n(u),i=t(280),l=t(267),c=t.n(l),s=t(88),f=t(279),d=t(284),m=t.n(d),p=t(285),h=t.n(p),v=t(283),b=t.n(v),y=function(e){function n(){for(var n,t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return(n=e.call.apply(e,[this].concat(a))||this).state={guests:"",numOfBedrooms:"",numOfBedsAvailable:""},n.handleInput=function(e){var t,a=e.target,r=a.value,u=a.name;n.setState(((t={})[u]=r,t))},n.onSubmit=function(e){var t=Object.assign({},n.state);n.props.submitBedrooms(t),n.props.switchPages(3)},n}return r()(n,e),n.prototype.render=function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{className:c.a.formTitle}," Bedrooms "),o.a.createElement(i.a,{label:"How many guests are you accomodating?",name:"guests",value:this.state.guests,handleInput:this.handleInput}),o.a.createElement(i.a,{label:"How many bedrooms are there?",name:"numOfBedrooms",value:this.state.numOfBedrooms,handleInput:this.handleInput}),o.a.createElement(i.a,{label:"How Many beds are there?",name:"numOfBedsAvailable",value:this.state.numOfBedsAvailable,handleInput:this.handleInput}),o.a.createElement(m.a,{onClick:function(){e.props.switchPages(1)}},o.a.createElement(b.a,null)," Location "),o.a.createElement(m.a,{onClick:this.onSubmit}," Listing Type ",o.a.createElement(h.a,null)))},n}(o.a.Component);n.default=Object(s.b)(function(e){return{page:e.reducer.page}},function(e){return{switchPages:function(n){return e(Object(f.f)(n))},submitBedrooms:function(n){return e(Object(f.b)(n))}}})(y)},279:function(e,n,t){"use strict";t.d(n,"f",function(){return r}),t.d(n,"e",function(){return u}),t.d(n,"b",function(){return o}),t.d(n,"a",function(){return i}),t.d(n,"d",function(){return l}),t.d(n,"c",function(){return c});var a=t(13),r=(t(281),function(e){return function(n){n({type:a.i,payload:e})}}),u=function(e){return function(n){n({type:a.h,payload:e})}},o=function(e){return function(n){n({type:a.b,payload:e})}},i=function(e){return function(n){n({type:a.a,payload:e})}},l=function(e){return function(n){n({type:a.g,payload:e})}},c=function(e){return function(n){n({type:a.d,payload:e})}}},280:function(e,n,t){"use strict";t(278);var a=t(0),r=t.n(a),u=t(268),o=t.n(u);n.a=function(e){var n=e.label,t=e.value,a=e.name,u=e.handleInput;return r.a.createElement("div",{className:o.a.inputContainer},r.a.createElement("div",{className:o.a.label},n," "),r.a.createElement("input",{label:n,name:a,value:t,onChange:u}))}},281:function(e,n,t){"use strict";t.d(n,"a",function(){return u});var a=t(287),r=t.n(a);function u(e,n){var t={method:"post",url:e,data:JSON.stringify(n)};return console.log(JSON.stringify(n)),r()(t).then(function(e){return e.data}).catch(function(e){return e})}},283:function(e,n,t){"use strict";var a=t(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(0)),u=(0,a(t(288)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),r.default.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})),"ArrowBack");n.default=u}}]);
//# sourceMappingURL=component---src-pages-bedrooms-js-d3f5e0f21fa08151fd12.js.map