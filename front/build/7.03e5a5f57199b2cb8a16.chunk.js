(window.webpackJsonp=window.webpackJsonp||[]).push([[7,167],{"3SKu":function(e,t,n){"use strict";var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("fHP9"));t.default=function(e){var t=e.children,n=e.action;return t((0,i.default)(n))}},"9gHg":function(e,t,n){"use strict";var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("pVnL"));n("TeQF"),n("07d7"),n("JfAA"),n("2B1R");var r=a(n("q1tI")),o=n("T89o"),l=n("KLnl"),u=a(n("PJXl")),d=a(n("gloL")),c=a(n("sL4G")),f=a(n("dIt1")),s=a(n("vOnD")),p=n("96Cm"),m=n("+9pX"),g=s.default.div.withConfig({displayName:"AvatarBubbles__EmptyContainer",componentId:"sc-11096kl-0"})([""]),v=s.default.div.withConfig({displayName:"AvatarBubbles__Container",componentId:"sc-11096kl-1"})(["flex-shrink:0;width:","px;height:","px;position:relative;"],(function(e){return e.width}),(function(e){return e.height})),h=s.default.img.withConfig({displayName:"AvatarBubbles__AvatarImageBubble",componentId:"sc-11096kl-2"})(["width:","px;height:","px;border-radius:50%;border:solid 2px #fff;text-indent:-9999px;position:absolute;z-index:",";left:","px;object-fit:cover;object-position:center;"],(function(e){return e.size}),(function(e){return e.size}),(function(e){return e.index+1}),(function(e){return e.index*(e.size-e.overlap)})),b=s.default.div.withConfig({displayName:"AvatarBubbles__UserCountBubble",componentId:"sc-11096kl-3"})(["width:","px;height:","px;display:flex;align-items:center;justify-content:center;padding-bottom:0;border-radius:50%;border:solid 2px #fff;background:",";position:absolute;z-index:",";left:","px;"],(function(e){return e.size}),(function(e){return e.size}),(function(e){return e.bgColor}),(function(e){return e.index+1}),(function(e){return e.index*(e.size-e.overlap)})),y=s.default.div.withConfig({displayName:"AvatarBubbles__UserCountBubbleInner",componentId:"sc-11096kl-4"})(["color:#fff;font-size:","px;font-weight:500;display:flex;"],(function(e){return function(e,t){if(e>=34){if(t<=2)return 14;if(3===t)return 12;if(t>=4)return 11}else{if(t<=2)return 12;if(3===t)return 11;if(t>=4)return 10}return 14}(e.size,e.digits)})),x=(0,c.default)((function(e){var t=e.avatarIds,n=e.context,a=e.size,i=void 0===a?34:a,u=e.overlap,d=e.className,c=e.userCountBgColor,s=void 0===c?p.colors.label:c,x=e.intl.formatMessage,w=e.avatars,P=e.userCount;if(!(0,l.isNilOrError)(w)&&(0,o.isNumber)(P)&&P>0){var _=i+4,O=u||10,E=_>160?"large":"medium",I=w.filter((function(e){return!(0,o.isError)(e)&&e.attributes.avatar&&e.attributes.avatar[E]})),T=I.length,C=P-T,k=C.toString().length,N=_+2,j=(T+(C>0?1:0))*(_-O)+O+2;if(t||n||T>0)return r.default.createElement(v,{className:d,width:j,height:N},I.map((function(e,t){return r.default.createElement(h,{key:t,index:t,overlap:O,size:_,src:e.attributes.avatar[E],alt:""})})),C>0&&r.default.createElement(b,{index:I.length,overlap:O,size:_,bgColor:s},r.default.createElement(y,{size:_,digits:k,"aria-hidden":!0},"+",C),r.default.createElement(m.ScreenReaderOnly,null,x(f.default.numberOfUsers,{numberOfUsers:P}))))}else if(void 0!==w)return r.default.createElement(g,{className:d});return null}));t.default=function(e){return e.avatarIds?r.default.createElement(d.default,{ids:e.avatarIds},(function(t){return r.default.createElement(x,(0,i.default)({},e,{avatars:(0,l.isNilOrError)(t)?null:t}))})):r.default.createElement(u.default,{limit:e.limit||4,context:e.context},(function(t){return r.default.createElement(x,(0,i.default)({},e,{avatars:(0,l.isNilOrError)(t)?null:t.data,userCount:(0,l.isNilOrError)(t)?void 0:t.meta.total}))}))}},Gxhh:function(e,t,n){"use strict";n("4mDm"),n("07d7"),n("PKPk"),n("ENF9"),n("3bBZ"),n("5DmW");var a=n("TqRt"),i=n("cDf5");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==i(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=r?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(a,o,l):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n("q1tI")),o=n("KLnl"),l=a(n("yW4/")),u=n("Rw3A"),d=a(n("Vmuw")),c=a(n("JvRQ")),f=a(n("I9mC")),s=a(n("vOnD"));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}var m=s.default.div.withConfig({displayName:"CityLogoSection__Container",componentId:"ugd36b-0"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;padding-right:20px;padding-left:20px;padding-top:110px;padding-bottom:130px;background:#fff;width:100%;"]),g=s.default.a.withConfig({displayName:"CityLogoSection__LogoLink",componentId:"ugd36b-1"})(["cursor:pointer;"]),v=s.default.img.withConfig({displayName:"CityLogoSection__TenantLogo",componentId:"ugd36b-2"})(["height:50px;margin-bottom:20px;"]),h=(0,r.memo)((function(e){var t=e.intl.formatMessage,n=(0,c.default)(),a=(0,f.default)();if(!(0,o.isNilOrError)(a)){var i,u=(null===(i=a.data.attributes.logo)||void 0===i?void 0:i.medium)||null,s=a.data.attributes.settings.core.organization_site,p="footer-city-logo-".concat(n);if(u)return r.default.createElement(l.default,{title:t(d.default.iframeTitle),name:p},r.default.createElement(m,{id:"hook-footer-logo"},s?r.default.createElement(g,{href:s,target:"_blank"},r.default.createElement(v,{src:u,alt:"Organization logo"})):r.default.createElement(v,{src:u,alt:"Organization logo"})))}return null})),b=(0,u.injectIntl)(h);t.default=b},PJXl:function(e,t,n){"use strict";n("SuFq");var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("FZtP");var i=a(n("lwsE")),r=a(n("W8MJ")),o=a(n("PJYZ")),l=a(n("7W2i")),u=a(n("a1gu")),d=a(n("Nsbk")),c=a(n("lSNA")),f=a(n("q1tI")),s=n("T89o"),p=n("DtyJ"),m=n("oGD+"),g=n("KLnl"),v=n("ahDk");function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,d.default)(e);if(t){var i=(0,d.default)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return(0,u.default)(this,n)}}var b=function(e){(0,l.default)(n,e);var t=h(n);function n(e){var a;return(0,i.default)(this,n),a=t.call(this,e),(0,c.default)((0,o.default)(a),"inputProps$",void 0),(0,c.default)((0,o.default)(a),"subscriptions",void 0),a.state={avatars:void 0},a}return(0,r.default)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.limit,a=t.context;this.inputProps$=new p.BehaviorSubject({limit:n,context:a}),this.subscriptions=[this.inputProps$.pipe((0,v.distinctUntilChanged)((function(e,t){return(0,s.isEqual)(e,t)})),(0,v.switchMap)((function(e){var t=e.limit,n=e.context;return n?(0,m.randomAvatarsStream)({queryParameters:{limit:t,context_type:n.type,context_id:n.id}}).observable:(0,m.randomAvatarsStream)({queryParameters:{limit:t}}).observable}))).subscribe((function(t){return e.setState({avatars:(0,g.isNilOrError)(t)?null:t})}))]}},{key:"componentDidUpdate",value:function(){var e=this.props,t=e.limit,n=e.context;this.inputProps$.next({limit:t,context:n})}},{key:"componentWillUnmount",value:function(){this.subscriptions.forEach((function(e){return e.unsubscribe()}))}},{key:"render",value:function(){return(0,this.props.children)(this.state.avatars)}}]),n}(f.default.Component);t.default=b},"Tf/v":function(e,t,n){"use strict";n("SuFq"),n("ENF9"),n("5DmW");var a=n("TqRt"),i=n("cDf5");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("pVnL")),o=a(n("lwsE")),l=a(n("W8MJ")),u=a(n("PJYZ")),d=a(n("7W2i")),c=a(n("a1gu")),f=a(n("Nsbk")),s=a(n("lSNA")),p=a(n("VkAN"));n("4mDm"),n("07d7"),n("5s+n"),n("PKPk"),n("3bBZ"),n("ma9I");var m,g,v,h,b=V(n("q1tI")),y=n("ifvJ"),x=a(n("Dko/")),w=a(n("Gxhh")),P=a(n("2fl8")),_=a(n("9gHg")),O=a(n("tSiQ")),E=a(n("bkdE")),I=a(n("xls6")),T=a(n("3A/8")),C=a(n("yW4/")),k=a(n("3+OT")),N=a(n("VVVo")),j=a(n("yiTP")),A=a(n("yYlr")),M=a(n("YLV/")),S=a(n("C9Am")),B=n("KuRP"),D=a(n("AsmR")),R=n("KLnl"),H=n("q3BX"),W=n("Rw3A"),z=a(n("bPGa")),L=V(n("vOnD")),q=n("96Cm"),F=a(n("3SKu")),U=a(n("UjkJ")),J=a(n("Yjdl"));function K(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(K=function(e){return e?n:t})(e)}function V(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==i(e)&&"function"!=typeof e)return{default:e};var n=K(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=r?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(a,o,l):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}function Z(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,f.default)(e);if(t){var i=(0,f.default)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return(0,c.default)(this,n)}}var G=b.default.lazy((function(){return Promise.all([n.e(18),n.e(31)]).then(n.t.bind(null,"PA3c",7))})),Y=L.default.main.withConfig({displayName:"LandingPage__Container",componentId:"sc-1rgcisa-0"})(["height:100%;min-height:calc( 100vh - ","px );display:flex;flex-direction:column;align-items:center;position:relative;background:#fff;",""],(function(e){return e.theme.menuHeight+e.theme.footerHeight}),q.media.smallerThanMaxTablet(m||(m=(0,p.default)(["\n    min-height: auto;\n  "])))),Q=(0,L.default)(k.default).withConfig({displayName:"LandingPage__StyledQuillEditedContent",componentId:"sc-1rgcisa-1"})(["h1,h2{color:",";}p,li{color:",";}"],(function(e){return e.theme.colorText}),q.colors.label),$=L.default.div.withConfig({displayName:"LandingPage__FooterBanner",componentId:"sc-1rgcisa-2"})(["background:",";width:100%;min-height:300px;margin:0;padding:0;position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;padding-left:30px;padding-right:30px;padding-top:50px;padding-bottom:60px;h2{color:#fff;font-size:","px;line-height:normal;font-weight:600;margin-bottom:30px;max-width:500px;text-align:center;","}"],(function(e){return e.theme.colorMain}),q.fontSizes.xxxl,q.media.smallerThanMaxTablet(g||(g=(0,p.default)(["\n      font-size: ","px;\n    "])),q.fontSizes.xxxl)),X=(0,L.default)(_.default).withConfig({displayName:"LandingPage__StyledAvatarBubbles",componentId:"sc-1rgcisa-3"})(["margin-bottom:45px;"]),ee=L.default.div.withConfig({displayName:"LandingPage__Content",componentId:"sc-1rgcisa-4"})(["width:100%;z-index:3;"]),te=(0,L.default)(x.default).withConfig({displayName:"LandingPage__StyledContentContainer",componentId:"sc-1rgcisa-5"})(["background:",";border-bottom:solid 1px #eaeaea;"],q.colors.background),ne=L.default.div.withConfig({displayName:"LandingPage__ProjectSection",componentId:"sc-1rgcisa-6"})(["width:100%;padding-top:40px;padding-bottom:90px;",""],q.media.smallerThanMinTablet(v||(v=(0,p.default)(["\n    padding-bottom: 60px;\n  "])))),ae=L.default.section.withConfig({displayName:"LandingPage__SectionContainer",componentId:"sc-1rgcisa-7"})(["width:100%;margin-top:10px;"]),ie=(0,L.default)(x.default).withConfig({displayName:"LandingPage__CustomSectionContentContainer",componentId:"sc-1rgcisa-8"})(["width:100%;max-width:750px;margin-left:auto;margin-right:auto;padding-top:80px;padding-bottom:80px;background:#fff;",""],q.media.smallerThanMinTablet(h||(h=(0,p.default)(["\n    padding-top: 40px;\n    padding-bottom: 40px;\n  "])))),re=(0,L.default)(I.default).withConfig({displayName:"LandingPage__StyledInitiativesCTABox",componentId:"sc-1rgcisa-9"})(["padding-top:10px;padding-bottom:40px;"]),oe=function(e){(0,d.default)(n,e);var t=Z(n);function n(){var e;(0,o.default)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return e=t.call.apply(t,[this].concat(i)),(0,s.default)((0,u.default)(e),"signUpIn",(function(e){e.preventDefault(),(0,B.trackEventByName)(D.default.clickCreateAccountCTA,{extra:{location:"footer"}}),(0,H.openSignUpInModal)()})),e}return(0,l.default)(n,[{key:"render",value:function(){var e=this.props,t=e.locale,n=e.tenant,a=e.authUser,i=e.homepageInfoPage,o=e.postingPermission;if(!(0,R.isNilOrError)(t)&&!(0,R.isNilOrError)(n)&&!(0,R.isNilOrError)(i)){var l=!(0,R.isEmptyMultiloc)(i.attributes.body_multiloc),u=i.attributes.body_multiloc,d=!(null==o||!o.enabled),c=n.attributes.settings.core.header_slogan,f=b.default.createElement(W.FormattedMessage,(0,r.default)({tagName:"h2"},z.default.subtitleCity));return b.default.createElement(b.default.Fragment,null,b.default.createElement(Y,{id:"e2e-landing-page"},(0,R.isNilOrError)(a)?b.default.createElement(C.default,{name:"signed-out-header"},b.default.createElement(O.default,null)):b.default.createElement(E.default,null),b.default.createElement(ee,null,b.default.createElement(te,{mode:"page"},b.default.createElement(ne,{id:"e2e-landing-page-project-section"},b.default.createElement(ae,null,b.default.createElement(b.Suspense,{fallback:b.default.createElement(N.default,null)},b.default.createElement(G,{publicationStatusFilter:["published","archived"],showTitle:!0,layout:"dynamic"})))),b.default.createElement(J.default,{id:"app.containers.LandingPage.EventsWidget"}),b.default.createElement(U.default,{name:"initiatives"},d&&b.default.createElement(re,null))),l&&b.default.createElement(ie,null,b.default.createElement(Q,null,b.default.createElement(C.default,{name:(0,R.isNilOrError)(i)?"":"pages/".concat(i&&i.id,"/content")},b.default.createElement(T.default,{value:u,supportHtml:!0})))),!a&&b.default.createElement($,null,c?b.default.createElement(T.default,{value:c},(function(e){return e?b.default.createElement("h2",null,e):f})):f,b.default.createElement(X,null),b.default.createElement(P.default,{fontWeight:"500",padding:"13px 22px",buttonStyle:"primary-inverse",onClick:this.signUpIn,text:b.default.createElement(W.FormattedMessage,z.default.createAccount)})),b.default.createElement(w.default,null))))}return null}}]),n}(b.PureComponent),le=(0,y.adopt)({locale:b.default.createElement(j.default,null),tenant:b.default.createElement(A.default,null),authUser:b.default.createElement(M.default,null),homepageInfoPage:b.default.createElement(S.default,{slug:"homepage-info"}),postingPermission:b.default.createElement(F.default,{action:"posting_initiative"})}),ue=(0,L.withTheme)(oe);t.default=function(e){return b.default.createElement(le,e,(function(t){return b.default.createElement(ue,(0,r.default)({},e,t))}))}},VVVo:function(e,t,n){"use strict";n("4mDm"),n("07d7"),n("PKPk"),n("ENF9"),n("3bBZ"),n("5DmW");var a=n("TqRt"),i=n("cDf5");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==i(e)&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=r?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(a,o,l):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n("q1tI")),o=n("iP56"),l=a(n("vOnD")),u=n("96Cm");function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}var c=l.default.div.withConfig({displayName:"LoadingBox__Container",componentId:"zjrtje-0"})(["width:100%;height:300px;display:flex;align-items:center;justify-content:center;",";"],u.defaultCardStyle),f=(0,r.memo)((function(e){var t=e.className;return r.default.createElement(c,{className:t||""},r.default.createElement(o.Spinner,null))}));t.default=f},Vmuw:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(0,n("JRPe").defineMessages)({iframeTitle:{id:"app.components.CityLogoSection.iframeTitle",defaultMessage:"More information about {orgName}"}});t.default=a},dIt1:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(0,n("JRPe").defineMessages)({numberOfUsers:{id:"app.components.AvatarBubbles.numberOfUsers",defaultMessage:"{numberOfUsers} users"}});t.default=a},fHP9:function(e,t,n){"use strict";var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=(0,r.useState)(void 0),n=(0,i.default)(t,2),a=n[0],f=n[1];return(0,r.useEffect)((function(){var t=(0,c.combineLatest)((0,o.getInitiativeActionDescriptors)().observable,(0,u.currentAppConfigurationStream)().observable,(0,d.authUserStream)().observable).subscribe((function(t){var n=(0,i.default)(t,3),a=n[0],r=n[1],o=n[2];if(!(0,l.isNilOrError)(r)&&!(0,l.isNilOrError)(a)){var u=a[e];if(u.enabled)f({show:!0,enabled:!0,disabledReason:null,action:null});else switch(u.disabled_reason){case"not_verified":(0,l.isNilOrError)(o)?f({show:!0,enabled:"maybe",disabledReason:null,action:"sign_in_up_and_verify"}):f({show:!0,enabled:"maybe",disabledReason:null,action:"verify"});break;case"not_signed_in":f({show:!0,enabled:"maybe",disabledReason:null,action:"sign_in_up"});break;default:f({show:!0,enabled:!1,disabledReason:"notPermitted",action:null})}}}));return function(){return t.unsubscribe()}}),[]),a};var i=a(n("J4zp")),r=n("q1tI"),o=n("fM+I"),l=n("KLnl"),u=n("H9u3"),d=n("x303"),c=n("DtyJ")},"fM+I":function(e,t,n){"use strict";n("tkto"),n("pNMO"),n("TeQF"),n("5DmW"),n("FZtP"),n("27RR");var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.initiativeByIdStream=m,t.initiativeBySlugStream=function(e){return d.default.get({apiEndpoint:"".concat(u.API_PATH,"/initiatives/by_slug/").concat(e)})},t.initiativesStream=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return d.default.get(p({apiEndpoint:"".concat(u.API_PATH,"/initiatives")},e))},t.initiativesFilterCountsStream=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return d.default.get(p(p({apiEndpoint:"".concat(u.API_PATH,"/initiatives/filter_counts")},e),{},{cacheStream:!1}))},t.initiativesMarkersStream=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return d.default.get(p(p({apiEndpoint:"".concat(u.API_PATH,"/initiatives/as_markers")},e),{},{cacheStream:!1}))},t.addInitiative=function(e){return g.apply(this,arguments)},t.updateInitiative=function(e,t){return v.apply(this,arguments)},t.deleteInitiative=function(e){return h.apply(this,arguments)},t.initiativeAllowedTransitionsStream=function(e){return d.default.get({apiEndpoint:"".concat(u.API_PATH,"/initiatives/").concat(e,"/allowed_transitions")})},t.initiativeActivities=function(e){return d.default.get({apiEndpoint:"".concat(u.API_PATH,"/initiatives/").concat(e,"/activities")})},t.getInitiativeActionDescriptors=function(){return d.default.get({apiEndpoint:"".concat(u.API_PATH,"/action_descriptors/initiatives")})};var i=a(n("o0o1")),r=a(n("J4zp")),o=a(n("yXPU")),l=a(n("lSNA"));n("ma9I"),n("4mDm"),n("07d7"),n("5s+n"),n("PKPk"),n("3bBZ");var u=n("p0gT"),d=a(n("1Kqg")),c=n("ahDk"),f=n("T89o");function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,l.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e){return d.default.get({apiEndpoint:"".concat(u.API_PATH,"/initiatives/").concat(e)})}function g(){return(g=(0,o.default)(i.default.mark((function e(t){var n;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.default.add("".concat(u.API_PATH,"/initiatives"),{initiative:t});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=(0,o.default)(i.default.mark((function e(t,n){var a;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.default.update("".concat(u.API_PATH,"/initiatives/").concat(t),t,{initiative:n});case 2:return a=e.sent,d.default.fetchAllWith({apiEndpoint:["".concat(u.API_PATH,"/stats/initiatives_count"),"".concat(u.API_PATH,"/initiatives"),"".concat(u.API_PATH,"/initiatives/").concat(t,"/activities")]}),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return(h=(0,o.default)(i.default.mark((function e(t){var n,a,o,l,s;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([m(t).observable.pipe((0,c.first)()).toPromise(),d.default.delete("".concat(u.API_PATH,"/initiatives/").concat(t),t)]);case 2:return n=e.sent,a=(0,r.default)(n,2),o=a[0],l=a[1],s=(0,f.get)(o,"relationships.author.data.id",!1),d.default.fetchAllWith({apiEndpoint:s?["".concat(u.API_PATH,"/users/").concat(s,"/initiatives_count")]:[]}),e.abrupt("return",l);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},gloL:function(e,t,n){"use strict";n("TeQF"),n("SuFq");var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("2B1R"),n("FZtP");var i=a(n("lwsE")),r=a(n("W8MJ")),o=a(n("PJYZ")),l=a(n("7W2i")),u=a(n("a1gu")),d=a(n("Nsbk")),c=a(n("lSNA")),f=a(n("q1tI")),s=n("T89o"),p=n("DtyJ"),m=n("ahDk"),g=n("oGD+"),v=n("KLnl");function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,d.default)(e);if(t){var i=(0,d.default)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return(0,u.default)(this,n)}}var b=function(e){(0,l.default)(n,e);var t=h(n);function n(e){var a;return(0,i.default)(this,n),a=t.call(this,e),(0,c.default)((0,o.default)(a),"inputProps$",void 0),(0,c.default)((0,o.default)(a),"subscriptions",void 0),a.state={avatars:void 0},a}return(0,r.default)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.ids;this.inputProps$=new p.BehaviorSubject({ids:t}),this.subscriptions=[this.inputProps$.pipe((0,m.distinctUntilChanged)((function(e,t){return(0,s.isEqual)(e,t)})),(0,m.filter)((function(e){var t=e.ids;return!!(t&&t.length>0)})),(0,m.switchMap)((function(e){var t=e.ids;return(0,p.combineLatest)(t.map((function(e){return(0,g.avatarByIdStream)(e).observable.pipe((0,m.map)((function(e){return(0,v.isNilOrError)(e)?e:e.data})))})))}))).subscribe((function(t){e.setState({avatars:t})}))]}},{key:"componentDidUpdate",value:function(){this.inputProps$.next({ids:this.props.ids})}},{key:"componentWillUnmount",value:function(){this.subscriptions.forEach((function(e){return e.unsubscribe()}))}},{key:"render",value:function(){return(0,this.props.children)(this.state.avatars)}}]),n}(f.default.Component);t.default=b},"oGD+":function(e,t,n){"use strict";n("tkto"),n("pNMO"),n("TeQF"),n("5DmW"),n("FZtP"),n("27RR");var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.avatarByIdStream=function(e){return o.default.get({apiEndpoint:"".concat(r.API_PATH,"/avatars/").concat(e),cacheStream:!1})},t.randomAvatarsStream=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return o.default.get(u(u({apiEndpoint:d},e),{},{cacheStream:!1}))};var i=a(n("lSNA"));n("ma9I");var r=n("p0gT"),o=a(n("1Kqg"));function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,i.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d="".concat(r.API_PATH,"/avatars")},tSiQ:function(e,t,n){"use strict";n("SuFq"),n("4mDm"),n("07d7"),n("PKPk"),n("ENF9"),n("3bBZ"),n("5DmW");var a=n("TqRt"),i=n("cDf5");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("ma9I");var r,o,l,u,d,c,f=a(n("pVnL")),s=a(n("lwsE")),p=a(n("W8MJ")),m=a(n("PJYZ")),g=a(n("7W2i")),v=a(n("a1gu")),h=a(n("Nsbk")),b=a(n("lSNA")),y=a(n("VkAN")),x=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==i(e)&&"function"!=typeof e)return{default:e};var n=B(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=r?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(a,o,l):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n("q1tI")),w=n("ifvJ"),P=n("KLnl"),_=a(n("2fl8")),O=a(n("9gHg")),E=a(n("yiTP")),I=a(n("yYlr")),T=n("KuRP"),C=a(n("AsmR")),k=n("q3BX"),N=n("Rw3A"),j=a(n("V3HD")),A=a(n("bPGa")),M=a(n("vOnD")),S=n("96Cm");function B(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(B=function(e){return e?n:t})(e)}function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,h.default)(e);if(t){var i=(0,h.default)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return(0,v.default)(this,n)}}var R=M.default.div.withConfig({displayName:"SignedOutHeader__Container",componentId:"vxbu5u-0"})(["width:100%;display:flex;flex-direction:column;"]),H=M.default.div.withConfig({displayName:"SignedOutHeader__Header",componentId:"vxbu5u-1"})(["width:100%;min-height:450px;margin:0;padding:0;position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;"," "," ",""],S.media.desktop(r||(r=(0,y.default)(["\n    min-height: 450px;\n  "]))),S.media.smallerThanMaxTablet(o||(o=(0,y.default)(["\n    min-height: 350px;\n  "]))),S.media.smallerThanMinTablet(l||(l=(0,y.default)(["\n    min-height: 300px;\n  "])))),W=M.default.div.withConfig({displayName:"SignedOutHeader__HeaderImage",componentId:"vxbu5u-2"})(["position:absolute;top:0;bottom:0;left:0;right:0;"]),z=M.default.div.withConfig({displayName:"SignedOutHeader__HeaderImageBackground",componentId:"vxbu5u-3"})(["position:absolute;top:0;bottom:0;left:0;right:0;background-repeat:no-repeat;background-position:center center;background-size:cover;background-image:url(",");"],(function(e){return e.src})),L=M.default.div.withConfig({displayName:"SignedOutHeader__HeaderImageOverlay",componentId:"vxbu5u-4"})(["background:",";opacity:",";position:absolute;top:0;bottom:0;left:0;right:0;"],(function(e){var t=e.theme;return t.signedOutHeaderOverlayColor||t.colorMain}),(function(e){return e.theme.signedOutHeaderOverlayOpacity})),q=M.default.div.withConfig({displayName:"SignedOutHeader__HeaderContent",componentId:"vxbu5u-5"})(["width:100%;height:100%;max-width:","px;padding-top:50px;padding-bottom:50px;padding-left:30px;padding-right:30px;display:flex;flex-direction:column;justify-content:center;align-items:center;z-index:1;"],(function(e){return e.theme.maxPageWidth+60})),F=M.default.h1.withConfig({displayName:"SignedOutHeader__HeaderTitle",componentId:"vxbu5u-6"})(["width:100%;color:",";font-size:","px;font-weight:",";line-height:normal;text-align:center;margin:0;padding:0;",""],(function(e){var t=e.hasHeader,n=e.theme;return t?"#fff":n.colorMain}),(function(e){return e.theme.signedOutHeaderTitleFontSize||S.fontSizes.xxxxl}),(function(e){return e.theme.signedOutHeaderTitleFontWeight||600}),S.media.smallerThanMaxTablet(u||(u=(0,y.default)(["\n    font-size: ","px;\n  "])),S.fontSizes.xxxl)),U=M.default.h2.withConfig({displayName:"SignedOutHeader__HeaderSubtitle",componentId:"vxbu5u-7"})(["width:100%;color:",";font-size:","px;line-height:28px;font-weight:400;text-align:center;text-decoration:none;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;padding:0;margin:0;margin-top:30px;",""],(function(e){var t=e.hasHeader,n=e.theme;return t?"#fff":n.colorMain}),S.fontSizes.xl,S.media.smallerThanMinTablet(d||(d=(0,y.default)(["\n    margin-top: 15px;\n  "])))),J=(0,M.default)(O.default).withConfig({displayName:"SignedOutHeader__StyledAvatarBubbles",componentId:"vxbu5u-8"})(["margin-top:18px;min-height:40px;"]),K=(0,M.default)(_.default).withConfig({displayName:"SignedOutHeader__SignUpButton",componentId:"vxbu5u-9"})(["margin-top:38px;",""],S.media.smallerThanMinTablet(c||(c=(0,y.default)(["\n    margin-top: 30px;\n  "])))),V=function(e){(0,g.default)(n,e);var t=D(n);function n(){var e;(0,s.default)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return e=t.call.apply(t,[this].concat(i)),(0,b.default)((0,m.default)(e),"signUpIn",(function(e){e.preventDefault(),(0,T.trackEventByName)(C.default.clickCreateAccountCTA,{extra:{location:"signed-out header"}}),(0,k.openSignUpInModal)()})),e}return(0,p.default)(n,[{key:"render",value:function(){var e=this.props,t=e.locale,n=e.tenant,a=e.className,i=e.localize,r=e.intl.formatMessage;if(!(0,P.isNilOrError)(t)&&!(0,P.isNilOrError)(n)){var o,l,u,d,c,f,s,p,m=i(null==n||null===(o=n.attributes)||void 0===o||null===(l=o.settings)||void 0===l||null===(u=l.core)||void 0===u?void 0:u.header_title)||r(A.default.titleCity),g=i(null==n||null===(d=n.attributes)||void 0===d||null===(c=d.settings)||void 0===c||null===(f=c.core)||void 0===f?void 0:f.header_slogan)||r(A.default.subtitleCity),v=null==n||null===(s=n.attributes)||void 0===s||null===(p=s.header_bg)||void 0===p?void 0:p.large;return x.default.createElement(R,{className:"e2e-signed-out-header ".concat(a)},x.default.createElement(H,{id:"hook-header"},x.default.createElement(W,{id:"hook-header-image"},x.default.createElement(z,{src:v||null}),x.default.createElement(L,null)),x.default.createElement(q,{id:"hook-header-content",className:"e2e-signed-out-header-title"},x.default.createElement(F,{hasHeader:!!v},m),x.default.createElement(U,{hasHeader:!!v,className:"e2e-signed-out-header-subtitle"},g),x.default.createElement(J,null),x.default.createElement(K,{fontWeight:"500",padding:"13px 22px",buttonStyle:"primary-inverse",onClick:this.signUpIn,text:x.default.createElement(N.FormattedMessage,A.default.createAccount),className:"e2e-signed-out-header-cta-button"}))))}return null}}]),n}(x.PureComponent),Z=(0,w.adopt)({locale:x.default.createElement(E.default,null),tenant:x.default.createElement(I.default,null)}),G=(0,N.injectIntl)((0,j.default)(V));t.default=function(e){return x.default.createElement(Z,e,(function(t){return x.default.createElement(G,(0,f.default)({},e,t))}))}},xls6:function(e,t,n){"use strict";n("4mDm"),n("07d7"),n("PKPk"),n("ENF9"),n("3bBZ"),n("5DmW");var a=n("TqRt"),i=n("cDf5");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o,l,u,d,c,f,s,p=a(n("VkAN")),m=T(n("q1tI")),g=a(n("K/LT")),v=a(n("uN1B")),h=T(n("vOnD")),b=n("96Cm"),y=a(n("2fl8")),x=n("iP56"),w=a(n("JUYq")),P=n("KLnl"),_=n("q3BX"),O=n("Rw3A"),E=a(n("bPGa"));function I(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(I=function(e){return e?n:t})(e)}function T(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==i(e)&&"function"!=typeof e)return{default:e};var n=I(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=r?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(a,o,l):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}var C=h.default.div.withConfig({displayName:"InitiativesCTABox__Container",componentId:"ove99j-0"})([""]),k=h.default.div.withConfig({displayName:"InitiativesCTABox__BoxContainer",componentId:"ove99j-1"})(["display:flex;align-items:center;justify-content:space-between;padding:60px 40px;position:relative;overflow:hidden;margin-bottom:70px;",";"," ",""],b.defaultCardStyle,b.media.smallerThanMaxTablet(r||(r=(0,p.default)(["\n    padding: 60px 50px 50px;\n    margin-bottom: 20px;\n  "]))),b.media.smallerThanMinTablet(o||(o=(0,p.default)(["\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 60px 30px 40px;\n  "])))),N=(0,h.default)(x.Icon).withConfig({displayName:"InitiativesCTABox__BackgroundIcon",componentId:"ove99j-2"})(["fill:rgba(4,77,108,0.03);height:500px;width:auto;position:absolute;top:-200px;right:-150px;"]),j=h.default.div.withConfig({displayName:"InitiativesCTABox__TextContainer",componentId:"ove99j-3"})(["flex:1 1 auto;"]),A=h.default.h2.withConfig({displayName:"InitiativesCTABox__Title",componentId:"ove99j-4"})(["color:",";font-size:","px;line-height:33px;font-weight:600;margin-bottom:10px;max-width:400px;",""],(function(e){return e.theme.colorText}),b.fontSizes.xxl,b.media.smallerThanMinTablet(l||(l=(0,p.default)(["\n    max-width: none;\n    text-align: center;\n  "])))),M=h.default.div.withConfig({displayName:"InitiativesCTABox__Text",componentId:"ove99j-5"})(["max-width:400px;color:",";font-size:","px;font-weight:300;",""],b.colors.label,b.fontSizes.base,b.media.smallerThanMinTablet(u||(u=(0,p.default)(["\n    max-width: none;\n    text-align: center;\n  "])))),S=h.default.div.withConfig({displayName:"InitiativesCTABox__ButtonContainer",componentId:"ove99j-6"})(["display:flex;flex-direction:row;"," ",""],b.media.smallerThanMaxTablet(d||(d=(0,p.default)(["\n    flex-direction: column;\n    justify-content: center;\n    align-items: stretch;\n    margin-left: 20px;\n  "]))),b.media.smallerThanMinTablet(c||(c=(0,p.default)(["\n    margin-left: 0;\n    width: 100%;\n    margin-top: 20px;\n  "])))),B=(0,h.default)(y.default).withConfig({displayName:"InitiativesCTABox__BrowseInitiativesButton",componentId:"ove99j-7"})([""]),D=(0,h.default)(y.default).withConfig({displayName:"InitiativesCTABox__StartInitiativeButton",componentId:"ove99j-8"})(["margin-left:20px;"," ",""],b.media.smallerThanMaxTablet(f||(f=(0,p.default)(["\n    margin-top: 15px;\n    margin-left: 0;\n  "]))),b.media.smallerThanMinTablet(s||(s=(0,p.default)(["\n    margin-top: 20px;\n  "])))),R=(0,m.memo)((function(e){var t=e.theme,n=e.className,a=(0,v.default)(),i=(0,g.default)().windowWidth<=b.viewportWidths.smallTablet,r=(0,m.useCallback)((function(){(0,_.openSignUpInModal)({flow:"signup",action:function(){return w.default.push("/initiatives/new")}})}),[]);return m.default.createElement(C,{className:n},m.default.createElement(k,null,m.default.createElement(N,{name:"initiatives"}),m.default.createElement(j,null,m.default.createElement(A,null,m.default.createElement(O.FormattedMessage,E.default.initiativesBoxTitle)),m.default.createElement(M,null,m.default.createElement(O.FormattedMessage,E.default.initiativesBoxText))),m.default.createElement(S,null,m.default.createElement(B,{fontWeight:"500",padding:"13px 22px",buttonStyle:"text",textColor:t.colorMain,textDecorationHover:"underline",fullWidth:i,linkTo:"/initiatives",text:m.default.createElement(O.FormattedMessage,E.default.browseInitiative),className:"e2e-initiatives-landing-CTA-browse"}),m.default.createElement(D,{fontWeight:"500",padding:"13px 22px",linkTo:(0,P.isNilOrError)(a)?void 0:"/initiatives/new",onClick:a?void 0:r,fullWidth:i,text:m.default.createElement(O.FormattedMessage,E.default.startInitiative),className:"e2e-initiatives-landing-CTA-new"}))))})),H=(0,h.withTheme)(R);t.default=H}}]);
//# sourceMappingURL=7.03e5a5f57199b2cb8a16.chunk.js.map