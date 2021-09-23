(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{87:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(29),s=n.n(a),c=n(93),o=(n(49),n(50),n(3)),i=n(5),l=n(6),u=n(8),d=n(7),h=n(94),p=n(44),j=n(92),b=n(18),m=n(4),v=n.n(m),f=n(9),O=n(42),g=n.n(O),x=n(16),y=n.n(x);var k={init:function(){},log:function(e){console.log(e)}};y.a.defaults.baseURL=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NAME:"Vidly in Dev",REACT_APP_VERSION:"1.0"}).REACT_APP_API_URL,y.a.interceptors.response.use(null,(function(e){return e.response&&e.response.status>=400&&e.response.status<=500||(Object(b.toast)("unexpected error"),console.log("Logging error",e),k.log(e)),Promise.reject(e)}));var S={get:y.a.get,post:y.a.post,put:y.a.put,delete:y.a.delete,setJwt:function(e){y.a.defaults.headers.common["x-auth-token"]=e}},w="/auth",C="token";function N(){return(N=Object(f.a)(v.a.mark((function e(t,n){var r,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.post(w,{email:t,password:n});case 2:r=e.sent,a=r.data,localStorage.setItem(C,a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(){return localStorage.getItem("token")}S.setJwt(P());var _={login:function(e,t){return N.apply(this,arguments)},loginWithJwt:function(e){localStorage.setItem(C,e)},logout:function(){localStorage.removeItem(C)},getCurrentUser:function(){try{var e=localStorage.getItem(C);return g()(e)}catch(t){return null}},getJwt:P},I=n(0),R=function(){return Object(I.jsx)("h1",{children:"Rentals"})},A=function(){return Object(I.jsx)("h1",{children:"Customers"})},T=n(31),D="/movies";function L(e){return"".concat(D,"/").concat(e)}function E(e){return S.get(L(e))}function U(e){return S.delete(L(e))}function M(e){if(e._id){var t=Object(o.a)({},e);return delete t._id,S.put(L(e._id),t)}return S.post(D,e)}var G="/genres";function F(){return q.apply(this,arguments)}function q(){return(q=Object(f.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",S.get(G));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var B=function(e){var t=e.items,n=e.selectedItem,r=e.textProperty,a=e.valueProperty,s=e.onItemSelect;return Object(I.jsx)("ul",{className:"list-group",children:t.map((function(e){return Object(I.jsx)("li",{onClick:function(){return s(e)},style:{cursor:"pointer"},className:e===n?"list-group-item active":"list-group-item",children:e[r]},e[a])}))})};B.defaultProps={textProperty:"name",valueProperty:"_id"};var J=B,V=n(14),Q=n.n(V),W=function(e){var t=e.itemsCount,n=e.pageSize,r=e.currentPage,a=e.onPageChange,s=Math.ceil(t/n);if(1===s)return null;var c=Q.a.range(1,s+1);return Object(I.jsx)("nav",{children:Object(I.jsx)("ul",{className:"pagination",children:c.map((function(e){return Object(I.jsx)("li",{className:e===r?"page-item active":"page-item",children:Object(I.jsx)("span",{className:"page-link",onClick:function(){return a(e)},children:e})},e)}))})})};function z(e,t,n){var r=(t-1)*n;return Q()(e).slice(r).take(n).value()}var K=function(e){var t="fa fa-heart";return e.liked||(t+="-o"),Object(I.jsx)("i",{onClick:e.onClick,style:{cursor:"pointer"},className:t,"aria-hidden":"true"})},H=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).renderCell=function(e,t){return t.content?t.content(e):Q.a.get(e,t.path)},e.createKey=function(e,t){return e._id+(t.path||t.key)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.data,r=t.columns;return Object(I.jsx)("tbody",{children:n.map((function(t){return Object(I.jsx)("tr",{children:r.map((function(n){return Object(I.jsx)("td",{children:e.renderCell(t,n)},e.createKey(t,n))}))},t._id)}))})}}]),n}(r.Component),X=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).raiseSort=function(t){var n=Object(o.a)({},e.props.sortColumn);n.path===t?n.order="asc"===n.order?"desc":"asc":(n.path=t,n.order="asc"),e.props.onSort(n)},e.renderSortIcon=function(t){var n=e.props.sortColumn;return t.path!==n.path||t.content?null:"asc"===n.order?Object(I.jsx)("i",{className:"fa fa-sort-asc"}):Object(I.jsx)("i",{className:"fa fa-sort-desc"})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(I.jsx)("thead",{children:Object(I.jsx)("tr",{children:this.props.columns.map((function(t){return Object(I.jsxs)("th",{className:"clickable",onClick:function(){return e.raiseSort(t.path)},children:[t.label," ",e.renderSortIcon(t)]},t.path||t.key)}))})})}}]),n}(r.Component),Y=function(e){var t=e.columns,n=e.data,r=e.sortColumn,a=e.onSort;return Object(I.jsxs)("table",{className:"table",children:[Object(I.jsx)(X,{columns:t,sortColumn:r,onSort:a}),Object(I.jsx)(H,{data:n,columns:t})]})},Z=n(30),$=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n),(e=t.call(this)).columns=[{path:"title",label:"Title",content:function(e){return Object(I.jsx)(Z.a,{to:"/movies/".concat(e._id),children:e.title})}},{path:"genre.name",label:"Genre"},{path:"numberInStock",label:"Stock"},{path:"dailyRentalRate",label:"Rate"},{key:"Like",content:function(t){return Object(I.jsx)(K,{liked:t.liked,onClick:function(){return e.props.onLike(t)}})}}],e.delectColumn={key:"Delete",content:function(t){return _.getCurrentUser()&&Object(I.jsx)("button",{className:"btn btn-danger",onClick:function(){return e.props.onDelete(t._id)},children:"Delete"})}};var r=_.getCurrentUser();return r&&r.isAdmin&&e.columns.push(e.delectColumn),e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.movies,n=e.sortColumn,r=e.onSort;return Object(I.jsx)(Y,{columns:this.columns,data:t,sortColumn:n,onSort:r})}}]),n}(r.Component),ee=function(e){var t=e.value,n=e.onChange;return Object(I.jsx)("input",{type:"text",name:"query",className:"form-control my-y",placeholder:"Search...",value:t,onChange:function(e){return n(e.currentTarget.value)}})},te=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={movies:[],genres:[],pageSize:2,currentPage:1,selectedGenre:null,sortColumn:{path:"title",order:"asc"},searchQuery:""},e.handleDelete=function(){var t=Object(f.a)(v.a.mark((function t(n){var r,a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.state.movies,a=r.filter((function(e){return e._id!==n})),e.setState({movies:a}),t.prev=3,t.next=6,U(n);case 6:t.next=12;break;case 8:t.prev=8,t.t0=t.catch(3),t.t0.response&&404===t.t0.response.status&&b.toast.error("This movie has already been deleted."),e.setState({movies:r});case 12:case"end":return t.stop()}}),t,null,[[3,8]])})));return function(e){return t.apply(this,arguments)}}(),e.handleLike=function(t){var n=Object(T.a)(e.state.movies),r=n.indexOf(t);n[r]=Object(o.a)({},n[r]),n[r].liked=!n[r].liked,e.setState({movies:n})},e.handlePageChange=function(t){e.setState({currentPage:t})},e.handleSort=function(t){e.setState({sortColumn:t})},e.handleGenreSelect=function(t){e.setState({selectedGenre:t,searchQuery:"",currentPage:1})},e.handleSearch=function(t){e.setState({searchQuery:t,selectedGenre:"",currentPage:1})},e.getPageData=function(){var t=e.state,n=t.pageSize,r=t.currentPage,a=t.selectedGenre,s=t.sortColumn,c=t.searchQuery,o=t.movies,i=o;c?(console.log("searchQuery",c),i=o.filter((function(e){return e.title.toLowerCase().startsWith(c.toLowerCase())}))):i=a&&a._id?o.filter((function(e){return e.genre._id===a._id})):o;var l=z(Q.a.orderBy(i,[s.path],[s.order]),r,n);return{totalCount:i.length,data:l}},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(f.a)(v.a.mark((function e(){var t,n,r,a,s;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:return t=e.sent,n=t.data,r=[{_id:"",name:"All Genres"}].concat(Object(T.a)(n)),e.next=7,S.get(D);case 7:a=e.sent,s=a.data,this.setState({movies:s,genres:r});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.movies.length,t=this.state,n=t.genres,r=t.pageSize,a=t.currentPage,s=t.selectedGenre,c=t.sortColumn,o=t.searchQuery,i=this.props.user;if(0===e)return Object(I.jsx)("p",{children:"There are no movies in the database."});var l=this.getPageData(),u=l.totalCount,d=l.data;return Object(I.jsxs)("div",{className:"row",children:[Object(I.jsx)("div",{className:"col-3",children:Object(I.jsx)(J,{items:n,selectedItem:s,onItemSelect:this.handleGenreSelect})}),Object(I.jsxs)("div",{className:"col",children:[i&&Object(I.jsx)(Z.a,{to:"/movies/new",className:"btn btn-primary mb-2",children:"New Movie"}),Object(I.jsxs)("p",{children:["Showing ",u," movies in the database."]}),Object(I.jsx)(ee,{value:o,onChange:this.handleSearch}),Object(I.jsx)($,{movies:d,sortColumn:c,onLike:this.handleLike,onDelete:this.handleDelete,onSort:this.handleSort}),Object(I.jsx)(W,{itemsCount:u,pageSize:r,currentPage:a,onPageChange:this.handlePageChange})]})]})}}]),n}(r.Component),ne=n(91),re=function(e){var t=e.user;return Object(I.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light mb-3",children:Object(I.jsxs)("div",{className:"container-fluid",children:[Object(I.jsx)(Z.a,{className:"navbar-brand",to:"/",children:"Vidly"}),Object(I.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(I.jsx)("span",{className:"navbar-toggler-icon"})}),Object(I.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(I.jsxs)("ul",{className:"navbar-nav",children:[t&&Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(ne.a,{className:"nav-item nav-link",exact:!0,to:"/movies",children:"Movies"}),Object(I.jsx)(ne.a,{className:"nav-item nav-link",to:"/customers",children:"Customers"}),Object(I.jsx)(ne.a,{className:"nav-item nav-link",to:"/rentals",children:"Rentals"})]}),!t&&Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(ne.a,{className:"nav-item nav-link",to:"/login",children:"Login"}),Object(I.jsx)(ne.a,{className:"nav-item nav-link",to:"/register",children:"Register"})]}),t&&Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(ne.a,{className:"nav-item nav-link",to:"/my-profile",children:t.name}),Object(I.jsx)(ne.a,{className:"nav-item nav-link",to:"/logout",children:"Logout"})]})]})})]})})},ae=function(){return Object(I.jsx)("h1",{children:"Not Found"})},se=n(10),ce=n.n(se),oe=n(20),ie=n(43),le=n(19),ue=["name","label","error"],de=function(e){var t=e.name,n=e.label,r=e.error,a=Object(le.a)(e,ue);return Object(I.jsxs)("div",{className:"form-group",children:[n&&Object(I.jsx)("label",{htmlFor:t,children:n}),Object(I.jsx)("input",Object(o.a)(Object(o.a)({},a),{},{name:t,id:t,className:"form-control"})),r&&Object(I.jsx)("div",{className:"alert alert-danger",children:r})]})},he=["name","label","options","error"],pe=function(e){var t=e.name,n=e.label,r=e.options,a=e.error,s=Object(le.a)(e,he);return Object(I.jsxs)("div",{className:"form-group",children:[Object(I.jsx)("label",{htmlFor:t,children:n}),Object(I.jsxs)("select",Object(o.a)(Object(o.a)({name:t,id:t},s),{},{className:"form-control",children:[Object(I.jsx)("option",{value:""}),r.map((function(e){return Object(I.jsx)("option",{value:e._id,children:e.name},e._id)}))]})),a&&Object(I.jsx)("div",{className:"alert alert-danger",children:a})]})},je=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={data:{},errors:{}},e.validate=function(){var t=ce.a.validate(e.state.data,e.schema,{abortEarly:!1}).error;if(!t)return null;var n,r={},a=Object(ie.a)(t.details);try{for(a.s();!(n=a.n()).done;){var s=n.value;r[s.path[0]]=s.message}}catch(c){a.e(c)}finally{a.f()}return console.log("error",t),r},e.validateProperty=function(t){var n=t.name,r=t.value,a=Object(oe.a)({},n,r),s=Object(oe.a)({},n,e.schema[n]),c=ce.a.validate(a,s).error;return console.log("error",c),c?c.details[0].message:null},e.handleSubmit=function(t){t.preventDefault();var n=e.validate();e.setState({errors:n||{}}),n||e.doSubmit()},e.handleChange=function(t){var n=t.currentTarget,r=Object(o.a)({},e.state.errors),a=e.validateProperty(n);a?r[n.name]=a:delete r[n.name];var s=Object(o.a)({},e.state.data);s[n.name]=n.value,e.setState({data:s,errors:r})},e}return Object(l.a)(n,[{key:"renderButton",value:function(e){return Object(I.jsx)("button",{disabled:this.validate(),className:"btn btn-primary",children:e})}},{key:"renderInput",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text",r=this.state,a=r.data,s=r.errors;return Object(I.jsx)(de,{type:n,name:e,value:a[e],label:t,onChange:this.handleChange,error:s[e]})}},{key:"renderSelect",value:function(e,t,n){var r=this.state,a=r.data,s=r.errors;return Object(I.jsx)(pe,{name:e,value:a[e],label:t,options:n,onChange:this.handleChange,error:s[e]})}}]),n}(r.Component),be=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={data:{title:"",genreId:"",numberInStock:"",dailyRentalRate:""},genres:[],errors:{}},e.schema={_id:ce.a.string(),title:ce.a.string().required().label("Title"),genreId:ce.a.string().required().label("Genre"),numberInStock:ce.a.number().min(0).max(10).label("Number in Stock"),dailyRentalRate:ce.a.number().min(0).max(10).label("Rate")},e.doSubmit=Object(f.a)(v.a.mark((function t(){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M(e.state.data);case 2:e.props.history.push("/movies");case 3:case"end":return t.stop()}}),t)}))),e}return Object(l.a)(n,[{key:"populateGenres",value:function(){var e=Object(f.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:t=e.sent,n=t.data,this.setState({genres:n});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"populateMovies",value:function(){var e=Object(f.a)(v.a.mark((function e(){var t,n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"new"!==(t=this.props.match.params.id)){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,E(t);case 6:n=e.sent,r=n.data,this.setState({data:this.mapToViewModel(r)}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),e.t0.response&&404===e.t0.response.status&&this.props.history.replace("/not-found");case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(f.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.populateGenres();case 2:return e.next=4,this.populateMovies();case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"mapToViewModel",value:function(e){return{_id:e._id,title:e.title,genreId:e.genre._id,numberInStock:e.numberInStock,dailyRentalRate:e.dailyRentalRate}}},{key:"render",value:function(){var e=this.state.genres;return Object(I.jsxs)("div",{children:[Object(I.jsx)("h1",{children:"Movie Form"}),Object(I.jsxs)("form",{onSubmit:this.handleSubmit,children:[this.renderInput("title","Title"),this.renderSelect("genreId","Genre",e),this.renderInput("numberInStock","Number in Stock","number"),this.renderInput("dailyRentalRate","Rate"),this.renderButton("Save")]})]})}}]),n}(je),me=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={data:{username:"",password:""},errors:{}},e.schema={username:ce.a.string().required().label("Username"),password:ce.a.string().required().label("Password")},e.doSubmit=Object(f.a)(v.a.mark((function t(){var n,r,a,s,c;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.state.data,r=n.username,a=n.password,t.next=4,_.login(r,a);case 4:s=e.props.location.state,window.location=s?s.from.pathname:"/",t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),t.t0.response&&400===t.t0.response.status&&((c=Object(o.a)({},e.state.errors)).username=t.t0.response.data,e.setState({errors:c}));case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),e}return Object(l.a)(n,[{key:"render",value:function(){return _.getCurrentUser?Object(I.jsxs)("div",{children:[Object(I.jsx)("h1",{children:"Login"}),Object(I.jsxs)("form",{onSubmit:this.handleSubmit,children:[this.renderInput("username","Username"),this.renderInput("password","Password","password"),this.renderButton("Login")]})]}):Object(I.jsx)(j.a,{to:"/"})}}]),n}(je);function ve(e){return S.post("/users",{email:e.username,password:e.password,name:e.name})}var fe=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={data:{username:"",password:"",name:""},errors:{}},e.schema={username:ce.a.string().required().email().label("Username"),password:ce.a.string().required().min(5).label("Password"),name:ce.a.string().required().label("Name")},e.doSubmit=Object(f.a)(v.a.mark((function t(){var n,r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ve(e.state.data);case 3:n=t.sent,_.loginWithJwt(n.header["x-auth-token"]),window.location="/",t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),t.t0.response&&400===t.t0.response.status&&((r=Object(o.a)({},e.state.errors)).username=t.t0.response.data,e.setState({errors:r}));case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),e}return Object(l.a)(n,[{key:"render",value:function(){return Object(I.jsxs)("div",{children:[Object(I.jsx)("h1",{children:"Register"}),Object(I.jsxs)("form",{onSubmit:this.handleSubmit,children:[this.renderInput("username","Username"),(this.renderInput("password","Password"),"password"),this.renderInput("name","Name"),this.renderButton("Register")]})]})}}]),n}(je),Oe=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){_.logout(),window.location="/"}},{key:"render",value:function(){return null}}]),n}(r.Component),ge=["path","component","render"],xe=function(e){e.path;var t=e.component,n=e.render,r=Object(le.a)(e,ge);return Object(I.jsx)(p.a,Object(o.a)(Object(o.a)({},r),{},{render:function(e){return _.getCurrentUser()?t?Object(I.jsx)(t,Object(o.a)({},e)):n(e):Object(I.jsx)(j.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},ye=(n(87),n(88),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=_.getCurrentUser();this.setState({user:e})}},{key:"render",value:function(){var e=this.state.user;return Object(I.jsxs)("main",{className:"container",children:[Object(I.jsx)(b.ToastContainer,{}),Object(I.jsx)(re,{user:e}),Object(I.jsxs)(h.a,{children:[Object(I.jsx)(p.a,{path:"/logout",component:Oe}),Object(I.jsx)(p.a,{path:"/register",component:fe}),Object(I.jsx)(p.a,{path:"/login",component:me}),Object(I.jsx)(xe,{path:"/movies/:id",component:be}),Object(I.jsx)(p.a,{path:"/movies",render:function(t){return Object(I.jsx)(te,Object(o.a)(Object(o.a)({},t),{},{user:e}))}}),Object(I.jsx)(xe,{path:"/customers",component:A}),Object(I.jsx)(p.a,{path:"/rentals",component:R}),Object(I.jsx)(p.a,{path:"/not-found",component:ae}),Object(I.jsx)(j.a,{from:"/",exact:!0,to:"movies"}),Object(I.jsx)(j.a,{to:"/not-found"})]})]})}}]),n}(r.Component));console.log("SUPERMAN","Vidly in Dev"),s.a.render(Object(I.jsx)(c.a,{children:Object(I.jsx)(ye,{})}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.8c2a65a9.chunk.js.map