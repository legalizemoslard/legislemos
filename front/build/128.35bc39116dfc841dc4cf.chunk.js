(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{"4MDf":function(e,t,n){"use strict";n("SuFq"),n("4mDm"),n("07d7"),n("PKPk"),n("ENF9"),n("3bBZ"),n("5DmW");var a=n("TqRt"),i=n("cDf5");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("2B1R");var o=a(n("pVnL")),l=a(n("lwsE")),r=a(n("W8MJ")),u=a(n("PJYZ")),c=a(n("7W2i")),d=a(n("a1gu")),s=a(n("Nsbk")),f=a(n("lSNA")),p=a(n("q1tI")),m=n("l8Oe"),g=a(n("DDKl")),h=n("KLnl"),v=a(n("lPdK")),y=n("Sxt5"),w=a(n("dl1u")),b=n("Rw3A"),P=n("Loij"),T=n("gzy/"),M=a(n("2fl8")),E=n("rqWd"),D=a(n("Fg7n")),S=a(n("ikh2")),C=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==i(e)&&"function"!=typeof e)return{default:e};var n=j(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var r=o?Object.getOwnPropertyDescriptor(e,l):null;r&&(r.get||r.set)?Object.defineProperty(a,l,r):a[l]=e[l]}a.default=e,n&&n.set(e,a);return a}(n("1hFV"));function j(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(j=function(e){return e?n:t})(e)}function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,s.default)(e);if(t){var i=(0,s.default)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return(0,d.default)(this,n)}}var R=function(e){(0,c.default)(n,e);var t=k(n);function n(e){var a;return(0,l.default)(this,n),a=t.call(this,e),(0,f.default)((0,u.default)(a),"handleDeleteClick",(function(e){return function(t){t.preventDefault(),a.setState({showConfirmationModal:!0,topicIdToDelete:e})}})),(0,f.default)((0,u.default)(a),"closeSendConfirmationModal",(function(){a.setState({showConfirmationModal:!1,topicIdToDelete:null})})),(0,f.default)((0,u.default)(a),"handleTopicDeletionConfirm",(function(){var e=a.state.topicIdToDelete;e&&(a.setState({processingDeletion:!0}),(0,y.deleteTopic)(e).then((function(){a.setState({processingDeletion:!1,showConfirmationModal:!1,topicIdToDelete:null})})).catch((function(){a.setState({processingDeletion:!1})})))})),a.state={processingDeletion:!1,showConfirmationModal:!1,topicIdToDelete:null},a}return(0,r.default)(n,[{key:"render",value:function(){var e=this,t=this.props.topics,n=this.state,a=n.showConfirmationModal,i=n.processingDeletion;return(0,h.isNilOrError)(t)?null:p.default.createElement(P.Section,null,p.default.createElement(P.SectionTitle,null,p.default.createElement(b.FormattedMessage,w.default.titleTopicManager)),p.default.createElement(P.SectionDescription,null,p.default.createElement(b.FormattedMessage,(0,o.default)({},w.default.descriptionTopicManagerText,{values:{adminProjectsLink:p.default.createElement(P.StyledLink,{to:"/admin/projects/"},p.default.createElement(b.FormattedMessage,w.default.projectsSettings))}}))),p.default.createElement(E.ButtonWrapper,null,p.default.createElement(M.default,{buttonStyle:"cl-blue",icon:"plus-circle",linkTo:"/admin/settings/topics/new",id:"e2e-add-custom-topic-button"},p.default.createElement(b.FormattedMessage,w.default.addTopicButton))),p.default.createElement(T.List,{key:t.length},t.map((function(n,a){var i=a===t.length-1;return(0,h.isNilOrError)(n)?null:"custom"!==n.attributes.code?p.default.createElement(D.default,{topic:n,isLastItem:i,key:n.id}):p.default.createElement(S.default,{topic:n,isLastItem:i,handleDeleteClick:e.handleDeleteClick,key:n.id})}))),p.default.createElement(C.default,{opened:a,close:this.closeSendConfirmationModal,header:p.default.createElement(b.FormattedMessage,w.default.confirmHeader)},p.default.createElement(C.ModalContentContainer,null,p.default.createElement(C.Content,null,p.default.createElement(b.FormattedMessage,w.default.deleteTopicConfirmation)),p.default.createElement(C.ButtonsWrapper,null,p.default.createElement(M.default,{buttonStyle:"secondary",onClick:this.closeSendConfirmationModal},p.default.createElement(b.FormattedMessage,w.default.cancel)),p.default.createElement(M.default,{buttonStyle:"delete",onClick:this.handleTopicDeletionConfirm,processing:i,id:"e2e-custom-topic-delete-confirmation-button"},p.default.createElement(b.FormattedMessage,w.default.delete))))))}}]),n}(p.default.PureComponent),O=(0,m.DragDropContext)(g.default)((0,b.injectIntl)(R));t.default=function(){return p.default.createElement(v.default,null,(function(e){return p.default.createElement(O,{topics:e})}))}},Fg7n:function(e,t,n){"use strict";n("4mDm"),n("07d7"),n("PKPk"),n("ENF9"),n("3bBZ"),n("5DmW");var a=n("TqRt"),i=n("cDf5");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==i(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var r=o?Object.getOwnPropertyDescriptor(e,l):null;r&&(r.get||r.set)?Object.defineProperty(a,l,r):a[l]=e[l]}a.default=e,n&&n.set(e,a);return a}(n("q1tI")),l=n("KLnl"),r=a(n("vOnD")),u=n("gzy/"),c=n("vGwV"),d=a(n("dl1u")),s=n("Rw3A");function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var p=r.default.span.withConfig({displayName:"DefaultTopicRow__DefaultTopicLabel",componentId:"sc-104fjgs-0"})([""]),m=(0,r.default)(c.RowContentInner).withConfig({displayName:"DefaultTopicRow__StyledRowContentInner",componentId:"sc-104fjgs-1"})(["height:40px;"]),g=(0,o.memo)((function(e){var t=e.isLastItem,n=e.topic;return(0,l.isNilOrError)(n)?null:o.default.createElement(u.Row,{key:n.id,id:n.id,className:"e2e-topic-field-row",isLastItem:t},o.default.createElement(c.RowContent,null,o.default.createElement(m,null,o.default.createElement(c.RowTitle,{value:n.attributes.title_multiloc}))),o.default.createElement(p,null,o.default.createElement(s.FormattedMessage,d.default.defaultTopic)))}));t.default=g},dl1u:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(0,n("JRPe").defineMessages)({descriptionTopicManagerText:{id:"app.containers.AdminPage.SettingsPage.descriptionTopicManagerText",defaultMessage:"Topics can be added to help categorise inputs. Here you can add and delete topics that you would like to use on your platform. You can add the topics to specific projects in the {adminProjectsLink}."},titleTopicManager:{id:"app.containers.AdminPage.SettingsPage.titleTopicManager",defaultMessage:"Topic manager"},deleteButtonLabel:{id:"app.containers.AdminPage.SettingsPage.deleteTopicButtonLabel",defaultMessage:"Delete"},editButtonLabel:{id:"app.containers.AdminPage.SettingsPage.editTopicButtonLabel",defaultMessage:"Edit"},addTopicButton:{id:"app.containers.AdminPage.SettingsPage.addTopicButton",defaultMessage:"Add topic"},fieldTopicTitle:{id:"app.containers.AdminPage.SettingsPage.fieldTopicTitle",defaultMessage:"Topic name"},fieldTopicTitleTooltip:{id:"app.containers.AdminPage.SettingsPage.fieldTopicTitleTooltip",defaultMessage:"The name you choose for each topic will be visible for citizens during signup and when filtering projects."},editTopicFormTitle:{id:"app.containers.AdminPage.SettingsPage.editTopicFormTitle",defaultMessage:"Edit topic"},defaultTopic:{id:"app.containers.AdminPage.SettingsPage.defaultTopic",defaultMessage:"Default topic"},confirmHeader:{id:"app.containers.AdminPage.SettingsPage.confirmHeader",defaultMessage:"Are you sure you want to delete this topic?"},deleteTopicConfirmation:{id:"app.containers.AdminPage.SettingsPage.deleteTopicConfirmation",defaultMessage:"This will delete the topic, including from all existing inputs. This change will apply to all projects."},cancel:{id:"app.containers.AdminPage.SettingsPage.cancel",defaultMessage:"Cancel"},delete:{id:"app.containers.AdminPage.SettingsPage.delete",defaultMessage:"Delete"},projectsSettings:{id:"app.containers.AdminPage.SettingsPage.projectsSettings",defaultMessage:"project settings"}});t.default=a},ikh2:function(e,t,n){"use strict";n("4mDm"),n("07d7"),n("PKPk"),n("ENF9"),n("3bBZ"),n("5DmW");var a=n("TqRt"),i=n("cDf5");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==i(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var r=o?Object.getOwnPropertyDescriptor(e,l):null;r&&(r.get||r.set)?Object.defineProperty(a,l,r):a[l]=e[l]}a.default=e,n&&n.set(e,a);return a}(n("q1tI")),l=n("KLnl"),r=a(n("vOnD")),u=n("gzy/"),c=a(n("2fl8")),d=n("vGwV"),s=a(n("dl1u")),f=n("Rw3A");function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}var m=r.default.div.withConfig({displayName:"CustomTopicRow__Buttons",componentId:"keb620-0"})(["display:flex;align-items:center;"]),g=(0,o.memo)((function(e){var t=e.isLastItem,n=e.topic,a=e.handleDeleteClick;return(0,l.isNilOrError)(n)?null:o.default.createElement(u.Row,{key:n.id,id:n.id,className:"e2e-topic-field-row",isLastItem:t},o.default.createElement(d.RowContent,null,o.default.createElement(d.RowContentInner,null,o.default.createElement(d.RowTitle,{value:n.attributes.title_multiloc}))),o.default.createElement(m,null,o.default.createElement(c.default,{linkTo:"/admin/settings/topics/".concat(n.id,"/edit"),buttonStyle:"secondary",icon:"edit",id:"e2e-custom-topic-edit-button"},o.default.createElement(f.FormattedMessage,s.default.editButtonLabel)),o.default.createElement(c.default,{onClick:a(n.id),buttonStyle:"text",icon:"delete",id:"e2e-custom-topic-delete-button"},o.default.createElement(f.FormattedMessage,s.default.deleteButtonLabel))))}));t.default=g},lPdK:function(e,t,n){"use strict";n("SuFq");var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("ToJy"),n("2B1R"),n("TeQF"),n("FZtP");var i=a(n("lwsE")),o=a(n("W8MJ")),l=a(n("PJYZ")),r=a(n("7W2i")),u=a(n("a1gu")),c=a(n("Nsbk")),d=a(n("lSNA")),s=a(n("q1tI")),f=n("T89o"),p=n("DtyJ"),m=n("ahDk"),g=n("Sxt5"),h=n("rltp"),v=n("KLnl");function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,c.default)(e);if(t){var i=(0,c.default)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return(0,u.default)(this,n)}}var w=function(e){(0,r.default)(n,e);var t=y(n);function n(e){var a;return(0,i.default)(this,n),a=t.call(this,e),(0,d.default)((0,l.default)(a),"inputProps$",void 0),(0,d.default)((0,l.default)(a),"subscriptions",void 0),a.state={topics:void 0},a}return(0,o.default)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.topicIds,a=t.code,i=t.exclude_code,o=t.sort,l=t.projectId;this.inputProps$=new p.BehaviorSubject({topicIds:n,code:a,exclude_code:i,sort:o,projectId:l}),this.subscriptions=[this.inputProps$.pipe((0,m.distinctUntilChanged)((function(e,t){return(0,f.isEqual)(e,t)})),(0,m.switchMap)((function(e){var t=e.topicIds,n=e.code,a=e.exclude_code,i=e.sort,o=e.projectId,l={code:n,exclude_code:a,sort:i};return o?(0,h.projectTopicsStream)(o).observable.pipe((0,m.map)((function(e){return e.data.filter((function(e){return e})).map((function(e){return e.relationships.topic.data.id}))})),(0,m.switchMap)((function(e){return(0,p.combineLatest)(e.map((function(e){return(0,g.topicByIdStream)(e).observable.pipe((0,m.map)((function(e){return(0,v.isNilOrError)(e)?e:e.data})))})))}))):t?t.length>0?(0,p.combineLatest)(t.map((function(e){return(0,g.topicByIdStream)(e).observable.pipe((0,m.map)((function(e){return(0,v.isNilOrError)(e)?e:e.data})))}))):(0,p.of)(null):(0,g.topicsStream)({queryParameters:l}).observable.pipe((0,m.map)((function(e){return e.data})))}))).subscribe((function(t){e.setState({topics:t})}))]}},{key:"componentDidUpdate",value:function(){var e=this.props,t=e.topicIds,n=e.code,a=e.exclude_code,i=e.sort,o=e.projectId;this.inputProps$.next({topicIds:t,code:n,exclude_code:a,sort:i,projectId:o})}},{key:"componentWillUnmount",value:function(){this.subscriptions.forEach((function(e){return e.unsubscribe()}))}},{key:"render",value:function(){return(0,this.props.children)(this.state.topics)}}]),n}(s.default.Component);t.default=w},vGwV:function(e,t,n){"use strict";var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.RowTitle=t.RowContentInner=t.RowContent=void 0;var i=a(n("vOnD")),o=n("96Cm"),l=a(n("3A/8")),r=i.default.div.withConfig({displayName:"RowStyles__RowContent",componentId:"sc-17x3a2k-0"})(["flex:1;display:flex;align-items:center;justify-content:space-between;"]);t.RowContent=r;var u=i.default.div.withConfig({displayName:"RowStyles__RowContentInner",componentId:"sc-17x3a2k-1"})(["display:flex;flex-wrap:wrap;align-items:center;margin-right:20px;"]);t.RowContentInner=u;var c=(0,i.default)(l.default).withConfig({displayName:"RowStyles__RowTitle",componentId:"sc-17x3a2k-2"})(["font-size:","px;font-weight:400;line-height:24px;margin-right:10px;"],o.fontSizes.base);t.RowTitle=c}}]);
//# sourceMappingURL=128.35bc39116dfc841dc4cf.chunk.js.map