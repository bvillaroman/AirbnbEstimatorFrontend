(window.webpackJsonp=window.webpackJsonp||[]).push([[6,9],{269:function(e,t,a){"use strict";a.r(t);a(63),a(278);var n=a(11),r=a.n(n),s=a(0),o=a.n(s),i=a(280),l=a(88),c=a(267),u=a.n(c),m=a(279),p=a(284),d=a.n(p),f=a(285),h=a.n(f),b=a(283),v=a.n(b),g=a(281),E=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={bathrooms:0,responseText:"",lr:"",svr:""},t.handleInput=function(e){var a,n=e.target,r=n.value,s=n.name;t.setState(((a={})[s]=r,a))},t.onSubmit=function(e){var a=parseInt(t.state.bathrooms);t.props.submitBathrooms(a);var n={accommodates:t.props.listing.bedrooms.guests,bathrooms:parseInt(t.state.bathrooms),bed_type:t.handleBedType(t.props.listing.placeType.roomType),bedrooms:t.props.listing.bedrooms.numOfBedrooms,beds:t.props.listing.bedrooms.numOfBedsAvailable,property_type:t.handlePropertyType(t.props.listing.placeType.propertyType),number_of_reviews:t.props.listing.listing.numberOfRatings,review_scores_rating:t.props.listing.listing.reviewScoresRating},r={location:t.props.listing.location.city.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase(),season:t.props.listing.listing.season};t.setState({responseText:"loading.."},function(){Object(g.a)("https://3xgrqs0bn4.execute-api.us-east-1.amazonaws.com/dev/models/model",r).then(function(e){var a=e[0].models[0].coefficients,r=e[0].models[1].coefficients,s="$"+t.calculatePrice(n,a)+",\n  R^2 score: "+e[0].models[0].accuracy.toFixed(3),o="$"+t.calculatePrice(n,r)+",\n R^2 score: "+e[0].models[1].accuracy.toFixed(3);t.setState({responseText:"",lr:s,svr:o})}).catch(function(e){t.setState({responseText:"sorry, pls try again"})})})},t.calculatePrice=function(e,t){return(parseFloat(e.accommodates*t.accommodates)+parseFloat(e.beds*t.beds)+parseFloat(e.bedrooms*t.bedrooms)+parseFloat(e.bathrooms*t.bathrooms)+parseFloat(e.bed_type*t.bed_type)+parseFloat(e.property_type*t.property_type)+parseFloat(e.number_of_reviews*t.number_of_reviews)+parseFloat(e.review_scores_rating*t.review_scores_rating)+t.intercepts).toFixed(2)},t.handlePropertyType=function(e){var t=1;switch(e){case"Apartment":t=1;break;case"House":t=2;break;case"Townhouse":t=3;break;case"Loft":t=4;break;case"Condominium":t=5;break;case"Serviced Apartment":t=6;break;case"Guest Suite":t=7;break;case"Other":t=8;break;case"Bed & Breakfast":t=9;break;case"Boutique Hotel":t=10;break;case"Resort":t=11;break;case"Guest House":t=12;break;case"Hostel":t=13;break;case"Timeshare":t=15;break;default:t=1}return t},t.handleBedType=function(e){var t=1;switch(e){case"Entire home/apartment":t=1;break;case"Private room":t=2;break;case"Shared room":t=3;break;default:t=1}return t},t}return r()(t,e),t.prototype.render=function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{className:u.a.formTitle}," Bathrooms "),o.a.createElement(i.a,{label:"How many bathrooms are there?",name:"bathrooms",value:this.state.bathrooms,handleInput:this.handleInput}),o.a.createElement(d.a,{onClick:function(){e.props.switchPages(3)}},o.a.createElement(v.a,null)," Listing "),o.a.createElement(d.a,{onClick:this.onSubmit}," Submit ",o.a.createElement(h.a,null)),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("div",{className:u.a.formTitle}," Listing Data "),o.a.createElement("div",{className:u.a.formTitle}," ",this.state.responseText," "),o.a.createElement("div",{className:u.a.formPrice}," Number of bedrooms: ",this.props.listing.bedrooms.numOfBedrooms," "),o.a.createElement("div",{className:u.a.formPrice}," Number of beds: ",this.props.listing.bedrooms.numOfBedsAvailable," "),o.a.createElement("div",{className:u.a.formPrice}," Number of bathrooms: ",this.state.bathrooms," "),o.a.createElement("div",{className:u.a.formPrice}," Number of guests: ",this.props.listing.bedrooms.guests," "),o.a.createElement("div",{className:u.a.formPrice}," Property Type: ",this.props.listing.placeType.propertyType," "),o.a.createElement("div",{className:u.a.formPrice}," Number of Reviews: ",this.props.listing.listing.numberOfRatings," "),o.a.createElement("div",{className:u.a.formPrice}," Review Score (out of 100%): ",this.props.listing.listing.reviewScoresRating,"% "),o.a.createElement("div",{className:u.a.formPrice}," Neighborhood: ",this.props.listing.location.city),o.a.createElement("div",{className:u.a.formPrice}," Season: ",this.props.listing.listing.season," "),o.a.createElement("div",{className:u.a.formTitle}," ",this.state.responseText," "),o.a.createElement("div",{className:u.a.formTitle}," Price "),o.a.createElement("div",{className:u.a.formPrice}," Linear Regression: ",this.state.lr," "),o.a.createElement("div",{className:u.a.formPrice}," Support Vector Regression: ",this.state.svr," "))},t}(o.a.Component);t.default=Object(l.b)(function(e){var t=e.reducer;return{page:t.page,response:t.response,listing:t}},function(e){return{submitBathrooms:function(t){return e(Object(m.a)(t))},switchPages:function(t){return e(Object(m.f)(t))}}})(E)},270:function(e,t,a){"use strict";a.r(t);a(41),a(278);var n=a(11),r=a.n(n),s=a(0),o=a.n(s),i=a(280),l=a(267),c=a.n(l),u=a(88),m=a(279),p=a(284),d=a.n(p),f=a(285),h=a.n(f),b=a(283),v=a.n(b),g=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={guests:"",numOfBedrooms:"",numOfBedsAvailable:""},t.handleInput=function(e){var a,n=e.target,r=n.value,s=n.name;t.setState(((a={})[s]=r,a))},t.onSubmit=function(e){var a=Object.assign({},t.state);t.props.submitBedrooms(a),t.props.switchPages(3)},t}return r()(t,e),t.prototype.render=function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{className:c.a.formTitle}," Bedrooms "),o.a.createElement(i.a,{label:"How many guests are you accomodating?",name:"guests",value:this.state.guests,handleInput:this.handleInput}),o.a.createElement(i.a,{label:"How many bedrooms are there?",name:"numOfBedrooms",value:this.state.numOfBedrooms,handleInput:this.handleInput}),o.a.createElement(i.a,{label:"How Many beds are there?",name:"numOfBedsAvailable",value:this.state.numOfBedsAvailable,handleInput:this.handleInput}),o.a.createElement(d.a,{onClick:function(){e.props.switchPages(1)}},o.a.createElement(v.a,null)," Location "),o.a.createElement(d.a,{onClick:this.onSubmit}," Listing Type ",o.a.createElement(h.a,null)))},t}(o.a.Component);t.default=Object(u.b)(function(e){return{page:e.reducer.page}},function(e){return{switchPages:function(t){return e(Object(m.f)(t))},submitBedrooms:function(t){return e(Object(m.b)(t))}}})(g)},271:function(e,t,a){"use strict";a.r(t);a(41),a(278);var n=a(11),r=a.n(n),s=a(0),o=a.n(s),i=a(280),l=a(88),c=a(267),u=a.n(c),m=(a(268),a(279)),p=a(284),d=a.n(p),f=a(292),h=a.n(f),b=a(296),v=a.n(b),g=a(291),E=a.n(g),y=a(295),w=a.n(y),T=a(285),O=a.n(T),N=a(283),S=a.n(N),P=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={reviewScoresRating:"",season:"",numberOfRatings:""},t.handleInput=function(e){var a,n=e.target,r=n.value,s=n.name;t.setState(((a={})[s]=r,a))},t.onSubmit=function(e){var a=Object.assign({},t.state);t.props.submitListingData(a),t.props.switchPages(4)},t}return r()(t,e),t.prototype.render=function(){var e=this,t=this.state,a=t.reviewScoresRating,n=t.season,r=t.numberOfRatings,s=!(a&&n&&r);return o.a.createElement("div",null,o.a.createElement("div",{className:u.a.formTitle}," Listing Information "),o.a.createElement(i.a,{label:"Owner Rating (in a percentage):",name:"reviewScoresRating",value:this.state.reviewScoresRating,handleInput:this.handleInput,required:!0}),o.a.createElement(E.a,{className:u.a.season},o.a.createElement(h.a,{className:u.a.seasonLabel},"Season: "),o.a.createElement(w.a,{value:this.state.season,onChange:this.handleInput,name:"season",className:u.a.seasonDropDown},o.a.createElement(v.a,{value:""},"None"),o.a.createElement(v.a,{value:"summer"},"Summer"),o.a.createElement(v.a,{value:"winter"},"Winter"),o.a.createElement(v.a,{value:"spring"},"Spring"),o.a.createElement(v.a,{value:"fall"},"Fall"))),o.a.createElement(i.a,{label:"Number of ratings the owner has?",name:"numberOfRatings",value:this.state.numberOfRatings,handleInput:this.handleInput,required:!0}),o.a.createElement(d.a,{onClick:function(){e.props.switchPages(2)}}," ",o.a.createElement(S.a,null),"Bedrooms"),o.a.createElement(d.a,{disabled:s,onClick:this.onSubmit},"Bathrooms ",o.a.createElement(O.a,null)))},t}(o.a.Component);t.default=Object(l.b)(function(e){return{page:e.reducer.page}},function(e){return{switchPages:function(t){return e(Object(m.f)(t))},submitListingData:function(t){return e(Object(m.c)(t))}}})(P)},272:function(e,t,a){"use strict";a.r(t);a(41),a(278);var n=a(11),r=a.n(n),s=a(0),o=a.n(s),i=a(280),l=a(88),c=a(267),u=a.n(c),m=a(279),p=a(284),d=a.n(p),f=a(285),h=a.n(f),b=a(283),v=a.n(b),g=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={address:"",apartmentNumber:"",city:"",zipCode:""},t.handleInput=function(e){var a,n=e.target,r=n.value,s=n.name;t.setState(((a={})[s]=r,a))},t.onSubmit=function(e){var a=Object.assign({},t.state);t.props.submitLocation(a),t.props.switchPages(2)},t}return r()(t,e),t.prototype.render=function(){var e=this,t=this.state,a=(t.address,t.city),n=(t.zipCode,!a);return o.a.createElement("div",null,o.a.createElement("div",{className:u.a.formTitle}," Location "),o.a.createElement(i.a,{label:"Neighborhood:",name:"city",value:this.state.city,handleInput:this.handleInput}),o.a.createElement(d.a,{onClick:function(){e.props.switchPages(0)}}," ",o.a.createElement(v.a,null)," Place Type"),o.a.createElement(d.a,{disabled:n,onClick:this.onSubmit},"Bedrooms ",o.a.createElement(h.a,null)))},t}(o.a.Component);t.default=Object(l.b)(function(e){return{page:e.reducer.page}},function(e){return{switchPages:function(t){return e(Object(m.f)(t))},submitLocation:function(t){return e(Object(m.d)(t))}}})(g)},273:function(e,t,a){"use strict";a.r(t);a(41),a(278);var n=a(11),r=a.n(n),s=a(0),o=a.n(s),i=(a(280),a(267)),l=a.n(i),c=a(268),u=a.n(c),m=a(88),p=a(279),d=a(284),f=a.n(d),h=a(285),b=a.n(h),v=a(292),g=a.n(v),E=a(296),y=a.n(E),w=a(291),T=a.n(w),O=a(295),N=a.n(O),S=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={roomType:"",propertyType:""},t.handleInput=function(e){var a,n=e.target,r=n.value,s=n.name;console.log(r),t.setState(((a={})[s]=r,a))},t.onSubmit=function(e){var a=Object.assign({},t.state);t.props.submitPlaceType(a),t.props.switchPages(1)},t}return r()(t,e),t.prototype.render=function(){var e=this.state,t=e.roomType,a=e.propertyType,n=!(t&&a);return o.a.createElement("div",null,o.a.createElement("div",{className:l.a.formTitle}," Place Type "),o.a.createElement("div",null,o.a.createElement(T.a,{className:u.a.inputContainerDropDown},o.a.createElement(g.a,null,"What kind of place are you listing?"),o.a.createElement(N.a,{value:this.state.propertyType,onChange:this.handleInput,name:"propertyType"},o.a.createElement(y.a,{value:""},"None"),o.a.createElement(y.a,{value:"Apartment"},"Apartment"),o.a.createElement(y.a,{value:"House"},"House"),o.a.createElement(y.a,{value:"Townhouse"},"Townhouse"),o.a.createElement(y.a,{value:"Loft"},"Loft"),o.a.createElement(y.a,{value:"Condominium"},"Condominium"),o.a.createElement(y.a,{value:"Serviced Apartment"},"Serviced Apartment"),o.a.createElement(y.a,{value:"Guest Suite"},"Guest Suite"),o.a.createElement(y.a,{value:"Other"},"Other"),o.a.createElement(y.a,{value:"Bed & Breakfast"},"Bed & Breakfast"),o.a.createElement(y.a,{value:"Boutique Hotel"},"Boutique Hotel"),o.a.createElement(y.a,{value:"Resort"},"Resort"),o.a.createElement(y.a,{value:"Guest House"},"Guest House"),o.a.createElement(y.a,{value:"Hostel"},"Hostel"),o.a.createElement(y.a,{value:"Timeshare"},"Timeshare"))),o.a.createElement(T.a,{className:u.a.inputContainerDropDown},o.a.createElement(g.a,null,"What type of access are you giving to your guests?"),o.a.createElement(N.a,{value:this.state.roomType,onChange:this.handleInput,name:"roomType"},o.a.createElement(y.a,{value:""},"None"),o.a.createElement(y.a,{value:"Entire home/apartment"},"Entire home/apartment"),o.a.createElement(y.a,{value:"Private room"},"Private room"),o.a.createElement(y.a,{value:"Shared room"},"Shared room")))),o.a.createElement(f.a,{disabled:n,onClick:this.onSubmit},"Location ",o.a.createElement(b.a,null)))},t}(o.a.Component);t.default=Object(m.b)(function(e){return{page:e.reducer.page}},function(e){return{switchPages:function(t){return e(Object(p.f)(t))},submitPlaceType:function(t){return e(Object(p.e)(t))}}})(S)},276:function(e,t,a){"use strict";a.r(t);var n=a(11),r=a.n(n),s=a(0),o=a.n(s),i=a(88),l=a(365),c=a.n(l),u=a(1),m=a.n(u);a(61),a(314),o.a.createContext({});m.a.object,m.a.string.isRequired,m.a.func,m.a.func;var p=a(274),d=a.n(p),f=function(e){e.children;return o.a.createElement("div",{className:d.a.headerContainer},o.a.createElement("div",{className:d.a.title,to:"/"},"Airbnb Price Estimator"))},h=function(e){var t=e.children;return o.a.createElement("div",null,o.a.createElement(c.a,null,o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto",rel:"stylesheet"})),o.a.createElement(f,null),t)},b=a(267),v=a.n(b),g=a(269),E=a(270),y=a(271),w=a(272),T=a(273),O=a(279),N=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.page?this.props.page:0,t=0===e?o.a.createElement(T.default,null):1===e?o.a.createElement(w.default,null):2===e?o.a.createElement(E.default,null):3===e?o.a.createElement(y.default,null):4===e?o.a.createElement(g.default,null):o.a.createElement("div",null," sorry, there was an error, please refresh page ");return o.a.createElement(h,null,o.a.createElement("div",{className:v.a.mainContainer},t))},t}(o.a.Component);t.default=Object(i.b)(function(e){return{page:e.reducer.page}},function(e){return{switchPages:function(t){return e(Object(O.f)(t))}}})(N)},279:function(e,t,a){"use strict";a.d(t,"f",function(){return r}),a.d(t,"e",function(){return s}),a.d(t,"b",function(){return o}),a.d(t,"a",function(){return i}),a.d(t,"d",function(){return l}),a.d(t,"c",function(){return c});var n=a(13),r=(a(281),function(e){return function(t){t({type:n.i,payload:e})}}),s=function(e){return function(t){t({type:n.h,payload:e})}},o=function(e){return function(t){t({type:n.b,payload:e})}},i=function(e){return function(t){t({type:n.a,payload:e})}},l=function(e){return function(t){t({type:n.g,payload:e})}},c=function(e){return function(t){t({type:n.d,payload:e})}}},280:function(e,t,a){"use strict";a(278);var n=a(0),r=a.n(n),s=a(268),o=a.n(s);t.a=function(e){var t=e.label,a=e.value,n=e.name,s=e.handleInput;return r.a.createElement("div",{className:o.a.inputContainer},r.a.createElement("div",{className:o.a.label},t," "),r.a.createElement("input",{label:t,name:n,value:a,onChange:s}))}},281:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var n=a(287),r=a.n(n);function s(e,t){var a={method:"post",url:e,data:JSON.stringify(t)};return console.log(JSON.stringify(t)),r()(a).then(function(e){return e.data}).catch(function(e){return e})}},314:function(e,t,a){var n;e.exports=(n=a(371))&&n.default||n},371:function(e,t,a){"use strict";a.r(t);a(41);var n=a(0),r=a.n(n),s=a(1),o=a.n(s),i=a(125),l=a(4),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c}}]);
//# sourceMappingURL=component---src-pages-index-js-89e4e516579e2e90deda.js.map