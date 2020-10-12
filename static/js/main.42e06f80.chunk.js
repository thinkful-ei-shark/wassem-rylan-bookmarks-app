(this.webpackJsonpmy_bookmarks=this.webpackJsonpmy_bookmarks||[]).push([[0],{12:function(e,t,n){e.exports=n(20)},17:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),i=n.n(o),l=(n(5),n(11)),c=n(1),s=n(2),u=n(6),h=n(4),m=n(3),d=(n(17),n(10)),p=n.n(d),v=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={title:"",url:"",desc:"",rating:1,id:""},a}return Object(s.a)(n,[{key:"titleChanged",value:function(e){this.setState({title:e})}},{key:"urlChanged",value:function(e){this.setState({url:e})}},{key:"descriptionChanged",value:function(e){this.setState({desc:e})}},{key:"ratingChanged",value:function(e){this.setState({rating:e})}},{key:"setId",value:function(e){this.setState({id:e})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.setId(p()());var n,a={title:(n=this.state).title,url:n.url,desc:n.desc,rating:n.rating,id:n.id},r={method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}};fetch("https://thinkful-list-api.herokuapp.com/rylan/bookmarks",r).then((function(e){if(!e.ok)throw new Error("Something went wrong, please try again later");return e.json()})).then((function(e){t.setState({title:"",url:"",description:"",rating:1,id:""}),t.props.handleAdd(a)})).catch((function(e){t.setState({error:e.message})}))}},{key:"render",value:function(){var e=this,t=this.state.error?r.a.createElement("div",{className:"error"},this.state.error):"";return r.a.createElement("div",{className:"addbookmark"},r.a.createElement("h2",null,"Add Bookmark"),t,r.a.createElement("form",{className:"addbookmark__form",onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("label",{htmlFor:"title"},"Title:"),r.a.createElement("input",{type:"text",name:"title",required:!0,id:"title",placeholder:"Title",value:this.state.title,onChange:function(t){return e.titleChanged(t.target.value)}}),r.a.createElement("label",{htmlFor:"url"},"Url:"),r.a.createElement("input",{required:!0,type:"url",name:"url",id:"url",placeholder:"url",value:this.state.url,onChange:function(t){return e.urlChanged(t.target.value)}}),r.a.createElement("label",{htmlFor:"description"},"Description:"),r.a.createElement("textarea",{required:!0,name:"description",id:"description",placeholder:"description",value:this.state.desc,onChange:function(t){return e.descriptionChanged(t.target.value)}}),r.a.createElement("label",{htmlFor:"rating"},"Rating: "),r.a.createElement("input",{required:!0,type:"number",name:"rating",id:"rating",min:"1",max:"5",value:this.state.rating,onChange:function(t){return e.ratingChanged(t.target.value)}}),r.a.createElement("div",{className:"addbookmark__buttons"},r.a.createElement("button",{onClick:function(t){return e.props.showForm(!1)}},"Cancel"),r.a.createElement("button",{type:"submit"},"Save"))))}}]),n}(a.Component);function f(e){var t=[0,0,0,0,0].map((function(t,n){return n<e.value?r.a.createElement("span",{key:n},"\u2605"):r.a.createElement("span",{key:n},"\u2606")}));return r.a.createElement("div",{className:"rating"},t)}function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g=r.a.createElement("g",null,r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.347,9.633h38.297V3.76c0-2.068,1.689-3.76,3.76-3.76h21.144 c2.07,0,3.76,1.691,3.76,3.76v5.874h37.83c1.293,0,2.347,1.057,2.347,2.349v11.514H0V11.982C0,10.69,1.055,9.633,2.347,9.633 L2.347,9.633z M8.69,29.605h92.921c1.937,0,3.696,1.599,3.521,3.524l-7.864,86.229c-0.174,1.926-1.59,3.521-3.523,3.521h-77.3 c-1.934,0-3.352-1.592-3.524-3.521L5.166,33.129C4.994,31.197,6.751,29.605,8.69,29.605L8.69,29.605z M69.077,42.998h9.866v65.314 h-9.866V42.998L69.077,42.998z M30.072,42.998h9.867v65.314h-9.867V42.998L30.072,42.998z M49.572,42.998h9.869v65.314h-9.869 V42.998L49.572,42.998z"})),E=function(e){var t=e.svgRef,n=e.title,a=b(e,["svgRef","title"]);return r.a.createElement("svg",k({id:"Layer_1",x:"0px",y:"0px",width:"75%",height:"75%",viewBox:"0 0 109.484 122.88",enableBackground:"new 0 0 109.484 122.88",xmlSpace:"preserve",ref:t},a),n?r.a.createElement("title",null,n):null,g)},y=r.a.forwardRef((function(e,t){return r.a.createElement(E,k({svgRef:t},e))})),S=(n.p,function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"bookmark"},r.a.createElement("div",{className:"bookmark__row",onClick:function(){return e.props.handleSetActiveSection(e.props.index)}},r.a.createElement("div",{className:"bookmark__title"},r.a.createElement("a",{href:this.props.url,target:"_blank",rel:"noopener noreferrer"},this.props.title)),r.a.createElement(f,{value:this.props.rating})),r.a.createElement("div",{className:"bookmark__description"},r.a.createElement("div",null,this.props.activeSectionIndex===this.props.index&&r.a.createElement("p",null,this.props.desc)),r.a.createElement(y,{className:"delete_btn",id:this.props.id,onClick:function(t){return e.props.handleDelete(t)}})))}}]),n}(r.a.Component));S.defaultProps={sections:[]};var O=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={activeSectionIndex:null},a.handleSetActiveSection=function(e){a.state.activeSectionIndex===e?a.setState({activeSectionIndex:null}):a.setState({activeSectionIndex:e})},a.handleSetActiveSection=a.handleSetActiveSection.bind(Object(u.a)(a)),a}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.props.bookmarks.filter((function(t){return t.rating>=e.props.selectValue})).map((function(t,n){return r.a.createElement(S,Object.assign({},t,{index:n,key:n,handleSetActiveSection:e.handleSetActiveSection,activeSectionIndex:e.state.activeSectionIndex,handleDelete:e.props.handleDelete}))}));return r.a.createElement("div",{className:"bookmarkList"},t)}}]),n}(a.Component);O.defaultProps={bookmarks:[]};var j=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"add_button",onClick:function(t){return e.props.showForm(!0)}},"+ New")}}]),n}(a.Component),w=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={value:null},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("select",{className:"dd_filter",onChange:this.props.onSelectChange},r.a.createElement("option",{value:"0"},"Filter By"),r.a.createElement("option",{value:"5"},"5 stars"),r.a.createElement("option",{value:"4"},"4 stars"),r.a.createElement("option",{value:"3"},"3 stars"),r.a.createElement("option",{value:"2"},"2 stars"),r.a.createElement("option",{value:"1"},"1 star"))}}]),n}(a.Component),C=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={selectValue:0},a.onSelectChange=function(e){a.setState({selectValue:e.target.value}),console.log(e.target.value)},a.onSelectChange=a.onSelectChange.bind(Object(u.a)(a)),a}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"bookmarkApp"},r.a.createElement("h2",null,"My Bookmarks:"),r.a.createElement("div",{className:"controls"},r.a.createElement(j,{showForm:this.props.showForm}),r.a.createElement(w,{onSelectChange:this.onSelectChange})),r.a.createElement(O,{bookmarks:this.props.bookmarks,selectValue:this.state.selectValue,handleDelete:this.props.handleDelete}))}}]),n}(a.Component),x=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleDelete=function(e){var t=e.target.id,n="https://thinkful-list-api.herokuapp.com/rylan/bookmarks/".concat(t);console.log(n);fetch(n,{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){if(!e.ok)throw new Error("Something went wrong, please try again later");return a.componentDidMount(),e.json()})).catch((function(e){a.setState({error:e.message})}))},a.handleDelete=a.handleDelete.bind(Object(u.a)(a)),a.state={bookmarks:[],showAddForm:!1},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://thinkful-list-api.herokuapp.com/rylan/bookmarks",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){if(!e.ok)throw new Error("Something went wrong, please try again later.");return e})).then((function(e){return e.json()})).then((function(t){e.setState({bookmarks:t,error:null})})).catch((function(t){e.setState({error:t.message})}))}},{key:"setShowAddForm",value:function(e){this.setState({showAddForm:e})}},{key:"addBookmark",value:function(e){this.setState({bookmarks:[].concat(Object(l.a)(this.state.bookmarks),[e]),showAddForm:!1}),this.componentDidMount()}},{key:"render",value:function(){var e=this,t=this.state.showAddForm?r.a.createElement(v,{showForm:function(t){return e.setShowAddForm(t)},handleAdd:function(t){return e.addBookmark(t)}}):r.a.createElement(C,{bookmarks:this.state.bookmarks,showForm:function(t){return e.setShowAddForm(t)},handleDelete:function(t){return e.handleDelete(t)}});return r.a.createElement("div",{className:"App"},t)}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.42e06f80.chunk.js.map