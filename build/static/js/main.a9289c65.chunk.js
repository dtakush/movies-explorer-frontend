(this["webpackJsonpmovies-explorer-frontend"]=this["webpackJsonpmovies-explorer-frontend"]||[]).push([[0],{10:function(e,t){e.exports={moviesBaseUrl:"https://api.nomoreparties.co/beatfilm-movies",mainBaseUrl:"https://api.dtakush.diploma.nomoredomains.monster"}},31:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(22),r=n.n(s),i=(n(31),n(26)),o=n(4),l=n(3),j=n(11),u=n(23),d=n(0),b=["component"];var h=function(e){var t=e.component,n=Object(u.a)(e,b);return Object(d.jsx)(l.b,{children:n.loggedIn?Object(d.jsx)(t,Object(j.a)({},n)):Object(d.jsx)(l.a,{to:"/signin"})})},m=n(2),_=n(25),p=n.p+"static/media/logo.8f97642a.svg";var O=function(e){return Object(d.jsx)("section",{className:"nav-popup ".concat(e.isOpen?"nav-popup_open":""),children:Object(d.jsxs)("div",{className:"nav-popup__container",children:[Object(d.jsx)("button",{className:"nav-popup__close-button",onClick:e.onClose}),Object(d.jsxs)("ul",{className:"nav-popup__links",children:[Object(d.jsx)("li",{className:"nav-popup__link",children:Object(d.jsx)(m.c,{to:"/",className:"nav-popup__nav nav-popup__link_main",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),Object(d.jsx)("li",{className:"nav-popup__link",children:Object(d.jsx)(m.c,{to:"/movies",className:"nav-popup__nav nav-popup__link_movies",children:"\u0424\u0438\u043b\u044c\u043c\u044b"})}),Object(d.jsx)("li",{className:"nav-popup__link",children:Object(d.jsx)(m.c,{to:"/saved-movies",className:"nav-popup__nav nav-popup__nav_saved-movies",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0435 \u0444\u0438\u043b\u044c\u043c\u044b"})})]}),Object(d.jsx)("div",{className:"nav-popup__accaunt",children:Object(d.jsxs)(m.c,{to:"/profile",className:"header__link header__profile-link",children:["\u0410\u043a\u043a\u0430\u0443\u043d\u0442",Object(d.jsx)("button",{className:"header__profile-button",type:"button"})]})})]})})};var x=function(e){var t=Object(l.h)(),n=Object(_.useMediaQuery)({query:"(max-width: 1000px)"}),a=c.a.useState(!1),s=Object(o.a)(a,2),r=s[0],i=s[1];return Object(d.jsx)("header",{className:"".concat("/"===t.pathname?"header":"header header_loggedin"),children:Object(d.jsxs)("div",{className:"header__info",children:[Object(d.jsx)(m.c,{to:"/",className:"header__logo",children:Object(d.jsx)("img",{src:p,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u043f\u0440\u043e\u0435\u043a\u0442\u0430"})}),"/"===t.pathname?Object(d.jsxs)("div",{className:"header__nav",children:[Object(d.jsx)(m.c,{to:"/signup",className:"header__link header__signup",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(d.jsx)(m.c,{to:"/signin",className:"header__link header__signin",children:"\u0412\u043e\u0439\u0442\u0438"})]}):Object(d.jsx)(d.Fragment,{children:n?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("button",{className:"header__nav-button",type:"button",onClick:function(){i(!r)}}),Object(d.jsx)(O,{isOpen:r,onClose:function(){i(!1)}})]}):Object(d.jsxs)("div",{className:"header__nav header__nav_loggedin",children:[Object(d.jsxs)("div",{className:"header__links",children:[Object(d.jsx)(m.c,{to:"/movies",className:"header__link header__movies-link",children:"\u0424\u0438\u043b\u044c\u043c\u044b"}),Object(d.jsx)(m.c,{to:"/saved-movies",className:"header__link header__saved-movies-link",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0435 \u0444\u0438\u043b\u044c\u043c\u044b"})]}),Object(d.jsxs)(m.c,{to:"/profile",className:"header__link header__profile-link",children:["\u0410\u043a\u043a\u0430\u0443\u043d\u0442",Object(d.jsx)("button",{className:"header__profile-button",type:"button"})]})]})})]})})};var v=function(e){return Object(d.jsx)("section",{className:"promo",children:Object(d.jsx)("div",{className:"promo__image",children:Object(d.jsx)("h1",{className:"promo__title",children:"\u0423\u0447\u0435\u0431\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430 \u0444\u0430\u043a\u0443\u043b\u044c\u0442\u0435\u0442\u0430 \u0412\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438."})})})};var f=function(e){return Object(d.jsxs)("section",{className:"nav-tab",children:[Object(d.jsx)("a",{href:"#project",className:"nav-tab__link",rel:"noreferrer",children:"\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435"}),Object(d.jsx)("a",{href:"#techs",className:"nav-tab__link",rel:"noreferrer",children:"\u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438"}),Object(d.jsx)("a",{href:"#me",className:"nav-tab__link",rel:"noreferrer",children:"\u0421\u0442\u0443\u0434\u0435\u043d\u0442"})]})};var N=function(e){return Object(d.jsx)("div",{className:"subtitle-block",children:Object(d.jsx)("h3",{className:"subtitle",children:e.subtitle})})};var g=function(e){return Object(d.jsx)("section",{id:"project",className:"about-project",children:Object(d.jsxs)("div",{className:"about-project__container",children:[Object(d.jsx)(N,{subtitle:"\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435"}),Object(d.jsxs)("div",{className:"about-project__text-container",children:[Object(d.jsxs)("article",{className:"about-project__text-block",children:[Object(d.jsx)("h4",{className:"about-project__subtitle",children:"\u0414\u0438\u043f\u043b\u043e\u043c\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u0432\u043a\u043b\u044e\u0447\u0430\u043b 5 \u044d\u0442\u0430\u043f\u043e\u0432"}),Object(d.jsx)("p",{className:"about-project__text",children:"\u0421\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043b\u0430\u043d\u0430, \u0440\u0430\u0431\u043e\u0442\u0443 \u043d\u0430\u0434 \u0431\u044d\u043a\u0435\u043d\u0434\u043e\u043c, \u0432\u0451\u0440\u0441\u0442\u043a\u0443, \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0438 \u0444\u0438\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u043e\u0440\u0430\u0431\u043e\u0442\u043a\u0438."})]}),Object(d.jsxs)("article",{className:"about-project__text-block",children:[Object(d.jsx)("h4",{className:"about-project__subtitle",children:"\u041d\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0434\u0438\u043f\u043b\u043e\u043c\u0430 \u0443\u0448\u043b\u043e 5 \u043d\u0435\u0434\u0435\u043b\u044c"}),Object(d.jsx)("p",{className:"about-project__text",children:"\u0423 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u044d\u0442\u0430\u043f\u0430 \u0431\u044b\u043b \u043c\u044f\u0433\u043a\u0438\u0439 \u0438 \u0436\u0451\u0441\u0442\u043a\u0438\u0439 \u0434\u0435\u0434\u043b\u0430\u0439\u043d, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0443\u0436\u043d\u043e \u0431\u044b\u043b\u043e \u0441\u043e\u0431\u043b\u044e\u0434\u0430\u0442\u044c, \u0447\u0442\u043e\u0431\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0449\u0438\u0442\u0438\u0442\u044c\u0441\u044f."})]})]}),Object(d.jsxs)("div",{className:"about-project__line-container",children:[Object(d.jsx)("div",{className:"about-project__line about-project__color-line",children:"1 \u043d\u0435\u0434\u0435\u043b\u044f"}),Object(d.jsx)("div",{className:"about-project__line about-project__grey-line",children:"4 \u043d\u0435\u0434\u0435\u043b\u0438"}),Object(d.jsx)("p",{className:"about-project__line-text",children:"Back-end"}),Object(d.jsx)("p",{className:"about-project__line-text",children:"Front-end"})]})]})})};var k=function(e){return Object(d.jsx)("section",{id:"techs",className:"techs",children:Object(d.jsxs)("div",{className:"techs__conteiner",children:[Object(d.jsx)(N,{subtitle:"\u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438"}),Object(d.jsx)("h2",{className:"techs__title",children:"7 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0439"}),Object(d.jsx)("p",{className:"techs__subtitle",children:"\u041d\u0430 \u043a\u0443\u0440\u0441\u0435 \u0432\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043c\u044b \u043e\u0441\u0432\u043e\u0438\u043b\u0438 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043b\u0438 \u0432 \u0434\u0438\u043f\u043b\u043e\u043c\u043d\u043e\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435."}),Object(d.jsxs)("div",{className:"techs__blocks",children:[Object(d.jsx)("div",{className:"techs__block",children:"HTML"}),Object(d.jsx)("div",{className:"techs__block",children:"CSS"}),Object(d.jsx)("div",{className:"techs__block",children:"JS"}),Object(d.jsx)("div",{className:"techs__block",children:"React"}),Object(d.jsx)("div",{className:"techs__block",children:"Git"}),Object(d.jsx)("div",{className:"techs__block",children:"Express.js"}),Object(d.jsx)("div",{className:"techs__block",children:"mongoDB"})]})]})})};var S=function(e){return Object(d.jsx)("section",{id:"me",className:"about-me",children:Object(d.jsxs)("div",{className:"about-me__conteiner",children:[Object(d.jsx)(N,{subtitle:"\u0421\u0442\u0443\u0434\u0435\u043d\u0442"}),Object(d.jsxs)("div",{className:"about-me__block",children:[Object(d.jsxs)("div",{className:"about-me__text-block",children:[Object(d.jsx)("h4",{className:"about-me__title",children:"\u0414\u0430\u0440\u044c\u044f"}),Object(d.jsx)("p",{className:"about-me__subtitle",children:"\u0424\u0440\u043e\u043d\u0442\u0435\u043d\u0434-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a, 28 \u043b\u0435\u0442"}),Object(d.jsx)("p",{className:"about-me__text",children:"\u041f\u0440\u0438\u0432\u0435\u0442, \u043c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442 \u0414\u0430\u0448\u0430 \u0438 \u0442\u0430\u043a \u0432\u044b\u0448\u043b\u043e, \u0447\u0442\u043e \u044f \u0434\u0438\u0437\u0430\u0439\u043d\u0435\u0440. \u0411\u043e\u043b\u044c\u0448\u0435 \u0447\u0435\u043c \u0437\u0430 \u0441\u0435\u043c\u044c \u043b\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u044b, \u044f \u0443\u0441\u043f\u0435\u043b\u0430 \u043f\u043e\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043a\u0430\u043a \u0441 \u043c\u043e\u043d\u0441\u0442\u0440\u0430\u043c\u0438 \u0440\u044b\u043d\u043a\u0430, \u0442\u0430\u043a \u0438 \u043f\u043e\u043c\u043e\u0447\u044c \u0432 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0438 \u043a\u0440\u0430\u0441\u043e\u0442\u044b \u0438 \u043f\u043e\u0440\u044f\u0434\u043a\u0430 \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u043c \u0431\u0440\u0435\u043d\u0434\u0430\u043c."}),Object(d.jsxs)("div",{className:"about-me__links",children:[Object(d.jsx)("a",{className:"about-me__link",href:"https://www.facebook.com/dashatakush",target:"_blank",rel:"noreferrer",children:"Facebook"}),Object(d.jsx)("a",{className:"about-me__link",href:"https://github.com/dtakush",target:"_blank",rel:"noreferrer",children:"GitHub"}),Object(d.jsx)("a",{className:"about-me__link",href:"https://www.instagram.com/dariatakush/",target:"_blank",rel:"noreferrer",children:"Instagram"})]})]}),Object(d.jsx)("div",{className:"about-me__photo"})]}),Object(d.jsx)("h5",{className:"about-me__portfolio",children:"\u041f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e"}),Object(d.jsxs)("a",{className:"about-me__web-link",href:"https://github.com/dtakush/how-to-learn.git",target:"_blank",rel:"noreferrer",children:[Object(d.jsx)("p",{className:"about-me__web-link_title",children:"\u0421\u0442\u0430\u0442\u0438\u0447\u043d\u044b\u0439 \u0441\u0430\u0439\u0442"}),Object(d.jsx)("div",{className:"about-me__web-link_arrow"})]}),Object(d.jsxs)("a",{className:"about-me__web-link",href:"https://github.com/dtakush/mesto.git",target:"_blank",rel:"noreferrer",children:[Object(d.jsx)("p",{className:"about-me__web-link_title",children:"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u044b\u0439 \u0441\u0430\u0439\u0442"}),Object(d.jsx)("div",{className:"about-me__web-link_arrow"})]}),Object(d.jsxs)("a",{className:"about-me__web-link",href:"https://github.com/dtakush/react-mesto-api-full.git",target:"_blank",rel:"noreferrer",children:[Object(d.jsx)("p",{className:"about-me__web-link_title",children:"\u041e\u0434\u043d\u043e\u0441\u0442\u0440\u0430\u043d\u0438\u0447\u043d\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"}),Object(d.jsx)("div",{className:"about-me__web-link_arrow"})]})]})})};var y=function(e){return Object(d.jsx)("section",{className:"footer",children:Object(d.jsxs)("div",{className:"footer__container",children:[Object(d.jsx)("p",{className:"footer__disclaimer",children:"\u0423\u0447\u0435\u0431\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c \u0445 BeatFilm."}),Object(d.jsx)("div",{className:"footer__line"}),Object(d.jsxs)("div",{className:"footer__block",children:[Object(d.jsx)("p",{className:"footer__date",children:"\xa9 2021"}),Object(d.jsxs)("ul",{className:"footer__links",children:[Object(d.jsx)("li",{className:"footer__link",children:Object(d.jsx)("a",{className:"footer__text",href:"https://practicum.yandex.ru/",target:"_blank",rel:"noreferrer",children:"\u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c"})}),Object(d.jsx)("li",{className:"footer__link",children:Object(d.jsx)("a",{className:"footer__text",href:"https://github.com/yandex-praktikum",target:"_blank",rel:"noreferrer",children:"Github"})}),Object(d.jsx)("li",{className:"footer__link",children:Object(d.jsx)("a",{className:"footer__text",href:"https://www.facebook.com/yandex.practicum",target:"_blank",rel:"noreferrer",children:"Facebook"})})]})]})]})})};var w=function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(x,{}),Object(d.jsx)(v,{}),Object(d.jsx)(f,{}),Object(d.jsx)(g,{}),Object(d.jsx)(k,{}),Object(d.jsx)(S,{}),Object(d.jsx)(y,{})]})};var I=function(e){return Object(d.jsxs)("div",{className:"checkbox",children:[Object(d.jsx)("p",{className:"checkbox__text",children:"\u041a\u043e\u0440\u043e\u0442\u043a\u043e\u043c\u0435\u0442\u0440\u0430\u0436\u043a\u0438"}),Object(d.jsxs)("div",{className:"checkbox__container",children:[Object(d.jsx)("input",{type:"checkbox",value:"None",id:"filter",name:"check",className:"checkbox__input"}),Object(d.jsx)("label",{className:"checkbox__label"})]})]})};var C=function(e){var t=c.a.useState(""),n=Object(o.a)(t,2),a=n[0],s=n[1];return Object(d.jsx)("section",{className:"searchform",children:Object(d.jsxs)("div",{className:"searchform__container",children:[Object(d.jsxs)("form",{className:"searchform__form",onSubmit:function(t){t.preventDefault(),e.onSearch(a)},noValidate:!0,children:[Object(d.jsx)("input",{onChange:function(e){s(e.target.value)},value:a||"",id:"search",type:"text",className:"searchform__input",placeholder:"\u0424\u0438\u043b\u044c\u043c",required:!0}),Object(d.jsx)("button",{className:"searchform__button",type:"submit",children:Object(d.jsx)("div",{className:"searchform__button_pic"})})]}),Object(d.jsx)(I,{})]})})},U=n(10);var E=function(e){var t=Object(l.h)(),n=e.setMovieSavedIcon(e.movie);function a(){e.onDelete(e.movie)}return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsxs)("div",{className:"card__menu",children:[Object(d.jsxs)("div",{className:"card__text",children:[Object(d.jsx)("h5",{className:"card__title",children:e.nameRU}),Object(d.jsx)("p",{className:"card__duraton",children:function(e){var t=Math.trunc(e/60),n=e%60;return"".concat(t>0?"".concat(t,"\u0447 "):"").concat(n,"\u043c")}(e.duration)})]}),"/movies"===t.pathname&&!n&&Object(d.jsx)("button",{className:"card__save-button",onClick:function(){e.onSave({country:e.movie.country,director:e.movie.director,duration:e.movie.duration,year:e.movie.year,description:e.movie.description,image:U.mainBaseUrl+e.movie.image,trailer:e.movie.trailer,nameRU:e.movie.nameRU,nameEN:e.movie.nameEN,thumbnail:U.mainBaseUrl+e.movie.thumbnail,movieId:e.movie.movieId})},children:Object(d.jsx)("div",{className:"card__save-icon"})}),"/movies"===t.pathname&&n&&Object(d.jsx)("button",{className:"card__save-button card__save-button_active",onClick:a,children:Object(d.jsx)("div",{className:"card__save-icon card__save-icon_active"})}),"/saved-movies"===t.pathname&&Object(d.jsx)("button",{className:"card__save-button",onClick:a,children:Object(d.jsx)("div",{className:"card__save-icon_saved"})})]}),Object(d.jsx)("a",{className:"card__trailer-link",href:e.trailerLink,target:"_blank",rel:"noreferrer",children:Object(d.jsx)("div",{className:"card__image",style:{backgroundImage:"url(https://api.nomoreparties.co".concat(e.image,")")}})})]})};var R=function(e){var t=Object(l.h)(),n=Object(a.useState)([]),s=Object(o.a)(n,2),r=s[0],i=s[1];return c.a.useEffect((function(){var t,n=window.innerWidth,a=Math.min(e.cards.length,(t=n,t>1279?{first:12}:t<1279&&t>810?{first:8}:t<810&&t>319?{first:5}:void 0).first);i(e.cards.slice(0,a))}),[e.cards]),Object(d.jsxs)("section",{className:"movies-cards",children:[e.noResult?Object(d.jsx)("p",{className:"movies-cards__no-result",children:"\u041f\u043e\u0438\u0441\u043a \u043d\u0435 \u0434\u0430\u043b \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432"}):"",Object(d.jsx)("div",{className:"movies-cards__container",children:r.map((function(t){return Object(d.jsx)(E,{movie:t,nameRU:t.nameRU,duration:t.duration,trailerLink:t.trailerLink,image:t.image.url,onSave:e.onSave,isMovieSaved:e.isMovieSaved,onDelete:e.onDelete,setMovieSavedIcon:e.setMovieSavedIcon},t.id)}))}),Object(d.jsx)("button",{type:"button",className:"".concat("/movies"===t.pathname?"movies-cards__more-button":"movies-cards__more-button_saved","\n                        ").concat(e.isButtonHide?"":"movies-cards__more-button_hide"),children:"\u0415\u0449\u0451"})]})};var M=function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(x,{}),Object(d.jsx)(C,{onSearch:e.onSearch}),Object(d.jsx)(R,{cards:e.cards,hideButton:e.hideButton,noResult:e.noResult,onSave:e.onSave,isMovieSaved:e.isMovieSaved,onDelete:e.onDelete,setMovieSavedIcon:e.setMovieSavedIcon}),Object(d.jsx)(y,{})]})};var T=function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(x,{}),Object(d.jsx)(C,{onSearch:e.onSearch}),Object(d.jsx)(R,{cards:e.cards,hideButton:e.hideButton,noResult:e.noResult,onDelete:e.onDelete}),Object(d.jsx)(y,{})]})},B=n(14);var L=function(e){var t=Object(a.useState)({inputName:"",inputEmail:"",inputPassword:""}),n=Object(o.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)({}),i=Object(o.a)(r,2),l=i[0],u=i[1],d=Object(a.useState)(!1),b=Object(o.a)(d,2),h=b[0],m=b[1],_=Object(a.useCallback)((function(e){var t=e.target,n=t.name,a=t.value;s((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(B.a)({},n,a))})),u((function(t){return Object(j.a)(Object(j.a)({},t),{},Object(B.a)({},n,e.target.validationMessage))})),m(e.target.closest("form").checkValidity())}),[s]);return{formValues:c,setFormValues:s,errors:l,setErrors:u,isInputValid:h,setIsInputValid:m,handleInputChange:_}};var F=function(e){var t=L.formValues,n=L.setFormValues,a=L.errors,s=L.setIsInputValid,r=L.handleInputChange;return c.a.useEffect((function(){s(!0),n(e.currentUser)}),[e.currentUser,n,s]),Object(d.jsxs)("section",{className:"profile",children:[Object(d.jsx)(x,{}),Object(d.jsxs)("div",{className:"profile__container",children:[Object(d.jsxs)("h2",{className:"profile__hello",children:["\u041f\u0440\u0438\u0432\u0435\u0442, ",e.userData.name,"!"]}),Object(d.jsxs)("form",{className:"profile__edit-block profile__edit-name",children:[Object(d.jsxs)("div",{className:"profile__edit-block profile__edit-name",children:[Object(d.jsx)("lable",{className:"profile__edit-text",children:"\u0418\u043c\u044f"}),Object(d.jsx)("input",{className:"profile__user-text",id:"name",minLength:"3",name:"name",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",value:t.inputName||"",onChange:r,required:!0}),Object(d.jsx)("span",{className:"entrance__input-error",id:"entrance__input-name-error",children:a.inputName})]}),Object(d.jsxs)("div",{className:"profile__edit-block profile__edit-email",children:[Object(d.jsx)("lable",{className:"profile__edit-text",children:"E-mail"}),Object(d.jsx)("input",{className:"profile__user-text",id:"name",minLength:"3",name:"email",type:"email",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u044e \u043f\u043e\u0447\u0442\u0443",value:t.inputEmail||"",onChange:r,required:!0}),Object(d.jsx)("span",{className:"entrance__input-error",id:"entrance__input-email-error",children:a.inputEmail})]}),Object(d.jsx)("button",{className:"profile__button profile__edit-button",type:"submit",children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"}),Object(d.jsx)("button",{className:"profile__button profile__exit-button",type:"button",children:"\u0412\u044b\u0439\u0442\u0438 \u0438\u0437 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430"})]})]})]})};var D=function(e){var t=Object(l.h)(),n=L({}),a=n.formValues,c=n.errors,s=n.isInputValid,r=n.handleInputChange;return Object(d.jsxs)("div",{className:"entrance__container",children:[Object(d.jsx)(m.b,{to:"/",className:"entrance__logo",children:Object(d.jsx)("img",{src:p,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u043f\u0440\u043e\u0435\u043a\u0442\u0430"})}),Object(d.jsx)("h3",{className:"entrance__hello",children:e.title}),Object(d.jsxs)("form",{className:"entrance__form",children:["/signin"===t.pathname?"":Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{className:"entrance__form-text",children:"\u0418\u043c\u044f"}),Object(d.jsx)("input",{name:"inputName",className:"entrance__input entrance__input-name",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",type:"text",required:!0,minLength:"3",value:a.inputName||"",onChange:r}),Object(d.jsx)("span",{className:"entrance__input-error",id:"entrance__input-name-error",children:c.inputName})]}),Object(d.jsx)("p",{className:"entrance__form-text",children:"E-mail"}),Object(d.jsx)("input",{name:"inputEmail",className:"entrance__input entrance__input-email",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u044e \u043f\u043e\u0447\u0442\u0443",type:"email",required:!0,value:a.inputEmail||"",onChange:r}),Object(d.jsx)("span",{className:"entrance__input-error",id:"entrance__input-email-error",children:c.inputEmail}),Object(d.jsx)("p",{className:"entrance__form-text",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(d.jsx)("input",{name:"inputPassword",className:"entrance__input entrance__input-password",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",type:"password",required:!0,minLength:"5",value:a.inputPassword||"",onChange:r}),Object(d.jsx)("span",{className:"entrance__input-error",id:"entrance__input-password-error",children:c.inputPassword}),Object(d.jsx)("button",{className:"".concat("/signin"===t.pathname?"entrance__button entrance__button-login":"entrance__button"),disabled:!s,children:e.buttonText})]}),Object(d.jsxs)("div",{className:"entrance__come-in",children:[Object(d.jsx)("p",{className:"entrance__text",children:e.entranceText}),Object(d.jsx)(m.b,{to:"".concat("/signin"===t.pathname?"/signup":"/signin"),className:"".concat("/signin"===t.pathname?"entrance__link entrance__signin-link":"entrance__link entrance__signup-link"),children:e.entranceLink})]})]})};var P=function(e){return Object(d.jsx)("section",{className:"register",children:Object(d.jsx)(D,{title:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c!",buttonText:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",entranceText:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",entranceLink:"\u0412\u043e\u0439\u0442\u0438"})})};var A=function(e){return Object(d.jsx)("section",{className:"login",children:Object(d.jsx)(D,{title:"\u0420\u0430\u0434\u044b \u0432\u0438\u0434\u0435\u0442\u044c!",buttonText:"\u0412\u043e\u0439\u0442\u0438",entranceText:"\u0415\u0449\u0451 \u043d\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",entranceLink:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})})};var V=function(e){var t=Object(l.g)();return Object(d.jsxs)("section",{className:"not-found",children:[Object(d.jsxs)("div",{className:"not-found__container",children:[Object(d.jsx)("h1",{className:"not-found__title",children:"404"}),Object(d.jsx)("p",{className:"not-found__subtitle",children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"})]}),Object(d.jsx)("button",{className:"not-found__button",type:"button",onClick:function(){return t.goBack()},children:"\u041d\u0430\u0437\u0430\u0434"})]})},J=c.a.createContext(),q=n(16),G=n(17),H=new(function(){function e(t){var n=t.baseUrl,a=t.headers;Object(q.a)(this,e),this.baseUrl=n,this.headers=a}return Object(G.a)(e,[{key:"getInitialCards",value:function(){return fetch("".concat(this.baseUrl),{method:"GET",headers:this.headers}).then(this._checkResponse)}},{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}}]),e}())({baseUrl:U.moviesBaseUrl,headers:{Accept:"application/json","Content-Type":"application/json"}}),z=new(function(){function e(t){var n=t.baseUrl,a=t.headers;Object(q.a)(this,e),this.baseUrl=n,this.headers=a}return Object(G.a)(e,[{key:"getUserInfo",value:function(){return fetch("".concat(this.baseUrl,"/users/me"),{method:"GET",headers:this.headers}).then(this._checkResponse)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkResponse)}},{key:"saveMovie",value:function(e){return fetch("".concat(this.baseUrl,"/movies"),{method:"POST",headers:this.headers,body:JSON.stringify({country:e.country,director:e.director,duration:e.duration,year:e.year,description:e.description,image:e.image,trailer:e.trailer,nameRU:e.nameRU,nameEN:e.nameEN,thumbnail:e.thumbnail,movieId:e.movieId})}).then(this._checkResponse)}},{key:"deleteMovie",value:function(e){return fetch("".concat(this.baseUrl,"/movies/").concat(e),{method:"DELETE",headers:this.headers}).then(this._checkResponse)}},{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}}]),e}())({baseUrl:U.mainBaseUrl,headers:{Accept:"application/json",Authorization:"Bearer ".concat(localStorage.getItem("jwt")),"Content-Type":"application/json"}}),Q="https://api.dtakush.diploma.nomoredomains.monster";var W=function(){var e=Object(l.g)(),t=c.a.useState({}),n=Object(o.a)(t,2),a=n[0],s=n[1],r=c.a.useState(!1),j=Object(o.a)(r,2),u=j[0],b=j[1],m=c.a.useState({}),_=Object(o.a)(m,2),p=(_[0],_[1]),O=c.a.useState([]),x=Object(o.a)(O,2),v=x[0],f=x[1],N=c.a.useState([]),g=Object(o.a)(N,2),k=g[0],S=g[1],y=c.a.useState(!1),I=Object(o.a)(y,2),C=I[0],U=I[1],E=c.a.useState(!1),R=Object(o.a)(E,2),B=R[0],L=R[1],D=c.a.useState([]),q=Object(o.a)(D,2),G=q[0],W=q[1];function K(){var t,n=localStorage.getItem("jwt");n&&(t=n,fetch("".concat(Q,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){if(200===e.status)return e.json();400===e.status&&console.log("\u0422\u043e\u043a\u0435\u043d \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043d\u0435 \u0432 \u0442\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435"),401===e.status&&console.log("\u041f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0439 \u0442\u043e\u043a\u0435\u043d \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u0435\u043d")})).then((function(e){return e})).catch((function(e){return console.log(e)}))).then((function(t){t?(p({email:t.email,id:t._id}),b(!0),e.push("/")):localStorage.removeItem("jwt")})).catch((function(t){console.log("Attention! ".concat(t)),e.push("/signin")}))}function X(e){var t=e.movieId,n=G.find((function(e){return e.movieId===t}));z.deleteMovie({_id:n._id}).then((function(e){if(!e)throw new Error("\u041f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u0444\u0438\u043b\u044c\u043c\u0430 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430");var n=G.filter((function(e){return e.movieId!==t}));W(n)})).catch((function(e){console.log("\u041f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u0444\u0438\u043b\u044c\u043c\u0430: ".concat(e))}))}return c.a.useEffect((function(){K()}),[]),c.a.useEffect((function(){u&&z.getUserInfo().then((function(e){s(e)})).catch((function(e){console.log("Attention! ".concat(e))}))}),[u]),c.a.useEffect((function(){H.getInitialCards().then((function(e){f(e)})).catch((function(e){console.log("Attention! ".concat(e))}))}),[]),Object(d.jsx)(J.Provider,{value:a,children:Object(d.jsx)("div",{className:"page",children:Object(d.jsxs)(l.d,{children:[Object(d.jsx)(h,{exact:!0,path:"/",children:Object(d.jsx)(w,{})}),Object(d.jsx)(h,{path:"/movies",children:Object(d.jsx)(M,{loggedIn:u,cards:k,onSearch:function(e){var t=e.toLowerCase(),n=[];v.forEach((function(e){null!==e.nameRU&&e.nameRU.toLowerCase().includes(t)||null!==e.nameEN&&e.nameEN.toLowerCase().includes(t)?(n.push(e),L(!1),U(!1),S(n),localStorage.setItem("movieSearchResult",JSON.stringify(n))):n.length<1&&(L(!0),U(!0),S([]))}))},hideButton:C,noResult:B,onSave:function(e){z.saveMovie(e).then((function(e){localStorage.setItem("savedMovie",JSON.stringify(e=[e].concat(Object(i.a)(G)))),W(e)})).catch((function(e){console.log("Attention! ".concat(e))}))},isMovieSaved:function(e){return G.some((function(t){return t.id===e.id}))},onDelete:X,setMovieSavedIcon:function(e){return e.isSaved=G.some((function(t){return t.movieId===e.id}))}})}),Object(d.jsx)(h,{path:"/saved-movies",children:Object(d.jsx)(T,{loggedIn:u,onSearch:function(e){var t=e.toLowerCase(),n=[];G.forEach((function(e){null!==e.nameRU&&e.nameRU.toLowerCase().includes(t)||null!==e.nameEN&&e.nameEN.toLowerCase().includes(t)?(n.push(e),L(!1),U(!1),W(n),localStorage.setItem("savedMovieSearchResult",JSON.stringify(n))):n.length<1&&(L(!0),U(!0),W([]))}))},cards:G,hideButton:C,oResult:B,onDelete:X})}),Object(d.jsx)(h,{path:"/profile",children:Object(d.jsx)(F,{loggedIn:u,currentUser:a})}),Object(d.jsx)(l.b,{path:"/signin",children:Object(d.jsx)(A,{onLogin:function(t){(function(e,t){return fetch("".concat(Q,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){if(200===e.status)return e.json();400===e.status&&console.log("\u041d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439"),401===e.status&&console.log("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 email \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d")})).then((function(e){if(e.token)return localStorage.setItem("jwt",e.token),z.updateHeaders(),e})).catch((function(e){return console.log(e)}))})(t.email,t.password).then((function(t){t.token&&(K(),e.push("/movies"))})).catch((function(e){console.log("Attention! ".concat(e))}))}})}),Object(d.jsx)(l.b,{path:"/signup",children:Object(d.jsx)(P,{onRegister:function(t){(function(e,t,n){return fetch("".concat(Q,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,email:t,password:n})}).then((function(e){if(200===e.status)return e.json();409===e.status&&console.log("\u041f\u0440\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0443\u043a\u0430\u0437\u0430\u043d email, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442"),400===e.status&&console.log("\u041f\u0435\u0440\u0435\u0434\u0430\u043d\u044b \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f")})).then((function(e){return e})).catch((function(e){return console.log(e)}))})(t.email,t.password).then((function(t){t&&e.push("/signin")})).catch((function(e){console.log("Attention! ".concat(e))}))}})}),Object(d.jsx)(l.b,{path:"*",children:Object(d.jsx)(V,{})})]})})})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(m.a,{children:Object(d.jsx)(W,{})})}),document.getElementById("root")),K()}},[[41,1,2]]]);
//# sourceMappingURL=main.a9289c65.chunk.js.map