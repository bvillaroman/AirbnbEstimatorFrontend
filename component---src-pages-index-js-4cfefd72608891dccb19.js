(window.webpackJsonp=window.webpackJsonp||[]).push([[5,3,4,6,7],{154:function(e,t,n){"use strict";n.r(t);n(161);var a=n(8),r=n.n(a),u=n(0),o=n.n(u),i=n(163),s=n(60),c=n(152),l=n.n(c),p=n(162),m=n(168),d=n.n(m),f=n(169),h=n.n(f),b=n(165),v=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={bathrooms:"",responseText:""},t.handleInput=function(e){var n,a=e.target,r=a.value,u=a.name;t.setState(((n={})[u]=r,n))},t.onSubmit=function(e){var n=parseInt(t.state.bathrooms);t.props.submitBathrooms(n),t.props.submitListing();var a={bathrooms:n,bedrooms:t.props.listing.bedrooms,location:t.props.listing.bedrooms,placeType:t.props.listing.placeType};Object(b.a)("https://3xgrqs0bn4.execute-api.us-east-1.amazonaws.com/dev/listings",a).then(function(e){var n=e.Prediction?"$ "+e.Prediction.LinearRegression.toFixed(2):"";t.setState({responseText:n})})},t}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",null,o.a.createElement("div",{className:l.a.formTitle}," Bathrooms "),o.a.createElement(i.a,{label:"How many bathrooms are there?",name:"bathrooms",value:this.state.bathrooms,handleInput:this.handleInput}),o.a.createElement(d.a,{onClick:this.onSubmit}," Submit ",o.a.createElement(h.a,null)),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("div",{className:l.a.formTitle}," ",this.state.responseText," "))},t}(o.a.Component);t.default=Object(s.b)(function(e){var t=e.reducer;return{page:t.page,response:t.response,listing:t}},function(e){return{submitBathrooms:function(t){return e(Object(p.a)(t))},submitListing:function(){return e(Object(p.c)())}}})(v)},155:function(e,t,n){"use strict";n.r(t);n(27),n(161);var a=n(8),r=n.n(a),u=n(0),o=n.n(u),i=n(163),s=n(152),c=n.n(s),l=n(60),p=n(162),m=n(168),d=n.n(m),f=n(169),h=n.n(f),b=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={guests:"",numOfBedrooms:"",numOfBedsAvailable:""},t.handleInput=function(e){var n,a=e.target,r=a.value,u=a.name;t.setState(((n={})[u]=r,n))},t.onSubmit=function(e){var n=Object.assign({},t.state);t.props.submitBedrooms(n),t.props.switchPages(3)},t}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",null,o.a.createElement("div",{className:c.a.formTitle}," Bedrooms "),o.a.createElement(i.a,{label:"How many guests are you accomodating?",name:"guests",value:this.state.guests,handleInput:this.handleInput}),o.a.createElement(i.a,{label:"How many bedrooms are there?",name:"numOfBedrooms",value:this.state.numOfBedrooms,handleInput:this.handleInput}),o.a.createElement(i.a,{label:"How Many beds are there?",name:"numOfBedsAvailable",value:this.state.numOfBedsAvailable,handleInput:this.handleInput}),o.a.createElement(d.a,{onClick:this.onSubmit}," Bathrooms ",o.a.createElement(h.a,null)))},t}(o.a.Component);t.default=Object(l.b)(function(e){return{page:e.reducer.page}},function(e){return{switchPages:function(t){return e(Object(p.f)(t))},submitBedrooms:function(t){return e(Object(p.b)(t))}}})(b)},156:function(e,t,n){"use strict";n.r(t);n(27),n(161);var a=n(8),r=n.n(a),u=n(0),o=n.n(u),i=n(163),s=n(60),c=n(152),l=n.n(c),p=n(162),m=n(168),d=n.n(m),f=n(169),h=n.n(f),b=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={address:"",apartmentNumber:"",city:"",state:"",zipCode:"",country:""},t.handleInput=function(e){var n,a=e.target,r=a.value,u=a.name;t.setState(((n={})[u]=r,n))},t.onSubmit=function(e){var n=Object.assign({},t.state);t.props.submitLocation(n),t.props.switchPages(2)},t}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",null,o.a.createElement("div",{className:l.a.formTitle}," Location "),o.a.createElement(i.a,{label:"Address:",name:"address",value:this.state.address,handleInput:this.handleInput}),o.a.createElement(i.a,{label:"Apartment Number (if any):",name:"apartmentNumber",value:this.state.apartmentNumber,handleInput:this.handleInput}),o.a.createElement(i.a,{label:"City:",name:"city",value:this.state.city,handleInput:this.handleInput}),o.a.createElement(i.a,{label:"Zip Code:",name:"zipCode",value:this.state.zipCode,handleInput:this.handleInput}),o.a.createElement(d.a,{onClick:this.onSubmit},"Bedrooms ",o.a.createElement(h.a,null)))},t}(o.a.Component);t.default=Object(s.b)(function(e){return{page:e.reducer.page}},function(e){return{switchPages:function(t){return e(Object(p.f)(t))},submitLocation:function(t){return e(Object(p.d)(t))}}})(b)},157:function(e,t,n){"use strict";n.r(t);n(27),n(161);var a=n(8),r=n.n(a),u=n(0),o=n.n(u),i=n(163),s=n(152),c=n.n(s),l=n(60),p=n(162),m=n(168),d=n.n(m),f=n(169),h=n.n(f),b=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={placeType:"",propertyType:"",guestSpace:""},t.handleInput=function(e){var n,a=e.target,r=a.value,u=a.name;t.setState(((n={})[u]=r,n))},t.onSubmit=function(e){var n=Object.assign({},t.state);t.props.submitPlaceType(n),t.props.switchPages(1)},t}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",null,o.a.createElement("div",{className:c.a.formTitle}," Place Type "),o.a.createElement(i.a,{label:"What kind of place are you listing?",name:"placeType",value:this.state.placeType,handleInput:this.handleInput}),o.a.createElement(i.a,{label:"What type of property are you listing?",name:"propertyType",value:this.state.propertyType,handleInput:this.handleInput}),o.a.createElement(i.a,{label:"What will guests have access to?",name:"guestSpace",value:this.state.guestSpace,handleInput:this.handleInput}),o.a.createElement(d.a,{onClick:this.onSubmit},"Location ",o.a.createElement(h.a,null)))},t}(o.a.Component);t.default=Object(l.b)(function(e){return{page:e.reducer.page}},function(e){return{switchPages:function(t){return e(Object(p.f)(t))},submitPlaceType:function(t){return e(Object(p.e)(t))}}})(b)},160:function(e,t,n){"use strict";n.r(t);var a=n(8),r=n.n(a),u=n(0),o=n.n(u),i=n(60),s=n(314),c=n.n(s),l=n(1),p=n.n(l),m=n(37),d=n.n(m);n(212),o.a.createContext({});p.a.object,p.a.string.isRequired,p.a.func,p.a.func;var f=n(158),h=n.n(f),b=function(e){e.children;return o.a.createElement("div",{className:h.a.headerContainer},o.a.createElement(d.a,{className:h.a.title,to:"/"},"Airbnb Price Estimator"))},v=function(e){var t=e.children;return o.a.createElement("div",null,o.a.createElement(c.a,null,o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto",rel:"stylesheet"})),o.a.createElement(b,null),t)},y=n(152),g=n.n(y),E=n(154),I=n(155),O=n(156),w=n(157),j=n(162),T=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.page?this.props.page:0,t=0===e?o.a.createElement(w.default,null):1===e?o.a.createElement(O.default,null):2===e?o.a.createElement(I.default,null):3===e?o.a.createElement(E.default,null):o.a.createElement("div",null," sorry, there was an error, please refresh page ");return o.a.createElement(v,null,o.a.createElement("div",{className:g.a.mainContainer},t))},t}(o.a.Component);t.default=Object(i.b)(function(e){return{page:e.reducer.page}},function(e){return{switchPages:function(t){return e(Object(j.f)(t))}}})(T)},162:function(e,t,n){"use strict";n.d(t,"f",function(){return u}),n.d(t,"e",function(){return o}),n.d(t,"b",function(){return i}),n.d(t,"a",function(){return s}),n.d(t,"d",function(){return c}),n.d(t,"c",function(){return l});var a=n(10),r=n(165),u=function(e){return function(t){t({type:a.h,payload:e})}},o=function(e){return function(t){t({type:a.g,payload:e})}},i=function(e){return function(t){t({type:a.b,payload:e})}},s=function(e){return function(t){t({type:a.a,payload:e})}},c=function(e){return function(t){t({type:a.f,payload:e})}};function l(){return function(e,t){var n=t().reducer,a={bathrooms:n.bathrooms,bedrooms:n.bedrooms,location:n.location,placeType:n.placeType};return Object(r.a)("https://3xgrqs0bn4.execute-api.us-east-1.amazonaws.com/dev/listings",a).then(function(t){e(p(t))}).catch(function(t){e(m(t))})}}var p=function(e){return function(t){t({type:a.e,payload:e})}},m=function(e){return function(t){t({type:a.d,payload:e})}}},163:function(e,t,n){"use strict";n(161);var a=n(0),r=n.n(a),u=n(153),o=n.n(u);t.a=function(e){var t=e.label,n=e.value,a=e.name,u=e.handleInput;return r.a.createElement("div",{className:o.a.inputContainer},r.a.createElement("div",{className:o.a.label},t," "),r.a.createElement("input",{label:t,name:a,value:n,onChange:u}))}},165:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var a=n(172),r=n.n(a);function u(e,t){var n={method:"post",url:e,data:JSON.stringify(t)};return r()(n).then(function(e){return e.data}).catch(function(e){return e})}},212:function(e,t,n){var a;e.exports=(a=n(322))&&a.default||a},322:function(e,t,n){"use strict";n.r(t);n(27);var a=n(0),r=n.n(a),u=n(1),o=n.n(u),i=n(77),s=n(3),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c}}]);
//# sourceMappingURL=component---src-pages-index-js-4cfefd72608891dccb19.js.map