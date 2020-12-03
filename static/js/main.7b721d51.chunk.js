(this["webpackJsonpproject-five"]=this["webpackJsonpproject-five"]||[]).push([[0],{20:function(e,t,r){},26:function(e,t,r){},27:function(e,t,r){"use strict";r.r(t);var i=r(1),s=r(3),n=r.n(s),a=r(13),c=r.n(a),o=(r(20),r(14)),l=r(4),d=r(5),h=r(7),j=r(6),b=r(12);r(22);b.a.initializeApp({apiKey:"AIzaSyAo8f5r77oq38Vta1z1rRPsGwNe0L4HKHc",authDomain:"property-4adab.firebaseapp.com",databaseURL:"https://property-4adab.firebaseio.com",projectId:"property-4adab",storageBucket:"property-4adab.appspot.com",messagingSenderId:"233292560511",appId:"1:233292560511:web:539665e9ec9216de07674a"});var p=b.a;var u=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("header",{children:Object(i.jsx)("nav",{children:Object(i.jsx)("p",{children:"Quayne's property management portal"})})})})},m=function(e){Object(h.a)(r,e);var t=Object(j.a)(r);function r(){var e;return Object(l.a)(this,r),(e=t.call(this)).handleClick=function(t){e.props.handleChange(t)},e.state={selectedForm:"search"},e}return Object(d.a)(r,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"wrapper select-form",children:[Object(i.jsx)("h2",{children:"Please select"}),Object(i.jsx)("label",{htmlFor:"search",children:"Search Properties"}),Object(i.jsx)("input",{type:"radio",id:"search",name:"select-form",onClick:this.handleClick,value:"search"}),Object(i.jsx)("span",{children:" | "}),Object(i.jsx)("label",{htmlFor:"add",children:"Add Property"}),Object(i.jsx)("input",{type:"radio",id:"add",name:"select-form",onClick:this.handleClick,value:"add"})]})}}]),r}(s.Component),O=function(e){Object(h.a)(r,e);var t=Object(j.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(d.a)(r,[{key:"render",value:function(){return Object(i.jsx)(s.Fragment,{children:Object(i.jsx)("option",{value:this.props.city,children:this.props.city},this.props.city)})}}]),r}(s.Component),x=function(e){Object(h.a)(r,e);var t=Object(j.a)(r);function r(){var e;return Object(l.a)(this,r),(e=t.call(this)).handleCitySelection=function(t){e.props.filterByCity(t.target.value)},e.state={selectedSortOption:""},e}return Object(d.a)(r,[{key:"render",value:function(){return Object(i.jsx)("div",{children:Object(i.jsxs)("form",{children:[Object(i.jsxs)("div",{className:"input-container",children:[Object(i.jsx)("label",{htmlFor:"city",children:"City name: "}),Object(i.jsx)("select",{name:"city",id:"city",onChange:this.handleCitySelection,children:this.props.cities.map((function(e){return Object(i.jsx)(O,{city:e})}))})]}),Object(i.jsxs)("div",{className:"input-container",children:[Object(i.jsx)("label",{htmlFor:"sort-by",children:"Sort by: "}),Object(i.jsxs)("select",{name:"sort-by",id:"sort-by",onChange:this.handleSortSelection,value:this.state.selectedSortOption,children:[Object(i.jsx)("option",{value:"lowFirst",selected:!0,children:"Price (low - high)"}),Object(i.jsx)("option",{value:"highFirst",children:"Price (high - low)"})]})]})]})})}}]),r}(s.Component),y=function(e){Object(h.a)(r,e);var t=Object(j.a)(r);function r(){var e;return Object(l.a)(this,r),(e=t.call(this)).handleCityChange=function(t){var r=t.target.value.trim();r=r.charAt(0).toUpperCase()+r.slice(1),e.setState({city:r})},e.handleDescriptionChange=function(t){e.setState({address:t.target.value})},e.handleBathroomChange=function(t){e.setState({bathroom:t.target.value})},e.handleBedroomChange=function(t){e.setState({bedroom:t.target.value})},e.handleCostChange=function(t){e.setState({cost:t.target.value.trim()})},e.handleDescriptionChange=function(t){e.setState({description:t.target.value})},e.handleStreetAddress=function(t){e.setState({streetAddress:t.target.value.trim()})},e.handleAddClick=function(t){t.preventDefault(),p.database().ref().push(e.state)},e.state={imageUrl:"./assets/user-image/user-image-1.jpg",isAvailable:!0},e}return Object(d.a)(r,[{key:"render",value:function(){return Object(i.jsx)("div",{children:Object(i.jsxs)("form",{name:"add-property",children:[Object(i.jsx)("input",{type:"hidden",value:"./assets/user-image/user-image-1.jpg"}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{htmlFor:"cost",children:"Cost: "}),Object(i.jsx)("input",{type:"text",onChange:this.handleCostChange,name:"cost",id:"cost",required:!0})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{htmlFor:"street-address",children:"Street Address: "}),Object(i.jsx)("input",{type:"text",onChange:this.handleStreetAddress,name:"street-address",id:"street-address",required:!0})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{htmlFor:"city",children:"City: "}),Object(i.jsx)("input",{type:"text",name:"city",id:"city",onChange:this.handleCityChange,required:!0})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{htmlFor:"bedroom",children:"Bedroom: "}),Object(i.jsx)("input",{type:"number",onChange:this.handleBedroomChange,min:"1",name:"bedroom",id:"bedroom",required:!0})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{htmlFor:"bathroom",children:"Bathroom: "}),Object(i.jsx)("input",{type:"number",onChange:this.handleBathroomChange,min:"1",name:"bathroom",id:"bathroom",required:!0})]}),Object(i.jsx)("div",{children:Object(i.jsxs)("label",{htmlFor:"desc",children:["Description:",Object(i.jsx)("textarea",{id:"desc",onChange:this.handleDescriptionChange,required:!0})]})}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{onClick:this.handleAddClick,type:"submit",children:"Add"})})]})})}}]),r}(s.Component),v=function(e){Object(h.a)(r,e);var t=Object(j.a)(r);function r(){var e;Object(l.a)(this,r);for(var i=arguments.length,s=new Array(i),n=0;n<i;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).handleClick=function(){p.database().ref(e.props.firebaseKey).remove()},e}return Object(d.a)(r,[{key:"render",value:function(){return Object(i.jsxs)("article",{children:[Object(i.jsxs)("div",{className:"top-article",children:[Object(i.jsx)("figure",{children:Object(i.jsx)("img",{src:this.props.imageUrl,alt:"house"})}),Object(i.jsxs)("ul",{className:"details",children:[Object(i.jsxs)("li",{children:["$ ",this.props.cost,"/month"]}),Object(i.jsxs)("li",{children:["Street Address: ",this.props.streetAddress]}),Object(i.jsxs)("li",{children:["City: ",this.props.city]}),Object(i.jsxs)("li",{children:[Object(i.jsxs)("span",{children:["Bedroom: ",this.props.bedroom]})," "]}),Object(i.jsx)("li",{children:Object(i.jsxs)("span",{children:["Bathroom: ",this.props.bathroom]})})]})]}),Object(i.jsxs)("div",{className:"description-container",children:[Object(i.jsx)("h2",{children:"Description"}),Object(i.jsx)("p",{children:this.props.description})]}),Object(i.jsx)("div",{className:"delete-button-container",children:Object(i.jsx)("button",{className:"delete",onClick:this.handleClick,children:"Delete"})})]},this.props.firebaseKey)}}]),r}(s.Component);var f=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("footer",{children:Object(i.jsx)("div",{className:"wrapper",children:Object(i.jsxs)("p",{children:["Copyright \xa9 2020. Created at ",Object(i.jsx)("a",{href:"https://junocollege.com/",children:"Juno College"})," by Quayne Brown."]})})})})},g=(r(26),r.p+"static/media/user-image-2.eabd0405.jpg"),C=function(e){Object(h.a)(r,e);var t=Object(j.a)(r);function r(){var e;return Object(l.a)(this,r),(e=t.call(this)).handleRadioChange=function(t){e.setState({formOption:t.target.value})},e.filterByCity=function(t){var r=Object(o.a)(e.state.properties).filter((function(e){return e.city===t}));e.setState({selectedPropertiesArray:r})},e.state={properties:[],cities:[],selectedPropertiesArray:[],formOption:"search"},e}return Object(d.a)(r,[{key:"componentDidMount",value:function(){var e=this;p.database().ref().on("value",(function(t){var r=t.val(),i=[],s=[];for(var n in r){var a=r[n],c=a.availableDate,o=a.bathroom,l=a.bedroom,d=a.cost,h=a.city,j=a.description,b=a.imageUrl,p=a.isAvailable,u={key:n,availableDate:c,cost:d,bathroom:o,bedroom:l,city:h,streetAddress:a.streetAddress,description:j,imageUrl:b,isAvailable:p};s.includes(h)||s.push(h),i.push(u),e.setState({properties:i,selectedPropertiesArray:i,cities:s})}}))}},{key:"render",value:function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(u,{}),Object(i.jsxs)("main",{children:[Object(i.jsxs)("section",{id:"form-section",className:"form-section",children:[Object(i.jsx)(m,{handleChange:this.handleRadioChange}),Object(i.jsx)("div",{className:"wrapper",children:"search"===this.state.formOption?Object(i.jsx)(x,{filterByCity:this.filterByCity,sortBy:this.sortByPrice,properties:this.state.selectedPropertiesArray,cities:this.state.cities.sort()}):Object(i.jsx)(y,{})})]}),Object(i.jsx)("section",{id:"properties",className:"properties",children:Object(i.jsx)("div",{className:"wrapper",children:this.state.selectedPropertiesArray.map((function(e){return Object(i.jsx)(v,{streetAddress:e.streetAddress,cost:e.cost,city:e.city,bedroom:e.bedroom,bathroom:e.bathroom,imageUrl:g,description:e.description,firebaseKey:e.key},e.key)}))})})]}),Object(i.jsx)(f,{})]})}}]),r}(s.Component),A=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,28)).then((function(t){var r=t.getCLS,i=t.getFID,s=t.getFCP,n=t.getLCP,a=t.getTTFB;r(e),i(e),s(e),n(e),a(e)}))};c.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(C,{})}),document.getElementById("root")),A()}},[[27,1,2]]]);
//# sourceMappingURL=main.7b721d51.chunk.js.map