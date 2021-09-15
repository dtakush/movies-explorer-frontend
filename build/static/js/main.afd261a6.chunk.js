(this["webpackJsonpmovies-explorer-frontend"]=this["webpackJsonpmovies-explorer-frontend"]||[]).push([[0],{33:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(24),o=n.n(s),r=(n(33),n(20)),i=n.n(r),l=n(25),d=n(23),j=n(6),u=n(2),h=n(4),m=n(26),b=n(0),_=["component"],p=function(e){var t=e.component,n=Object(m.a)(e,_);return Object(b.jsx)(h.b,{children:function(){return n.loggedIn?Object(b.jsx)(t,Object(j.a)({},n)):Object(b.jsx)(h.a,{to:"/"})}})},O=c.a.createContext(),v=n(3),f=n(28),x=n.p+"static/media/logo.8f97642a.svg";var g=function(e){return Object(b.jsx)("section",{className:"nav-popup ".concat(e.isOpen?"nav-popup_open":""),children:Object(b.jsxs)("div",{className:"nav-popup__container",children:[Object(b.jsx)("button",{className:"nav-popup__close-button",onClick:e.onClose}),Object(b.jsxs)("ul",{className:"nav-popup__links",children:[Object(b.jsx)("li",{className:"nav-popup__link",children:Object(b.jsx)(v.c,{to:"/",className:"nav-popup__nav nav-popup__link_main",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),Object(b.jsx)("li",{className:"nav-popup__link",children:Object(b.jsx)(v.c,{to:"/movies",className:"nav-popup__nav nav-popup__link_movies",children:"\u0424\u0438\u043b\u044c\u043c\u044b"})}),Object(b.jsx)("li",{className:"nav-popup__link",children:Object(b.jsx)(v.c,{to:"/saved-movies",className:"nav-popup__nav nav-popup__nav_saved-movies",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0435 \u0444\u0438\u043b\u044c\u043c\u044b"})})]}),Object(b.jsx)("div",{className:"nav-popup__accaunt",children:Object(b.jsxs)(v.c,{to:"/profile",className:"header__link header__profile-link",children:["\u0410\u043a\u043a\u0430\u0443\u043d\u0442",Object(b.jsx)("button",{className:"header__profile-button",type:"button"})]})})]})})};var N=function(e){var t=e.loggedIn,n=Object(f.useMediaQuery)({query:"(max-width: 1000px)"}),a=c.a.useState(!1),s=Object(u.a)(a,2),o=s[0],r=s[1];return Object(b.jsx)("header",{className:"".concat(t?"header header_loggedin":"header"),children:Object(b.jsxs)("div",{className:"header__info",children:[Object(b.jsx)(v.c,{to:"/",className:"header__logo",children:Object(b.jsx)("img",{src:x,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u043f\u0440\u043e\u0435\u043a\u0442\u0430"})}),t?Object(b.jsx)(b.Fragment,{children:n?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("button",{className:"header__nav-button",type:"button",onClick:function(){r(!o)}}),Object(b.jsx)(g,{isOpen:o,onClose:function(){r(!1)}})]}):Object(b.jsxs)("div",{className:"header__nav header__nav_loggedin",children:[Object(b.jsxs)("div",{className:"header__links",children:[Object(b.jsx)(v.c,{to:"/movies",className:"header__link header__movies-link",children:"\u0424\u0438\u043b\u044c\u043c\u044b"}),Object(b.jsx)(v.c,{to:"/saved-movies",className:"header__link header__saved-movies-link",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0435 \u0444\u0438\u043b\u044c\u043c\u044b"})]}),Object(b.jsxs)(v.c,{to:"/profile",className:"header__link header__profile-link",children:["\u0410\u043a\u043a\u0430\u0443\u043d\u0442",Object(b.jsx)("button",{className:"header__profile-button",type:"button"})]})]})}):Object(b.jsxs)("div",{className:"header__nav",children:[Object(b.jsx)(v.c,{to:"/signup",className:"header__link header__signup",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(b.jsx)(v.c,{to:"/signin",className:"header__link header__signin",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})})};var k=function(e){return Object(b.jsx)("section",{className:"promo",children:Object(b.jsx)("div",{className:"promo__image",children:Object(b.jsx)("h1",{className:"promo__title",children:"\u0423\u0447\u0435\u0431\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430 \u0444\u0430\u043a\u0443\u043b\u044c\u0442\u0435\u0442\u0430 \u0412\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438."})})})};var S=function(e){return Object(b.jsxs)("section",{className:"nav-tab",children:[Object(b.jsx)("a",{href:"#project",className:"nav-tab__link",rel:"noreferrer",children:"\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435"}),Object(b.jsx)("a",{href:"#techs",className:"nav-tab__link",rel:"noreferrer",children:"\u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438"}),Object(b.jsx)("a",{href:"#me",className:"nav-tab__link",rel:"noreferrer",children:"\u0421\u0442\u0443\u0434\u0435\u043d\u0442"})]})};var I=function(e){return Object(b.jsx)("div",{className:"subtitle-block",children:Object(b.jsx)("h3",{className:"subtitle",children:e.subtitle})})};var w=function(e){return Object(b.jsx)("section",{id:"project",className:"about-project",children:Object(b.jsxs)("div",{className:"about-project__container",children:[Object(b.jsx)(I,{subtitle:"\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435"}),Object(b.jsxs)("div",{className:"about-project__text-container",children:[Object(b.jsxs)("article",{className:"about-project__text-block",children:[Object(b.jsx)("h4",{className:"about-project__subtitle",children:"\u0414\u0438\u043f\u043b\u043e\u043c\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u0432\u043a\u043b\u044e\u0447\u0430\u043b 5 \u044d\u0442\u0430\u043f\u043e\u0432"}),Object(b.jsx)("p",{className:"about-project__text",children:"\u0421\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043b\u0430\u043d\u0430, \u0440\u0430\u0431\u043e\u0442\u0443 \u043d\u0430\u0434 \u0431\u044d\u043a\u0435\u043d\u0434\u043e\u043c, \u0432\u0451\u0440\u0441\u0442\u043a\u0443, \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0438 \u0444\u0438\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u043e\u0440\u0430\u0431\u043e\u0442\u043a\u0438."})]}),Object(b.jsxs)("article",{className:"about-project__text-block",children:[Object(b.jsx)("h4",{className:"about-project__subtitle",children:"\u041d\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0434\u0438\u043f\u043b\u043e\u043c\u0430 \u0443\u0448\u043b\u043e 5 \u043d\u0435\u0434\u0435\u043b\u044c"}),Object(b.jsx)("p",{className:"about-project__text",children:"\u0423 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u044d\u0442\u0430\u043f\u0430 \u0431\u044b\u043b \u043c\u044f\u0433\u043a\u0438\u0439 \u0438 \u0436\u0451\u0441\u0442\u043a\u0438\u0439 \u0434\u0435\u0434\u043b\u0430\u0439\u043d, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0443\u0436\u043d\u043e \u0431\u044b\u043b\u043e \u0441\u043e\u0431\u043b\u044e\u0434\u0430\u0442\u044c, \u0447\u0442\u043e\u0431\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0449\u0438\u0442\u0438\u0442\u044c\u0441\u044f."})]})]}),Object(b.jsxs)("div",{className:"about-project__line-container",children:[Object(b.jsx)("div",{className:"about-project__line about-project__color-line",children:"1 \u043d\u0435\u0434\u0435\u043b\u044f"}),Object(b.jsx)("div",{className:"about-project__line about-project__grey-line",children:"4 \u043d\u0435\u0434\u0435\u043b\u0438"}),Object(b.jsx)("p",{className:"about-project__line-text",children:"Back-end"}),Object(b.jsx)("p",{className:"about-project__line-text",children:"Front-end"})]})]})})};var C=function(e){return Object(b.jsx)("section",{id:"techs",className:"techs",children:Object(b.jsxs)("div",{className:"techs__conteiner",children:[Object(b.jsx)(I,{subtitle:"\u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438"}),Object(b.jsx)("h2",{className:"techs__title",children:"7 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0439"}),Object(b.jsx)("p",{className:"techs__subtitle",children:"\u041d\u0430 \u043a\u0443\u0440\u0441\u0435 \u0432\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043c\u044b \u043e\u0441\u0432\u043e\u0438\u043b\u0438 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043b\u0438 \u0432 \u0434\u0438\u043f\u043b\u043e\u043c\u043d\u043e\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435."}),Object(b.jsxs)("div",{className:"techs__blocks",children:[Object(b.jsx)("div",{className:"techs__block",children:"HTML"}),Object(b.jsx)("div",{className:"techs__block",children:"CSS"}),Object(b.jsx)("div",{className:"techs__block",children:"JS"}),Object(b.jsx)("div",{className:"techs__block",children:"React"}),Object(b.jsx)("div",{className:"techs__block",children:"Git"}),Object(b.jsx)("div",{className:"techs__block",children:"Express.js"}),Object(b.jsx)("div",{className:"techs__block",children:"mongoDB"})]})]})})};var y=function(e){return Object(b.jsx)("section",{id:"me",className:"about-me",children:Object(b.jsxs)("div",{className:"about-me__conteiner",children:[Object(b.jsx)(I,{subtitle:"\u0421\u0442\u0443\u0434\u0435\u043d\u0442"}),Object(b.jsxs)("div",{className:"about-me__block",children:[Object(b.jsxs)("div",{className:"about-me__text-block",children:[Object(b.jsx)("h4",{className:"about-me__title",children:"\u0414\u0430\u0440\u044c\u044f"}),Object(b.jsx)("p",{className:"about-me__subtitle",children:"\u0424\u0440\u043e\u043d\u0442\u0435\u043d\u0434-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a, 28 \u043b\u0435\u0442"}),Object(b.jsx)("p",{className:"about-me__text",children:"\u041f\u0440\u0438\u0432\u0435\u0442, \u043c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442 \u0414\u0430\u0448\u0430 \u0438 \u0442\u0430\u043a \u0432\u044b\u0448\u043b\u043e, \u0447\u0442\u043e \u044f \u0434\u0438\u0437\u0430\u0439\u043d\u0435\u0440. \u0411\u043e\u043b\u044c\u0448\u0435 \u0447\u0435\u043c \u0437\u0430 \u0441\u0435\u043c\u044c \u043b\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u044b, \u044f \u0443\u0441\u043f\u0435\u043b\u0430 \u043f\u043e\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043a\u0430\u043a \u0441 \u043c\u043e\u043d\u0441\u0442\u0440\u0430\u043c\u0438 \u0440\u044b\u043d\u043a\u0430, \u0442\u0430\u043a \u0438 \u043f\u043e\u043c\u043e\u0447\u044c \u0432 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0438 \u043a\u0440\u0430\u0441\u043e\u0442\u044b \u0438 \u043f\u043e\u0440\u044f\u0434\u043a\u0430 \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u043c \u0431\u0440\u0435\u043d\u0434\u0430\u043c."}),Object(b.jsxs)("div",{className:"about-me__links",children:[Object(b.jsx)("a",{className:"about-me__link",href:"https://www.facebook.com/dashatakush",target:"_blank",rel:"noreferrer",children:"Facebook"}),Object(b.jsx)("a",{className:"about-me__link",href:"https://github.com/dtakush",target:"_blank",rel:"noreferrer",children:"GitHub"}),Object(b.jsx)("a",{className:"about-me__link",href:"https://www.instagram.com/dariatakush/",target:"_blank",rel:"noreferrer",children:"Instagram"})]})]}),Object(b.jsx)("div",{className:"about-me__photo"})]}),Object(b.jsx)("h5",{className:"about-me__portfolio",children:"\u041f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e"}),Object(b.jsxs)("a",{className:"about-me__web-link",href:"https://github.com/dtakush/how-to-learn.git",target:"_blank",rel:"noreferrer",children:[Object(b.jsx)("p",{className:"about-me__web-link_title",children:"\u0421\u0442\u0430\u0442\u0438\u0447\u043d\u044b\u0439 \u0441\u0430\u0439\u0442"}),Object(b.jsx)("div",{className:"about-me__web-link_arrow"})]}),Object(b.jsxs)("a",{className:"about-me__web-link",href:"https://github.com/dtakush/mesto.git",target:"_blank",rel:"noreferrer",children:[Object(b.jsx)("p",{className:"about-me__web-link_title",children:"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u044b\u0439 \u0441\u0430\u0439\u0442"}),Object(b.jsx)("div",{className:"about-me__web-link_arrow"})]}),Object(b.jsxs)("a",{className:"about-me__web-link",href:"https://github.com/dtakush/react-mesto-api-full.git",target:"_blank",rel:"noreferrer",children:[Object(b.jsx)("p",{className:"about-me__web-link_title",children:"\u041e\u0434\u043d\u043e\u0441\u0442\u0440\u0430\u043d\u0438\u0447\u043d\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"}),Object(b.jsx)("div",{className:"about-me__web-link_arrow"})]})]})})};var E=function(e){return Object(b.jsx)("section",{className:"footer",children:Object(b.jsxs)("div",{className:"footer__container",children:[Object(b.jsx)("p",{className:"footer__disclaimer",children:"\u0423\u0447\u0435\u0431\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c \u0445 BeatFilm."}),Object(b.jsx)("div",{className:"footer__line"}),Object(b.jsxs)("div",{className:"footer__block",children:[Object(b.jsx)("p",{className:"footer__date",children:"\xa9 2021"}),Object(b.jsxs)("ul",{className:"footer__links",children:[Object(b.jsx)("li",{className:"footer__link",children:Object(b.jsx)("a",{className:"footer__text",href:"https://practicum.yandex.ru/",target:"_blank",rel:"noreferrer",children:"\u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c"})}),Object(b.jsx)("li",{className:"footer__link",children:Object(b.jsx)("a",{className:"footer__text",href:"https://github.com/yandex-praktikum",target:"_blank",rel:"noreferrer",children:"Github"})}),Object(b.jsx)("li",{className:"footer__link",children:Object(b.jsx)("a",{className:"footer__text",href:"https://www.facebook.com/yandex.practicum",target:"_blank",rel:"noreferrer",children:"Facebook"})})]})]})]})})};var M=function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(N,{loggedIn:e.loggedIn}),Object(b.jsx)(k,{}),Object(b.jsx)(S,{}),Object(b.jsx)(w,{}),Object(b.jsx)(C,{}),Object(b.jsx)(y,{}),Object(b.jsx)(E,{})]})};var L=function(e){return Object(b.jsxs)("div",{className:"checkbox",children:[Object(b.jsx)("p",{className:"checkbox__text",children:"\u041a\u043e\u0440\u043e\u0442\u043a\u043e\u043c\u0435\u0442\u0440\u0430\u0436\u043a\u0438"}),Object(b.jsxs)("label",{className:"checkbox__container",children:[Object(b.jsx)("input",{type:"checkbox",value:"None",id:"filter",name:"check",className:"checkbox__input",onChange:e.onCheck,checked:e.shortMovie}),Object(b.jsx)("i",{className:"checkbox__indicator"})]})]})};var U=function(e){var t=c.a.useState(""),n=Object(u.a)(t,2),a=n[0],s=n[1],o=c.a.useState(!0),r=Object(u.a)(o,2),i=r[0],l=r[1];return Object(b.jsx)("section",{className:"searchform",children:Object(b.jsxs)("div",{className:"searchform__container",children:[Object(b.jsxs)("form",{className:"searchform__form",onSubmit:function(t){t.preventDefault(),e.onSearch(a)},noValidate:!0,children:[Object(b.jsx)("input",{onChange:function(e){s(e.target.value),l(e.target.checkValidity())},value:a||"",id:"search",type:"text",className:"searchform__input",placeholder:"\u0424\u0438\u043b\u044c\u043c",required:!0}),Object(b.jsx)("button",{className:"searchform__button ".concat(i?"":"searchform__button_disabled"),type:"submit",children:Object(b.jsx)("div",{className:"searchform__button_pic"})})]}),Object(b.jsx)(L,{onCheck:e.onCheck,shortMovie:e.shortMovie})]})})};var R=function(e){var t=Object(h.h)();function n(t){t.preventDefault(),e.onDelete(e.movie)}return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsxs)("div",{className:"card__menu",children:[Object(b.jsxs)("div",{className:"card__text",children:[Object(b.jsx)("h5",{className:"card__title",children:e.movie.nameRU}),Object(b.jsx)("p",{className:"card__duraton",children:function(e){var t=Math.trunc(e/60),n=e%60;return"".concat(t>0?"".concat(t,"\u0447 "):"").concat(n,"\u043c")}(e.movie.duration)})]}),"/movies"===t.pathname&&!e.savedMovies.find((function(t){return t.movieId===e.movie.id}))&&Object(b.jsx)("button",{className:"card__save-button",onClick:function(t){t.preventDefault(),e.onSave(e.movie)},children:Object(b.jsx)("div",{className:"card__save-icon"})}),"/movies"===t.pathname&&e.savedMovies.find((function(t){return t.movieId===e.movie.id}))&&Object(b.jsx)("button",{className:"card__save-button card__save-button_active",onClick:n,children:Object(b.jsx)("div",{className:"card__save-icon card__save-icon_active"})}),"/saved-movies"===t.pathname&&Object(b.jsx)("button",{className:"card__save-button",onClick:n,children:Object(b.jsx)("div",{className:"card__save-icon_saved"})})]}),Object(b.jsxs)("a",{className:"card__trailer-link",href:e.trailer,target:"_blank",rel:"noreferrer",children:["/movies"===t.pathname&&Object(b.jsx)("div",{className:"card__image",style:{backgroundImage:"url(https://api.nomoreparties.co".concat(e.movie.image.url,")")}}),"/saved-movies"===t.pathname&&Object(b.jsx)("div",{className:"card__image",style:{backgroundImage:"url(".concat(e.movie.image,")")}})]})]})},D=(n(44),function(){return Object(b.jsx)("div",{className:"preloader",children:Object(b.jsx)("div",{className:"preloader__container",children:Object(b.jsx)("span",{className:"preloader__round"})})})}),T=n(9);var A=function(e){var t=Object(h.h)(),n=c.a.useState(12),a=Object(u.a)(n,2),s=a[0],o=a[1],r=c.a.useState(3),i=Object(u.a)(r,2),l=i[0],d=i[1],j=c.a.useState(0),m=Object(u.a)(j,2),_=m[0],p=m[1];return c.a.useEffect((function(){function e(){p(window.innerWidth)}window.addEventListener("resize",e),e()}),[]),c.a.useEffect((function(){_>T.MAX_WINDOW_SIZE?(o(12),d(3)):_<T.MAX_WINDOW_SIZE&&_>T.MID_WINDOW_SIZE?(o(8),d(2)):_<T.MID_WINDOW_SIZE&&_>T.MIN_WINDOW_SIZE&&(o(5),d(5))}),[_]),Object(b.jsxs)("section",{className:"movies-cards",children:[e.isLoading&&Object(b.jsx)(D,{}),e.noResult?Object(b.jsx)("p",{className:"movies-cards__no-result",children:"\u041f\u043e\u0438\u0441\u043a \u043d\u0435 \u0434\u0430\u043b \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432"}):"",Object(b.jsx)("div",{className:"movies-cards__container",children:e.cards.slice(0,s).map((function(t){return Object(b.jsx)(R,{movie:t,trailer:t.trailerLink,onSave:e.onSave,onDelete:e.onDelete,savedMovies:e.savedMovies},t.id||t.movieId)}))}),e.cards.length>=s?Object(b.jsx)("button",{type:"button",onClick:function(){return o(s+l)},className:"".concat("/movies"===t.pathname?"movies-cards__more-button":"movies-cards__more-button_saved"),children:" \u0415\u0449\u0435 "}):""]})};var V=function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(N,{loggedIn:e.loggedIn}),Object(b.jsx)(U,{onSearch:e.onSearch,onCheck:e.onCheck,shortMovie:e.shortMovie}),Object(b.jsx)(A,{cards:e.cards,hideButton:e.hideButton,onSave:e.onSave,onDelete:e.onDelete,savedMovies:e.savedMovies,noResult:e.noResult,isLoading:e.isLoading}),Object(b.jsx)(E,{})]})};var F=function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(N,{loggedIn:e.loggedIn}),Object(b.jsx)(U,{onSearch:e.onSearch,onCheck:e.onCheck,shortMovie:e.shortMovie}),Object(b.jsx)(A,{cards:e.cards,hideButton:e.hideButton,onSave:e.onSave,onDelete:e.onDelete,savedMovies:e.savedMovies,noResult:e.noResult,onCheck:e.onCheck,isLoading:e.isLoading}),Object(b.jsx)(E,{})]})},B=n(12);var W=function(){var e=Object(a.useState)({name:"",email:"",password:""}),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)({}),o=Object(u.a)(s,2),r=o[0],i=o[1],l=Object(a.useState)(!1),d=Object(u.a)(l,2),h=d[0],m=d[1],b=Object(a.useCallback)((function(e){var t=e.target,n=t.name,a=t.value;c((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(B.a)({},n,a))})),i((function(t){return Object(j.a)(Object(j.a)({},t),{},Object(B.a)({},n,e.target.validationMessage))}));/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(a)?m(!0):m(!1)}),[c]),_=Object(a.useCallback)((function(e){var t=e.target,n=t.name,a=t.value;c((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(B.a)({},n,a))})),i((function(t){return Object(j.a)(Object(j.a)({},t),{},Object(B.a)({},n,e.target.validationMessage))})),m(e.target.closest("form").checkValidity())}),[c]),p=Object(a.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];c(e),i(t),m(n)}),[c,i,m]);return{formValues:n,setFormValues:c,errors:r,isInputValid:h,setIsInputValid:m,resetForm:p,handleInputChange:_,handleEmailChange:b}};var J=function(e){var t=c.a.useContext(O),n=W(t),a=n.formValues,s=n.errors,o=n.isInputValid,r=n.handleInputChange,i=a.name,l=a.email,d="".concat(o?"profile__button profile__edit-button":"profile__button profile__edit-button profile__edit-button_disabled");return Object(b.jsx)("section",{className:"profile",children:Object(b.jsxs)("div",{className:"profile__container",children:[Object(b.jsxs)("h2",{className:"profile__hello",children:["\u041f\u0440\u0438\u0432\u0435\u0442, ",t.name,"!"]}),Object(b.jsxs)("form",{className:"profile__form",onSubmit:function(t){t.preventDefault(),e.onUpdateUser(i,l)},noValidate:!0,children:[Object(b.jsxs)("div",{className:"profile__edit-block profile__edit-name",children:[Object(b.jsxs)("div",{className:"profile__edit-text-block",children:[Object(b.jsx)("p",{className:"profile__edit-text",children:"\u0418\u043c\u044f"}),Object(b.jsx)("input",{className:"profile__user-text",id:"name",minLength:"3",name:"name",type:"text",placeholder:t.name,value:a.name||"",onChange:r,required:!0})]}),Object(b.jsx)("span",{className:"profile__input-error",id:"profile__input-name-error",children:s.name})]}),Object(b.jsxs)("div",{className:"profile__edit-block profile__edit-email",children:[Object(b.jsxs)("div",{className:"profile__edit-text-block",children:[Object(b.jsx)("p",{className:"profile__edit-text",children:"E-mail"}),Object(b.jsx)("input",{className:"profile__user-text",id:"name",minLength:"3",name:"email",type:"email",placeholder:t.email,value:a.email||"",onChange:r,required:!0})]}),Object(b.jsx)("span",{className:"profile__input-error",id:"profile__input-email-error",children:s.email})]}),Object(b.jsx)("button",{className:d,type:"submit",children:o?"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"}),Object(b.jsx)("button",{onClick:e.onSignOut,className:"profile__button profile__exit-button",type:"button",children:"\u0412\u044b\u0439\u0442\u0438 \u0438\u0437 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430"})]})]})})};var Z=function(e){var t=Object(h.h)();return Object(b.jsxs)("div",{className:"entrance__container",children:[Object(b.jsx)(v.b,{to:"/",className:"entrance__logo",children:Object(b.jsx)("img",{src:x,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u043f\u0440\u043e\u0435\u043a\u0442\u0430"})}),Object(b.jsx)("h3",{className:"entrance__hello",children:e.title}),Object(b.jsxs)("form",{className:"entrance__form",id:"".concat(e.name,"-form"),onSubmit:e.onSubmit,children:[e.children,Object(b.jsx)("button",{className:"".concat("/signin"===t.pathname?"entrance__button entrance__button-login":"entrance__button"),type:"submit",id:"entrance__submit",disabled:!e.isInputValid,children:e.buttonText})]}),Object(b.jsxs)("div",{className:"entrance__come-in",children:[Object(b.jsx)("p",{className:"entrance__text",children:e.entranceText}),Object(b.jsx)(v.b,{to:"".concat("/signin"===t.pathname?"/signup":"/signin"),className:"".concat("/signin"===t.pathname?"entrance__link entrance__signin-link":"entrance__link entrance__signup-link"),children:e.entranceLink})]})]})};var q=function(e){var t=W(),n=t.handleInputChange,a=t.isInputValid,c=t.resetForm,s=t.formValues,o=t.errors,r=t.handleEmailChange;return Object(b.jsx)("section",{className:"register",children:Object(b.jsxs)(Z,{name:"register",title:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c!",buttonText:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",entranceText:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",entranceLink:"\u0412\u043e\u0439\u0442\u0438",onSubmit:function(t){t.preventDefault(),e.onRegister(s.name,s.email,s.password),c()},isInputValid:a,children:[Object(b.jsx)("p",{className:"entrance__form-text",children:"\u0418\u043c\u044f"}),Object(b.jsx)("input",{name:"name",id:"register-name",className:"entrance__input entrance__input-name",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",type:"text",required:!0,minLength:"3",value:s.name||"",onChange:n}),Object(b.jsx)("span",{className:"entrance__input-error",id:"entrance__input-name-error",children:o.name}),Object(b.jsx)("p",{className:"entrance__form-text",children:"E-mail"}),Object(b.jsx)("input",{name:"email",id:"register-email",className:"entrance__input entrance__input-email",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u044e \u043f\u043e\u0447\u0442\u0443",type:"email",required:!0,value:s.email||"",onChange:r}),Object(b.jsx)("span",{className:"entrance__input-error",id:"entrance__input-email-error",children:o.email}),Object(b.jsx)("p",{className:"entrance__form-text",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(b.jsx)("input",{name:"password",id:"register-password",className:"entrance__input entrance__input-password",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",type:"password",required:!0,minLength:"5",value:s.password||"",onChange:n}),Object(b.jsx)("span",{className:"entrance__input-error",id:"register-password-error",children:o.password})]})})};var P=function(e){var t=W(),n=t.handleInputChange,a=t.isInputValid,c=t.formValues,s=t.errors,o=t.handleEmailChange,r=c.email,i=c.password;return console.log(r,i),Object(b.jsx)("section",{className:"login",children:Object(b.jsxs)(Z,{name:"login",title:"\u0420\u0430\u0434\u044b \u0432\u0438\u0434\u0435\u0442\u044c!",buttonText:"\u0412\u043e\u0439\u0442\u0438",entranceText:"\u0415\u0449\u0451 \u043d\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",entranceLink:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",onSubmit:function(t){t.preventDefault(),e.onLogin(r,i)},isInputValid:a,children:[Object(b.jsx)("p",{className:"entrance__form-text",children:"E-mail"}),Object(b.jsx)("input",{name:"email",id:"login-email",className:"entrance__input entrance__input-email",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u044e \u043f\u043e\u0447\u0442\u0443",type:"email",required:!0,value:c.email||"",onChange:o}),Object(b.jsx)("span",{className:"entrance__input-error",id:"login-email-error",children:s.email}),Object(b.jsx)("p",{className:"entrance__form-text",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(b.jsx)("input",{name:"password",id:"login-password",className:"entrance__input entrance__input-password",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",type:"password",required:!0,minLength:"5",value:c.password||"",onChange:n}),Object(b.jsx)("span",{className:"entrance__input-error",id:"login-password-error",children:s.password})]})})};var G=function(e){var t=Object(h.g)();return Object(b.jsxs)("section",{className:"not-found",children:[Object(b.jsxs)("div",{className:"not-found__container",children:[Object(b.jsx)("h1",{className:"not-found__title",children:"404"}),Object(b.jsx)("p",{className:"not-found__subtitle",children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"})]}),Object(b.jsx)("button",{className:"not-found__button",type:"button",onClick:function(){return t.goBack()},children:"\u041d\u0430\u0437\u0430\u0434"})]})},z=n(16),H=n(17),X=new(function(){function e(t){var n=t.baseUrl,a=t.headers;Object(z.a)(this,e),this.baseUrl=n,this.headers=a}return Object(H.a)(e,[{key:"getInitialCards",value:function(){return fetch("".concat(this.baseUrl),{method:"GET",headers:this.headers}).then(this._checkResponse)}},{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}}]),e}())({baseUrl:T.MOVIES_BASE_URL,headers:{Accept:"application/json","Content-Type":"application/json"}}),Q=new(function(){function e(t){var n=t.baseUrl,a=t.headers;Object(z.a)(this,e),this.baseUrl=n,this.headers=a}return Object(H.a)(e,[{key:"getUserInfo",value:function(){return fetch("".concat(this.baseUrl,"/users/me"),{method:"GET",headers:this.headers}).then(this._checkResponse)}},{key:"setUserInfo",value:function(e,t){return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e,email:t})}).then(this._checkResponse)}},{key:"saveMovie",value:function(e){return fetch("".concat(this.baseUrl,"/movies"),{method:"POST",headers:this.headers,body:JSON.stringify({movieId:e.id||0,nameRU:e.nameRU||"no name",nameEN:e.nameEN||"no english name",director:e.director||"no director",description:e.description||"no description",trailer:e.trailerLink||"https://www.youtube.com/channel/UCng_jFvloTT9v7JlSwi_qSQ",country:e.country||"no country",duration:e.duration||0,year:e.year||"no year",image:"".concat(T.MOVIE_INFO_URL).concat(e.image.url),thumbnail:"".concat(T.MOVIE_INFO_URL).concat(e.image.formats.thumbnail.url)})}).then(this._checkResponse)}},{key:"getSavedMovies",value:function(){return fetch("".concat(this.baseUrl,"/movies"),{method:"GET",headers:this.headers,credentials:"include"}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this.baseUrl,"/movies/").concat(e._id),{method:"DELETE",headers:this.headers}).then(this._checkResponse)}},{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}}]),e}())({baseUrl:T.MAIL_BASE_URL,headers:{Accept:"application/json",Authorization:"Bearer ".concat(localStorage.getItem("jwt")),"Content-Type":"application/json"}}),$="https://api.dtakush.diploma.nomoredomains.monster";var K=function(){var e=Object(h.g)(),t=Object(h.h)().pathname,n=c.a.useState(!1),a=Object(u.a)(n,2),s=a[0],o=a[1],r=c.a.useState({}),m=Object(u.a)(r,2),_=m[0],v=m[1],f=c.a.useState([]),x=Object(u.a)(f,2),g=x[0],N=x[1],k=c.a.useState([]),S=Object(u.a)(k,2),I=S[0],w=S[1],C=c.a.useState(!1),y=Object(u.a)(C,2),E=y[0],L=y[1],U=c.a.useState(!1),R=Object(u.a)(U,2),D=R[0],T=R[1],A=c.a.useState([]),B=Object(u.a)(A,2),W=B[0],Z=B[1],z=c.a.useState(!1),H=Object(u.a)(z,2),K=H[0],Y=H[1],ee=c.a.useState(!1),te=Object(u.a)(ee,2),ne=te[0],ae=te[1];function ce(t,n){(function(e,t){return fetch("".concat($,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){if(200===e.status)return e.json();400===e.status&&console.log("\u041d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439"),401===e.status&&console.log("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 email \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d")})).then((function(e){if(e.jwt)return localStorage.setItem("jwt",e.jwt),e})).catch((function(e){return console.log(e)}))})(t,n).then((function(e){e&&e.jwt&&(localStorage.setItem("jwt",e.jwt),se(),o(!0))})).then((function(){e.push("/movies")})).catch((function(e){console.log("Attention! ".concat(e))}))}function se(){var t,n=localStorage.getItem("jwt");n&&(t=n,fetch("".concat($,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){if(200===e.status)return e.json();400===e.status&&console.log("\u0422\u043e\u043a\u0435\u043d \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043d\u0435 \u0432 \u0442\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435"),401===e.status&&console.log("\u041f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0439 \u0442\u043e\u043a\u0435\u043d \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u0435\u043d")})).then((function(e){return e})).catch((function(e){return console.log(e)}))).then((function(t){if(!t)return localStorage.removeItem("jwt"),e.push("/"),void o(!1);v(t)})).catch((function(t){console.log("Attention! ".concat(t)),e.push("/signin")}))}function oe(e){var t=e.id||e.movieId,n=W.filter((function(e){return e.movieId===t}));Q.deleteCard(n[0]).then((function(e){var n=W.filter((function(e){return e.movieId!==t}));Z(n),localStorage.setItem("savedMovies",JSON.stringify(n))}))}function re(){T(!0),setTimeout(Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:T(!1);case 1:case"end":return e.stop()}}),e)}))),1e3)}function ie(){Y(!K)}function le(e){if(0!==e.length||"undefined"!==e)return e.filter((function(e){return!K||e.duration<=40}))}return console.log(localStorage),c.a.useEffect((function(){localStorage.getItem("jwt")&&(se(),o(!0),e.push(t))}),[]),c.a.useEffect((function(){s&&Q.getUserInfo().then((function(e){v(e)})).catch((function(e){console.log("Attention! ".concat(e))}))}),[]),c.a.useEffect((function(){localStorage.getItem("jwt")&&X.getInitialCards().then((function(e){N(e)})).catch((function(e){console.log("Attention! ".concat(e))}))}),[]),c.a.useEffect((function(){localStorage.getItem("jwt")&&Q.getSavedMovies().then((function(){var e=JSON.parse(localStorage.getItem("savedMovies"));e&&(e.filter((function(e){return e.owner===_._id})),Z(e))}))}),[]),Object(b.jsx)(O.Provider,{value:_,children:Object(b.jsx)("div",{className:"page",children:Object(b.jsxs)(h.d,{children:[Object(b.jsx)(h.b,{exact:!0,path:"/",children:Object(b.jsx)(M,{loggedIn:s})}),Object(b.jsx)(p,{exact:!0,path:"/movies",component:V,loggedIn:s,cards:le(I),shortMovie:K,isLoading:D,onSearch:function(e){re();var t=e.toLowerCase(),n=[];g.forEach((function(e){null!==e.nameRU&&e.nameRU.toLowerCase().includes(t)||null!==e.nameEN&&e.nameEN.toLowerCase().includes(t)?(n.push(e),ae(!1),L(!1),w(n),localStorage.setItem("movieSearchResult",JSON.stringify(n))):n.length<1&&(ae(!0),L(!0),w([]))}))},hideButton:E,onSave:function(e){Q.saveMovie(e).then((function(e){Z([e].concat(Object(d.a)(W))),localStorage.setItem("savedMovies",JSON.stringify([e].concat(Object(d.a)(W))))})).catch((function(e){console.log("Attention! ".concat(e))}))},onDelete:oe,savedMovies:W,onCheck:ie,noResult:ne}),Object(b.jsx)(p,{exact:!0,path:"/saved-movies",component:F,loggedIn:s,cards:le(W),shortMovie:K,isLoading:D,hideButton:E,onSearch:function(e){re();var t=e.toLowerCase(),n=[];W.forEach((function(e){null!==e.nameRU&&e.nameRU.toLowerCase().includes(t)||null!==e.nameEN&&e.nameEN.toLowerCase().includes(t)?(n.push(e),ae(!1),L(!0),Z(n),localStorage.setItem("savedMovieSearchResult",JSON.stringify(n))):n.length<1&&(ae(!0),L(!0),Z([]))}))},onDelete:oe,onCheck:ie,noResult:ne}),Object(b.jsx)(p,{exact:!0,path:"/profile",component:J,loggedIn:s,onUpdateUser:function(e,t){Q.setUserInfo(e,t).then((function(e){v(Object(j.a)(Object(j.a)({},_),e)),console.log("\u0423\u0441\u043f\u0435\u0448\u043d\u043e!")})).catch((function(e){console.log("Attention! ".concat(e))}))},onSignOut:function(){o(!1),localStorage.removeItem("jwt"),e.push("/")}}),Object(b.jsx)(h.b,{path:"/signin",children:Object(b.jsx)(P,{onLogin:ce})}),Object(b.jsx)(h.b,{path:"/signup",children:Object(b.jsx)(q,{onRegister:function(t,n,a){(function(e,t,n){return fetch("".concat($,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,email:t,password:n})}).then((function(e){if(console.log(e),200===e.status)return e.json();400===e.status&&console.log("\u041d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439"),401===e.status&&console.log("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 email \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d")})).then((function(e){return e})).catch((function(e){return console.log(e)}))})(t,n,a).then((function(t){console.log(t),ce(n,a),e.push("/movies")})).catch((function(e){console.log("\u041f\u0440\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438: ".concat(e))}))}})}),Object(b.jsx)(h.b,{path:"*",children:Object(b.jsx)(G,{})})]})})})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(v.a,{children:Object(b.jsx)(K,{})})}),document.getElementById("root")),Y()},9:function(e,t){e.exports={MOVIES_BASE_URL:"https://api.nomoreparties.co/beatfilm-movies",MAIL_BASE_URL:"https://api.dtakush.diploma.nomoredomains.monster",MOVIE_INFO_URL:"https://api.nomoreparties.co",MAX_WINDOW_SIZE:1279,MID_WINDOW_SIZE:810,MIN_WINDOW_SIZE:319}}},[[45,1,2]]]);
//# sourceMappingURL=main.afd261a6.chunk.js.map