(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"4YsN":function(e,t,n){"use strict";n("4mDm"),n("07d7"),n("PKPk"),n("ENF9"),n("3bBZ"),n("5DmW");var a=n("TqRt"),l=n("cDf5");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("2B1R"),n("ma9I");var r,o,i,u=a(n("pVnL")),s=a(n("VkAN")),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=_(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n("q1tI")),c=n("T89o"),f=n("KLnl"),p=n("Rw3A"),m=a(n("fich")),g=a(n("3A/8")),h=n("iP56"),v=a(n("vOnD")),y=n("96Cm"),b=n("+9pX"),w=n("ufqH"),x=n("YHSq");function _(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(_=function(e){return e?n:t})(e)}var O=v.default.div.withConfig({displayName:"StatusFilter__Container",componentId:"sc-1jqeu5j-0"})(["width:100%;display:flex;flex-direction:column;align-items:stretch;padding-top:25px;padding-bottom:20px;padding-left:20px;padding-right:20px;",";"],y.defaultCardStyle),E=v.default.span.withConfig({displayName:"StatusFilter__Count",componentId:"sc-1jqeu5j-1"})(["color:",";font-size:","px;font-weight:300;transition:all 80ms ease-out;margin-left:auto;",""],y.colors.label,y.fontSizes.base,(0,y.isRtl)(r||(r=(0,s.default)(["\n    margin-left: 0;\n    margin-right: auto;\n  "])))),M=(0,v.default)(h.Icon).withConfig({displayName:"StatusFilter__CloseIcon",componentId:"sc-1jqeu5j-2"})(["width:12px;height:12px;fill:#fff;margin-left:auto;",""],(0,y.isRtl)(o||(o=(0,s.default)(["\n    margin-left: 0;\n    margin-right: auto;\n  "])))),k=v.default.div.withConfig({displayName:"StatusFilter__StatusesContainer",componentId:"sc-1jqeu5j-3"})([""]),F=v.default.button.withConfig({displayName:"StatusFilter__Status",componentId:"sc-1jqeu5j-4"})(["color:",";font-size:","px;font-weight:400;line-height:normal;display:flex;align-items:center;justify-content:space-between;padding-left:18px;padding-right:18px;padding-top:7px;padding-bottom:7px;margin:0px;margin-right:10px;margin-bottom:6px;cursor:pointer;border-radius:5px;user-select:none;transition:all 80ms ease-out;width:100%;"," &:not(.selected):hover{background:rgba(132,147,158,0.15);}&.selected{color:#fff;background:",";&:hover{background:",";}","{color:#fff;}}"],(function(e){return e.theme.colorText}),y.fontSizes.base,(0,y.isRtl)(i||(i=(0,s.default)(["\n    flex-direction: row-reverse;\n  "]))),(function(e){return e.theme.colorSecondary}),(function(e){var t=e.theme;return(0,w.darken)(.15,t.colorSecondary)}),E),C=(0,v.default)(F).withConfig({displayName:"StatusFilter__AllStatus",componentId:"sc-1jqeu5j-5"})([""]),j=(0,d.memo)((function(e){var t=e.type,n=e.statuses,a=e.filterCounts,l=e.selectedStatusId,r=e.onChange,o=e.className,i=(0,d.useCallback)((function(e){e.preventDefault();var t=e.currentTarget.dataset.id;r(l!==t?t:null)}),[l]),s=(0,d.useCallback)((function(e){e.preventDefault()}),[]);if(!(0,f.isNilOrError)(n)&&n.length>0){var h=a&&a.total?a.total:0,v=!l;return d.default.createElement(O,{className:"e2e-statuses-filters ".concat(o)},d.default.createElement(x.Header,null,d.default.createElement(x.Title,null,d.default.createElement(p.FormattedMessage,m.default.statusTitle))),d.default.createElement(k,null,d.default.createElement(C,{"data-id":null,onMouseDown:s,onClick:i,className:v?"selected":""},d.default.createElement(p.FormattedMessage,m.default.all),d.default.createElement(E,{"aria-hidden":!0},h),d.default.createElement(b.ScreenReaderOnly,null,"idea"===t&&d.default.createElement(p.FormattedMessage,(0,u.default)({},m.default.a11y_numberOfInputs,{values:{inputsCount:h}})),"initiative"===t&&d.default.createElement(p.FormattedMessage,(0,u.default)({},m.default.a11y_numberOfInitiatives,{values:{initiativeCount:h}}))),d.default.createElement(b.ScreenReaderOnly,{"aria-live":"polite"},v&&d.default.createElement(p.FormattedMessage,m.default.a11y_allFilterSelected))),n.map((function(e){var n=(0,c.get)(a,"".concat(t,"_status_id.").concat(e.id),0),r=e.id===l;return d.default.createElement(F,{key:e.id,"data-id":e.id,onMouseDown:s,onClick:i,className:"e2e-status ".concat(r?"selected":"")},d.default.createElement(g.default,{value:e.attributes.title_multiloc},(function(e){return d.default.createElement(d.default.Fragment,null,(0,c.capitalize)(e))})),r?d.default.createElement(M,{title:d.default.createElement(p.FormattedMessage,m.default.a11y_removeFilter),name:"close"}):d.default.createElement(E,{"aria-hidden":!0},n),d.default.createElement(b.ScreenReaderOnly,null,"idea"===t&&d.default.createElement(p.FormattedMessage,(0,u.default)({},m.default.a11y_numberOfInputs,{values:{inputsCount:n}})),"initiative"===t&&d.default.createElement(p.FormattedMessage,(0,u.default)({},m.default.a11y_numberOfInitiatives,{values:{initiativeCount:n}}))),d.default.createElement(b.ScreenReaderOnly,{"aria-live":"polite"},r&&d.default.createElement(p.FormattedMessage,(0,u.default)({},m.default.a11y_selectedFilter,{values:{filter:d.default.createElement(g.default,{value:e.attributes.title_multiloc})}}))))}))))}return null}));t.default=j},"F05+":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(0,n("JRPe").defineMessages)({filters:{id:"app.components.FiltersModal.filters",defaultMessage:"Filters"},resetFilters:{id:"app.components.FiltersModal.resetFilters",defaultMessage:"Reset filters"},a11y_closeFilterPanel:{id:"app.components.FiltersModal.a11y_closeFilterPanel",defaultMessage:"Close filter panel"}});t.default=a},SQnM:function(e,t,n){"use strict";n("yq1k"),n("JTJg"),n("4mDm"),n("07d7"),n("PKPk"),n("ENF9"),n("3bBZ"),n("5DmW");var a=n("TqRt"),l=n("cDf5");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("pVnL")),o=a(n("RIqP"));n("yWo2"),n("TeQF"),n("ma9I"),n("oVuX"),n("2B1R");var i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=b(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n("q1tI")),u=n("T89o"),s=n("KLnl"),d=n("Rw3A"),c=a(n("fich")),f=n("+9pX"),p=n("96Cm"),m=a(n("3A/8")),g=a(n("vOnD")),h=n("ufqH"),v=n("YHSq"),y=a(n("V3HD"));function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(b=function(e){return e?n:t})(e)}var w=g.default.div.withConfig({displayName:"TopicsFilter__Container",componentId:"sc-1o02bu2-0"})(["width:100%;display:flex;flex-direction:column;align-items:stretch;padding:20px;padding-top:25px;",";"],p.defaultCardStyle),x=g.default.div.withConfig({displayName:"TopicsFilter__Topics",componentId:"sc-1o02bu2-1"})([""]),_=g.default.button.withConfig({displayName:"TopicsFilter__Topic",componentId:"sc-1o02bu2-2"})(["color:",";font-size:","px;font-weight:400;line-height:normal;display:inline-block;padding-left:14px;padding-right:14px;padding-top:8px;padding-bottom:8px;margin:0px;margin-right:6px;margin-bottom:8px;cursor:pointer;user-select:none;border:solid 1px ",";border-radius:",";transition:all 80ms ease-out;&:not(.selected){&:hover{color:",";border-color:",";}}&.selected{color:#fff;background:",";border-color:",";&:hover{background:",";border-color:",";}}"],p.colors.label,p.fontSizes.small,p.colors.separationDark,(function(e){return e.theme.borderRadius}),(function(e){return e.theme.colorSecondary}),(function(e){return e.theme.colorSecondary}),(function(e){return e.theme.colorSecondary}),(function(e){return e.theme.colorSecondary}),(function(e){var t=e.theme;return(0,h.darken)(.15,t.colorSecondary)}),(function(e){var t=e.theme;return(0,h.darken)(.15,t.colorSecondary)})),O=(0,i.memo)((function(e){var t=e.topics,n=e.selectedTopicIds,a=e.onChange,l=e.className,p=e.localize,g=(0,i.useCallback)((function(e){var t=e.currentTarget.dataset.id,l=[];l=n&&(0,u.includes)(n,t)?n.filter((function(e){return e!==t})):[].concat((0,o.default)(n||[]),[t]),a(l.length>0?l:null)}),[n]),h=(0,i.useCallback)((function(e){e.preventDefault()}),[]);if(!(0,s.isNilOrError)(t)&&t.length>0){var y=t.filter((function(e){return(0,u.includes)(n,e.id)})),b=y.length,O=y.map((function(e){return!(0,s.isNilOrError)(e)&&p(e.attributes.title_multiloc)})).join(", ");return i.default.createElement(w,{className:l},i.default.createElement(v.Header,null,i.default.createElement(v.Title,null,i.default.createElement(d.FormattedMessage,c.default.topicsTitle))),i.default.createElement(x,{className:"e2e-topics-filters"},t.filter((function(e){return!(0,u.isError)(e)})).map((function(e){return i.default.createElement(_,{key:e.id,"data-id":e.id,onMouseDown:h,onClick:g,className:"e2e-topic ".concat((0,u.includes)(n,e.id)?"selected":"")},i.default.createElement(m.default,{value:e.attributes.title_multiloc}))}))),i.default.createElement(f.ScreenReaderOnly,{"aria-live":"polite"},i.default.createElement(d.FormattedMessage,(0,r.default)({},c.default.a11y_selectedTopicFilters,{values:{numberOfSelectedTopics:b,selectedTopicNames:O}}))))}return null})),E=(0,y.default)(O);t.default=E},YHSq:function(e,t,n){"use strict";var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.Title=t.Header=void 0,n("yWo2");var l,r=a(n("VkAN")),o=n("96Cm"),i=a(n("vOnD")),u=i.default.div.withConfig({displayName:"styles__Header",componentId:"wv340a-0"})(["display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;margin-left:18px;margin-right:22px;",""],(0,o.isRtl)(l||(l=(0,r.default)(["\n    margin-left: auto;\n  "]))));t.Header=u;var s=i.default.div.withConfig({displayName:"styles__Title",componentId:"wv340a-1"})(["color:",";font-size:","px;font-weight:600;text-transform:uppercase;margin-right:15px;"],(function(e){return e.theme.colorText}),o.fontSizes.small);t.Title=s},fich:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(0,n("JRPe").defineMessages)({statusTitle:{id:"app.components.FilterBoxes.statusTitle",defaultMessage:"Status"},all:{id:"app.components.FilterBoxes.all",defaultMessage:"All"},areas:{id:"app.components.FilterBoxes.areas",defaultMessage:"Areas"},topicsTitle:{id:"app.components.FilterBoxes.topicsTitle",defaultMessage:"Topics"},a11y_numberOfInputs:{id:"app.components.FilterBoxes.a11y_numberOfInputs",defaultMessage:"{inputsCount, plural, no {# inputs} one {# input} other {# inputs}}"},a11y_numberOfInitiatives:{id:"app.components.FilterBoxes.a11y_numberOfInitiatives",defaultMessage:"{initiativeCount, plural, no {# initiatives} one {# initiative} other {# initiatives}}"},a11y_removeFilter:{id:"app.components.FilterBoxes.a11y_removeFilter",defaultMessage:"Remove filter"},a11y_allFilterSelected:{id:"app.components.FilterBoxes.a11y_allFilterSelected",defaultMessage:"Selected status filter: all"},a11y_selectedFilter:{id:"app.components.FilterBoxes.a11y_selectedFilter",defaultMessage:"Selected status filter: {filter}"},a11y_selectedTopicFilters:{id:"app.components.FilterBoxes.a11y_selectedTopicFilters",defaultMessage:"Selected {numberOfSelectedTopics, plural, =0 {zero topic filters} one {one topic filter} other {# topic filters}}. {selectedTopicNames}"}});t.default=a},jPkm:function(e,t,n){"use strict";n("4mDm"),n("07d7"),n("PKPk"),n("ENF9"),n("3bBZ"),n("5DmW");var a=n("TqRt"),l=n("cDf5");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=a(n("VkAN")),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n("q1tI")),u=n("iP56"),s=n("Rw3A"),d=a(n("F05+")),c=a(n("vOnD")),f=n("96Cm"),p=n("ufqH");function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}var g=c.default.div.withConfig({displayName:"TopBar__Container",componentId:"mmtbwj-0"})(["height:","px;background:#fff;border-bottom:solid 1px ",";"],(function(e){return e.theme.mobileTopBarHeight}),(0,p.lighten)(.4,f.colors.label)),h=c.default.div.withConfig({displayName:"TopBar__TopBarInner",componentId:"mmtbwj-1"})(["height:100%;padding-left:15px;padding-right:15px;position:relative;display:flex;align-items:center;justify-content:space-between;",""],f.media.biggerThanMinTablet(r||(r=(0,o.default)(["\n    padding-left: 30px;\n    padding-right: 30px;\n  "])))),v=c.default.div.withConfig({displayName:"TopBar__Left",componentId:"mmtbwj-2"})(["height:48px;align-items:center;display:flex;"]),y=c.default.h1.withConfig({displayName:"TopBar__Center",componentId:"mmtbwj-3"})(["flex:1;font-size:","px;font-weight:500;display:flex;align-items:center;justify-content:center;margin:0;padding:0;"],f.fontSizes.medium),b=c.default.div.withConfig({displayName:"TopBar__Right",componentId:"mmtbwj-4"})([""]),w=(0,c.default)(u.Icon).withConfig({displayName:"TopBar__CloseIcon",componentId:"mmtbwj-5"})(["flex:0 0 12px;width:12px;height:12px;fill:",";display:flex;align-items:center;justify-content:center;transition:fill 100ms ease-out;"],f.colors.label),x=c.default.button.withConfig({displayName:"TopBar__CloseButton",componentId:"mmtbwj-6"})(["width:40px;height:40px;display:flex;align-items:center;justify-content:center;padding:0;margin:0;margin-right:6px;margin-left:-2px;cursor:pointer;transition:all 100ms ease-out;&:hover{border-color:#000;","{fill:#000;}}"],w),_=(0,i.memo)((function(e){var t=e.onClose,n=e.onReset,a=e.className;return i.default.createElement(g,{className:a},i.default.createElement(h,null,i.default.createElement(v,null,i.default.createElement(x,{onClick:t},i.default.createElement(w,{title:i.default.createElement(s.FormattedMessage,d.default.a11y_closeFilterPanel),name:"close"}))),i.default.createElement(y,null,i.default.createElement(s.FormattedMessage,d.default.filters)),i.default.createElement(b,null,i.default.createElement("button",{onClick:n},i.default.createElement(s.FormattedMessage,d.default.resetFilters)))))}));t.default=_},sokT:function(e,t,n){"use strict";n("SuFq"),n("4mDm"),n("07d7"),n("PKPk"),n("ENF9"),n("3bBZ"),n("5DmW");var a=n("TqRt"),l=n("cDf5");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("pVnL")),o=a(n("lwsE")),i=a(n("W8MJ")),u=a(n("PJYZ")),s=a(n("7W2i")),d=a(n("a1gu")),c=a(n("Nsbk")),f=a(n("lSNA")),p=a(n("VkAN"));n("ma9I");var m,g=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=N(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n("q1tI")),h=n("i8i4"),v=n("DtyJ"),y=n("ahDk"),b=n("ifvJ"),w=n("KLnl"),x=n("T89o"),_=a(n("JUYq")),O=a(n("pQ8y")),E=n("vIs2"),M=n("ChSC"),k=a(n("IAnr")),F=a(n("yiTP")),C=n("KuRP"),j=a(n("vOnD")),P=n("96Cm");function N(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(N=function(e){return e?n:t})(e)}function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,c.default)(e);if(t){var l=(0,c.default)(this).constructor;n=Reflect.construct(a,arguments,l)}else n=a.apply(this,arguments);return(0,d.default)(this,n)}}var I=500,S="cubic-bezier(0.19, 1, 0.22, 1)",B=j.default.div.withConfig({displayName:"FullscreenModal__Container",componentId:"sc-1uev2a8-0"})(["width:100vw;height:",";position:fixed;top:","px;left:0;display:flex;overflow:hidden;background:#fff;z-index:1003;&.modal-enter{transform:translateY(100vh);&.modal-enter-active{transform:translateY(0px);transition:all ","ms ",";}}&.modal-exit{transform:translateY(0px);&.modal-exit-active{transform:translateY(100vh);transition:all ","ms ",";}}",""],(function(e){return"calc(".concat(e.windowHeight," - ").concat(e.theme.menuHeight,"px)")}),(function(e){return e.theme.menuHeight}),I,S,I,S,P.media.smallerThanMaxTablet(m||(m=(0,p.default)(["\n    height: ",";\n    top: 0;\n    bottom: ","px;\n    z-index: 1005; /* there is no top navbar at this screen size, so okay that it is higher than the z-index of NavBar here */\n\n    &.hasBottomBar {\n      height: ",";\n      bottom: 0;\n    }\n  "])),(function(e){return"calc(".concat(e.windowHeight," - ").concat(e.theme.mobileMenuHeight,"px)")}),(function(e){return e.theme.mobileMenuHeight}),(function(e){return e.windowHeight}))),D=(0,j.default)(M.FocusOn).withConfig({displayName:"FullscreenModal__StyledFocusOn",componentId:"sc-1uev2a8-1"})(["flex:1;display:flex;flex-direction:column;align-items:stretch;"]),R=j.default.div.withConfig({displayName:"FullscreenModal__Content",componentId:"sc-1uev2a8-2"})(["flex:1;overflow-y:scroll;-webkit-overflow-scrolling:touch;transform:translate3d(0,0,0);"]),q=!1,H=function(e){(0,s.default)(n,e);var t=T(n);function n(e){var a;return(0,o.default)(this,n),a=t.call(this,e),(0,f.default)((0,u.default)(a),"subscription",null),(0,f.default)((0,u.default)(a),"unlisten",null),(0,f.default)((0,u.default)(a),"url",null),(0,f.default)((0,u.default)(a),"goBackUrl",null),(0,f.default)((0,u.default)(a),"openModal",(function(){var e=a.props,t=e.locale,n=e.url,l=e.goBackUrl;if(!(0,w.isNilOrError)(t)&&n){var r=(0,E.removeLocale)(n).pathname;a.url="".concat(window.location.origin,"/").concat(t).concat(r),a.goBackUrl="".concat(window.location.origin,"/").concat(t).concat((0,E.removeLocale)(l||window.location.pathname).pathname),window.history.pushState({path:a.url},"",a.url),window.addEventListener("popstate",a.handlePopstateEvent,q),window.addEventListener("keydown",a.handleKeypress,q),a.unlisten=_.default.listen((function(){return a.props.close()})),(0,C.trackPage)(a.url,{modal:!0})}})),(0,f.default)((0,u.default)(a),"handleKeypress",(function(e){"keydown"===e.type&&"Escape"===e.key&&(e.preventDefault(),a.props.close())})),(0,f.default)((0,u.default)(a),"handlePopstateEvent",(function(){a.props.close()})),(0,f.default)((0,u.default)(a),"cleanup",(function(){a.goBackUrl&&(window.removeEventListener("popstate",a.handlePopstateEvent,q),window.removeEventListener("keydown",a.handleKeypress,q),window.location.href===a.url&&window.history.pushState({path:a.goBackUrl},"",a.goBackUrl)),a.url=null,a.goBackUrl=null,(0,x.isFunction)(a.unlisten)&&(a.unlisten(),a.unlisten=null),k.default.emit("fullscreenModalClosed")})),a.state={windowHeight:"".concat(window.innerHeight,"px")},a}return(0,i.default)(n,[{key:"componentDidMount",value:function(){var e=this;this.subscription=(0,v.fromEvent)(window,"resize").pipe((0,y.debounceTime)(50),(0,y.distinctUntilChanged)()).subscribe((function(t){if(t.target){var n=t.target.innerHeight;e.setState({windowHeight:"".concat(n,"px")})}}))}},{key:"componentDidUpdate",value:function(e){!e.opened&&this.props.opened?this.openModal():e.opened&&!this.props.opened&&this.cleanup()}},{key:"componentWillUnmount",value:function(){var e;null===(e=this.subscription)||void 0===e||e.unsubscribe(),this.cleanup()}},{key:"render",value:function(){var e,t=this.state.windowHeight,n=this.props,a=n.children,l=n.opened,r=n.topBar,o=n.bottomBar,i=n.animateInOut,u=n.navbarRef,s=n.mobileNavbarRef,d=(0,x.compact)([u,s]),c=null===(e=document)||void 0===e?void 0:e.getElementById("modal-portal"),f=null;return(i||!i&&l)&&(f=g.default.createElement(B,{id:"e2e-fullscreenmodal-content",className:o?"hasBottomBar":"",windowHeight:t},g.default.createElement(D,{autoFocus:!1,shards:d},r,g.default.createElement(R,{className:"fullscreenmodal-scrollcontainer"},a),o))),i?(0,h.createPortal)(g.default.createElement(O.default,{classNames:"modal",in:l,timeout:{enter:I,exit:I},mountOnEnter:!0,unmountOnExit:!0,enter:!0,exit:!0},f),document.getElementById("modal-portal")):!i&&l&&c?(0,h.createPortal)(f,c):null}}]),n}(g.PureComponent),W=(0,b.adopt)({locale:g.default.createElement(F.default,null)});t.default=function(e){return g.default.createElement(W,e,(function(t){return g.default.createElement(H,(0,r.default)({},e,t))}))}},v9Nx:function(e,t,n){"use strict";n("4mDm"),n("07d7"),n("PKPk"),n("ENF9"),n("3bBZ"),n("5DmW");var a=n("TqRt"),l=n("cDf5");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n("q1tI")),o=a(n("2fl8")),i=a(n("vOnD")),u=n("96Cm"),s=n("ufqH");function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}var c=i.default.div.withConfig({displayName:"BottomBar__Container",componentId:"sc-1pupvjr-0"})(["height:","px;display:flex;align-items:center;justify-content:center;padding:40px;background:#fff;border-top:solid 1px ",";"],(function(e){return e.theme.mobileTopBarHeight}),(0,s.lighten)(.4,u.colors.label)),f=(0,r.memo)((function(e){var t=e.buttonText,n=e.onClick,a=e.className;return r.default.createElement(c,{className:a},r.default.createElement(o.default,{onClick:n,fullWidth:!0},t))}));t.default=f}}]);
//# sourceMappingURL=26.7427b9609be0250a735b.chunk.js.map