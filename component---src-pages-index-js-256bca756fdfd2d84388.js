(window.webpackJsonp=window.webpackJsonp||[]).push([[6,5,7,8],{144:function(e,t,n){"use strict";n.r(t);n(33),n(153);var a=n(7),r=n.n(a),u=n(0),c=n.n(u),s=n(155),i=n(142),o=n.n(i),l=n(154),p=n(156),d=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={guests:"",numOfBedrooms:"",numOfBedsAvailable:""},t.handleInput=function(e){var n,a=e.target,r=a.value,u=a.name;t.setState(((n={})[u]=r,n))},t.onSubmit=function(e){var n=Object.assign({},t.state);t.props.submitBedrooms(n),t.props.advance()},t}return r()(t,e),t.prototype.render=function(){return c.a.createElement("div",{className:o.a.mainContainer},c.a.createElement("div",{className:o.a.formTitle}," Bedrooms "),c.a.createElement(s.a,{label:"How many guests are you accomodating?",name:"guests",value:this.state.guests,handleInput:this.handleInput}),c.a.createElement(s.a,{label:"How many bedrooms are there?",name:"numOfBedrooms",value:this.state.numOfBedrooms,handleInput:this.handleInput}),c.a.createElement(s.a,{label:"How Many beds are there?",name:"numOfBedsAvailable",value:this.state.numOfBedsAvailable,handleInput:this.handleInput}),c.a.createElement("button",{onClick:this.onSubmit}," Submit "))},t}(c.a.Component);t.default=Object(l.b)(function(e){return Object.assign({},e)},function(e){return{submitBedrooms:function(t){return e(Object(p.a)(t))}}})(d)},146:function(e,t,n){"use strict";n.r(t);n(33),n(153);var a=n(7),r=n.n(a),u=n(0),c=n.n(u),s=(n(158),n(155)),i=n(154),o=n(142),l=n.n(o),p=(n(152),n(156)),d=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={address:"",apartmentNumber:"",city:"",state:"",zipCode:"",country:""},t.handleInput=function(e){var n,a=e.target,r=a.value,u=a.name;t.setState(((n={})[u]=r,n))},t.onSubmit=function(e){var n=Object.assign({},t.state);t.props.submitLocation(n),t.props.advance()},t}return r()(t,e),t.prototype.render=function(){return c.a.createElement("div",{className:l.a.mainContainer},c.a.createElement("div",{className:l.a.formTitle}," Location "),c.a.createElement(s.a,{label:"Address:",name:"address",value:this.state.address,handleInput:this.handleInput}),c.a.createElement(s.a,{label:"Apartment Number (if any):",name:"apartmentNumber",value:this.state.apartmentNumber,handleInput:this.handleInput}),c.a.createElement(s.a,{label:"City:",name:"city",value:this.state.city,handleInput:this.handleInput}),c.a.createElement(s.a,{label:"Zip Code:",name:"zipCode",value:this.state.zipCode,handleInput:this.handleInput}),c.a.createElement("button",{onClick:this.onSubmit}," Submit "))},t}(c.a.Component);t.default=Object(i.b)(function(e){return Object.assign({},e)},function(e){return{submitLocation:function(t){return e(Object(p.b)(t))}}})(d)},147:function(e,t,n){"use strict";n.r(t);n(33),n(153);var a=n(7),r=n.n(a),u=n(0),c=n.n(u),s=(n(158),n(155)),i=n(142),o=n.n(i),l=(n(152),n(154)),p=n(156),d=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={placeType:"",propertyType:"",guestSpace:""},t.handleInput=function(e){var n,a=e.target,r=a.value,u=a.name;t.setState(((n={})[u]=r,n))},t.onSubmit=function(e){var n=Object.assign({},t.state);t.props.submitPlaceType(n),t.props.advance()},t}return r()(t,e),t.prototype.render=function(){return c.a.createElement("div",{className:o.a.mainContainer},c.a.createElement("div",{className:o.a.formTitle}," Place Type "),c.a.createElement(s.a,{label:"What kind of place are you listing?",name:"placeType",value:this.state.placeType,handleInput:this.handleInput}),c.a.createElement(s.a,{label:"What type of property are you listing?",name:"propertyType",value:this.state.propertyType,handleInput:this.handleInput}),c.a.createElement(s.a,{label:"What will guests have access to?",name:"guestSpace",value:this.state.guestSpace,handleInput:this.handleInput}),c.a.createElement("button",{onClick:this.onSubmit}," Submit "))},t}(c.a.Component);t.default=Object(l.b)(function(e){return Object.assign({},e)},function(e){return{submitPlaceType:function(t){return e(Object(p.c)(t))}}})(d)},150:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),u=n(0),c=n.n(u),s=n(154),i=n(160);function o(e){return function(t){var n=t.dispatch,a=t.getState;return function(t){return function(r){return"function"==typeof r?r(n,a,e):t(r)}}}}var l=o();l.withExtraArgument=o;var p=l,d=(n(33),n(157)),m={placeType:{placeType:"",propertyType:"",guestSpace:0},bedrooms:{guests:0,numOfBedrooms:0,numOfBedsAvailable:0},bathrooms:0,location:{address:"",apartmentNumber:"",city:"",state:"",zipCode:0},page:0,response:{}},f=Object(i.c)({reducer:function(e,t){switch(void 0===e&&(e=m),t.type){case d.g:return Object.assign({},e,{placeType:t.payload});case d.b:return Object.assign({},e,{bedrooms:t.payload});case d.a:return Object.assign({},e,{bathrooms:t.payload});case d.f:return Object.assign({},e,{location:t.payload});case d.c:return Object.assign({},e);case d.e:case d.d:return Object.assign({},e,{response:t.payload});default:return e}}}),h="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d;var b=n(158),v=n(142),y=n.n(v),g=n(144),E=n(146),O=n(147),I=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={currentPage:0},t.nextPage=function(e){var n=t.state.currentPage;t.setState({currentPage:n+1})},t}return r()(t,e),t.prototype.render=function(){var e=0===this.state.currentPage?c.a.createElement(O.default,{advance:this.nextPage}):1===this.state.currentPage?c.a.createElement(E.default,{advance:this.nextPage}):2===this.state.currentPage?c.a.createElement(g.default,{advance:this.nextPage}):c.a.createElement("div",null," sorry, there was an error, please refresh page ");return c.a.createElement(s.a,{store:Object(i.e)(f,h(Object(i.a)(p)))},c.a.createElement(b.a,null,c.a.createElement("div",{className:y.a.mainContainer},e)))},t}(c.a.Component);t.default=I},152:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var a=n(159),r=n.n(a);function u(e,t){console.log(t);var n={method:"post",url:e,data:JSON.stringify(t)};return r()(n).then(function(e){return e.data}).catch(function(e){return e})}},155:function(e,t,n){"use strict";n(153);var a=n(0),r=n.n(a),u=n(143),c=n.n(u);t.a=function(e){var t=e.label,n=e.value,a=e.name,u=e.handleInput;return r.a.createElement("div",{className:c.a.inputContainer},r.a.createElement("div",{className:c.a.label},t," "),r.a.createElement("input",{name:a,value:n,onChange:u}))}},156:function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"a",function(){return u}),n.d(t,"b",function(){return c});var a=n(157),r=(n(152),function(e){return function(t){t({type:a.g,payload:e})}}),u=function(e){return function(t){t({type:a.b,payload:e})}},c=function(e){return function(t){t({type:a.f,payload:e})}}},157:function(e,t,n){"use strict";n.d(t,"g",function(){return a}),n.d(t,"b",function(){return r}),n.d(t,"a",function(){return u}),n.d(t,"f",function(){return c}),n.d(t,"c",function(){return s}),n.d(t,"e",function(){return i}),n.d(t,"d",function(){return o});var a="SUBMIT_PLACE_TYPE",r="SUBMIT_BEDROOMS",u="SUBMIT_BATHROOMS",c="SUBMIT_LOCATION",s="SUBMIT_LISTING",i="SUBMIT_LISTING",o="SUBMIT_LISTING"},158:function(e,t,n){"use strict";var a=n(0),r=n.n(a),u=n(162),c=n.n(u),s=n(145),i=n.n(s),o=function(e){e.children;return r.a.createElement("div",{className:i.a.headerContainer},"Airbnb Price Estimator")};n(154),t.a=function(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement(c.a,null,r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto",rel:"stylesheet"})),r.a.createElement(o,null),t)}}}]);
//# sourceMappingURL=component---src-pages-index-js-256bca756fdfd2d84388.js.map