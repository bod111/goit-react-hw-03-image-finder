(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{16:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(7),r=n.n(c),i=(n(16),n(10)),s=n(3),l=n(4),u=n(6),h=n(5),m=n(11),d=n.n(m),p=n(8),j=(n(37),function(e){var t=e.name,n=e.page;return fetch("https://pixabay.com/api/?q=".concat(t,"&page=").concat(n,"&key=23311871-6dfcca62e78c0a60decb58f13&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()}))}),b=n(1),f=function(e){var t=e.onClick;return window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),Object(b.jsx)("button",{onClick:t,className:"Button",type:"button",children:"Load more"})},g=function(e){var t=e.hits,n=e.handleClick;return t.map((function(e,t){return Object(b.jsx)("li",{className:"ImageGalleryItem",children:Object(b.jsx)("img",{src:e.webformatURL,onClick:function(){return n(e.largeImageURL)},alt:"",className:"ImageGalleryItem-image"})},e.id+t)}))},O=function(e){var t=e.hits,n=e.handleClick;return Object(b.jsx)("ul",{className:"ImageGallery",children:Object(b.jsx)(g,{hits:t,handleClick:n})})},v=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={name:""},e.onSubmit=function(t){t.preventDefault(),""!==e.state.name.trim()?e.props.onSubmitForm(e.state.name):p.b.error("Not found!")},e.onChangeName=function(t){e.setState({name:t.currentTarget.value.toLowerCase()})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsx)("header",{className:"Searchbar",children:Object(b.jsxs)("form",{onSubmit:this.onSubmit,className:"SearchForm",children:[Object(b.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(b.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(b.jsx)("input",{value:this.state.name,onChange:this.onChangeName,className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),n}(a.Component),y=v,C=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).onEscape=function(t){e.props.onClose(t)},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.onEscape)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onEscape)}},{key:"render",value:function(){return Object(b.jsx)("div",{className:"Overlay",onClick:this.props.onClose,children:Object(b.jsx)("div",{className:"Modal",children:Object(b.jsx)("img",{src:this.props.modalImg,alt:""})})})}}]),n}(a.Component),k=C,x=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={hits:[],loading:!1,name:"",page:1,modal:""},e.onSubmitForm=function(t){e.setState({name:t,page:1,hits:[]})},e.onClick=function(){e.setState({page:e.state.page+1})},e.handleClick=function(t){return e.setState({modal:t})},e.onClose=function(t){(t.target===t.currentTarget||"Escape"===t.code)&&e.setState({modal:""})},e}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(e,t){var n=this,a=this.state,o=a.name,c=a.page;t.name===o&&t.page===c||(this.setState({loading:!0}),j({name:o,page:c}).then((function(e){return n.setState((function(t){return{hits:[].concat(Object(i.a)(t.hits),Object(i.a)(e.hits))}}))})).finally((function(){return n.setState({loading:!1})})))}},{key:"render",value:function(){var e=this.state,t=e.loading,n=e.hits,a=e.modal;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(y,{onSubmitForm:this.onSubmitForm}),!!n.length&&Object(b.jsx)(O,{handleClick:this.handleClick,hits:n}),!!n.length&&Object(b.jsx)(f,{onClick:this.onClick}),a&&Object(b.jsx)(k,{onClose:this.onClose,modalImg:a}),t&&Object(b.jsx)(d.a,{type:"TailSpin",color:"#00BFFF",height:80,width:80}),Object(b.jsx)(p.a,{})]})}}]),n}(a.Component),S=x;r.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(S,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.ef66545d.chunk.js.map