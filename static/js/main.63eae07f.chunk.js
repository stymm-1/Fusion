(this.webpackJsonpfusion=this.webpackJsonpfusion||[]).push([[0],{101:function(e,t,s){},102:function(e,t,s){},154:function(e,t,s){"use strict";s.r(t);var a=s(2),n=s.n(a),i=s(15),c=s.n(i),r=(s(101),s(21)),o=s(22),l=s(24),d=s(23),h=(s.p,s(102),s(103),s(161)),j=s(162),m=s(168),b=s(164),u=s(166),O=s(167),x=s(16),f=s(155),g=s(182),p=s(156),v=s(157),N=s(158),y=s(159),w=s(160),k=s(163),M=s(165),I=s(9),C=s(12),F=s(0),L=function(){return Object(F.jsxs)("div",{className:"col-12",children:[Object(F.jsx)("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),Object(F.jsx)("p",{children:"Loading . . ."})]})},S=s(59),T=function(e){return e&&e.length},E=function(e){return function(t){return!t||t.length<=e}},A=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).toggleModal=a.toggleModal.bind(Object(x.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(x.a)(a)),a.state={isModalOpen:!1},a}return Object(o.a)(s,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleSubmit",value:function(e){this.toggleModal(),this.props.addComment(this.props.dishId,e.rating,e.author,e.comment)}},{key:"render",value:function(){var e,t=this;return Object(F.jsxs)("div",{children:[Object(F.jsxs)(f.a,{color:"#f4c95d",outline:!0,onClick:this.toggleModal,children:[Object(F.jsx)("span",{className:"fa fa-pencil  "}),"  Submit Comment"]}),Object(F.jsxs)(g.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:[Object(F.jsx)(p.a,{toggle:this.toggleModal,children:"Submit Comment"}),Object(F.jsx)(v.a,{className:"col-10 offset-1",children:Object(F.jsxs)(C.LocalForm,{onSubmit:function(e){return t.handleSubmit(e)},children:[Object(F.jsxs)(N.a,{className:"form-group",children:[Object(F.jsx)(y.a,{htmlFor:"rating",children:"Rating"}),Object(F.jsxs)(C.Control.select,{model:".rating",name:"rating",className:"form-control",children:[Object(F.jsx)("option",{children:"1"}),Object(F.jsx)("option",{children:"2"}),Object(F.jsx)("option",{children:"3"}),Object(F.jsx)("option",{children:"4"}),Object(F.jsx)("option",{children:"5"})]})]}),Object(F.jsxs)(N.a,{className:"form-group",children:[Object(F.jsx)(y.a,{htmlFor:"name",children:"Your Name"}),Object(F.jsx)(C.Control.text,{model:".name",id:"name",name:"name",placeholder:"Your Name",className:"form-control",validators:{required:T,minLength:(e=3,function(t){return t&&t.length>=e}),maxLength:E(15)}}),Object(F.jsx)(C.Errors,{className:"text-danger",model:".name",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})]}),Object(F.jsxs)(N.a,{className:"form-group",children:[Object(F.jsx)(y.a,{htmlFor:"comment",children:"Comment"}),Object(F.jsx)(w.a,{type:"textarea",name:"comment",rows:"6",innerRef:function(e){return t.comment=e}})]}),Object(F.jsx)(f.a,{type:"submit",value:"submit",color:"primary",children:"Submit"})]})})]})]})}}]),s}(a.Component);function q(e){var t=e.dish;return null!=t?Object(F.jsx)(S.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"},children:Object(F.jsxs)(h.a,{className:"cardrend",children:[Object(F.jsx)(j.a,{width:"100%",src:t.image,alt:t.name}),Object(F.jsxs)(k.a,{children:[Object(F.jsx)(b.a,{children:t.name}),Object(F.jsx)(M.a,{children:t.description})]})]})}):Object(F.jsx)("div",{})}function Z(e){var t=e.comments,s=e.addComment,a=e.dishId;if(null!=t){var n=t.map((function(e){return Object(F.jsxs)("ul",{className:"list-unstyled",children:[Object(F.jsx)("li",{children:e.comment}),Object(F.jsxs)("li",{children:["-- ",e.author,",",new Intl.DateTimeFormat("en-US",{month:"short",day:"2-digit",year:"numeric"}).format(new Date(e.date))]})]},e.id)}));return Object(F.jsxs)("div",{className:"p-3",children:[Object(F.jsx)("h4",{children:"Comments"}),n,Object(F.jsx)(A,{dishId:a,addComment:s})]})}return Object(F.jsx)("div",{})}var P=function(e){return e.isLoading?Object(F.jsx)("div",{className:"container",children:Object(F.jsx)("div",{className:"row",children:Object(F.jsx)(L,{})})}):e.errMess?Object(F.jsx)("div",{className:"container",children:Object(F.jsx)("div",{className:"row",children:Object(F.jsx)("h4",{children:e.errMess})})}):null!=e.dish?Object(F.jsxs)("div",{className:"container",children:[Object(F.jsxs)("div",{className:"row",children:[Object(F.jsxs)(u.a,{children:[Object(F.jsxs)(O.a,{children:[" ",Object(F.jsx)(I.b,{to:"/menu",children:"Menu"})]}),Object(F.jsx)(O.a,{active:!0,children:e.dish.name})]}),Object(F.jsxs)("div",{className:"col-12",children:[Object(F.jsx)("h3",{children:e.dish.name}),Object(F.jsx)("hr",{})]})]}),Object(F.jsxs)("div",{className:"row",children:[Object(F.jsx)("div",{className:"col-12 col-md-5 m-1",children:Object(F.jsx)(q,{dish:e.dish})}),Object(F.jsxs)("div",{className:"col-12 col-md-5 m-1",children:[Object(F.jsx)(Z,{comments:e.comments,addComment:e.addComment,dishId:e.dish.id}),"                "]})]})]}):void 0};function R(e){var t=e.dish;e.onClick;return Object(F.jsx)(h.a,{children:Object(F.jsxs)(I.b,{to:"/menu/".concat(t.id),children:[Object(F.jsx)(j.a,{width:"100%",src:t.image,alt:t.name}),Object(F.jsx)(m.a,{children:Object(F.jsx)(b.a,{className:"head",children:t.name})})]})})}var D=function(e){var t=e.dishes.dishes.map((function(t){return Object(F.jsx)("div",{className:"col-12 col-md-5 m-1",children:Object(F.jsx)(R,{dish:t,onClick:e.onClick})},t.id)}));return e.dishes.isLoading?Object(F.jsx)("div",{className:"container",children:Object(F.jsx)("div",{className:"row",children:Object(F.jsx)(L,{})})}):e.dishes.errMess?Object(F.jsx)("div",{className:"container",children:Object(F.jsx)("div",{className:"row",children:Object(F.jsx)("div",{className:"col-12",children:Object(F.jsx)("h4",{children:e.dishes.errMess})})})}):Object(F.jsxs)("div",{className:"container",children:[Object(F.jsxs)("div",{className:"row",children:[Object(F.jsxs)(u.a,{children:[Object(F.jsx)(O.a,{className:" crumb",children:Object(F.jsx)(I.b,{to:"/home",children:"Home"})}),Object(F.jsx)(O.a,{active:!0,className:" crumb",children:"Menu"})]}),Object(F.jsxs)("div",{className:"col-12",children:[Object(F.jsx)("h3",{children:"Menu"}),Object(F.jsx)("hr",{})]})]}),Object(F.jsx)("div",{className:"row",children:t})]})},U=[{id:0,name:"Uthappizza",image:"fusion/assets/images/uthappizza.png",category:"mains",label:"Hot",price:"4.99",featured:!0,description:"A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer."},{id:1,name:"Zucchipakoda",image:"fusion/assets/images/zucchipakoda.png",category:"appetizer",label:"",price:"1.99",featured:!1,description:"Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce"},{id:2,name:"Vadonut",image:"fusion/assets/images/vadonut.png",category:"appetizer",label:"New",price:"1.99",featured:!1,description:"A quintessential ConFusion experience, is it a vada or is it a donut?"},{id:3,name:"ElaiCheese Cake",image:"fusion/assets/images/elaicheesecake.png",category:"dessert",label:"",price:"2.99",featured:!1,description:"A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms"}],H=s(169);function z(e){var t=e.item,s=e.isLoading,a=e.errMess;return s?Object(F.jsx)(L,{}):a?Object(F.jsx)("h4",{children:a}):Object(F.jsx)(S.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"},children:Object(F.jsxs)(h.a,{className:"cardrend",children:[Object(F.jsx)(j.a,{src:t.image,alt:t.name}),Object(F.jsxs)(k.a,{children:[Object(F.jsx)(b.a,{children:t.name}),t.designation?Object(F.jsx)(H.a,{children:t.designation}):null,Object(F.jsx)(M.a,{children:t.description})]})]})})}var J=function(e){return Object(F.jsx)("div",{className:"container",children:Object(F.jsxs)("div",{className:"row align-items-start",children:[Object(F.jsx)("div",{className:"col-12 col-md m-1",children:Object(F.jsx)(z,{item:e.dish,isLoading:e.dishesLoading,errMess:e.dishesErrMess})}),Object(F.jsx)("div",{className:"col-12 col-md m-1",children:Object(F.jsx)(z,{item:e.promotion})}),Object(F.jsx)("div",{className:"col-12 col-md m-1",children:Object(F.jsx)(z,{item:e.leader})})]})})},B=s(47),Y=s(18),V=s(170),G=s(93),W=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).handleBlur=function(e){return function(t){a.setState({touched:Object(Y.a)(Object(Y.a)({},a.state.touched),{},Object(B.a)({},e,!0))})}},a.state={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:"",touched:{firstname:!1,lastname:!1,telnum:!1,email:!1}},a.handleInputChange=a.handleInputChange.bind(Object(x.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(x.a)(a)),a.handleBlur=a.handleBlur.bind(Object(x.a)(a)),a}return Object(o.a)(s,[{key:"handleInputChange",value:function(e){var t=e.target,s="checkbox"===t.type?t.checked:t.value,a=t.name;this.setState(Object(B.a)({},a,s))}},{key:"handleSubmit",value:function(e){console.log("Current State is: "+JSON.stringify(e)),alert("Current State is: "+JSON.stringify(e)),this.props.resetFeedbackForm()}},{key:"validate",value:function(e,t,s,a){var n={firstname:"",lastname:"",telnum:"",email:""};this.state.touched.firstname&&e.length<3?n.firstname="First Name should be >= 3 characters":this.state.touched.firstname&&e.length>10&&(n.firstname="First Name should be <= 10 characters"),this.state.touched.lastname&&t.length<3?n.lastname="Last Name should be >= 3 characters":this.state.touched.lastname&&t.length>10&&(n.lastname="Last Name should be <= 10 characters");return this.state.touched.telnum&&!/^\d+$/.test(s)&&(n.telnum="Tel. Number should contain only numbers"),this.state.touched.email&&1!==a.split("").filter((function(e){return"@"===e})).length&&(n.email="Email should contain a @"),n}},{key:"render",value:function(){var e=this,t=(this.validate(this.state.firstname,this.state.lastname,this.state.telnum,this.state.email),function(e){return e&&e.length}),s=function(e){return function(t){return!t||t.length<=e}},a=function(e){return function(t){return t&&t.length>=e}};return Object(F.jsxs)("div",{className:"container",children:[Object(F.jsxs)("div",{className:"row",children:[Object(F.jsxs)(u.a,{children:[Object(F.jsx)(O.a,{children:Object(F.jsx)(I.b,{to:"/home",children:"Home"})}),Object(F.jsx)(O.a,{active:!0,children:"Contact Us"})]}),Object(F.jsxs)("div",{className:"col-12",children:[Object(F.jsx)("h3",{children:"Contact Us"}),Object(F.jsx)("hr",{})]})]}),Object(F.jsxs)("div",{className:"row row-content",children:[Object(F.jsx)("div",{className:"col-12",children:Object(F.jsx)("h3",{children:"Location Information"})}),Object(F.jsxs)("div",{className:"col-12 col-sm-4 offset-sm-1",children:[Object(F.jsx)("h5",{children:"Our Address"}),Object(F.jsxs)("address",{children:["135, Perin Nariman Street ",Object(F.jsx)("br",{}),"Fort, Mumbai",Object(F.jsx)("br",{}),"Maharashtra 400001",Object(F.jsx)("br",{}),"INDIA",Object(F.jsx)("br",{}),Object(F.jsx)("i",{className:"fa fa-phone"}),": +91 1234 5678",Object(F.jsx)("br",{}),Object(F.jsx)("i",{className:"fa fa-fax"}),": +91 8765 4321",Object(F.jsx)("br",{}),Object(F.jsx)("i",{className:"fa fa-envelope"}),": ",Object(F.jsx)("a",{href:"mailto:fusionfood@gmail.com",children:"fusionfood@gmail.com"})]})]}),Object(F.jsxs)("div",{className:"col-12 col-sm-6 offset-sm-1",children:[Object(F.jsx)("h5",{children:"Map of our Location"}),Object(F.jsx)(G.a,{src:"https://maps.google.com/maps?q=Perin%20Nariman%20street,%20Mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed"})]}),Object(F.jsx)("div",{className:"col-12 col-sm-11 offset-sm-1",children:Object(F.jsxs)("div",{className:"btn-group",role:"group",children:[Object(F.jsxs)("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678",children:[Object(F.jsx)("i",{className:"fa fa-phone"})," Call"]}),Object(F.jsxs)("a",{role:"button",className:"btn btn-info",children:[Object(F.jsx)("i",{className:"fa fa-skype"})," Skype"]}),Object(F.jsxs)("a",{role:"button",className:"btn btn-success",href:"mailto:fusionfood@gmail.com",children:[Object(F.jsx)("i",{className:"fa fa-envelope-o"})," Email"]})]})})]}),Object(F.jsxs)("div",{className:"row row-content",children:[Object(F.jsx)("div",{className:"col-12",children:Object(F.jsx)("h3",{children:"Send us your Feedback"})}),Object(F.jsx)("div",{className:"col-12 col-md-9",children:Object(F.jsxs)(C.Form,{model:"feedback",onSubmit:function(t){return e.handleSubmit(t)},children:[Object(F.jsxs)(N.a,{className:"form-group",children:[Object(F.jsx)(y.a,{htmlFor:"firstname",md:2,children:"First Name"}),Object(F.jsxs)(V.a,{md:10,children:[Object(F.jsx)(C.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:t,minLength:a(3),maxLength:s(15)}}),Object(F.jsx)(C.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(F.jsxs)(N.a,{className:"form-group",children:[Object(F.jsx)(y.a,{htmlFor:"lastname",md:2,children:"Last Name"}),Object(F.jsxs)(V.a,{md:10,children:[Object(F.jsx)(C.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:t,minLength:a(3),maxLength:s(15)}}),Object(F.jsx)(C.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(F.jsxs)(N.a,{className:"form-group",children:[Object(F.jsx)(y.a,{htmlFor:"telnum",md:2,children:"Contact Tel."}),Object(F.jsxs)(V.a,{md:10,children:[Object(F.jsx)(C.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Tel. Number",className:"form-control",validators:{required:t,minLength:a(3),maxLength:s(15),isNumber:function(e){return!isNaN(Number(e))}}}),Object(F.jsx)(C.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 numbers",maxLength:"Must be 15 numbers or less",isNumber:"Must be a number"}})]})]}),Object(F.jsxs)(N.a,{className:"form-group",children:[Object(F.jsx)(y.a,{htmlFor:"email",md:2,children:"Email"}),Object(F.jsxs)(V.a,{md:10,children:[Object(F.jsx)(C.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:t,validEmail:function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)}}}),Object(F.jsx)(C.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required",validEmail:"Invalid Email Address"}})]})]}),Object(F.jsxs)(N.a,{className:"form-group",children:[Object(F.jsx)(y.a,{htmlFor:"message",md:2,children:"Your Feedback"}),Object(F.jsx)(V.a,{md:10,children:Object(F.jsx)(C.Control.textarea,{model:".message",id:"message",name:"message",rows:"8",className:"form-control"})})]}),Object(F.jsx)(N.a,{className:"form-group",children:Object(F.jsx)(V.a,{md:{size:10,offset:2},children:Object(F.jsx)(f.a,{type:"submit",color:"primary",children:"Send Feedback"})})})]})})]})]})}}]),s}(a.Component),_=s(171),$=s(172);var K=function(e){var t=e.leaders.map((function(e){return Object(F.jsxs)(_.a,{className:"mt-5",children:[Object(F.jsx)(_.a,{left:!0,className:"mr-5",children:Object(F.jsx)(_.a,{object:!0,src:e.image,alt:e.name})}),Object(F.jsxs)(_.a,{body:!0,children:[Object(F.jsx)(_.a,{heading:!0,children:e.name}),Object(F.jsx)("p",{children:e.designation}),e.description]})]})}));return Object(F.jsxs)("div",{className:"container",children:[Object(F.jsxs)("div",{className:"row",children:[Object(F.jsxs)(u.a,{children:[Object(F.jsx)(O.a,{children:Object(F.jsx)(I.b,{to:"/home",children:"Home"})}),Object(F.jsx)(O.a,{active:!0,children:"About Us"})]}),Object(F.jsxs)("div",{className:"col-12",children:[Object(F.jsx)("h3",{children:"About Us"}),Object(F.jsx)("hr",{})]})]}),Object(F.jsxs)("div",{className:"row row-content",children:[Object(F.jsxs)("div",{className:"col-12 col-md-6",children:[Object(F.jsx)("h2",{children:"Our History"}),Object(F.jsx)("p",{children:"Started in 2010,Fusion quickly established itself as a culinary icon par excellence in India. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in India.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."}),Object(F.jsxs)("p",{children:["The restaurant traces its humble beginnings to ",Object(F.jsx)("em",{children:"The Frying Pan"}),", a successful chain started by our CEO, Professor, that featured for the first time the world's best cuisines in a pan."]})]}),Object(F.jsx)("div",{className:"col-12 col-md-5",children:Object(F.jsxs)(h.a,{children:[Object(F.jsx)($.a,{className:"bg-primary text-white",children:"Facts At a Glance"}),Object(F.jsx)(k.a,{children:Object(F.jsxs)("dl",{className:"row p-1",children:[Object(F.jsx)("dt",{className:"col-6",children:"Started"}),Object(F.jsx)("dd",{className:"col-6",children:"14 Feb. 2010"}),Object(F.jsx)("dt",{className:"col-6",children:"Major Stake Holder"}),Object(F.jsx)("dd",{className:"col-6",children:"ASA Foods Inc."}),Object(F.jsx)("dt",{className:"col-6",children:"Last Year's Turnover"}),Object(F.jsx)("dd",{className:"col-6",children:"$1,234,567"}),Object(F.jsx)("dt",{className:"col-6",children:"Employees"}),Object(F.jsx)("dd",{className:"col-6",children:"35"})]})})]})}),Object(F.jsx)("div",{className:"col-12",children:Object(F.jsx)(h.a,{children:Object(F.jsx)(k.a,{className:"bg-faded",children:Object(F.jsxs)("blockquote",{className:"blockquote",children:[Object(F.jsx)("p",{className:"mb-0",children:"You don't need a silver fork to eat good food."}),Object(F.jsx)("footer",{className:"blockquote-footer",children:" Chef Paul Prudhomme."})]})})})})]}),Object(F.jsxs)("div",{className:"row row-content",children:[Object(F.jsx)("div",{className:"col-12",children:Object(F.jsx)("h2",{children:"Corporate Leadership"})}),Object(F.jsx)("div",{className:"col-12",children:Object(F.jsx)(_.a,{list:!0,children:t})})]})]})},Q=s(173),X=s(174),ee=s(175),te=s(176),se=s(177),ae=s(178),ne=s(179),ie=s(180),ce=s(181),re=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).state={isNavOpen:!1,isModalOpen:!1},a.toggleNav=a.toggleNav.bind(Object(x.a)(a)),a.toggleModal=a.toggleModal.bind(Object(x.a)(a)),a.handleLogin=a.handleLogin.bind(Object(x.a)(a)),a}return Object(o.a)(s,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("Username: "+this.username.value+" Password: "+this.password.value+" Remember: "+this.remember.checked),e.preventDefault()}},{key:"render",value:function(){var e=this;return Object(F.jsxs)(n.a.Fragment,{children:[Object(F.jsx)(Q.a,{dark:!0,expand:"md",children:Object(F.jsxs)("div",{className:"container",children:[Object(F.jsx)(X.a,{onClick:this.toggleNav}),Object(F.jsx)(ee.a,{className:"mr-auto",href:"/",children:Object(F.jsx)("img",{src:"fusion/assets/images/logo.png",height:"30",width:"41",alt:"Fusion"})}),Object(F.jsxs)(g.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:[Object(F.jsx)(p.a,{toggle:this.toggleModal,children:"Login"}),Object(F.jsx)(v.a,{children:Object(F.jsxs)(te.a,{onSubmit:this.handleLogin,children:[Object(F.jsxs)(se.a,{children:[Object(F.jsx)(y.a,{htmlFor:"username",children:"Username"}),Object(F.jsx)(w.a,{type:"text",id:"username",name:"username",innerRef:function(t){return e.username=t}})]}),Object(F.jsxs)(se.a,{children:[Object(F.jsx)(y.a,{htmlFor:"password",children:"Password"}),Object(F.jsx)(w.a,{type:"password",id:"password",name:"password",innerRef:function(t){return e.password=t}})]}),Object(F.jsx)(se.a,{check:!0,children:Object(F.jsxs)(y.a,{check:!0,children:[Object(F.jsx)(w.a,{type:"checkbox",name:"remember",innerRef:function(t){return e.remember=t}}),"Remember me"]})}),Object(F.jsx)(f.a,{type:"submit",value:"submit",color:"primary",children:"Login"})]})})]}),Object(F.jsx)(ae.a,{isOpen:this.state.isNavOpen,navbar:!0,children:Object(F.jsxs)(ne.a,{navbar:!0,children:[Object(F.jsx)(ie.a,{children:Object(F.jsxs)(I.c,{className:"nav-link",to:"/home",children:[Object(F.jsx)("span",{className:"fa fa-home fa-lg head"}),Object(F.jsx)("span",{className:"headtext",children:" Home "})]})}),Object(F.jsx)(ie.a,{children:Object(F.jsxs)(I.c,{className:"nav-link",to:"/menu",children:[Object(F.jsx)("span",{className:"fa fa-list fa-lg head"})," ",Object(F.jsx)("span",{className:"headtext",children:" Menu"})]})}),Object(F.jsx)(ie.a,{children:Object(F.jsxs)(I.c,{className:"nav-link",to:"/aboutus",children:[Object(F.jsx)("span",{className:"fa fa-info fa-lg head"})," ",Object(F.jsx)("span",{className:"headtext",children:" About Us "})]})}),Object(F.jsx)(ie.a,{children:Object(F.jsxs)(I.c,{className:"nav-link",to:"/contactus",children:[Object(F.jsx)("span",{className:"fa fa-info fa-lg head"}),Object(F.jsx)("span",{className:"headtext",children:" Contact Us "})]})})]})}),Object(F.jsx)(ne.a,{className:"ml-auto",navbar:!0,children:Object(F.jsx)(ie.a,{children:Object(F.jsxs)(f.a,{color:"#f4c95d",outline:!0,onClick:this.toggleModal,children:[Object(F.jsx)("span",{className:"fa fa-sign-in fa-lg head"})," Login"]})})})]})}),Object(F.jsx)(ce.a,{id:"jumbotron",children:Object(F.jsx)("div",{className:"container",children:Object(F.jsx)("div",{className:"row row-header",children:Object(F.jsxs)("div",{className:"col-12 col-sm-6",children:[Object(F.jsx)("h1",{children:"Fusion"}),Object(F.jsx)("h5",{children:"Eat What Makes You Happy"}),Object(F.jsx)("p",{children:"We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!"})]})})})})]})}}]),s}(a.Component);var oe=function(e){return Object(F.jsx)("div",{className:"footer",children:Object(F.jsxs)("div",{className:"container",children:[Object(F.jsxs)("div",{className:"row justify-content-center",children:[Object(F.jsxs)("div",{className:"col-4 offset-1 col-sm-2",children:[Object(F.jsx)("h5",{children:"Links"}),Object(F.jsxs)("ul",{className:"list-unstyled",children:[Object(F.jsx)("li",{children:Object(F.jsx)(I.b,{to:"/home",children:"Home"})}),Object(F.jsx)("li",{children:Object(F.jsx)(I.b,{to:"/aboutus",children:"About Us"})}),Object(F.jsx)("li",{children:Object(F.jsx)(I.b,{to:"/menu",children:"Menu"})}),Object(F.jsx)("li",{children:Object(F.jsx)(I.b,{to:"/contactus",children:"Contact Us"})})]})]}),Object(F.jsxs)("div",{className:"col-7 col-sm-5",children:[Object(F.jsx)("h5",{children:"Our Address"}),Object(F.jsxs)("address",{children:["135, Perin Nariman Street ",Object(F.jsx)("br",{}),"Fort, Mumbai",Object(F.jsx)("br",{}),"Maharashtra 400001",Object(F.jsx)("br",{}),"INDIA",Object(F.jsx)("br",{}),Object(F.jsx)("i",{className:"fa fa-phone fa-lg"}),": +91 1234 5678",Object(F.jsx)("br",{}),Object(F.jsx)("i",{className:"fa fa-fax fa-lg"}),": +91 8765 4321",Object(F.jsx)("br",{}),Object(F.jsx)("i",{className:"fa fa-envelope fa-lg"}),": ",Object(F.jsx)("a",{href:"mailto:fusionfood@gmail.com",children:"fusionfood@gmail.com"})]})]}),Object(F.jsx)("div",{className:"col-12 col-sm-4 align-self-center",children:Object(F.jsxs)("div",{className:"text-center",children:[Object(F.jsx)("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+",children:Object(F.jsx)("i",{className:"fa fa-google-plus"})}),Object(F.jsx)("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id=",children:Object(F.jsx)("i",{className:"fa fa-facebook"})}),Object(F.jsx)("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/",children:Object(F.jsx)("i",{className:"fa fa-linkedin"})}),Object(F.jsx)("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/",children:Object(F.jsx)("i",{className:"fa fa-twitter"})}),Object(F.jsx)("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/",children:Object(F.jsx)("i",{className:"fa fa-youtube"})}),Object(F.jsx)("a",{className:"btn btn-social-icon",href:"mailto:",children:Object(F.jsx)("i",{className:"fa fa-envelope-o"})})]})})]}),Object(F.jsx)("div",{className:"row justify-content-center",children:Object(F.jsx)("div",{className:"col-auto",children:Object(F.jsx)("p",{children:"\xa9 Copyright 2021  Fusion"})})})]})})},le=[{id:0,dishId:0,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:1,dishId:0,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:2,dishId:0,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:3,dishId:0,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:4,dishId:0,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"},{id:5,dishId:1,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:6,dishId:1,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:7,dishId:1,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:8,dishId:1,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:9,dishId:1,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"},{id:10,dishId:2,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:11,dishId:2,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:12,dishId:2,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:13,dishId:2,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:14,dishId:2,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"},{id:15,dishId:3,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:16,dishId:3,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:17,dishId:3,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:18,dishId:3,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:19,dishId:3,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"}],de=[{id:0,name:"Weekend Grand Buffet",image:"fusion/assets/images/buffet.png",label:"New",price:"19.99",featured:!0,description:"Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person"}],he=[{id:0,name:"Professor",image:"fusion/assets/images/alberto.png",designation:"Chief Epicurious Officer",abbr:"CEO",featured:!1,description:"Our CEO, Professor, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections."},{id:1,name:"Berlin",image:"fusion/assets/images/alberto.png",designation:"Chief Food Officer",abbr:"CFO",featured:!1,description:"Our CFO, Berlin, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce. His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. As he puts it in his own words, Everything that runs, wins, and everything that stays, pays!"},{id:2,name:"Tokyo",image:"fusion/assets/images/alberto.png",designation:"Chief Taste Officer",abbr:"CTO",featured:!1,description:"Blessed with the most discerning gustatory sense, Agumbe, our CFO, personally ensures that every dish that we serve meets his exacting tastes. Our chefs dread the tongue lashing that ensues if their dish does not meet his exacting standards. He lives by his motto, You click only if you survive my lick."},{id:3,name:"Raquel Murillo",image:"fusion/assets/images/alberto.png",designation:"Executive Chef",abbr:"EC",featured:!0,description:"Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. He says, Put together the cuisines from the two craziest cultures, and you get a winning hit! Amma Mia!"}],je=s(10),me=s(26),be="ADD_COMMENT",ue="DISHES_LOADING",Oe="DISHES_FAILED",xe="ADD_DISHES",fe=function(){return{type:ue}},ge=function(e){return{type:xe,payload:e}},pe=s(58),ve=s(90),Ne=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).state={dishes:U,comments:le,promotions:de,leaders:he},a}return Object(o.a)(s,[{key:"componentDidMount",value:function(){this.props.fetchDishes()}},{key:"render",value:function(){var e=this;return Object(F.jsxs)("div",{children:[Object(F.jsx)(re,{}),Object(F.jsx)("div",{children:Object(F.jsx)(pe.a,{children:Object(F.jsx)(ve.a,{classNames:"page",timeout:300,children:Object(F.jsxs)(je.d,{location:this.props.location,children:[Object(F.jsx)(je.b,{path:"/home",component:function(){return Object(F.jsx)(J,{dish:e.props.dishes.dishes.filter((function(e){return e.featured}))[0],dishesLoading:e.props.dishes.isLoading,dishesErrMess:e.props.dishes.errMess,promotion:e.props.promotions.filter((function(e){return e.featured}))[0],leader:e.props.leaders.filter((function(e){return e.featured}))[0]})}}),Object(F.jsx)(je.b,{exact:!0,path:"/menu",component:function(){return Object(F.jsx)(D,{dishes:e.props.dishes})}}),Object(F.jsx)(je.b,{exact:!0,path:"/aboutus",component:function(){return Object(F.jsx)(K,{leaders:e.props.leaders})}}),"} />",Object(F.jsx)(je.b,{path:"/menu/:dishId",component:function(t){var s=t.match;return Object(F.jsx)(P,{dish:e.props.dishes.dishes.filter((function(e){return e.id===parseInt(s.params.dishId,10)}))[0],isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.errMess,comments:e.props.comments.filter((function(e){return e.dishId===parseInt(s.params.dishId,10)})),addComment:e.props.addComment})}}),Object(F.jsx)(je.b,{exact:!0,path:"/contactus",component:function(){return Object(F.jsx)(W,{resetFeedbackForm:e.props.resetFeedbackForm})}}),Object(F.jsx)(je.a,{to:"/home"})]})},this.props.location.key)})}),Object(F.jsx)(oe,{})]})}}]),s}(a.Component),ye=Object(je.g)(Object(me.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}}),(function(e){return{addComment:function(t,s,a,n){return e(function(e,t,s,a){return{type:be,payload:{dishId:e,rating:t,author:s,comment:a}}}(t,s,a,n))},fetchDishes:function(){e((function(e){e(fe(!0)),setTimeout((function(){e(ge(U))}),2e3)}))},resetFeedbackForm:function(){e(C.actions.reset("feedback"))}}}))(Ne)),we=s(27),ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,dishes:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case xe:return Object(Y.a)(Object(Y.a)({},e),{},{isLoading:!1,errMess:null,dishes:t.payload});case ue:return Object(Y.a)(Object(Y.a)({},e),{},{isLoading:!0,errMess:null,dishes:[]});case Oe:return Object(Y.a)(Object(Y.a)({},e),{},{isLoading:!1,errMess:t.payload});default:return e}},Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case be:var s=t.payload;return s.id=e.length,s.date=(new Date).toISOString(),console.log("Comment: ",s),e.concat(s);default:return e}},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;return t.type,e},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;return t.type,e},Fe=s(94),Le=s(95),Se=s.n(Le),Te={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:""},Ee=Object(we.createStore)(Object(we.combineReducers)(Object(Y.a)({dishes:ke,comments:Me,promotions:Ie,leaders:Ce},Object(C.createForms)({feedback:Te}))),Object(we.applyMiddleware)(Fe.a,Se.a)),Ae=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(F.jsx)(me.Provider,{store:Ee,children:Object(F.jsx)(I.a,{children:Object(F.jsx)("div",{className:"App",children:Object(F.jsx)(ye,{})})})})}}]),s}(a.Component),qe=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,183)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,c=t.getTTFB;s(e),a(e),n(e),i(e),c(e)}))};s(152),s(153);c.a.render(Object(F.jsx)(n.a.StrictMode,{children:Object(F.jsx)(Ae,{})}),document.getElementById("root")),qe()}},[[154,1,2]]]);
//# sourceMappingURL=main.63eae07f.chunk.js.map