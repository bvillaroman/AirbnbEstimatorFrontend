(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{145:function(e,t,n){"use strict";n.r(t);n(148);var a=n(7),r=n.n(a),l=n(0),s=n.n(l),c=n(155),i=n.n(c),o=n(141),u=n.n(o),m=function(e){e.children;return s.a.createElement("div",{className:u.a.headerContainer},"Airbnb Price Estimator")},d=function(e){var t=e.children;return s.a.createElement("div",null,s.a.createElement(i.a,null,s.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto",rel:"stylesheet"})),s.a.createElement(m,null),t)},p=n(142),h=n.n(p),f=function(e){var t=e.label,n=e.value,a=e.name,r=e.handleInput;return s.a.createElement("div",{className:h.a.inputContainer},s.a.createElement("div",{className:h.a.label},t,": "),s.a.createElement("input",{name:a,value:n,placeholder:"Input "+t,onChange:r}))},v=n(143),b=n.n(v),E=n(163),g=n.n(E);var w=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={address:"",responseText:""},t.handleInput=function(e){var n,a=e.target,r=a.value,l=a.name;t.setState(((n={})[l]=r,n))},t.onSubmit=function(e){var n,a,r,l={location:{address:t.state.address}};(n="https://3xgrqs0bn4.execute-api.us-east-1.amazonaws.com/dev/listings",a=l,r={method:"post",url:n,data:JSON.stringify(a)},g()(r).then(function(e){return e.data}).catch(function(e){return e})).then(function(e){t.setState({responseText:"Succesfully submitted"})}).catch(function(e){t.setState({responseText:"Something went wrong"})})},t}return r()(t,e),t.prototype.render=function(){return s.a.createElement(d,null,s.a.createElement("div",{className:b.a.mainContainer},s.a.createElement(f,{label:"Address",name:"address",value:this.state.address,handleInput:this.handleInput}),s.a.createElement("button",{onClick:this.onSubmit}," Submit "),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("div",null,"response: ",this.state.responseText)))},t}(s.a.Component);t.default=w}}]);
//# sourceMappingURL=component---src-pages-index-js-23beea9a376df2130c2e.js.map