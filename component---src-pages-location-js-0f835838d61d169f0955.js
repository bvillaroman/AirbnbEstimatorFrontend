(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{271:function(t,n,e){"use strict";e.r(n);e(41),e(277);var a=e(11),r=e.n(a),u=e(0),i=e.n(u),o=e(279),c=e(88),s=e(267),l=e.n(s),d=e(278),p=e(282),f=e.n(p),m=e(284),h=e.n(m),b=function(t){function n(){for(var n,e=arguments.length,a=new Array(e),r=0;r<e;r++)a[r]=arguments[r];return(n=t.call.apply(t,[this].concat(a))||this).state={address:"",apartmentNumber:"",city:"",zipCode:""},n.handleInput=function(t){var e,a=t.target,r=a.value,u=a.name;n.setState(((e={})[u]=r,e))},n.onSubmit=function(t){var e=Object.assign({},n.state);n.props.submitLocation(e),n.props.switchPages(2)},n}return r()(n,t),n.prototype.render=function(){var t=this.state,n=t.address,e=t.city,a=t.zipCode,r=!(n&&e&&5===a.length);return i.a.createElement("div",null,i.a.createElement("div",{className:l.a.formTitle}," Location "),i.a.createElement(o.a,{label:"Address:",name:"address",value:this.state.address,handleInput:this.handleInput,required:!0}),i.a.createElement(o.a,{label:"Apartment Number (if any):",name:"apartmentNumber",value:this.state.apartmentNumber,handleInput:this.handleInput,required:!0}),i.a.createElement(o.a,{label:"City:",name:"city",value:this.state.city,handleInput:this.handleInput}),i.a.createElement(o.a,{label:"Zip Code:",name:"zipCode",value:this.state.zipCode,handleInput:this.handleInput}),i.a.createElement(f.a,{disabled:r,onClick:this.onSubmit},"Bedrooms ",i.a.createElement(h.a,null)))},n}(i.a.Component);n.default=Object(c.b)(function(t){return{page:t.reducer.page}},function(t){return{switchPages:function(n){return t(Object(d.f)(n))},submitLocation:function(n){return t(Object(d.d)(n))}}})(b)},278:function(t,n,e){"use strict";e.d(n,"f",function(){return u}),e.d(n,"e",function(){return i}),e.d(n,"b",function(){return o}),e.d(n,"a",function(){return c}),e.d(n,"d",function(){return s}),e.d(n,"c",function(){return l});var a=e(14),r=e(281),u=function(t){return function(n){n({type:a.h,payload:t})}},i=function(t){return function(n){n({type:a.g,payload:t})}},o=function(t){return function(n){n({type:a.b,payload:t})}},c=function(t){return function(n){n({type:a.a,payload:t})}},s=function(t){return function(n){n({type:a.f,payload:t})}};function l(){return function(t,n){var e=n().reducer,a={bathrooms:e.bathrooms,bedrooms:e.bedrooms,location:e.location,placeType:e.placeType};return Object(r.a)("https://3xgrqs0bn4.execute-api.us-east-1.amazonaws.com/dev/listings",a).then(function(n){t(d(n))}).catch(function(n){t(p(n))})}}var d=function(t){return function(n){n({type:a.e,payload:t})}},p=function(t){return function(n){n({type:a.d,payload:t})}}},279:function(t,n,e){"use strict";e(277);var a=e(0),r=e.n(a),u=e(268),i=e.n(u);n.a=function(t){var n=t.label,e=t.value,a=t.name,u=t.handleInput;return r.a.createElement("div",{className:i.a.inputContainer},r.a.createElement("div",{className:i.a.label},n," "),r.a.createElement("input",{label:n,name:a,value:e,onChange:u}))}},281:function(t,n,e){"use strict";e.d(n,"a",function(){return u});var a=e(286),r=e.n(a);function u(t,n){var e={method:"post",url:t,data:JSON.stringify(n)};return r()(e).then(function(t){return t.data}).catch(function(t){return t})}}}]);
//# sourceMappingURL=component---src-pages-location-js-0f835838d61d169f0955.js.map