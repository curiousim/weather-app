(this["webpackJsonpherolo-weather"]=this["webpackJsonpherolo-weather"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){},,,function(e,t,a){var c={"./1.svg":74,"./11.svg":75,"./12.svg":76,"./13.svg":77,"./14.svg":78,"./15.svg":79,"./16.svg":80,"./17.svg":81,"./18.svg":82,"./19.svg":83,"./2.svg":84,"./20.svg":85,"./21.svg":86,"./22.svg":87,"./23.svg":88,"./25.svg":89,"./26.svg":90,"./29.svg":91,"./3.svg":92,"./30.svg":93,"./31.svg":94,"./32.svg":95,"./33.svg":96,"./34.svg":97,"./35.svg":98,"./36.svg":99,"./37.svg":100,"./38.svg":101,"./39.svg":102,"./4.svg":103,"./40.svg":104,"./41.svg":105,"./42.svg":106,"./43.svg":107,"./44.svg":108,"./5.svg":109,"./6.svg":110,"./7.svg":111,"./8.svg":112};function n(e){var t=r(e);return a(t)}function r(e){if(!a.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}n.keys=function(){return Object.keys(c)},n.resolve=r,e.exports=n,n.id=16},,,,,,,,,,,,,,,,function(e,t,a){},,,,,function(e,t,a){e.exports=a(114)},,,,,function(e,t,a){},,,,,,function(e,t,a){},,,,,,,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/1.7f93fbdb.svg"},function(e,t,a){e.exports=a.p+"static/media/11.6da13848.svg"},function(e,t,a){e.exports=a.p+"static/media/12.c8cdb216.svg"},function(e,t,a){e.exports=a.p+"static/media/13.35eb268d.svg"},function(e,t,a){e.exports=a.p+"static/media/14.35eb268d.svg"},function(e,t,a){e.exports=a.p+"static/media/15.7142c78b.svg"},function(e,t,a){e.exports=a.p+"static/media/16.7142c78b.svg"},function(e,t,a){e.exports=a.p+"static/media/17.7142c78b.svg"},function(e,t,a){e.exports=a.p+"static/media/18.d235ab65.svg"},function(e,t,a){e.exports=a.p+"static/media/19.c915395f.svg"},function(e,t,a){e.exports=a.p+"static/media/2.80a5d865.svg"},function(e,t,a){e.exports=a.p+"static/media/20.c915395f.svg"},function(e,t,a){e.exports=a.p+"static/media/21.c915395f.svg"},function(e,t,a){e.exports=a.p+"static/media/22.67d63a14.svg"},function(e,t,a){e.exports=a.p+"static/media/23.b6eea2cf.svg"},function(e,t,a){e.exports=a.p+"static/media/25.c915395f.svg"},function(e,t,a){e.exports=a.p+"static/media/26.d235ab65.svg"},function(e,t,a){e.exports=a.p+"static/media/29.3def7c9f.svg"},function(e,t,a){e.exports=a.p+"static/media/3.b931d84d.svg"},function(e,t,a){e.exports=a.p+"static/media/30.31d6bcb5.svg"},function(e,t,a){e.exports=a.p+"static/media/31.d416343c.svg"},function(e,t,a){e.exports=a.p+"static/media/32.507251e4.svg"},function(e,t,a){e.exports=a.p+"static/media/33.a3f3f38d.svg"},function(e,t,a){e.exports=a.p+"static/media/34.7e65840b.svg"},function(e,t,a){e.exports=a.p+"static/media/35.ef1c6aa1.svg"},function(e,t,a){e.exports=a.p+"static/media/36.ef1c6aa1.svg"},function(e,t,a){e.exports=a.p+"static/media/37.bf91ac0f.svg"},function(e,t,a){e.exports=a.p+"static/media/38.bf91ac0f.svg"},function(e,t,a){e.exports=a.p+"static/media/39.c8cdb216.svg"},function(e,t,a){e.exports=a.p+"static/media/4.b931d84d.svg"},function(e,t,a){e.exports=a.p+"static/media/40.c8cdb216.svg"},function(e,t,a){e.exports=a.p+"static/media/41.7142c78b.svg"},function(e,t,a){e.exports=a.p+"static/media/42.7142c78b.svg"},function(e,t,a){e.exports=a.p+"static/media/43.c915395f.svg"},function(e,t,a){e.exports=a.p+"static/media/44.3def7c9f.svg"},function(e,t,a){e.exports=a.p+"static/media/5.109368f6.svg"},function(e,t,a){e.exports=a.p+"static/media/6.109368f6.svg"},function(e,t,a){e.exports=a.p+"static/media/7.ad789581.svg"},function(e,t,a){e.exports=a.p+"static/media/8.ad789581.svg"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(3),i=a.n(r),s=(a(42),a(13),a(1)),o=a(21),l=a(11),u=Object(l.b)({name:"app",initialState:{fahrenheit:!1,isLoading:!1,currentShow:"home",city:"Tel Aviv",cityId:"215854",favorites:[],forecast:[]},reducers:{setAppIsLoading:function(e,t){e.isLoading=t.payload},setFahrenheit:function(e,t){e.fahrenheit=t.payload},setForecast:function(e,t){e.forecast=t.payload},setShow:function(e,t){e.currentShow=t.payload},addToFavorite:function(e){var t={city:e.city,id:e.cityId};e.favorites=[].concat(Object(o.a)(e.favorites),[t])},removeFavorite:function(e,t){e.favorites=Object(o.a)(e.favorites.filter((function(e){return e.id!==t.payload})))},setCity:function(e,t){e.city=t.payload},setCityId:function(e,t){e.cityId=t.payload}}}),m=function(e){return e.app.fahrenheit},d=function(e){return e.app.currentShow},f=function(e){return e.app.favorites},v=function(e){return e.app.forecast},p=function(e){return e.app.cityId},g=function(e){return e.app.city},h=function(e){return e.app.isLoading},b=u.actions,E=b.setAppIsLoading,w=b.setFahrenheit,O=b.setShow,y=b.addToFavorite,j=b.removeFavorite,x=b.setCity,N=b.setCityId,L=b.setForecast,k=u.reducer;function T(){var e=Object(s.b)(),t=Object(s.c)(m);return n.a.createElement("button",{className:"hbar-temp",onClick:function(){return e(w(!t))}},t?n.a.createElement("span",null,"C\xb0"):n.a.createElement("span",null,"F\xb0"))}function D(){var e=Object(s.b)(),t=Object(s.c)(d);return n.a.createElement("div",{className:"hbar-controls"},n.a.createElement("button",{className:"home"===t?"selected-screen":"screen",onClick:function(){return e(O("home"))}},"Home"),"|",n.a.createElement("button",{className:"favorites"===t?"selected-screen":"screen",onClick:function(){return e(O("favorites"))}},"Favorites"))}function C(){return n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 100 100"},n.a.createElement("circle",{cx:"50",cy:"50",r:"48.5",stroke:"#fff",strokeWidth:"3"}),n.a.createElement("path",{fill:"#fff",d:"M77.514 35.722c-.01-.384-.21-.715-.597-.85l-8.133-2.68c-.097-.047-.24-.043-.337-.04-.384.009-.81.211-.945.599L60.275 51.27c-.09.242-.232.342-.328.344-.144.004-.244-.138-.297-.377l-3.66-16.043c-.109-.525-.648-.992-1.178-1.075l-9.491-1.303-.192.005c-.432.01-.952.36-1.085.794l-6.297 21.186c-.09.242-.183.388-.279.39-.096.003-.195-.139-.25-.425l-4.83-20.672c-.156-.476-.646-.896-1.126-.885l-.048.002-9.44.76a.758.758 0 00-.749.786l.005.192 9.025 35.117c.11.526.648.945 1.177.98l10.327.178.048-.001c.48-.012 1.047-.41 1.179-.894l5.34-19.096c.089-.29.183-.39.279-.391.096-.003.243.138.297.376l4.204 18.67c.108.478.645.85 1.173.836l.048-.001 8.579-.643c.527-.013 1.14-.46 1.32-.945l13.45-33.028c.044-.145.041-.241.038-.385z"}))}var I=a(5);a(48);function S(){return n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"2",clipRule:"evenodd",viewBox:"0 0 20 17"},n.a.createElement("path",{fill:"",d:"M8 1a8 8 0 017.088 11.714l3.623 3.087a1 1 0 11-1.297 1.523l-3.476-2.962A8 8 0 118 1zm0 2a6 6 0 100 12A6 6 0 008 3z",transform:"translate(-63.14 -24.15) translate(63.14 23.143) scale(1.00721)"}))}var F=a(7),R=a.n(F),A=a(6);function M(){var e=Object(s.b)(),t=Object(c.useRef)(null),a=Object(c.useState)(""),r=Object(I.a)(a,2),i=r[0],o=r[1],l=Object(c.useState)([]),u=Object(I.a)(l,2),m=u[0],d=u[1],f=Object(c.useState)(!1),v=Object(I.a)(f,2),p=v[0],g=v[1],h=function(){return g(!1)},b=function(e,t){var a=Object(c.useState)(e),n=Object(I.a)(a,2),r=n[0],i=n[1];return Object(c.useEffect)((function(){var a=setTimeout((function(){i(e)}),t);return function(){clearTimeout(a)}}),[e,t]),r}(i,500),E=Object(A.useToasts)().addToast;return function(e,t){var a=function(a){e.current&&!e.current.contains(a.target)&&t()};Object(c.useEffect)((function(){return document.addEventListener("mousedown",a),function(){document.removeEventListener("mousedown",a)}}))}(t,h),Object(c.useEffect)((function(){b?R()({url:"http://dataservice.accuweather.com/locations/v1/cities/autocomplete",method:"get",params:{apikey:"1EU24RLGj7iLDBCueRlAb5l26LOwusoH",language:"en-us",q:b}}).then((function(e){e.data.length||E("No such city found",{appearance:"warning",autoDismiss:!0}),d(e.data)})).catch((function(e){E("Error while fetching suggestions: ".concat(e.message),{appearance:"warning",autoDismiss:!0})})):d([])}),[b]),n.a.createElement("div",{className:"search-container",ref:t},n.a.createElement(S,null),n.a.createElement("input",{type:"text",value:i,placeholder:"Enter city",onChange:function(e){var t=e.target.value.replace(/[^A-Za-z\s]/gi,"");o(t)},onFocus:function(){return g(!0)},pattern:"[A-Za-z]"}),n.a.createElement("div",{className:"suggestions"},p&&m.map((function(t){return function(t){return n.a.createElement("div",{className:"suggestion",key:t.LocalizedName,onClick:(a=t.LocalizedName,c=t.Key,function(){e(x(a)),e(N(c)),o(""),h()})},t.LocalizedName);var a,c}(t)}))))}function z(){return n.a.createElement("nav",{className:"hbar-container"},n.a.createElement("div",{className:"hbar-logo"},n.a.createElement(C,null)),n.a.createElement(M,null),n.a.createElement("div",{className:"hbar-controls"},n.a.createElement(D,null),n.a.createElement(T,null)))}a(70);function B(e){return(9*e/5+32).toFixed(1)}function P(e){var t=e.customId,a=Object(s.b)(),c=Object(s.c)(f),r=Object(s.c)(p),i=t||r;function o(){return c.filter((function(e){return e.id===i})).length>0}return n.a.createElement("button",{onClick:function(){o()?a(j(i)):a(y())},style:{padding:"1rem"}},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",style:{cursor:"pointer"}},n.a.createElement("path",{fill:o()?"var(--colorRed)":"var(--colorWhite)",fillRule:"evenodd",d:"M12.012 5.572l-1.087-1.087a5.5 5.5 0 10-7.778 7.778l8.839 8.839.002-.002.026.026 8.839-8.839a5.5 5.5 0 10-7.778-7.778l-1.063 1.063zm-.024 12.7l4.936-4.937 1.45-1.4h.002l1.063-1.062a3.5 3.5 0 10-4.95-4.95L12.013 8.4l-.007-.007h-.001L9.511 5.9a3.5 3.5 0 10-4.95 4.95l2.54 2.54.001-.003 4.886 4.886z",clipRule:"evenodd"})))}var V=a(12);a(71);function U(e){var t=Object.assign({},e);return n.a.createElement("div",{id:"loading",className:"wrapper",style:Object(V.a)({},t)},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"element"}),n.a.createElement("div",{className:"element"}),n.a.createElement("div",{className:"element"}),n.a.createElement("div",{className:"element"}),n.a.createElement("div",{className:"element"}),n.a.createElement("div",{className:"element"})))}a(72);function W(e){var t=e.height,a=e.width,c=e.color,r=e.content;return n.a.createElement("div",{className:"placeholder",style:{width:a,height:t,color:c}},r)}function H(e){var t=e.favorite,a=Object(c.useState)(!0),r=Object(I.a)(a,2),i=r[0],o=r[1],l=Object(c.useState)({}),u=Object(I.a)(l,2),d=u[0],f=u[1],v=Object(s.c)(m),p=Object(A.useToasts)().addToast;return Object(c.useEffect)((function(){return o(!0),R()({url:"http://dataservice.accuweather.com/currentconditions/v1/".concat(t.id),method:"get",params:{apikey:"1EU24RLGj7iLDBCueRlAb5l26LOwusoH",language:"en-us"}}).then((function(e){f(e.data[0]),o(!1)})).catch((function(e){o(!1),p("Error while fetching forecast for ".concat(t.city,": ").concat(e.message),{appearance:"warning",autoDismiss:!0})})),function(){f({})}}),[]),n.a.createElement("div",{className:"fav-card"},i?n.a.createElement(U,{width:"19rem",height:"27rem"}):Object.keys(d).length?n.a.createElement("div",{className:"fav-card"},n.a.createElement("div",{className:"card-add-fav"},n.a.createElement(P,{customId:t.id})),n.a.createElement("span",{className:"fav-city"},t.city),n.a.createElement("span",{className:"fav-temp"},v&&Object.keys(d).length?B(d.Temperature.Metric.Value):d.Temperature.Metric.Value),n.a.createElement("span",{className:"fav-text"},d.WeatherText)):n.a.createElement(W,{width:"19rem",height:"27rem",color:"var(--colorBlack)",content:"No data. Please try again."}))}function G(){var e=Object(s.c)(f);return n.a.createElement("div",{className:"favorites-container"},e.map((function(e){return n.a.createElement(H,{key:e.id,favorite:e})})))}a(73),a(32);function q(e){var t=e.forecast,c=Object(s.c)(m),r=new Date(t.Date),i=c?B(t.Temperature.Maximum.Value):t.Temperature.Maximum.Value,o=c?B(t.Temperature.Minimum.Value):t.Temperature.Minimum.Value;return n.a.createElement("div",{className:"card-container"},n.a.createElement("span",{className:"card-date"},r.toLocaleDateString(void 0,{weekday:"long"})),n.a.createElement("div",{className:"card-row"},n.a.createElement("img",{alt:t.Day.IconPhrase,width:"70px",src:a(16)("./".concat(t.Day.Icon,".svg"))}),n.a.createElement("span",{className:"card-temp"},i,"\xb0")),n.a.createElement("div",{className:"card-row"},n.a.createElement("img",{alt:t.Night.IconPhrase,width:"70px",src:a(16)("./".concat(t.Night.Icon,".svg"))}),n.a.createElement("span",{className:"card-temp"},o,"\xb0")))}function J(e){var t=e.temp,a=e.city,c=Object(s.c)(m);return n.a.createElement("div",{className:"big-card"},n.a.createElement("div",{className:"card-add-fav"},n.a.createElement(P,null)),n.a.createElement("span",{className:"bigcard-temp"},c&&t?B(t):t,"\xb0"),n.a.createElement("span",{className:"bigcard-city"},a))}a(113);function K(e){var t=e.forecast;return n.a.createElement("div",{className:"forecast-container"},n.a.createElement("div",{className:"forecast"},t.map((function(e){return n.a.createElement(q,{key:e.Date,forecast:e})}))))}function Z(){var e=Object(s.b)(),t=Object(s.c)(v),r=t[0],i=Object(s.c)(h),o=Object(s.c)(p),l=Object(s.c)(g),u=Object(A.useToasts)().addToast;return function(){var e=Object(s.b)(),t=Object(c.useState)({}),a=Object(I.a)(t,2),n=a[0],r=a[1],i=Object(A.useToasts)().addToast,o=function(e){var t=e.coords;r({latitude:t.latitude,longitude:t.longitude})},l=function(e){i("Error while geolocating: ".concat(e.message),{appearance:"error",autoDismiss:!0})};Object(c.useEffect)((function(){navigator.geolocation.getCurrentPosition(o,l)}),[]),Object(c.useEffect)((function(){e(E(!0)),Object.keys(n).length&&R()({url:"http://dataservice.accuweather.com/locations/v1/cities/geoposition/search",method:"get",params:{apikey:"1EU24RLGj7iLDBCueRlAb5l26LOwusoH",language:"en-us",details:!1,toplevel:!0,q:"".concat(n.latitude,", ").concat(n.longitude)}}).then((function(t){i("According to geolocationa you are in ".concat(t.data.LocalizedName,". Showing weather for your location"),{appearance:"success",autoDismiss:!0}),e(x(t.data.LocalizedName)),e(N(t.data.Key)),e(E(!1))})).catch((function(t){e(E(!1)),i("Error while fetching forecast: ".concat(t.message),{appearance:"warning",autoDismiss:!0})}))}),[n]),Object(V.a)({},n)}(),Object(c.useEffect)((function(){e(E(!0)),R()({url:"http://dataservice.accuweather.com/forecasts/v1/daily/5day/".concat(o),method:"get",params:{apikey:"1EU24RLGj7iLDBCueRlAb5l26LOwusoH",language:"en-us",details:!1,metric:!0}}).then((function(t){e(L(t.data.DailyForecasts)),e(E(!1))})).catch((function(t){e(E(!1)),u("Error while fetching forecast: ".concat(t.message),{appearance:"warning",autoDismiss:!0})}))}),[o]),n.a.createElement("div",{className:"home-container"},i?n.a.createElement(U,{width:"50rem",height:"50rem"}):t.length?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"current"},n.a.createElement(J,{temp:r.Temperature.Maximum.Value,city:l}),n.a.createElement("div",{className:"icon-container"},n.a.createElement("img",{alt:r.Day.IconPhrase,width:"320rem",src:a(16)("./".concat(r.Day.Icon,".svg"))}))),n.a.createElement(K,{forecast:t})):n.a.createElement(W,{width:"50rem",height:"50rem",color:"var(--colorWhite)",content:"No forecast to show. Please enter a city."}))}var _=function(){var e=Object(s.c)(d);return n.a.createElement(A.ToastProvider,null,n.a.createElement("div",{className:"App"},n.a.createElement(z,null),"favorites"===e?n.a.createElement(G,null):n.a.createElement(Z,null)))},$=Object(l.a)({reducer:{app:k}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(s.a,{store:$},n.a.createElement(_,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[37,1,2]]]);
//# sourceMappingURL=main.507b84ab.chunk.js.map