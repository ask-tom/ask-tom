(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{50:function(e,t,a){e.exports=a(85)},55:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(16),r=a(0),s=a.n(r),c=a(17),l=a.n(c),o=(a(55),a(1)),i=a(2),u=a(4),m=a(3),d=a(5),p=a(8),h=a(15),f=a(86),v=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",password:"",success:""},a.changeHandler=function(e){a.setState(Object(h.a)({},e.target.placeholder,e.target.value))},a.loginSubmitHandler=function(e){e.preventDefault(),a.props.onHide(),a.props.loginSubmitHandler(e,a.state),a.setState({success:"Done!",name:"",password:""})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement(f.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),s.a.createElement(f.a.Header,{closeButton:!0},s.a.createElement(f.a.Title,{id:"contained-modal-title-vcenter"},"Login")),s.a.createElement(f.a.Body,null,s.a.createElement("form",{onSubmit:this.loginSubmitHandler},s.a.createElement("br",null),s.a.createElement("input",{class:"form-control",type:"text",id:"username",placeholder:"name",value:this.state.name,onChange:this.changeHandler}),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("input",{class:"form-control",type:"password",id:"id",placeholder:"password",value:this.state.password,onChange:this.changeHandler}),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("button",{class:"btn btn-primary"},"Login"))))}}]),t}(r.Component),y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",password:""},a.changeHandler=function(e){a.setState(Object(h.a)({},e.target.placeholder,e.target.value))},a.submitHandler=function(e){e.preventDefault(),a.props.onHide(),a.setState(Object(h.a)({},e.target.placeholder,e.target.value),function(){return a.props.signupSubmitHandler(e,a.state)})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement(f.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),s.a.createElement(f.a.Header,{closeButton:!0},s.a.createElement(f.a.Title,{id:"contained-modal-title-vcenter"},"Sign Up")),s.a.createElement(f.a.Body,null,s.a.createElement("form",{onSubmit:this.submitHandler},s.a.createElement("br",null),s.a.createElement("input",{class:"form-control",type:"text",id:"username",placeholder:"name",value:this.state.name,onChange:this.changeHandler}),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("input",{class:"form-control",type:"password",id:"pass",placeholder:"password",value:this.state.password,onChange:this.changeHandler}),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("button",{class:"btn btn-primary"},"Sign Up"))))}}]),t}(r.Component),g=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={loginModalShow:!1,signupModalShow:!1},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement("nav",{className:"nav-bar"},s.a.createElement("ul",{className:"lk"},s.a.createElement(n.b,{className:"header-left",to:"/ask-tom/"},"Home"),this.props.currentUser.user?s.a.createElement(n.b,{className:"header-left",to:"/ask-tom/ideas"},"Ideas"):null,this.props.currentUser.user?s.a.createElement(n.b,{className:"header-left",to:"/ask-tom/survey"},"Survey"):null,this.props.currentUser.user?null:s.a.createElement(n.b,{className:"header-right",variant:"primary",onClick:function(){return e.setState({signupModalShow:!0})}},"Sign Up"),this.props.currentUser.user?null:s.a.createElement(n.b,{className:"header-right",variant:"primary",onClick:function(){return e.setState({loginModalShow:!0})}},"Login"),this.props.currentUser.user?s.a.createElement(n.b,{className:"header-right",onClick:function(t){return e.props.handleLogout()}},"Logout"):null)),s.a.createElement(v,{loginSubmitHandler:this.props.loginSubmitHandler,show:this.state.loginModalShow,onHide:function(){return e.setState({loginModalShow:!1})}}),s.a.createElement(y,{signupSubmitHandler:this.props.signupSubmitHandler,show:this.state.signupModalShow,onHide:function(){return e.setState({signupModalShow:!1})}}))}}]),t}(r.Component),E=Object(p.d)(g),b="https://dry-shelf-10302.herokuapp.com/api/v1/keywords/7",N="https://dry-shelf-10302.herokuapp.com/api/v1/ideas",j={getTool:function(){return fetch("https://dry-shelf-10302.herokuapp.com/api/v1/tools").then(function(e){return e.json()})},getKeyword:function(){return fetch(b).then(function(e){return e.json()})},patchKeyword:function(e,t,a){return fetch(b,function(e,t,a){return{method:"PATCH",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({subject:e,keyword_type:t,purpose:a})}}(e,t,a))},getIdea:function(){return fetch(N)},postIdea:function(e){return fetch(N,function(e){return{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e)}}(e)).then(function(e){return e.json()})},getSavedIdeas:function(){return fetch("https://dry-shelf-10302.herokuapp.com/api/v1/user_ideas")},postSavedIdea:function(e,t){return fetch("https://dry-shelf-10302.herokuapp.com/api/v1/user_ideas",function(e,t){return{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({user_id:e,idea_id:t})}}(e,t))}},w=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).saveIdea=function(e){var t={idea_type:e.target.parentElement.firstChild.firstChild.innerText,mod:a.props.mod};j.postIdea(t).then(function(e){alert("Thank you!")})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return""===this.props.newIdea?s.a.createElement("div",{className:"text-center"},s.a.createElement("h2",{className:"text-white-i"},"Made with \ud83d\udc99 by "),s.a.createElement("div",{className:"stage"},s.a.createElement("div",{className:"layer"}),s.a.createElement("div",{className:"layer"}),s.a.createElement("div",{className:"layer"}),s.a.createElement("div",{className:"layer"}),s.a.createElement("div",{className:"layer"}),s.a.createElement("div",{className:"layer"}),s.a.createElement("div",{className:"layer"}),s.a.createElement("div",{className:"layer"}),s.a.createElement("div",{className:"layer"}),s.a.createElement("div",{className:"layer"}),s.a.createElement("div",{className:"layer"}),s.a.createElement("div",{className:"layer"}),s.a.createElement("div",{className:"layer"}),s.a.createElement("div",{className:"layer"}),s.a.createElement("div",{className:"layer"}),s.a.createElement("div",{className:"layer"}),s.a.createElement("div",{className:"layer"}),s.a.createElement("div",{className:"layer"}),s.a.createElement("div",{className:"layer"}),s.a.createElement("div",{className:"layer"})),s.a.createElement("br",null),s.a.createElement("div",{className:"stage"},s.a.createElement("div",{className:"layer-2"}),s.a.createElement("div",{className:"layer-2"}),s.a.createElement("div",{className:"layer-2"}),s.a.createElement("div",{className:"layer-2"}),s.a.createElement("div",{className:"layer-2"}),s.a.createElement("div",{className:"layer-2"}),s.a.createElement("div",{className:"layer-2"}),s.a.createElement("div",{className:"layer-2"}),s.a.createElement("div",{className:"layer-2"}),s.a.createElement("div",{className:"layer-2"}),s.a.createElement("div",{className:"layer-2"}),s.a.createElement("div",{className:"layer-2"}),s.a.createElement("div",{className:"layer-2"}),s.a.createElement("div",{className:"layer-2"}),s.a.createElement("div",{className:"layer-2"}),s.a.createElement("div",{className:"layer-2"}),s.a.createElement("div",{className:"layer-2"}),s.a.createElement("div",{className:"layer-2"}),s.a.createElement("div",{className:"layer-2"}),s.a.createElement("div",{className:"layer-2"})),s.a.createElement("div",{className:"stage"},s.a.createElement("div",{className:"layer-3"}),s.a.createElement("div",{className:"layer-3"}),s.a.createElement("div",{className:"layer-3"}),s.a.createElement("div",{className:"layer-3"}),s.a.createElement("div",{className:"layer-3"}),s.a.createElement("div",{className:"layer-3"}),s.a.createElement("div",{className:"layer-3"}),s.a.createElement("div",{className:"layer-3"}),s.a.createElement("div",{className:"layer-3"}),s.a.createElement("div",{className:"layer-3"}),s.a.createElement("div",{className:"layer-3"}),s.a.createElement("div",{className:"layer-3"}),s.a.createElement("div",{className:"layer-3"}),s.a.createElement("div",{className:"layer-3"}),s.a.createElement("div",{className:"layer-3"}),s.a.createElement("div",{className:"layer-3"}),s.a.createElement("div",{className:"layer-3"}),s.a.createElement("div",{className:"layer-3"}),s.a.createElement("div",{className:"layer-3"}),s.a.createElement("div",{className:"layer-3"}))):null!=this.props.idea?s.a.createElement("div",{className:"text-center"},s.a.createElement("div",null,s.a.createElement("li",{className:"idea-card",onClick:function(){return e.props.clickToFavorites(e.props.currentUser.id,e.props.idea.id)}},this.props.idea.idea_type))):(console.log(this.props.newIdea),s.a.createElement("div",{className:"text-center"},s.a.createElement("div",{className:"idea-card"},s.a.createElement("h2",null,this.props.newIdea)),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("button",{class:"btn btn-white idea-button",onClick:function(t){return e.saveIdea(t)},type:"submit",name:"Submit"},"Save Idea")))}}]),t}(r.Component),S=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={filterTerm:1,newIdea:"",keywords:[],tools:[]},a.setKeywordStateFromDataBase=function(e){a.setState({keywords:e})},a.setToolsState=function(e){console.log(e),a.setState({tools:e},function(){return console.log(a.state.tools)})},a.changeFilterTerm=function(e){j.getTool().then(function(t){var n=t.filter(function(t){return t.mod.includes(+e)});a.setState({filterTerm:+e,tools:n},function(){return console.log(a.state.tools)})})},a.clickGenerateIdea=function(){var e;console.log(a.state);var t=a.state.keywords.keyword_type[Math.floor(Math.random()*a.state.keywords.keyword_type.length)];a.state.filterTerm,console.log(a.state.tools);var n=a.state.tools.map(function(e){return e.name})[Math.floor(2*Math.random())],r=a.state.keywords.subject[Math.floor(Math.random()*a.state.keywords.subject.length)],s=a.state.keywords.purpose[Math.floor(Math.random()*a.state.keywords.purpose.length)],c=a.state.keywords.purpose[Math.floor(Math.random()*a.state.keywords.purpose.length)],l=a.state.keywords.purpose[Math.floor(Math.random()*a.state.keywords.purpose.length)];if("Game"===t&&a.state.filterTerm>1){var o=a.state.tools.filter(function(e){return"games"===e.purpose}).map(function(e){return e.name}),i=a.state.tools.filter(function(e){return"games"!==e.purpose}).map(function(e){return e.name}),u=o[Math.floor(2*Math.random())];console.log(u);var m=i[Math.floor(Math.random()*i.length)];console.log(m),n=[u,m,n],console.log(n)}var d=(e="Blog"===t&&1===a.state.filterTerm?["Make a ".concat(r," CLI trivia using ").concat(n," for ").concat(s),"Create a ".concat(r," CLI game using ").concat(n," about ").concat(c," for ").concat(s,". (That also shouts out Tom)"),"Build a ".concat(r," CLI about ").concat(s," that's only for Flatiron Students! ")]:["Make a ".concat(r," ").concat(t," using ").concat(n," for ").concat(s),"A ".concat(r," ").concat(t," using ").concat(n," about ").concat(c," for ").concat(s,". (That also shouts out Tom)"),"Build a ".concat(r," ").concat(t," about ").concat(s," that's only for Flatiron Students! "),"Make a ".concat(t," Tom related!"),"Develop a ".concat(r," website about ").concat(s," and ").concat(l),"Make a Facebook for ".concat(c),"Make a fictional Personal Frontend Developer for ".concat(c)])[Math.floor(Math.random()*e.length)];a.setState({newIdea:d},function(){return console.log(a.state.newIdea)})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){j.getKeyword().then(this.setKeywordStateFromDataBase)}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"ask-tom-home"},s.a.createElement("div",{className:"d-md-flex h-md-100 align-items-center"},s.a.createElement("div",{className:"col-md-6 p-0 bg-blue h-md-100"},s.a.createElement("div",{className:"text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center"},s.a.createElement("div",{className:"filter"},s.a.createElement("h1",{className:"title"},"Ask Tom"),s.a.createElement("p",null,"Choose your Mod (\uff89\u25d5\u30ee\u25d5)\uff89*:\uff65\uff9f\u2727 "),s.a.createElement("div",{className:"select-dropdown"},s.a.createElement("select",{onChange:function(t){return e.changeFilterTerm(t.target.value)}},s.a.createElement("option",{name:"mod",value:"1"},"Mod 1"),s.a.createElement("option",{name:"mod",value:"2"},"Mod 2"),s.a.createElement("option",{name:"mod",value:"3"},"Mod 3"),s.a.createElement("option",{name:"mod",value:"4"},"Mod 4"),s.a.createElement("option",{name:"mod",value:"5"},"Mod 5"))),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.clickGenerateIdea()},type:"submit",name:"Submit"},"Generate an Idea")))),s.a.createElement("div",{className:"col-md-6 p-0 bg-white h-md-100 loginarea"},s.a.createElement("div",{className:"ideas d-md-flex align-items-center h-md-100 p-5 justify-content-center"},s.a.createElement(w,{newIdea:this.state.newIdea,mod:this.state.filterTerm})))))}}]),t}(r.Component),k=Object(p.d)(S),O=(s.a.Component,a(23)),I=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={keywords:{},subject:"",keyword_type:"",purpose:"",success:""},a.componentDidMount=function(){j.getKeyword().then(function(e){a.setState({keywords:e})})},a.changeSurveyState=function(e){a.setState(Object(h.a)({},e.target.name,e.target.value))},a.createNewKeywordApi=function(e,t){e.preventDefault();var n=[].concat(Object(O.a)(a.state.keywords.subject),[t.subject]),r=[].concat(Object(O.a)(a.state.keywords.keyword_type),[t.keyword_type]),s=[].concat(Object(O.a)(a.state.keywords.purpose),[t.purpose]);j.patchKeyword(n,r,s).then(function(e){return e.json()}).then(function(e){console.log(e),e.id?a.setState({success:"Done!"}):a.setState({success:"Try again! (No swear words or gibberish, must be < 15 characters, and no empty fields)"})})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"d-md-flex h-md-100 align-items-center"},s.a.createElement("div",{className:"col-md-6 p-0 bg-blue h-md-100"},s.a.createElement("div",{className:"text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center"},s.a.createElement("div",{className:"survey-form"},s.a.createElement("form",{onSubmit:function(t){return e.createNewKeywordApi(t,e.state)}},"Create a/an  ",s.a.createElement("input",{onChange:function(t){return e.changeSurveyState(t)},className:"i-s",type:"text",name:"subject",value:this.state.subject,placeholder:" educational, delightful, ...etc. "}),s.a.createElement("br",null),s.a.createElement("input",{onChange:function(t){return e.changeSurveyState(t)},className:"i-s",type:"text",name:"keyword_type",value:this.state.type,placeholder:" website, game, ...etc. "}),s.a.createElement("br",null),"for  ",s.a.createElement("input",{onChange:function(t){return e.changeSurveyState(t)},className:"i-s",type:"text",name:"purpose",value:this.state.purpose,placeholder:" dogs, kids, ...etc. "}),s.a.createElement("br",null),s.a.createElement("button",{className:"btn btn-primary",type:"submit",name:"submit"}," Submit "))))),s.a.createElement("div",{className:"col-md-6 p-0 bg-white h-md-100 loginarea"},s.a.createElement("div",{className:"success-text d-md-flex align-items-center h-md-100 p-5 justify-content-center"},s.a.createElement("p",null," ",this.state.success," "))))}}]),t}(r.Component),M=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={savedIdeas:[]},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;j.getSavedIdeas().then(function(e){return e.json()}).then(function(t){e.setState({savedIdeas:t})})}},{key:"render",value:function(){var e=this;console.log(this.props);var t=this.props.favIdeas.map(function(t){return s.a.createElement(w,{clickToFavorites:e.props.removeFromFav,currentUser:e.props.currentUser,key:t.id,idea:t})});return s.a.createElement("div",{className:"col-md-6 p-0 bg-white h-md-100 loginarea"},s.a.createElement("div",{className:"ideas d-md-flex align-items-center h-md-100 p-5 justify-content-center idea-c"},s.a.createElement("h1",{className:"favorite-title"},"Saved Ideas"),s.a.createElement("ul",{className:"favorite-ul"},t)))}}]),t}(r.Component),C=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"select-dropdown idea-list-dropdown"},s.a.createElement("select",{onChange:this.props.handleChange},s.a.createElement("option",{value:"All"},"All"),s.a.createElement("option",{value:"1"},"Mod 1"),s.a.createElement("option",{value:"2"},"Mod 2"),s.a.createElement("option",{value:"3"},"Mod 3"),s.a.createElement("option",{value:"4"},"Mod 4"),s.a.createElement("option",{value:"5"},"Mod 5")))}}]),t}(r.Component),T=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={ideas:[],filteredIdeas:[],favIdeas:[]},a.omgFav=function(){j.getSavedIdeas().then(function(e){return e.json()}).then(function(e){return e.filter(function(e){return e.user_id===a.props.currentUser.user.id})}).then(function(e){return e.map(function(e){return e.idea_id})}).then(function(e){var t=a.state.ideas.filter(function(t){return e.includes(t.id)});a.setState({favIdeas:t})})},a.clickToFavorites=function(e,t){if(j.postSavedIdea(e,t),!a.state.favIdeas.map(function(e){return e.id}).includes(t)){j.postSavedIdea(e,t);var n=a.state.ideas.find(function(e){return e.id===t});a.setState({favIdeas:[n].concat(Object(O.a)(a.state.favIdeas))})}},a.removeFromFav=function(e,t){j.getSavedIdeas().then(function(e){return e.json()}).then(function(e){return e.find(function(e){return e.idea_id===t})}).then(function(e){fetch("https://dry-shelf-10302.herokuapp.com/api/v1/user_ideas/".concat(e.id),{method:"DELETE",headers:{"Content-Type":"application/json",Accept:"application/json"}})})},a.handleChange=function(e){e.preventDefault();var t=a.state.ideas.filter(function(t){return t.mod===parseInt(e.target.value)});a.setState({filteredIdeas:t})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;j.getIdea().then(function(e){return e.json()}).then(function(t){e.setState({ideas:t},function(){return e.omgFav()})})}},{key:"render",value:function(){var e=this,t=this.state.ideas.map(function(t){return s.a.createElement(w,{clickToFavorites:e.clickToFavorites,currentUser:e.props.currentUser,key:t.id,idea:t})}).reverse(),a=this.state.filteredIdeas.map(function(t){return s.a.createElement(w,{clickToFavorites:e.clickToFavorites,currentUser:e.props.currentUser,key:t.id,idea:t})}).reverse();return s.a.createElement("div",{className:"idea-list"},s.a.createElement("div",{className:"d-md-flex h-md-100 align-items-center"},s.a.createElement("div",{className:"col-md-6 p-0 bg-blue h-md-100"},s.a.createElement("div",{className:"text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center idea-c"},s.a.createElement("div",{className:"filter"},s.a.createElement("h1",{className:"title"},"All Ideas"),s.a.createElement(C,{handleChange:this.handleChange})),s.a.createElement("ul",{className:"idea-ul"},a.length>0?a:t))),s.a.createElement(M,{removeFromFav:this.removeFromFav,favIdeas:this.state.favIdeas,currentUser:this.props.currentUser})))}}]),t}(r.Component),H=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(p.a,{exact:!0,path:"/ask-tom/survey",component:I}),s.a.createElement(p.a,{exact:!0,path:"/ask-tom/ideas",render:function(){return s.a.createElement(T,{currentUser:e.props.currentUser})}}),s.a.createElement(p.a,{exact:!0,path:"/ask-tom/",render:function(){return s.a.createElement(k,{signupSubmitHandler:e.props.signupSubmitHandler,loginSubmitHandler:e.props.loginSubmitHandler})}}))}}]),t}(r.Component),U=(a(84),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={currentUser:{}},a.signupSubmitHandler=function(e,t){e.preventDefault(),fetch("https://dry-shelf-10302.herokuapp.com/api/v1/users",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({user:t})}).then(function(e){return e.json()}).then(function(e){console.log(e),localStorage.setItem("token",e.jwt),a.setState({currentUser:e},function(){console.log("This is what I'm getting after signing up: ",e)})})},a.loginSubmitHandler=function(e,t){e.preventDefault(),console.log("user info is",t),fetch("https://dry-shelf-10302.herokuapp.com/api/v1/login",{method:"POST",headers:{"content-type":"application/json",accepts:"application/json"},body:JSON.stringify({user:t})}).then(function(e){return e.json()}).then(function(e){console.log("this is from the login",e),e.jwt&&(localStorage.setItem("token",e.jwt),a.setState({currentUser:e},function(){return console.log("app user login",a.state.currentUser.user)}))})},a.handleLogout=function(){a.setState({currentUser:{}}),localStorage.removeItem("token"),a.props.history.push("/ask-tom")},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("token");t?(fetch("https://dry-shelf-10302.herokuapp.com/api/v1/current_user",{headers:{Authorization:"Bearer ".concat(t)}}).then(function(e){return e.json()}).then(function(t){return e.setState({currentUser:t})}),this.props.history.push("/ask-tom")):this.props.history.push("/ask-tom")}},{key:"render",value:function(){var e=this;return console.log(this.state.currentUser.user),s.a.createElement("div",{className:"Ask-Tom center"},s.a.createElement(E,{currentUser:this.state.currentUser,handleLogout:this.handleLogout,loginSubmitHandler:this.loginSubmitHandler,signupSubmitHandler:this.signupSubmitHandler}),this.state.currentUser.user?s.a.createElement(H,{currentUser:this.state.currentUser}):s.a.createElement(p.a,{exact:!0,path:"/ask-tom/",render:function(){return s.a.createElement(k,{signupSubmitHandler:e.props.signupSubmitHandler,loginSubmitHandler:e.props.loginSubmitHandler})}}))}}]),t}(r.Component)),x=Object(p.d)(U);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(n.a,null,s.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[50,1,2]]]);
//# sourceMappingURL=main.37ef79d4.chunk.js.map