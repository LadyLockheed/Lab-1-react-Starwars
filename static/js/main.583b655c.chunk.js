(this["webpackJsonplab-1-react-starwars"]=this["webpackJsonplab-1-react-starwars"]||[]).push([[0],[,,,,,,function(e,t,a){},,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),l=a.n(c),i=(a(15),a(4)),o=a.n(i),s=a(9),u=a(1),m=a(2),v=(a(6),function(e){var t=e.favorites,a=e.setFavorites,c=Object(n.useState)(!1),l=Object(u.a)(c,2),i=l[0],o=l[1],s=Object(n.useState)(""),v=Object(u.a)(s,2),p=v[0],g=v[1],O=Object(n.useState)(""),N=Object(u.a)(O,2),j=N[0],y=N[1],C=Object(n.useState)(""),w=Object(u.a)(C,2),k=w[0],S=w[1],L=Object(n.useState)(""),A=Object(u.a)(L,2),x=A[0],P=A[1],B=Object(n.useState)(""),_=Object(u.a)(B,2),F=_[0],D=_[1],T=Object(n.useState)(!1),M=Object(u.a)(T,2),R=M[0],W=M[1],Y=Object(n.useState)(!1),I=Object(u.a)(Y,2),H=I[0],V=I[1],G=Object(n.useState)(!1),J=Object(u.a)(G,2),U=J[0],$=J[1],q=Object(n.useState)(!1),z=Object(u.a)(q,2),K=z[0],Q=z[1],X=Object(n.useState)("not-submitted"),Z=Object(u.a)(X,2),ee=Z[0],te=Z[1],ae=t.filter((function(e){return void 0!==e.birth_year})),ne=!0,re=f(p,ae,i),ce=Object(u.a)(re,2),le=ce[0],ie=ce[1],oe=b(j),se=Object(u.a)(oe,2),ue=se[0],me=se[1],ve=d(x),fe=Object(u.a)(ve,2),be=fe[0],de=fe[1],Ee=E(F),he=Object(u.a)(Ee,2),pe=he[0],ge=he[1];h(le,ue,be,pe)&&(ne=!1),Object(n.useEffect)((function(){g(""),P(""),y(""),D(""),W(!1),$(!1),V(!1),Q(!1),console.log("i useEffect")}),[i]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"text",id:"fName",value:p,className:!le&&R?"invalid":"",onBlur:function(){return W(!0)},onChange:function(e){return g(e.target.value)}}),r.a.createElement("strong",{className:"invalid-message"},ie),r.a.createElement("label",null,"Birth year"),r.a.createElement("input",{type:"number",id:"bday",value:j,className:!ue&&H?"invalid":"",onBlur:function(){return V(!0)},onChange:function(e){return y(e.target.value)}}),r.a.createElement("strong",{className:"invalid-message"},me),r.a.createElement("div",{className:"wrapper-era"},r.a.createElement("label",{className:"label-era"},"BBY"),r.a.createElement("input",{type:"radio",name:"swYear",className:"input-era",value:k,onClick:function(){return S("BBY")}}),r.a.createElement("label",{className:"label-era"},"ABY"),r.a.createElement("input",{type:"radio",name:"swYear",className:"input-era",value:k,onClick:function(){return S("ABY")}}),r.a.createElement("strong",{className:"invalid-message"},"")),r.a.createElement("label",null,"Hair color"),r.a.createElement("input",{type:"text",id:"haircolor",value:x,className:!be&&U?"invalid":"",onBlur:function(){return $(!0)},onChange:function(e){return P(e.target.value)}}),r.a.createElement("strong",{className:"invalid-message"},de),r.a.createElement("label",null,"Skin color"),r.a.createElement("input",{type:"text",id:"skincolor",value:F,className:!pe&&K?"invalid":"",onBlur:function(){return Q(!0)},onChange:function(e){return D(e.target.value)}}),r.a.createElement("strong",{className:"invalid-message"},ge),r.a.createElement("button",{className:"submit-button",onClick:function(e){return function(e){e.preventDefault();var n={name:p,birth_year:j+k,hair_color:x,skin_color:F,created:"by-me",favorite:!0},r=[].concat(Object(m.a)(t),[n]);a(r),te("submitted"),o(!0)}(e)},disabled:ne},"Use the force!"),r.a.createElement("h3",{className:ee},"Character added. May the force be with you."))}),f=function(e,t,a){return!a&&t.some((function(t){return t.name===e}))?[!1,"Character with this name already exist"]:e.length<1?[!1,"Need to write a name"]:[!0,""]},b=function(e){return e.length<1?[!1,"Need to write a birthday and pick BBY/ABY"]:[!0,""]},d=function(e){return e.length<1?[!1,"Need to write a haircolor"]:[!0,""]},E=function(e){return e.length<1?[!1,"Need to write a skincolor"]:[!0,""]},h=function(e,t,a,n){return!0===e&&!0===t&&!0===a&&!0===n},p=function(e){var t=e.favorites,a=e.setFavorites,c=Object(n.useState)(!1),l=Object(u.a)(c,2),i=l[0],o=l[1],s=Object(n.useState)(""),v=Object(u.a)(s,2),f=v[0],b=v[1],d=Object(n.useState)(""),E=Object(u.a)(d,2),h=E[0],p=E[1],C=Object(n.useState)(""),w=Object(u.a)(C,2),k=w[0],S=w[1],L=Object(n.useState)(""),A=Object(u.a)(L,2),x=A[0],P=A[1],B=Object(n.useState)(!1),_=Object(u.a)(B,2),F=_[0],D=_[1],T=Object(n.useState)(!1),M=Object(u.a)(T,2),R=M[0],W=M[1],Y=Object(n.useState)(!1),I=Object(u.a)(Y,2),H=I[0],V=I[1],G=Object(n.useState)(!1),J=Object(u.a)(G,2),U=J[0],$=J[1],q=Object(n.useState)("not-submitted"),z=Object(u.a)(q,2),K=z[0],Q=z[1],X=t.filter((function(e){return void 0!==e.terrain})),Z=!0,ee=g(f,X,i),te=Object(u.a)(ee,2),ae=te[0],ne=te[1],re=O(h),ce=Object(u.a)(re,2),le=ce[0],ie=ce[1],oe=N(k),se=Object(u.a)(oe,2),ue=se[0],me=se[1],ve=j(x),fe=Object(u.a)(ve,2),be=fe[0];fe[1];y(ae,le,ue,be)&&(Z=!1),Object(n.useEffect)((function(){b(""),p(""),S(""),P(""),D(!1),W(!1),V(!1),$(!1)}),[i]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"text",id:"fName",value:f,className:!ae&&F?"invalid":"",onBlur:function(){return D(!0)},onChange:function(e){return b(e.target.value)}}),r.a.createElement("strong",{className:"invalid-message"},ne),r.a.createElement("label",null,"Climate"),r.a.createElement("input",{type:"text",id:"hWorld",value:h,className:!le&&R?"invalid":"",onBlur:function(){return W(!0)},onChange:function(e){return p(e.target.value)}}),r.a.createElement("strong",{className:"invalid-message"},ie),r.a.createElement("label",null,"Terrain"),r.a.createElement("input",{type:"text",id:"terrain",value:k,className:!ue&&H?"invalid":"",onBlur:function(){return V(!0)},onChange:function(e){return S(e.target.value)}}),r.a.createElement("strong",{className:"invalid-message"},me),r.a.createElement("label",null,"Gravity"),r.a.createElement("input",{type:"text",id:"gravity",value:x,className:!be&&U?"invalid":"",onBlur:function(){return $(!0)},onChange:function(e){return P(e.target.value)}}),r.a.createElement("strong",{className:"invalid-message"},me),r.a.createElement("button",{className:"submit-button",onClick:function(e){return function(e){e.preventDefault();var n={name:f,climate:h,terrain:k,gravity:x,created:"by-me",favorite:!0},r=[].concat(Object(m.a)(t),[n]);a(r),Q("submitted"),o(!0)}(e)},disabled:Z},"Use the force!"),r.a.createElement("h3",{className:K},"Planet added. May the force be with you."))},g=function(e,t,a){return!a&&t.some((function(t){return t.name===e}))?[!1,"Planet with this name already exist"]:e.length<1?[!1,"Need to write a name"]:[!0,""]},O=function(e){return e.length<1?[!1,"Add something about climate"]:[!0,""]},N=function(e){return e.length<1?[!1,"Add something about terrain"]:[!0,""]},j=function(e){return e.length<1?[!1,"Add something about gravity"]:[!0,""]},y=function(e,t,a,n){return!0===e&&!0===t&&!0===a&&!0===n},C=function(e){var t=e.favorites,a=e.setFavorites,c=Object(n.useState)("character"),l=Object(u.a)(c,2),i=l[0],o=l[1],s=null;switch(i){case"character":s=r.a.createElement(v,{favorites:t,setFavorites:a});break;case"planet":s=r.a.createElement(p,{favorites:t,setFavorites:a});break;default:s=r.a.createElement(v,{favorites:t,setFavorites:a})}return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"formImage"}),r.a.createElement("div",{className:"formContainer"},r.a.createElement("h2",null,"Add your own ",i),r.a.createElement("form",{className:"add-form"},r.a.createElement("div",{className:"category-container"},r.a.createElement("label",{className:"label-for-category"},"Add character"),r.a.createElement("input",{type:"radio",className:"radio",name:"category",value:i,onClick:function(){return o("character")}}),r.a.createElement("label",{className:"label-for-category"},"Add planet"),r.a.createElement("input",{type:"radio",className:"radio",name:"category",value:i,onClick:function(){return o("planet")}})),s)))},w=(a(17),function(e){var t=e.displayPage,a=e.setDisplayPage,n="nav-not-active",c="nav-not-active",l="nav-not-active";function i(e){"SEARCH"===e||"ADD"===e?a(e):"FAVORITES"===e?a("FAVORITES"):"WELCOME"===e&&a("WELCOME")}return"SEARCH"===t?n="nav-active":"ADD"===t?c="nav-active":"FAVORITES"===t&&(l="nav-active"),r.a.createElement("header",null,r.a.createElement("p",{className:"headerLogo",onClick:function(){return i("WELCOME")}},"Star Wars"),r.a.createElement("nav",{className:"navbar"},r.a.createElement("p",{className:n,onClick:function(){return i("SEARCH")}},"Info"),r.a.createElement("p",{className:l,onClick:function(){return i("FAVORITES")}},"Favorites"),r.a.createElement("p",{className:c,onClick:function(){return i("ADD")}},"Create character")))}),k=(a(18),function(e){var t=e.peopleData,a=e.planetsData,c=e.favorites,l=e.setFavorites,i=Object(n.useState)("PEOPLE"),o=Object(u.a)(i,2),s=o[0],v=o[1],f=Object(n.useState)(""),b=Object(u.a)(f,2),d=b[0],E=b[1];function h(e){if(c.some((function(t){return t.name===e.name})))e.favorite=!1,l(c.filter((function(t){return t!==e})));else{e.favorite=!0;var t=[].concat(Object(m.a)(c),[e]);l(t)}}var p=null,g=t.filter((function(e){return e.name.toLowerCase().includes(d.toLowerCase())||e.hair_color.toLowerCase().includes(d.toLowerCase())||e.birth_year.toLowerCase().includes(d.toLowerCase())||e.skin_color.toLowerCase().includes(d.toLowerCase())})).map((function(e){return p=!0===e.favorite?"favorite":"no-favorite",r.a.createElement("div",{key:e.name,className:"card"},r.a.createElement("h2",{className:e.gender},e.name),r.a.createElement("p",null,"Birt hyear: ",e.birth_year),r.a.createElement("p",null,"Hair color: ",e.hair_color),r.a.createElement("p",null,"Skin color: ",e.skin_color),r.a.createElement("div",{className:p,onClick:function(){return h(e)}}))})),O=a.filter((function(e){return e.name.toLowerCase().includes(d.toLowerCase())||e.climate.toLowerCase().includes(d.toLowerCase())||e.terrain.toLowerCase().includes(d.toLowerCase())||e.gravity.toLowerCase().includes(d.toLowerCase())})).map((function(e){return p=!0===e.favorite?"favorite":"no-favorite",r.a.createElement("div",{key:e.name,className:"card"},r.a.createElement("h2",null,e.name),r.a.createElement("p",null,"Climate: ",e.climate),r.a.createElement("p",null,"Terrain: ",e.terrain),r.a.createElement("p",null,"Gravity: ",e.gravity),r.a.createElement("div",{className:p,onClick:function(){return h(e)}}))})),N=null,j="not-active",y="not-active";switch(s){case"PEOPLE":N=g,j="active";break;case"PLANETS":N=O,y="active";break;default:console.log("Sidan hittas ej")}return r.a.createElement("div",{className:"search-comp"},r.a.createElement("div",{className:"buttons-container"},r.a.createElement("button",{className:j,onClick:function(){return v("PEOPLE")}},"People"),r.a.createElement("button",{className:y,onClick:function(){return v("PLANETS")}},"Planets")),r.a.createElement("div",{className:"input-container"},r.a.createElement("div",{className:"image-container"},r.a.createElement("div",{className:"search-image"})),r.a.createElement("input",{className:"searchfield",type:"text",placeholder:"Search and you will find....",value:d,onChange:function(e){return E(e.target.value)}})),r.a.createElement("div",{className:"grid-container"},N,r.a.createElement("button",{className:"to-the-top"},"To the top")))}),S=(a(19),function(e){var t=e.favorites,a=e.setFavorites,c=Object(n.useState)("ALL"),l=Object(u.a)(c,2),i=l[0],o=l[1],s="fav-not-active",m="fav-not-active",v="fav-not-active",f=null,b=t.filter((function(e){return void 0!==e.birth_year})),d=t.filter((function(e){return void 0===e.birth_year})),E=null,h=null,p=null,g=null,O=null,N=null,j=null;switch(i){case"ALL":f=t,s="fav-active";break;case"PEOPLE":f=b,m="fav-active";break;case"PLANETS":f=d,v="fav-active";break;default:f=t,s="fav-active"}var y=f.map((function(e,n){return E="by-me"===e.created?"image-user":"image-globe",void 0!==e.terrain?(h="Climate: ",p="Terrain: ",g="Gravity: ",O=e.climate,N=e.terrain,j=e.gravity):(h="Birth year: ",p="Hair color: ",g="Skin color: ",O=e.birth_year,N=e.hair_color,j=e.skin_color),r.a.createElement("div",{key:e.name+n,className:"card"},r.a.createElement("div",{className:"top-wrapper"},r.a.createElement("h2",null,e.name),r.a.createElement("div",{className:E})),r.a.createElement("p",null,h," ",O),r.a.createElement("p",null,p," ",N),r.a.createElement("p",null,g," ",j),r.a.createElement("div",{className:"favorite",onClick:function(){return(n=e).favorite=!1,void a(t.filter((function(e){return e!==n})));var n}}))}));return 0===t.length?r.a.createElement("div",{className:"nofavv"},"There is no spoon....eh....sorry, wrong movie"):r.a.createElement("div",null,r.a.createElement("div",{className:"button-container-favorites"},r.a.createElement("button",{className:s,onClick:function(){return o("ALL")}},"All"),r.a.createElement("button",{className:m,onClick:function(){return o("PEOPLE")}},"People"),r.a.createElement("button",{className:v,onClick:function(){return o("PLANETS")}},"Planets")),r.a.createElement("div",{className:"grid-container-favorites"},y,null))});a(20);var L=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),i=Object(u.a)(l,2),m=i[0],v=i[1],f=Object(n.useState)("WELCOME"),b=Object(u.a)(f,2),d=b[0],E=b[1],h=Object(n.useState)([{name:"Minion",birth_year:"22bc",hair_color:"black",skin_color:"yellow",created:"n\xe5t datum"},{name:"E.T",birth_year:"1982",hair_color:"none",skin_color:"brown",created:"by-me"},{name:"Earth",terrain:"everything",climate:"warm and cold",gravity:"lagom"}]),p=Object(u.a)(h,2),g=p[0],O=p[1],N=null,j=null;switch(d){case"WELCOME":j=r.a.createElement("div",{className:"welcome-text"},"The information ",r.a.createElement("br",null)," you want,",r.a.createElement("br",null)," we have.");break;case"SEARCH":N=r.a.createElement(k,{peopleData:a,planetsData:m,favorites:g,setFavorites:O});break;case"ADD":N=r.a.createElement(C,{favorites:g,setFavorites:O});break;case"FAVORITES":N=r.a.createElement(S,{favorites:g,setFavorites:O});break;default:console.log("sidan finns ej")}function y(){return(y=Object(s.a)(o.a.mark((function e(){var t,a,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t="https://swapi.dev/api/",a="people",n=o.a.mark((function e(n){var r,l,i,s,u,m,f;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=[],e.next=3,fetch(t+a);case 3:return l=e.sent,e.next=6,l.json();case 6:(i=e.sent).results.forEach((function(e){return e.favorite=!1})),i.results.forEach((function(e){return r.push(e)})),s=i.next,u=2;case 11:if(null==s){e.next=24;break}return e.next=14,fetch(t+a+"/?page="+u);case 14:return m=e.sent,e.next=17,m.json();case 17:f=e.sent,i.results.forEach((function(e){return e.favorite=!1})),f.results.forEach((function(e){return r.push(e)})),u++,s=f.next,e.next=11;break;case 24:"people"===a?c(r):v(r),a="planets";case 26:case"end":return e.stop()}}),e)})),r=0;case 4:if(!(r<=1)){e.next=9;break}return e.delegateYield(n(r),"t0",6);case 6:r++,e.next=4;break;case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){y.apply(this,arguments)}()}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(w,{displayPage:d,setDisplayPage:E}),N,j)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.583b655c.chunk.js.map