(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{166:function(e,t,a){"use strict";a.r(t);a(37);var n=a(0),c=a.n(n),r=a(170),i=a(189),o=a(551),l=a(324),s=a(570),m=a(571),u=a(371),d=function(e){var t=e.orders;return e.loading?c.a.createElement(o.a,{active:!0,inline:"centered"}):0===t.length?c.a.createElement(l.a,{warning:!0},c.a.createElement(l.a.Header,null,"No recent orders"),c.a.createElement("p",null,"When you place an order, they will appear here.",c.a.createElement(r.a,{to:"/"},"Go shopping."))):c.a.createElement("div",null,c.a.createElement(s.a,{as:"h1"},"My previous orders"),t.map(function(e){var t=e.id,a=e.billing_address,n=e.shipping_address,r=e.status,i=e.meta,o=e.order_items,l="complete"===r,d=i.display_price.with_tax.formatted;return c.a.createElement(m.a.Group,{key:t},c.a.createElement(m.a,null,c.a.createElement(s.a,{as:"h4"},d),c.a.createElement(u.a,{icon:l?"check":null,color:l?"green":null,content:r.toUpperCase()}),c.a.createElement("pre",null,JSON.stringify(o,"\t",2))),c.a.createElement(m.a.Group,{horizontal:!0},c.a.createElement(m.a,null,c.a.createElement(s.a,{as:"h4"},"Billing address:"),c.a.createElement("p",null,a.line_1,c.a.createElement("br",null),a.line_2,c.a.createElement("br",null),a.city,c.a.createElement("br",null),a.postcode,c.a.createElement("br",null),a.county,c.a.createElement("br",null),a.country)),c.a.createElement(m.a,null,c.a.createElement(s.a,{as:"h4"},"Shipping address:"),c.a.createElement("p",null,n.line_1,c.a.createElement("br",null),n.line_2,c.a.createElement("br",null),n.city,c.a.createElement("br",null),n.postcode,c.a.createElement("br",null),n.county,c.a.createElement("br",null),n.country))))}))},j=a(186),M=a(59),N=a(197);t.default=function(e){var t=e.location,a=Object(n.useState)(!1),o=a[0],l=a[1],s=Object(n.useState)([]),m=s[0],u=s[1],p=Object(n.useState)({}),y=p[0],E=p[1],b=Object(n.useContext)(M.a).token;return Object(n.useEffect)(function(){b||Object(r.b)("/login/"),Object(N.getOrders)(b).then(function(e){var t=e.data,a=e.meta,n=t.map(function(e){return Object.assign({},e)});l(!1),E(a),u(n)}).catch(function(e){console.log(e)})},[b]),c.a.createElement(j.a,{location:t},c.a.createElement(i.a,{title:"My Account"}),c.a.createElement(d,{meta:y,orders:m,loading:o}))}},170:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(4),i=a.n(r),o=a(34),l=a.n(o);a.d(t,"a",function(){return l.a}),a.d(t,"c",function(){return o.withPrefix}),a.d(t,"b",function(){return o.navigate});a(177),c.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},177:function(e,t,a){var n;e.exports=(n=a(183))&&n.default||n},183:function(e,t,a){"use strict";a.r(t);a(37);var n=a(0),c=a.n(n),r=a(4),i=a.n(r),o=a(61),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return c.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},185:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iYWxsLWxvZ29zIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMzE1LjA3Njg1IDMzNy44MTk1Ij48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeDE9IjE0MS4xMDEwOSIgeTE9IjEyMS44OTQyMSIgeDI9IjE2MS45OTk4NSIgeTI9IjIwNC43MTUyMyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMC4wMTA5MyIgc3RvcC1jb2xvcj0iI2U2NzQxNyIvPjxzdG9wIG9mZnNldD0iMC45OTk1MiIgc3RvcC1jb2xvcj0iI2U2MmYxNyIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJOZXdfR3JhZGllbnRfU3dhdGNoIiB4MT0iMTU3LjUzNTA1IiB5MT0iMTQ2LjA4MjE0IiB4Mj0iMTU3LjUzNTA1IiB5Mj0iMjQ0Ljc2MTYxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZjJiYjMwIi8+PHN0b3Agb2Zmc2V0PSIwLjMwOTA1IiBzdG9wLWNvbG9yPSIjZTY3NDE3Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZTYyZjE3Ii8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudC0yIiB4MT0iMTk1LjU5NTA1IiB5MT0iMTg5LjUzOTU5IiB4Mj0iMjAyLjk3NzQxIiB5Mj0iMTU1LjI2NDM2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48dGl0bGU+bGlnaHQtaGV4PC90aXRsZT48cGF0aCBkPSJNMjM2LjMwNzYzLDEyNi40Njc4M2E1LjI1OTMzLDUuMjU5MzMsMCwwLDAtMi42MjczNS00LjU1MzEzbC03My41MTQyMy00Mi40NDNhNS4yNjQyNyw1LjI2NDI3LDAsMCwwLTUuMjU1MjYsMGwtNzMuNTE0MjIsNDIuNDQzYTUuMjU5MzIsNS4yNTkzMiwwLDAsMC0yLjYyNzM2LDQuNTUzMTN2ODQuODg2YTUuMjU1NzQsNS4yNTU3NCwwLDAsMCwyLjYyNzM2LDQuNTUwOTJsNzMuNTE0MjIsNDIuNDQzYTUuMjY0MjEsNS4yNjQyMSwwLDAsMCw1LjI1NTI2LDBsNzMuNTE0MjMtNDIuNDQzYTUuMjU1NzUsNS4yNTU3NSwwLDAsMCwyLjYyNzM1LTQuNTUwOTJaIiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTkxLjYyNTQzLDIxMC40MTI4MmE1Ljk3MjgzLDUuOTcyODMsMCwwLDEtMi45ODY0MS01LjE3MjYxdi00My4wOTZhNDIuNjUxMTIsNDIuNjUxMTIsMCwwLDEsMi4xNTEzNC0xNC41ODY3N2MyLjUwNjctNi43NjYwOCw3LjQ2NDM3LTEzLjM4NTI5LDE3LjI5MTY0LTE3LjI4OTA1LDE4LjgyOTY3LTcuNDc5ODUsMzcuNDQwMjYsMi42MzMyOCw0Ny45NTQxMSwxNy42MjUyNSw4LjgyODI3LDEyLjU4ODQ1LDEzLjk4MDcxLDE3LjU5MzU0LDI1LjA4MTgsMjYuMDkyLDkuODI5NzgsNy41MjUxNyw0MC42NTc2LDIxLjA1OSw0NS4zMjAxMi01Ljg5OHYzNy4xNTI2YTUuOTcyODIsNS45NzI4MiwwLDAsMS0yLjk4NjQyLDUuMTcyNjFsLTYyLjkyNjY4LDM2LjMzMDc0YTUuOTcyODMsNS45NzI4MywwLDAsMS01Ljk3MjgyLDBaIiBmaWxsPSJ1cmwoI2xpbmVhci1ncmFkaWVudCkiLz48cGF0aCBkPSJNOTEuNjI1NDMsMjEwLjQxMjgybDYyLjkyNjY4LDM2LjMzMDc0YTUuOTcyODMsNS45NzI4MywwLDAsMCw1Ljk3MjgyLDBsNjIuOTI2NjgtMzYuMzMwNzRhNS45NzI4Miw1Ljk3MjgyLDAsMCwwLDIuOTg2NDItNS4xNzI2MXYtMzcuMTUyNmMwLTI3LjUxOTU5LTMwLjY5NTM3LTI5Ljc5MTU5LTQ2LjUxNS03LjkyMDA3LTEyLjUzODY1LDE3LjMzNTM1LTE4LjA5MjQ5LDIzLjU0Mi0zNC44NzcxLDI5LjY0NTU0LTE5LjY0MzQ0LDcuMTQzMDctMzcuMjc0ODksMy4yNjk3Mi00Ny4zMDIwNi02LjUzOTQ2QTI5Ljg2ODgzLDI5Ljg2ODgzLDAsMCwxLDg4LjYzOSwxNjIuMTQ0MnY0My4wOTZBNS45NzI4Myw1Ljk3MjgzLDAsMCwwLDkxLjYyNTQzLDIxMC40MTI4MloiIGZpbGw9InVybCgjTmV3X0dyYWRpZW50X1N3YXRjaCkiLz48cGF0aCBkPSJNMjI2LjQzOCwxNjguMDg3NjFjMC0yNy41MTk1Ni0zMC42OTUzNy0yOS43OTE2MS00Ni41MTUwOC03LjkyMDA3LTIuMTc2ODEsMy4wMDk2MS00LjE0MDMyLDUuNjc3MTItNS45OTE0NCw4LjA3MzUzLDIuMTM2MSwxLjgxNDQ4LDQuNDg0MTEsMy42NzU4MSw3LjE4NjM4LDUuNzQ0NTRDMTkwLjk0NzY3LDE4MS41MTA3NywyMjEuNzc1NDcsMTk1LjA0NDYyLDIyNi40MzgsMTY4LjA4NzYxWiIgb3BhY2l0eT0iMC4zIiBmaWxsPSJ1cmwoI2xpbmVhci1ncmFkaWVudC0yKSIvPjwvc3ZnPg=="},186:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(564),i=a(199),o=a.n(i),l=(a(200),a(573)),s=a(170),m=a(569),u=a(325),d=(a(179),function(e){var t=e.cartCount,a=e.name;return c.a.createElement("div",null,c.a.createElement(u.a,{name:"cart"})," "+a+" ",t?t>9?c.a.createElement("span",{style:{fontSize:"smaller"}},"9",c.a.createElement("sup",null,"+")):"("+t+")":"(0)")}),j=a(559),M=a(185),N=a.n(M),p=function(){return c.a.createElement(j.a,{size:"mini",src:N.a,style:{marginRight:"1.5em"},alt:"I love Lamp"})},y=function(e){var t=e.location.pathname,a=e.token,i=e.cartCount,o=e.signout,l=Object(n.useState)(t),j=l[0],M=l[1];return Object(n.useEffect)(function(){M(t)},[t]),c.a.createElement(m.a,{size:"huge",borderless:!0,pointing:!0},c.a.createElement(r.a,{text:!0},c.a.createElement(m.a.Item,{active:j===Object(s.c)("/"),as:s.a,to:"/",header:!0},c.a.createElement(p,null),"Starter Store"),a?c.a.createElement(m.a.Menu,{position:"right"},c.a.createElement(m.a.Item,{as:s.a,to:"/myaccount/",active:j===Object(s.c)("/myaccount/")},c.a.createElement(u.a,{name:"user"}),"My Account"),c.a.createElement(m.a.Item,{onClick:o},"Sign out"),c.a.createElement(m.a.Item,{as:s.a,to:"/cart/",active:j===Object(s.c)("/cart/")},c.a.createElement(d,{cartCount:i,name:"Cart"}))):c.a.createElement(m.a.Menu,{position:"right"},c.a.createElement(m.a.Item,{as:s.a,to:"/register/",active:j===Object(s.c)("/register/")},"Sign up"),c.a.createElement(m.a.Item,{as:s.a,to:"/login/",active:j===Object(s.c)("/login/")},"Sign in"),c.a.createElement(m.a.Item,{as:s.a,to:"/cart/",active:j===Object(s.c)("/cart/")},c.a.createElement(d,{cartCount:i,name:"Cart"})))))},E=a(568),b=a(571),g=a(563),h=a(567),I=a(201),L=Object(I.a)(s.a).withConfig({displayName:"MobileMenu__StyledLink",componentId:"sc-1tjah8l-0"})(["font-weight:bold;text-align:center;font-size:2em;&:hover{text-decoration:underline;}"]),w=Object(I.a)(E.a).withConfig({displayName:"MobileMenu__BurgerButton",componentId:"sc-1tjah8l-1"})(["&&&{font-size:1rem;padding:0.785em 1.5em;box-shadow:0 0 0 1px transparent inset,0 0 0 0 rgba(34,36,38,0.15) inset;}"]),T=Object(I.a)(w).withConfig({displayName:"MobileMenu__CloseButton",componentId:"sc-1tjah8l-2"})(["&&&{position:absolute;top:-4em;right:0em;padding:0.5em;font-size:1.5em;width:2em;height:2em;}"]),f=Object(I.a)(b.a).withConfig({displayName:"MobileMenu__StyledSegment",componentId:"sc-1tjah8l-3"})(["&&&{position:fixed;top:-1em;left:0vw;z-index:1000;width:100vw;height:110vh;}"]),O=I.a.div.withConfig({displayName:"MobileMenu__StyledContainer",componentId:"sc-1tjah8l-4"})(["&&&{margin-top:6em;text-align:center;position:relative;}"]),z=Object(I.a)(g.a).withConfig({displayName:"MobileMenu__StyledDivider",componentId:"sc-1tjah8l-5"})(["&&&{margin:2em;}"]),D=function(e){var t=e.location.pathname,a=e.token,i=e.cartCount,o=e.signout,l=Object(n.useState)(t),j=l[0],M=l[1],N=Object(n.useState)(!1),y=N[0],E=N[1];Object(n.useEffect)(function(){M(t)},[t]);var b=function(){return E(!1)};return c.a.createElement(m.a,{size:"huge",borderless:!0,pointing:!0},c.a.createElement(r.a,{text:!0},c.a.createElement(m.a.Item,{as:s.a,to:"/",header:!0,active:j===Object(s.c)("/")},c.a.createElement(p,null),"Store"),c.a.createElement(m.a.Menu,{position:"right"},c.a.createElement(m.a.Item,{as:s.a,to:"/cart/",active:j===Object(s.c)("/cart/")},c.a.createElement(d,{cartCount:i,name:""})),c.a.createElement(m.a.Item,{position:"right"},c.a.createElement(w,{basic:!0,onClick:function(){return E(!y)},"aria-label":"Open Navigation Menu",autoFocus:!0},c.a.createElement(u.a,{fitted:!0,name:"bars"})))),c.a.createElement(h.a,{closeOnEscape:!0,onClose:b,open:y},c.a.createElement(f,{className:!0,role:"dialog","aria-label":"Navigation Menu"},c.a.createElement(O,null,c.a.createElement(T,{"aria-label":"Close Navigation",basic:!0,circular:!0,onClick:b,autoFocus:!0},"X"),c.a.createElement(L,{to:"/",onClick:b},"Home"),c.a.createElement(z,null),c.a.createElement(L,{to:"/cart/",onClick:b},"Shopping Cart "+(i?"("+i+")":"")),c.a.createElement(z,null),a?[c.a.createElement(L,{to:"/myaccount/",onClick:b,key:1},"My Account"),c.a.createElement(z,{key:2}),c.a.createElement(L,{to:"/",onClick:o,key:3},"Sign out")]:[c.a.createElement(L,{to:"/register/",onClick:b,key:1},"Sign Up"),c.a.createElement(z,{key:2}),c.a.createElement(L,{to:"/login/",onClick:b,key:3},"Sign In")])))))},v=a(59),C=a(60),k=function(e){var t=e.location,a=Object(n.useContext)(C.a).cartCount,r=Object(n.useContext)(v.a),i=r.token,o=r.signOut;return c.a.createElement(c.a.Fragment,null,c.a.createElement(l.a,{maxWidth:l.a.onlyMobile.maxWidth},c.a.createElement(D,{location:t,token:i,cartCount:a,signout:o})),c.a.createElement(l.a,{minWidth:l.a.onlyTablet.minWidth},c.a.createElement(y,{location:t,token:i,cartCount:a,signout:o})))},x=a(572),S=a(570),U=a(565),P=c.a.createElement("a",{href:"https://twitter.com/parmsang",alt:"twitter link"},"Twitter"),Y=c.a.createElement("a",{href:"https://facebook.com/",alt:"facebook link"},"Facebook"),G=c.a.createElement("a",{href:"mailto:john@doe.com",alt:"email link"},"Email"),A=function(){return c.a.createElement(b.a,{vertical:!0,style:{padding:"4em 0em",marginTop:"3em",borderTop:"1px solid #f2f2f2"}},c.a.createElement(r.a,{text:!0},c.a.createElement(x.a,{stackable:!0},c.a.createElement(x.a.Row,null,c.a.createElement(x.a.Column,{width:4},c.a.createElement(S.a,{as:"h4",content:"About"}),c.a.createElement(U.a,null,c.a.createElement(U.a.Item,{as:s.a,to:"/privacy/"},"Privacy"),c.a.createElement(U.a.Item,{as:s.a,to:"/terms/"},"Terms"))),c.a.createElement(x.a.Column,{width:5},c.a.createElement(S.a,{as:"h4",content:"Services"}),c.a.createElement(U.a,null,c.a.createElement(U.a.Item,{as:s.a,to:"/"},"Our Products"))),c.a.createElement(x.a.Column,{width:7},c.a.createElement(S.a,{as:"h4"},"Footer Header"),c.a.createElement("p",null,"Extra space for a call to action inside the footer that could help re-engage users."),c.a.createElement(U.a,{horizontal:!0,style:{display:"flex"}},c.a.createElement(U.a.Item,{icon:"twitter",style:{display:"flex"},content:P}),c.a.createElement(U.a.Item,{icon:"facebook",style:{display:"flex"},content:Y}),c.a.createElement(U.a.Item,{icon:"mail",style:{display:"flex"},content:G})))))))};t.a=function(e){var t=e.location,a=e.children;return c.a.createElement(c.a.Fragment,null,c.a.createElement(o.a,{upTolerance:10,downTolerance:10,style:{zIndex:"20",height:"6.5em"}},c.a.createElement(k,{location:t})),c.a.createElement(r.a,{text:!0},a),c.a.createElement(A,null))}},189:function(e,t,a){"use strict";var n=a(190),c=a(0),r=a.n(c),i=a(4),o=a.n(i),l=a(202),s=a.n(l),m=a(170);function u(e){var t=e.description,a=e.lang,c=e.meta,i=e.keywords,o=e.title,l=n.data.site,u=t||l.siteMetadata.description;return r.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:o},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:u},{name:"msapplication-TileColor",content:"#da532c"},{name:"theme-color",content:"#ffffff"}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(c)},r.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:Object(m.c)("/favicons/apple-touch-icon.png")}),r.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:Object(m.c)("/favicons/favicon-32x32.png")}),r.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:Object(m.c)("/favicons/favicon-16x16.png")}))}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=u},190:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby starter ecommerce",description:"A starter e-commerce site made using Gatsby.",author:"Parminder Sanghera"}}}}},197:function(e,t,a){a(179),a(37);var n=a(84),c=(0,a(229).gateway)({client_id:{}.MOLTIN_CLIENT_ID||"j6hSilXRQfxKohTndUuVrErLcSJWP15P347L6Im0M4"}),r=function(e){var t=e.email,a=e.password;return c.Customers.Token(t,a).then(function(e){var t=e.data;return{id:t.customer_id,token:t.token}})};e.exports={getProducts:function(){return c.Products.With("main_image").All()},getProductById:function(e){return c.Products.With("main_image").Get(e)},addToCart:function(e,t,a){return c.Cart(e).AddProduct(t,a)},getCartItems:function(e){return c.Cart(e).Items()},removeFromCart:function(e,t){return c.Cart(t).RemoveItem(e)},checkoutCart:function(e,t,a){return c.Cart(e).Checkout(t,a)},payForOrder:function(e,t,a){return c.Orders.Payment(e,{gateway:"stripe",method:"purchase",payment:t,options:{receipt_email:a}})},register:function(e){var t=e.email,a=e.password,i=n(e,["email","password"]);return c.Customers.Create(Object.assign({email:t,password:a,type:"customer"},i)).then(function(e){var n=e.data,c=n.name,i=n.id;return r({email:t,password:a}).then(function(e){var a=e.token;return{id:i,name:c,email:t,token:a}})})},login:r,getOrders:function(e){return c.Orders.With("items").All(e)}}},231:function(e,t){},232:function(e,t){},324:function(e,t,a){"use strict";var n=a(58),c=a.n(n),r=a(172),i=a.n(r),o=a(173),l=a.n(o),s=a(174),m=a.n(s),u=a(171),d=a.n(u),j=a(175),M=a.n(j),N=a(36),p=a.n(N),y=a(35),E=a.n(y),b=a(178),g=a.n(b),h=(a(180),a(168)),I=a.n(h),L=(a(4),a(0)),w=a.n(L),T=a(204),f=a(359),O=a(360),z=a(167),D=a(363),v=a(325);function C(e){var t=e.children,a=e.className,n=e.content,r=I()("content",a),i=Object(f.a)(C,e),o=Object(O.a)(C,e);return w.a.createElement(o,c()({},i,{className:r}),z.b.isNil(t)?n:t)}C.handledProps=["as","children","className","content"],C.propTypes={};var k=C;function x(e){var t=e.children,a=e.className,n=e.content,r=I()("header",a),i=Object(f.a)(x,e),o=Object(O.a)(x,e);return w.a.createElement(o,c()({},i,{className:r}),z.b.isNil(t)?n:t)}x.handledProps=["as","children","className","content"],x.propTypes={},x.create=Object(D.e)(x,function(e){return{content:e}});var S=x,U=a(184),P=a.n(U);function Y(e){var t=e.children,a=e.className,n=e.content,r=I()("content",a),i=Object(f.a)(Y,e),o=Object(O.a)(Y,e);return w.a.createElement(o,c()({},i,{className:r}),z.b.isNil(t)?n:t)}Y.handledProps=["as","children","className","content"],Y.propTypes={},Y.defaultProps={as:"li"},Y.create=Object(D.e)(Y,function(e){return{content:e}});var G=Y;function A(e){var t=e.children,a=e.className,n=e.items,r=I()("list",a),i=Object(f.a)(A,e),o=Object(O.a)(A,e);return w.a.createElement(o,c()({},i,{className:r}),z.b.isNil(t)?P()(n,G.create):t)}A.handledProps=["as","children","className","items"],A.propTypes={},A.defaultProps={as:"ul"},A.create=Object(D.e)(A,function(e){return{items:e}});var W=A;a.d(t,"a",function(){return Z});var Z=function(e){function t(){var e,a;i()(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return a=m()(this,(e=d()(t)).call.apply(e,[this].concat(c))),E()(p()(p()(a)),"handleDismiss",function(e){var t=a.props.onDismiss;t&&t(e,a.props)}),a}return M()(t,e),l()(t,[{key:"render",value:function(){var e=this.props,a=e.attached,n=e.children,r=e.className,i=e.color,o=e.compact,l=e.content,s=e.error,m=e.floating,u=e.header,d=e.hidden,j=e.icon,M=e.info,N=e.list,p=e.negative,y=e.onDismiss,E=e.positive,b=e.size,h=e.success,L=e.visible,C=e.warning,x=I()("ui",i,b,Object(T.a)(o,"compact"),Object(T.a)(s,"error"),Object(T.a)(m,"floating"),Object(T.a)(d,"hidden"),Object(T.a)(j,"icon"),Object(T.a)(M,"info"),Object(T.a)(p,"negative"),Object(T.a)(E,"positive"),Object(T.a)(h,"success"),Object(T.a)(L,"visible"),Object(T.a)(C,"warning"),Object(T.b)(a,"attached"),"message",r),U=y&&w.a.createElement(v.a,{name:"close",onClick:this.handleDismiss}),P=Object(f.a)(t,this.props),Y=Object(O.a)(t,this.props);return z.b.isNil(n)?w.a.createElement(Y,c()({},P,{className:x}),U,v.a.create(j,{autoGenerateKey:!1}),(!g()(u)||!g()(l)||!g()(N))&&w.a.createElement(k,null,S.create(u,{autoGenerateKey:!1}),W.create(N,{autoGenerateKey:!1}),Object(D.c)(l,{autoGenerateKey:!1}))):w.a.createElement(Y,c()({},P,{className:x}),U,n)}}]),t}(L.Component);E()(Z,"Content",k),E()(Z,"Header",S),E()(Z,"List",W),E()(Z,"Item",G),E()(Z,"handledProps",["as","attached","children","className","color","compact","content","error","floating","header","hidden","icon","info","list","negative","onDismiss","positive","size","success","visible","warning"]),Z.propTypes={}},551:function(e,t,a){"use strict";var n=a(58),c=a.n(n),r=a(168),i=a.n(r),o=(a(4),a(0)),l=a.n(o),s=a(204),m=a(359),u=a(360),d=a(167);function j(e){var t=e.active,a=e.children,n=e.className,r=e.content,o=e.disabled,M=e.indeterminate,N=e.inline,p=e.inverted,y=e.size,E=i()("ui",y,Object(s.a)(t,"active"),Object(s.a)(o,"disabled"),Object(s.a)(M,"indeterminate"),Object(s.a)(p,"inverted"),Object(s.a)(a||r,"text"),Object(s.b)(N,"inline"),"loader",n),b=Object(m.a)(j,e),g=Object(u.a)(j,e);return l.a.createElement(g,c()({},b,{className:E}),d.b.isNil(a)?r:a)}j.handledProps=["active","as","children","className","content","disabled","indeterminate","inline","inverted","size"],j.propTypes={},t.a=j}}]);
//# sourceMappingURL=component---src-pages-myaccount-js-bcbdba267873b7d1f15e.js.map