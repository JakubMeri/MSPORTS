(this["webpackJsonpfit-app"]=this["webpackJsonpfit-app"]||[]).push([[0],{167:function(e,t,a){},168:function(e,t,a){},169:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(53),i=a.n(c),r=(a(66),a(67),a(68),a(9));function o(){return l.a.createElement("div",{className:"Home"},l.a.createElement("div",{className:"overlay"}),l.a.createElement("h1",{className:"home-quotes"},"ALWAYS WORK ON YOUR SELVE"),l.a.createElement(r.b,{to:"/BMR",className:"btn-link"},"Continue"))}var s=a(55),m=a(56),h=a(60),u=a(59);a(73),a(74);function g(e){var t=e.BMR;return l.a.createElement("div",{className:"BMR-calculate"},l.a.createElement("h1",null,"BMR CALCULATOR"),l.a.createElement("form",{onSubmit:e.submitForm,className:"form"},l.a.createElement("label",{htmlFor:"vyska"},"Height:"),l.a.createElement("input",{onChange:e.getHeight,className:"form-input",type:"text",name:"vyska",id:"vyska",value:e.height}),l.a.createElement("label",{htmlFor:"vaha"},"Weight:"),l.a.createElement("input",{onChange:e.getWeight,className:"form-input",type:"text",name:"vaha",id:"vaha",value:e.weight}),l.a.createElement("label",{htmlFor:"vek"},"Age:"),l.a.createElement("input",{onChange:e.getAge,className:"form-input",type:"text",name:"vek",id:"vek",value:e.age}),l.a.createElement("span",null,l.a.createElement("label",{htmlFor:"man"},"Man"),l.a.createElement("input",{onClick:e.getRadio,className:"radio",defaultChecked:!0,type:"radio",name:"pohlavie",id:"man",value:"man"}),l.a.createElement("label",{htmlFor:"woman"},"Woman"),l.a.createElement("input",{onClick:e.getRadio,className:"radio",type:"radio",name:"pohlavie",id:"woman",value:"woman"})),l.a.createElement("button",{type:"submit",className:"btn-submit"},"CALCULATE")),l.a.createElement("h3",null,"Your BMR is: ",t," kcla"))}var v=a(14),E=a(57);a(167);function d(e){var t=Object(n.useState)(0),a=Object(v.a)(t,2),c=a[0],i=a[1],r=Object(n.useState)(0),o=Object(v.a)(r,2),s=o[0],m=o[1],h=Object(n.useState)(0),u=Object(v.a)(h,2),g=u[0],d=u[1],b=Object(n.useState)("cut"),f=Object(v.a)(b,2),p=f[0],M=f[1],w=Object(n.useState)(0),R=Object(v.a)(w,2),C=R[0],N=R[1],B=function(e){M(e.target.value)};Object(n.useEffect)((function(){!function(){if(0===e.BMR);else if("man"===e.gender)if("cut"===p){N(Math.ceil(1.2*e.BMR)),d(Math.ceil(.8*e.weight)),i(Math.ceil(2.5*e.weight));var t=9*g+4*c;m(Math.ceil((C-t)/4))}else{N(Math.ceil(1.4*e.BMR)),d(Math.ceil(1*e.weight)),i(Math.ceil(2*e.weight));var a=9*g+4*c;m(Math.ceil((C-a)/4))}else if("cut"===p){N(Math.ceil(1.2*e.BMR)),d(Math.ceil(.8*e.weight)),i(Math.ceil(1.5*e.weight));var n=9*g+4*c;m(Math.ceil((C-n)/4))}else{N(Math.ceil(1.4*e.BMR)),d(Math.ceil(1*e.weight)),i(Math.ceil(1*e.weight));var l=9*g+4*c;m(Math.ceil((C-l)/4))}}()}));var k={labels:["Protein","Carbs","Fat"],datasets:[{data:[c,s,g],label:"Macronutrients",borderColor:"black",backgroundColor:["rgb(255, 136, 0)","#000","#333"]}]};return l.a.createElement("div",{className:"Chart"},l.a.createElement("h1",null,"Your goal"),l.a.createElement("span",null,l.a.createElement("label",{htmlFor:"bulk"},"Bulk"),l.a.createElement("input",{onChange:B,className:"radio",type:"radio",name:"goal",value:"bulk"}),l.a.createElement("label",{htmlFor:"cut"},"Cut"),l.a.createElement("input",{onChange:B,defaultChecked:!0,className:"radio",type:"radio",name:"goal",value:"cut"})),l.a.createElement("h2",null,"Calculated calorie plan: ",C,"kcla"),l.a.createElement(E.a,{data:k}),l.a.createElement("h3",null,"Protein: ",c,"g"),l.a.createElement("h3",null,"Carbs: ",s,"g"),l.a.createElement("h3",null,"Fat: ",g,"g"))}var b=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={BMR:0,height:0,weight:0,age:0,gender:"man",goal:""},e.getHeight=function(t){var a=t.target.value;e.setState({height:a})},e.getWeight=function(t){var a=t.target.value;e.setState({weight:a})},e.getAge=function(t){var a=t.target.value;e.setState({age:a})},e.submitForm=function(t){if(0===e.state.weight||0===e.state.height||0===e.state.age)t.preventDefault();else if(t.preventDefault(),"man"===e.state.gender){var a=Math.ceil(88.362+13.397*e.state.weight+4.799*e.state.height-5.677*e.state.age);e.setState({BMR:a})}else{var n=Math.ceil(447.593+9.247*e.state.weight+3.098*e.state.height-4.33*e.state.age);e.setState({BMR:n})}},e.getRadioGender=function(t){var a=t.target.value;e.setState({gender:a})},e}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"BMR"},l.a.createElement(g,{BMR:this.state.BMR,weight:this.state.weight,height:this.state.height,age:this.state.age,getHeight:this.getHeight,getWeight:this.getWeight,getAge:this.getAge,submitForm:this.submitForm,getRadio:this.getRadioGender}),l.a.createElement(d,{BMR:this.state.BMR,gender:this.state.gender,weight:this.state.weight}))}}]),a}(n.Component),f=a(1);a(168);function p(){return l.a.createElement("nav",null,l.a.createElement(r.b,{to:"/",className:"logo"},"MSPORTS"),l.a.createElement(r.c,{activeClassName:"active",exact:!0,to:"/",className:"nav-item"},"Home"),l.a.createElement(r.c,{activeClassName:"active",to:"/BMR",className:"nav-item"},"Bmr Calculator"),l.a.createElement(r.c,{activeClassName:"active",to:"/About",className:"nav-item"},"About"))}var M=function(){return l.a.createElement(r.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(p,null),l.a.createElement(f.c,null,l.a.createElement(f.a,{path:"/",exact:!0,component:o}),l.a.createElement(f.a,{path:"/BMR",component:b}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},61:function(e,t,a){e.exports=a(169)},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){}},[[61,1,2]]]);
//# sourceMappingURL=main.2a47c619.chunk.js.map