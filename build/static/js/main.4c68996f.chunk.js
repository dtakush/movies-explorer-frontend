(this["webpackJsonpmovies-explorer-frontend"]=this["webpackJsonpmovies-explorer-frontend"]||[]).push([[0],{17:function(e,t){e.exports={moviesBaseUrl:"https://api.nomoreparties.co/beatfilm-movies",mainBaseUrl:"https://api.dtakush.diploma.nomoredomains.monster"}},32:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(24),r=n.n(s),i=(n(32),n(21)),o=n.n(i),l=n(25),j=n(18),u=n(9),d=n(2),h=n(3),m=c.a.createContext(),b=n(4),_=n(27),p=n.p+"static/media/logo.8f97642a.svg",O=n(0);var x=function(e){return Object(O.jsx)("section",{className:"nav-popup ".concat(e.isOpen?"nav-popup_open":""),children:Object(O.jsxs)("div",{className:"nav-popup__container",children:[Object(O.jsx)("button",{className:"nav-popup__close-button",onClick:e.onClose}),Object(O.jsxs)("ul",{className:"nav-popup__links",children:[Object(O.jsx)("li",{className:"nav-popup__link",children:Object(O.jsx)(b.c,{to:"/",className:"nav-popup__nav nav-popup__link_main",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),Object(O.jsx)("li",{className:"nav-popup__link",children:Object(O.jsx)(b.c,{to:"/movies",className:"nav-popup__nav nav-popup__link_movies",children:"\u0424\u0438\u043b\u044c\u043c\u044b"})}),Object(O.jsx)("li",{className:"nav-popup__link",children:Object(O.jsx)(b.c,{to:"/saved-movies",className:"nav-popup__nav nav-popup__nav_saved-movies",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0435 \u0444\u0438\u043b\u044c\u043c\u044b"})})]}),Object(O.jsx)("div",{className:"nav-popup__accaunt",children:Object(O.jsxs)(b.c,{to:"/profile",className:"header__link header__profile-link",children:["\u0410\u043a\u043a\u0430\u0443\u043d\u0442",Object(O.jsx)("button",{className:"header__profile-button",type:"button"})]})})]})})};var f=function(e){var t=Object(h.g)(),n=Object(_.useMediaQuery)({query:"(max-width: 1000px)"}),a=c.a.useState(!1),s=Object(d.a)(a,2),r=s[0],i=s[1];return Object(O.jsx)("header",{className:"".concat("/"===t.pathname?"header":"header header_loggedin"),children:Object(O.jsxs)("div",{className:"header__info",children:[Object(O.jsx)(b.c,{to:"/",className:"header__logo",children:Object(O.jsx)("img",{src:p,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u043f\u0440\u043e\u0435\u043a\u0442\u0430"})}),"/"===t.pathname?Object(O.jsxs)("div",{className:"header__nav",children:[Object(O.jsx)(b.c,{to:"/signup",className:"header__link header__signup",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(O.jsx)(b.c,{to:"/signin",className:"header__link header__signin",children:"\u0412\u043e\u0439\u0442\u0438"})]}):Object(O.jsx)(O.Fragment,{children:n?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("button",{className:"header__nav-button",type:"button",onClick:function(){i(!r)}}),Object(O.jsx)(x,{isOpen:r,onClose:function(){i(!1)}})]}):Object(O.jsxs)("div",{className:"header__nav header__nav_loggedin",children:[Object(O.jsxs)("div",{className:"header__links",children:[Object(O.jsx)(b.c,{to:"/movies",className:"header__link header__movies-link",children:"\u0424\u0438\u043b\u044c\u043c\u044b"}),Object(O.jsx)(b.c,{to:"/saved-movies",className:"header__link header__saved-movies-link",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0435 \u0444\u0438\u043b\u044c\u043c\u044b"})]}),Object(O.jsxs)(b.c,{to:"/profile",className:"header__link header__profile-link",children:["\u0410\u043a\u043a\u0430\u0443\u043d\u0442",Object(O.jsx)("button",{className:"header__profile-button",type:"button"})]})]})})]})})};var v=function(e){return Object(O.jsx)("section",{className:"promo",children:Object(O.jsx)("div",{className:"promo__image",children:Object(O.jsx)("h1",{className:"promo__title",children:"\u0423\u0447\u0435\u0431\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430 \u0444\u0430\u043a\u0443\u043b\u044c\u0442\u0435\u0442\u0430 \u0412\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438."})})})};var N=function(e){return Object(O.jsxs)("section",{className:"nav-tab",children:[Object(O.jsx)("a",{href:"#project",className:"nav-tab__link",rel:"noreferrer",children:"\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435"}),Object(O.jsx)("a",{href:"#techs",className:"nav-tab__link",rel:"noreferrer",children:"\u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438"}),Object(O.jsx)("a",{href:"#me",className:"nav-tab__link",rel:"noreferrer",children:"\u0421\u0442\u0443\u0434\u0435\u043d\u0442"})]})};var g=function(e){return Object(O.jsx)("div",{className:"subtitle-block",children:Object(O.jsx)("h3",{className:"subtitle",children:e.subtitle})})};var k=function(e){return Object(O.jsx)("section",{id:"project",className:"about-project",children:Object(O.jsxs)("div",{className:"about-project__container",children:[Object(O.jsx)(g,{subtitle:"\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435"}),Object(O.jsxs)("div",{className:"about-project__text-container",children:[Object(O.jsxs)("article",{className:"about-project__text-block",children:[Object(O.jsx)("h4",{className:"about-project__subtitle",children:"\u0414\u0438\u043f\u043b\u043e\u043c\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u0432\u043a\u043b\u044e\u0447\u0430\u043b 5 \u044d\u0442\u0430\u043f\u043e\u0432"}),Object(O.jsx)("p",{className:"about-project__text",children:"\u0421\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043b\u0430\u043d\u0430, \u0440\u0430\u0431\u043e\u0442\u0443 \u043d\u0430\u0434 \u0431\u044d\u043a\u0435\u043d\u0434\u043e\u043c, \u0432\u0451\u0440\u0441\u0442\u043a\u0443, \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0438 \u0444\u0438\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u043e\u0440\u0430\u0431\u043e\u0442\u043a\u0438."})]}),Object(O.jsxs)("article",{className:"about-project__text-block",children:[Object(O.jsx)("h4",{className:"about-project__subtitle",children:"\u041d\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0434\u0438\u043f\u043b\u043e\u043c\u0430 \u0443\u0448\u043b\u043e 5 \u043d\u0435\u0434\u0435\u043b\u044c"}),Object(O.jsx)("p",{className:"about-project__text",children:"\u0423 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u044d\u0442\u0430\u043f\u0430 \u0431\u044b\u043b \u043c\u044f\u0433\u043a\u0438\u0439 \u0438 \u0436\u0451\u0441\u0442\u043a\u0438\u0439 \u0434\u0435\u0434\u043b\u0430\u0439\u043d, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0443\u0436\u043d\u043e \u0431\u044b\u043b\u043e \u0441\u043e\u0431\u043b\u044e\u0434\u0430\u0442\u044c, \u0447\u0442\u043e\u0431\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0449\u0438\u0442\u0438\u0442\u044c\u0441\u044f."})]})]}),Object(O.jsxs)("div",{className:"about-project__line-container",children:[Object(O.jsx)("div",{className:"about-project__line about-project__color-line",children:"1 \u043d\u0435\u0434\u0435\u043b\u044f"}),Object(O.jsx)("div",{className:"about-project__line about-project__grey-line",children:"4 \u043d\u0435\u0434\u0435\u043b\u0438"}),Object(O.jsx)("p",{className:"about-project__line-text",children:"Back-end"}),Object(O.jsx)("p",{className:"about-project__line-text",children:"Front-end"})]})]})})};var S=function(e){return Object(O.jsx)("section",{id:"techs",className:"techs",children:Object(O.jsxs)("div",{className:"techs__conteiner",children:[Object(O.jsx)(g,{subtitle:"\u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438"}),Object(O.jsx)("h2",{className:"techs__title",children:"7 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0439"}),Object(O.jsx)("p",{className:"techs__subtitle",children:"\u041d\u0430 \u043a\u0443\u0440\u0441\u0435 \u0432\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043c\u044b \u043e\u0441\u0432\u043e\u0438\u043b\u0438 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043b\u0438 \u0432 \u0434\u0438\u043f\u043b\u043e\u043c\u043d\u043e\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435."}),Object(O.jsxs)("div",{className:"techs__blocks",children:[Object(O.jsx)("div",{className:"techs__block",children:"HTML"}),Object(O.jsx)("div",{className:"techs__block",children:"CSS"}),Object(O.jsx)("div",{className:"techs__block",children:"JS"}),Object(O.jsx)("div",{className:"techs__block",children:"React"}),Object(O.jsx)("div",{className:"techs__block",children:"Git"}),Object(O.jsx)("div",{className:"techs__block",children:"Express.js"}),Object(O.jsx)("div",{className:"techs__block",children:"mongoDB"})]})]})})};var w=function(e){return Object(O.jsx)("section",{id:"me",className:"about-me",children:Object(O.jsxs)("div",{className:"about-me__conteiner",children:[Object(O.jsx)(g,{subtitle:"\u0421\u0442\u0443\u0434\u0435\u043d\u0442"}),Object(O.jsxs)("div",{className:"about-me__block",children:[Object(O.jsxs)("div",{className:"about-me__text-block",children:[Object(O.jsx)("h4",{className:"about-me__title",children:"\u0414\u0430\u0440\u044c\u044f"}),Object(O.jsx)("p",{className:"about-me__subtitle",children:"\u0424\u0440\u043e\u043d\u0442\u0435\u043d\u0434-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a, 28 \u043b\u0435\u0442"}),Object(O.jsx)("p",{className:"about-me__text",children:"\u041f\u0440\u0438\u0432\u0435\u0442, \u043c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442 \u0414\u0430\u0448\u0430 \u0438 \u0442\u0430\u043a \u0432\u044b\u0448\u043b\u043e, \u0447\u0442\u043e \u044f \u0434\u0438\u0437\u0430\u0439\u043d\u0435\u0440. \u0411\u043e\u043b\u044c\u0448\u0435 \u0447\u0435\u043c \u0437\u0430 \u0441\u0435\u043c\u044c \u043b\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u044b, \u044f \u0443\u0441\u043f\u0435\u043b\u0430 \u043f\u043e\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043a\u0430\u043a \u0441 \u043c\u043e\u043d\u0441\u0442\u0440\u0430\u043c\u0438 \u0440\u044b\u043d\u043a\u0430, \u0442\u0430\u043a \u0438 \u043f\u043e\u043c\u043e\u0447\u044c \u0432 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0438 \u043a\u0440\u0430\u0441\u043e\u0442\u044b \u0438 \u043f\u043e\u0440\u044f\u0434\u043a\u0430 \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u043c \u0431\u0440\u0435\u043d\u0434\u0430\u043c."}),Object(O.jsxs)("div",{className:"about-me__links",children:[Object(O.jsx)("a",{className:"about-me__link",href:"https://www.facebook.com/dashatakush",target:"_blank",rel:"noreferrer",children:"Facebook"}),Object(O.jsx)("a",{className:"about-me__link",href:"https://github.com/dtakush",target:"_blank",rel:"noreferrer",children:"GitHub"}),Object(O.jsx)("a",{className:"about-me__link",href:"https://www.instagram.com/dariatakush/",target:"_blank",rel:"noreferrer",children:"Instagram"})]})]}),Object(O.jsx)("div",{className:"about-me__photo"})]}),Object(O.jsx)("h5",{className:"about-me__portfolio",children:"\u041f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e"}),Object(O.jsxs)("a",{className:"about-me__web-link",href:"https://github.com/dtakush/how-to-learn.git",target:"_blank",rel:"noreferrer",children:[Object(O.jsx)("p",{className:"about-me__web-link_title",children:"\u0421\u0442\u0430\u0442\u0438\u0447\u043d\u044b\u0439 \u0441\u0430\u0439\u0442"}),Object(O.jsx)("div",{className:"about-me__web-link_arrow"})]}),Object(O.jsxs)("a",{className:"about-me__web-link",href:"https://github.com/dtakush/mesto.git",target:"_blank",rel:"noreferrer",children:[Object(O.jsx)("p",{className:"about-me__web-link_title",children:"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u044b\u0439 \u0441\u0430\u0439\u0442"}),Object(O.jsx)("div",{className:"about-me__web-link_arrow"})]}),Object(O.jsxs)("a",{className:"about-me__web-link",href:"https://github.com/dtakush/react-mesto-api-full.git",target:"_blank",rel:"noreferrer",children:[Object(O.jsx)("p",{className:"about-me__web-link_title",children:"\u041e\u0434\u043d\u043e\u0441\u0442\u0440\u0430\u043d\u0438\u0447\u043d\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"}),Object(O.jsx)("div",{className:"about-me__web-link_arrow"})]})]})})};var y=function(e){return Object(O.jsx)("section",{className:"footer",children:Object(O.jsxs)("div",{className:"footer__container",children:[Object(O.jsx)("p",{className:"footer__disclaimer",children:"\u0423\u0447\u0435\u0431\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c \u0445 BeatFilm."}),Object(O.jsx)("div",{className:"footer__line"}),Object(O.jsxs)("div",{className:"footer__block",children:[Object(O.jsx)("p",{className:"footer__date",children:"\xa9 2021"}),Object(O.jsxs)("ul",{className:"footer__links",children:[Object(O.jsx)("li",{className:"footer__link",children:Object(O.jsx)("a",{className:"footer__text",href:"https://practicum.yandex.ru/",target:"_blank",rel:"noreferrer",children:"\u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c"})}),Object(O.jsx)("li",{className:"footer__link",children:Object(O.jsx)("a",{className:"footer__text",href:"https://github.com/yandex-praktikum",target:"_blank",rel:"noreferrer",children:"Github"})}),Object(O.jsx)("li",{className:"footer__link",children:Object(O.jsx)("a",{className:"footer__text",href:"https://www.facebook.com/yandex.practicum",target:"_blank",rel:"noreferrer",children:"Facebook"})})]})]})]})})};var C=function(e){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(f,{}),Object(O.jsx)(v,{}),Object(O.jsx)(N,{}),Object(O.jsx)(k,{}),Object(O.jsx)(S,{}),Object(O.jsx)(w,{}),Object(O.jsx)(y,{})]})};var I=function(e){return Object(O.jsxs)("div",{className:"checkbox",children:[Object(O.jsx)("p",{className:"checkbox__text",children:"\u041a\u043e\u0440\u043e\u0442\u043a\u043e\u043c\u0435\u0442\u0440\u0430\u0436\u043a\u0438"}),Object(O.jsxs)("label",{className:"checkbox__container",children:[Object(O.jsx)("input",{type:"checkbox",value:"None",id:"filter",name:"check",className:"checkbox__input",onChange:e.onCheck,checked:e.shortMovie}),Object(O.jsx)("i",{className:"checkbox__indicator"})]})]})};var U=function(e){var t=c.a.useState(""),n=Object(d.a)(t,2),a=n[0],s=n[1];return Object(O.jsx)("section",{className:"searchform",children:Object(O.jsxs)("div",{className:"searchform__container",children:[Object(O.jsxs)("form",{className:"searchform__form",onSubmit:function(t){t.preventDefault(),e.onSearch(a)},noValidate:!0,children:[Object(O.jsx)("input",{onChange:function(e){s(e.target.value)},value:a||"",id:"search",type:"text",className:"searchform__input",placeholder:"\u0424\u0438\u043b\u044c\u043c",required:!0}),Object(O.jsx)("button",{className:"searchform__button",type:"submit",children:Object(O.jsx)("div",{className:"searchform__button_pic"})})]}),Object(O.jsx)(I,{onCheck:e.onCheck,shortMovie:e.shortMovie})]})})};var E=function(e){var t=Object(h.g)(),n=e.isSaved(e.movie);function a(t){t.preventDefault(),e.onDelete(e.movie)}return Object(O.jsxs)("div",{className:"card",children:[Object(O.jsxs)("div",{className:"card__menu",children:[Object(O.jsxs)("div",{className:"card__text",children:[Object(O.jsx)("h5",{className:"card__title",children:e.movie.nameRU}),Object(O.jsx)("p",{className:"card__duraton",children:function(e){var t=Math.trunc(e/60),n=e%60;return"".concat(t>0?"".concat(t,"\u0447 "):"").concat(n,"\u043c")}(e.movie.duration)})]}),"/movies"===t.pathname&&!n&&Object(O.jsx)("button",{className:"card__save-button",onClick:function(t){t.preventDefault(),e.onSave(e.movie)},children:Object(O.jsx)("div",{className:"card__save-icon"})}),"/movies"===t.pathname&&n&&Object(O.jsx)("button",{className:"card__save-button card__save-button_active",onClick:a,children:Object(O.jsx)("div",{className:"card__save-icon card__save-icon_active"})}),"/saved-movies"===t.pathname&&Object(O.jsx)("button",{className:"card__save-button",onClick:a,children:Object(O.jsx)("div",{className:"card__save-icon_saved"})})]}),Object(O.jsx)("a",{className:"card__trailer-link",href:e.trailer,target:"_blank",rel:"noreferrer",children:Object(O.jsx)("div",{className:"card__image",style:{backgroundImage:"url(https://api.nomoreparties.co".concat(e.movie.image.url,")")}})})]})};var L=function(e){var t=Object(h.g)(),n=c.a.useState(12),a=Object(d.a)(n,2),s=a[0],r=a[1],i=c.a.useState(3),o=Object(d.a)(i,2),l=o[0],j=o[1],u=c.a.useState(0),m=Object(d.a)(u,2),b=m[0],_=m[1];return c.a.useEffect((function(){function e(){_(window.innerWidth)}window.addEventListener("resize",e),e()}),[]),c.a.useEffect((function(){b>1279?(r(12),j(3)):b<1279&&b>810?(r(8),j(2)):b<810&&b>319&&(r(5),j(5))}),[b]),Object(O.jsxs)("section",{className:"movies-cards",children:[Object(O.jsx)("div",{className:"movies-cards__container",children:e.cards.slice(0,s).map((function(t){return Object(O.jsx)(E,{movie:t,trailer:t.trailerLink,onSave:e.onSave,onDelete:e.onDelete,isSaved:e.isSaved},t.id)}))}),e.cards.length>=s?Object(O.jsx)("button",{type:"button",onClick:function(){return r(s+l)},className:"".concat("/movies"===t.pathname?"movies-cards__more-button":"movies-cards__more-button_saved"),children:" \u0415\u0449\u0435 "}):""]})},T=(n(43),function(){return Object(O.jsx)("div",{className:"preloader",children:Object(O.jsx)("div",{className:"preloader__container",children:Object(O.jsx)("span",{className:"preloader__round"})})})});var R=function(e){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(f,{}),Object(O.jsx)(U,{onSearch:e.onSearch,onCheck:e.onCheck,shortMovie:e.shortMovie}),e.isLoading&&Object(O.jsx)(T,{}),Object(O.jsx)(L,{cards:e.cards,hideButton:e.hideButton,noResult:e.noResult,onSave:e.onSave,onDelete:e.onDelete,isSaved:e.isSaved}),Object(O.jsx)(y,{})]})};var M=function(e){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(f,{}),Object(O.jsx)(U,{}),Object(O.jsx)(L,{}),Object(O.jsx)(y,{})]})},F=n(13);var D=function(){var e=Object(a.useState)({name:"",email:"",password:""}),t=Object(d.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)({}),r=Object(d.a)(s,2),i=r[0],o=r[1],l=Object(a.useState)(!1),j=Object(d.a)(l,2),h=j[0],m=j[1],b=Object(a.useCallback)((function(e){var t=e.target,n=t.name,a=t.value;c((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(F.a)({},n,a))})),o((function(t){return Object(u.a)(Object(u.a)({},t),{},Object(F.a)({},n,e.target.validationMessage))})),m(e.target.closest("form").checkValidity())}),[c]),_=Object(a.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];c(e),o(t),m(n)}),[c,o,m]);return{formValues:n,setFormValues:c,errors:i,isInputValid:h,setIsInputValid:m,resetForm:_,handleInputChange:b}};var V=function(e){var t=c.a.useContext(m),n=D(t),a=n.formValues,s=n.errors,r=n.isInputValid,i=n.resetForm,o=n.handleInputChange,l="".concat(r?"profile__button profile__edit-button":"profile__button profile__edit-button profile__edit-button_disabled");return Object(O.jsxs)("section",{className:"profile",children:[Object(O.jsx)(f,{}),Object(O.jsxs)("div",{className:"profile__container",children:[Object(O.jsxs)("h2",{className:"profile__hello",children:["\u041f\u0440\u0438\u0432\u0435\u0442, ",t.name,"!"]}),Object(O.jsxs)("form",{className:"profile__form",onSubmit:function(t){t.preventDefault(),e.onUpdateUser(a),i()},noValidate:!0,children:[Object(O.jsxs)("div",{className:"profile__edit-block profile__edit-name",children:[Object(O.jsxs)("div",{className:"profile__edit-text-block",children:[Object(O.jsx)("p",{className:"profile__edit-text",children:"\u0418\u043c\u044f"}),Object(O.jsx)("input",{className:"profile__user-text",id:"name",minLength:"3",name:"name",type:"text",placeholder:t.name,value:a.name||"",onChange:o,required:!0})]}),Object(O.jsx)("span",{className:"profile__input-error",id:"profile__input-name-error",children:s.name})]}),Object(O.jsxs)("div",{className:"profile__edit-block profile__edit-email",children:[Object(O.jsxs)("div",{className:"profile__edit-text-block",children:[Object(O.jsx)("p",{className:"profile__edit-text",children:"E-mail"}),Object(O.jsx)("input",{className:"profile__user-text",id:"name",minLength:"3",name:"email",type:"email",placeholder:t.email,value:a.email||"",onChange:o,required:!0})]}),Object(O.jsx)("span",{className:"profile__input-error",id:"profile__input-email-error",children:s.email})]}),Object(O.jsx)("button",{className:l,type:"submit",children:r?"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"}),Object(O.jsx)("button",{onClick:e.onSignOut,className:"profile__button profile__exit-button",type:"button",children:"\u0412\u044b\u0439\u0442\u0438 \u0438\u0437 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430"})]})]})]})};var B=function(e){var t=Object(h.g)();return Object(O.jsxs)("div",{className:"entrance__container",children:[Object(O.jsx)(b.b,{to:"/",className:"entrance__logo",children:Object(O.jsx)("img",{src:p,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u043f\u0440\u043e\u0435\u043a\u0442\u0430"})}),Object(O.jsx)("h3",{className:"entrance__hello",children:e.title}),Object(O.jsxs)("form",{className:"entrance__form",id:"".concat(e.name,"-form"),onSubmit:e.onSubmit,children:[e.children,Object(O.jsx)("button",{className:"".concat("/signin"===t.pathname?"entrance__button entrance__button-login":"entrance__button"),type:"submit",id:"entrance__submit",children:e.buttonText})]}),Object(O.jsxs)("div",{className:"entrance__come-in",children:[Object(O.jsx)("p",{className:"entrance__text",children:e.entranceText}),Object(O.jsx)(b.b,{to:"".concat("/signin"===t.pathname?"/signup":"/signin"),className:"".concat("/signin"===t.pathname?"entrance__link entrance__signin-link":"entrance__link entrance__signup-link"),children:e.entranceLink})]})]})};var A=function(e){var t=D(),n=t.formValues,a=n.name,c=n.email,s=n.password;return Object(O.jsx)("section",{className:"register",children:Object(O.jsxs)(B,{name:"register",title:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c!",buttonText:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",entranceText:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",entranceLink:"\u0412\u043e\u0439\u0442\u0438",onSubmit:function(t){t.preventDefault(),e.onRegister({name:a,email:c,password:s})},children:[Object(O.jsx)("p",{className:"entrance__form-text",children:"\u0418\u043c\u044f"}),Object(O.jsx)("input",{name:"name",id:"register-name",className:"entrance__input entrance__input-name",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",type:"text",required:!0,minLength:"3",value:t.formValues.name||"",onChange:t.handleInputChange}),Object(O.jsx)("span",{className:"entrance__input-error",id:"entrance__input-name-error",children:t.errors.name}),Object(O.jsx)("p",{className:"entrance__form-text",children:"E-mail"}),Object(O.jsx)("input",{name:"email",id:"register-email",className:"entrance__input entrance__input-email",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u044e \u043f\u043e\u0447\u0442\u0443",type:"email",required:!0,value:t.formValues.email||"",onChange:t.handleInputChange}),Object(O.jsx)("span",{className:"entrance__input-error",id:"entrance__input-email-error",children:t.errors.email}),Object(O.jsx)("p",{className:"entrance__form-text",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(O.jsx)("input",{name:"password",id:"register-password",className:"entrance__input entrance__input-password",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",type:"password",required:!0,minLength:"5",value:t.formValues.password||"",onChange:t.handleInputChange}),Object(O.jsx)("span",{className:"entrance__input-error",id:"register-password-error",children:t.errors.password})]})})};var J=function(e){var t=D(),n=t.formValues,a=n.email,c=n.password;return Object(O.jsx)("section",{className:"login",children:Object(O.jsxs)(B,{name:"login",title:"\u0420\u0430\u0434\u044b \u0432\u0438\u0434\u0435\u0442\u044c!",buttonText:"\u0412\u043e\u0439\u0442\u0438",entranceText:"\u0415\u0449\u0451 \u043d\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",entranceLink:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",onSubmit:function(t){t.preventDefault(),e.onLogin({email:a,password:c})},children:[Object(O.jsx)("p",{className:"entrance__form-text",children:"E-mail"}),Object(O.jsx)("input",{name:"email",id:"login-email",className:"entrance__input entrance__input-email",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u044e \u043f\u043e\u0447\u0442\u0443",type:"email",required:!0,value:t.formValues.email||"",onChange:t.handleInputChange}),Object(O.jsx)("span",{className:"entrance__input-error",id:"login-email-error",children:t.errors.email}),Object(O.jsx)("p",{className:"entrance__form-text",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(O.jsx)("input",{name:"password",id:"login-password",className:"entrance__input entrance__input-password",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",type:"password",required:!0,minLength:"5",value:t.formValues.password||"",onChange:t.handleInputChange}),Object(O.jsx)("span",{className:"entrance__input-error",id:"login-password-error",children:t.errors.password})]})})};var q=function(e){var t=Object(h.f)();return Object(O.jsxs)("section",{className:"not-found",children:[Object(O.jsxs)("div",{className:"not-found__container",children:[Object(O.jsx)("h1",{className:"not-found__title",children:"404"}),Object(O.jsx)("p",{className:"not-found__subtitle",children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"})]}),Object(O.jsx)("button",{className:"not-found__button",type:"button",onClick:function(){return t.goBack()},children:"\u041d\u0430\u0437\u0430\u0434"})]})},P=n(15),G=n(16),z=n(17),H=new(function(){function e(t){var n=t.baseUrl,a=t.headers;Object(P.a)(this,e),this.baseUrl=n,this.headers=a}return Object(G.a)(e,[{key:"getInitialCards",value:function(){return fetch("".concat(this.baseUrl),{method:"GET",headers:this.headers}).then(this._checkResponse)}},{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}}]),e}())({baseUrl:z.moviesBaseUrl,headers:{Accept:"application/json","Content-Type":"application/json"}}),Q=new(function(){function e(t){var n=t.baseUrl,a=t.headers;Object(P.a)(this,e),this.baseUrl=n,this.headers=a}return Object(G.a)(e,[{key:"getUserInfo",value:function(){return fetch("".concat(this.baseUrl,"/users/me"),{method:"GET",headers:this.headers}).then(this._checkResponse)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e.name,email:e.email})}).then(this._checkResponse)}},{key:"saveMovie",value:function(e){return fetch("".concat(this.baseUrl,"/movies"),{method:"POST",headers:this.headers,body:JSON.stringify({movieId:e.id||0,nameRU:e.nameRU||"no name",nameEN:e.nameEN||"no english name",director:e.director||"no director",description:e.description||"no description",trailer:e.trailerLink||"https://www.youtube.com/channel/UCng_jFvloTT9v7JlSwi_qSQ",country:e.country||"no country",duration:e.duration||0,year:e.year||"no year",image:"https://api.nomoreparties.co".concat(e.image.url),thumbnail:"https://api.nomoreparties.co".concat(e.image.formats.thumbnail.url)})})}},{key:"deleteMovie",value:function(e){return fetch("".concat(this.baseUrl,"/movies/").concat(e),{method:"DELETE",headers:this.headers}).then(this._checkResponse)}},{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}}]),e}())({baseUrl:z.mainBaseUrl,headers:{Accept:"application/json",Authorization:"Bearer ".concat(localStorage.getItem("jwt")),"Content-Type":"application/json"}}),W="https://api.dtakush.diploma.nomoredomains.monster";var K=function(){var e=Object(h.f)(),t=c.a.useState(!1),n=Object(d.a)(t,2),a=n[0],s=n[1],r=c.a.useState({}),i=Object(d.a)(r,2),b=i[0],_=i[1],p=c.a.useState([]),x=Object(d.a)(p,2),f=x[0],v=x[1],N=c.a.useState([]),g=Object(d.a)(N,2),k=g[0],S=g[1],w=c.a.useState(!1),y=Object(d.a)(w,2),I=y[0],U=y[1],E=c.a.useState(!1),L=Object(d.a)(E,2),T=L[0],F=L[1],D=c.a.useState(!1),B=Object(d.a)(D,2),P=B[0],G=B[1],z=c.a.useState([]),K=Object(d.a)(z,2),X=K[0],Y=K[1],Z=c.a.useState(!1),$=Object(d.a)(Z,2),ee=$[0],te=$[1];function ne(){var t,n=localStorage.getItem("jwt");n&&(t=n,fetch("".concat(W,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){if(200===e.status)return e.json();400===e.status&&console.log("\u0422\u043e\u043a\u0435\u043d \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043d\u0435 \u0432 \u0442\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435"),401===e.status&&console.log("\u041f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0439 \u0442\u043e\u043a\u0435\u043d \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u0435\u043d")})).then((function(e){return e})).catch((function(e){return console.log(e)}))).then((function(t){if(!t)return s(!1),void e.push("/");s(!0),_(t)})).catch((function(t){console.log("Attention! ".concat(t)),e.push("/signin")}))}c.a.useEffect((function(){ne()}),[]),c.a.useEffect((function(){a&&Q.getUserInfo().then((function(e){_(e)})).catch((function(e){console.log("Attention! ".concat(e))}))}),[a]);var ae=function(e){return X.some((function(t){return t.id===e.id}))};function ce(e){console.log(e),Q.deleteMovie(e.id).then((function(e){var t=X.filter((function(t){return t._id!==e._id}));Y(t)})).catch((function(e){console.log("Attention! ".concat(e))}))}function se(){G(!0),setTimeout(Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:G(!1);case 1:case"end":return e.stop()}}),e)}))),1e3)}return c.a.useEffect((function(){H.getInitialCards().then((function(e){v(e)})).catch((function(e){console.log("Attention! ".concat(e))}))}),[]),Object(O.jsx)(m.Provider,{value:b,children:Object(O.jsx)("div",{className:"page",children:Object(O.jsxs)(h.c,{children:[Object(O.jsx)(h.a,{exact:!0,path:"/",children:Object(O.jsx)(C,{})}),Object(O.jsx)(h.a,{path:"/movies",children:Object(O.jsx)(R,{loggedIn:a,cards:function(e){if(0!==e.length||"undefined"!==e)return e.filter((function(e){return!ee||e.duration<=40}))}(k),shortMovie:ee,isLoading:P,onSearch:function(e){se();var t=e.toLowerCase(),n=[];f.forEach((function(e){null!==e.nameRU&&e.nameRU.toLowerCase().includes(t)||null!==e.nameEN&&e.nameEN.toLowerCase().includes(t)?(n.push(e),F(!1),U(!1),S(n),localStorage.setItem("movieSearchResult",JSON.stringify(n))):n.length<1&&(F(!0),U(!0),S([]))}))},hideButton:I,noResult:T,onSave:function(e){console.log(localStorage),console.log(e),Q.saveMovie(e).then((function(e){return Y([].concat(Object(j.a)(X),[e])),localStorage.setItem("savedMovies",JSON.stringify([].concat(Object(j.a)(X),[e]))),[].concat(Object(j.a)(X),[e])})).catch((function(e){console.log("Attention! ".concat(e))}))},onDelete:ce,isSaved:ae,onCheck:function(){te(!ee)}})}),Object(O.jsx)(h.a,{path:"/saved-movies",children:Object(O.jsx)(M,{loggedIn:a,cards:X,onSearch:function(e){se();var t=e.toLowerCase(),n=[];X.forEach((function(e){null!==e.nameRU&&e.nameRU.toLowerCase().includes(t)||null!==e.nameEN&&e.nameEN.toLowerCase().includes(t)?(n.push(e),F(!1),U(!1),Y(n),localStorage.setItem("savedMovieSearchResult",JSON.stringify(n))):n.length<1&&(F(!0),U(!0),Y([]))}))},onDelete:ce,isSaved:ae})}),Object(O.jsx)(h.a,{path:"/profile",children:Object(O.jsx)(V,{loggedIn:a,onUpdateUser:function(e){Q.setUserInfo(e).then((function(e){_(Object(u.a)(Object(u.a)({},b),e))})).catch((function(e){console.log(e)}))},onSignOut:function(){s(!1),e.push("/"),localStorage.removeItem("jwt"),localStorage.removeItem("movieSearchResult"),localStorage.removeItem("savedMovieSearchResult")}})}),Object(O.jsx)(h.a,{path:"/signin",children:Object(O.jsx)(J,{onLogin:function(t){(function(e,t){return fetch("".concat(W,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){if(200===e.status)return e.json();400===e.status&&console.log("\u041d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439"),401===e.status&&console.log("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 email \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d")})).then((function(e){if(e.token)return localStorage.setItem("jwt",e.token),e})).catch((function(e){return console.log(e)}))})(t.email,t.password).then((function(t){t&&t.token&&(ne(),localStorage.setItem("jwt",t.token),e.push("/movies"))})).catch((function(e){console.log("Attention! ".concat(e))}))}})}),Object(O.jsx)(h.a,{path:"/signup",children:Object(O.jsx)(A,{onRegister:function(t){(function(e,t,n){return fetch("".concat(W,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,email:t,password:n})}).then((function(e){try{if(400!==e.status)return e.json()}catch(t){return t}})).then((function(e){return e})).catch((function(e){return console.log(e)}))})(t.name,t.email,t.password).then((function(t){t&&e.push("/signin")})).catch((function(e){console.log("\u041f\u0440\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438: ".concat(e))}))}})}),Object(O.jsx)(h.a,{path:"*",children:Object(O.jsx)(q,{})})]})})})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(b.a,{children:Object(O.jsx)(K,{})})}),document.getElementById("root")),X()}},[[44,1,2]]]);
//# sourceMappingURL=main.4c68996f.chunk.js.map