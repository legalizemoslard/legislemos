(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{"06xL":function(e,t,a){"use strict";a("4mDm"),a("07d7"),a("PKPk"),a("ENF9"),a("3bBZ"),a("5DmW");var n=a("TqRt"),r=a("cDf5");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("TeQF"),a("2B1R");var i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var a=s(t);if(a&&a.has(e))return a.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var o=i?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(n,l,o):n[l]=e[l]}n.default=e,a&&a.set(e,n);return n}(a("q1tI")),l=a("T89o"),o=a("FvIY"),u=n(a("3A/8")),c=n(a("vfLC")),d=a("KLnl");function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(s=function(e){return e?a:t})(e)}var f=(0,n(a("vOnD")).default)(o.Label).withConfig({displayName:"TopicsSelector__StyledLabel",componentId:"sc-1jmb90z-0"})(["white-space:nowrap;"]),p=(0,i.memo)((function(e){var t=e.selectedTopics,a=e.onUpdateTopics,n=(0,c.default)({topicIds:t}),r=(0,d.isNilOrError)(n)?null:n.filter((function(e){return!(0,d.isNilOrError)(e)})),s=(0,i.useCallback)((function(e){return function(n){n.stopPropagation();var r=(0,l.pull)(t,e);a(r)}}),[t,a]);return r?i.default.createElement(i.default.Fragment,null,r.map((function(e){return i.default.createElement(f,{key:e.id,color:"teal",basic:!0},i.default.createElement(u.default,{value:e.attributes.title_multiloc}),i.default.createElement(o.Icon,{name:"delete",onClick:s(e.id)}))}))):null}));t.default=p},"9+Cu":function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("q1tI")),i=n(a("vOnD")),l=a("FvIY"),o=n(a("3A/8")),u=n(a("M7uY")),c=i.default.span.withConfig({displayName:"ProjectSelector__LabelText",componentId:"sc-1fxmbtt-0"})(["font-weight:600;"]),d=(0,i.default)(l.Label).withConfig({displayName:"ProjectSelector__StyledLabel",componentId:"sc-1fxmbtt-1"})(["white-space:nowrap;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;max-width:175px;"]);t.default=function(e){return r.default.createElement(u.default,{projectId:e.projectId},(function(e){return!e||e instanceof Error?null:r.default.createElement(d,{key:e.id,color:"teal",basic:!0},r.default.createElement(c,null,r.default.createElement(o.default,{value:e.attributes.title_multiloc})))}))}},dbFr:function(e,t,a){"use strict";a("SuFq");var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("ma9I"),a("2B1R");var r=n(a("lwsE")),i=n(a("W8MJ")),l=n(a("PJYZ")),o=n(a("7W2i")),u=n(a("a1gu")),c=n(a("Nsbk")),d=n(a("lSNA")),s=n(a("q1tI")),f=a("FvIY"),p=n(a("3A/8")),v=n(a("vOnD"));function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=(0,c.default)(e);if(t){var r=(0,c.default)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return(0,u.default)(this,a)}}var h=v.default.div.withConfig({displayName:"InitiativesStatusSelector__Container",componentId:"sc-4q9w0l-0"})(["display:flex;"]),b=v.default.div.withConfig({displayName:"InitiativesStatusSelector__ColorIndicator",componentId:"sc-4q9w0l-1"})(["width:1rem;height:1rem;border:1px solid ",";border-radius:",";margin-right:0.5rem;cursor:pointer;margin:0 0.25rem;"," ",""],(function(e){return e.color}),(function(e){return e.theme.borderRadius}),(function(e){return e.disabled?"cursor: not-allowed;":""}),(function(e){return e.active?"background-color: ".concat(e.color,";"):""})),y=function(e){(0,o.default)(a,e);var t=m(a);function a(){var e;(0,r.default)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return e=t.call.apply(t,[this].concat(i)),(0,d.default)((0,l.default)(e),"isActive",(function(t){return e.props.selectedStatus===t})),(0,d.default)((0,l.default)(e),"isAllowed",(function(t){return e.props.allowedTransitions&&void 0!==e.props.allowedTransitions[t]})),(0,d.default)((0,l.default)(e),"handleStatusClick",(function(t){return function(a){a.stopPropagation(),e.isAllowed(t)&&e.props.onUpdateStatus(t)}})),e}return(0,i.default)(a,[{key:"render",value:function(){var e=this,t=this.props.statuses;return s.default.createElement(h,null,t.map((function(t){return s.default.createElement(f.Popup,{key:t.id,basic:!0,trigger:s.default.createElement(b,{disabled:!e.isAllowed(t.id),color:t.attributes.color,active:e.isActive(t.id),onClick:e.handleStatusClick(t.id)}),content:s.default.createElement(p.default,{value:t.attributes.title_multiloc}),position:"top center"})})))}}]),a}(s.default.PureComponent);t.default=y},e3cQ:function(e,t,a){"use strict";a("SuFq");var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("lwsE")),i=n(a("W8MJ")),l=n(a("7W2i")),o=n(a("a1gu")),u=n(a("Nsbk")),c=n(a("q1tI")),d=a("FvIY");function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=(0,u.default)(e);if(t){var r=(0,u.default)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return(0,o.default)(this,a)}}var f=function(e){(0,l.default)(a,e);var t=s(a);function a(){return(0,r.default)(this,a),t.apply(this,arguments)}return(0,i.default)(a,[{key:"render",value:function(){return c.default.createElement(d.Table.Row,this.props)}}]),a}(c.default.Component);t.default=f},iIHp:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("q1tI")),i=n(a("xE6+")),l=n(a("06xL")),o=n(a("9+Cu")),u=n(a("nTKo")),c=n(a("dbFr")),d=a("FvIY"),s=a("plw8");t.default=function(e){var t=e.active,a=e.className,n=e.activeFilterMenu,f=e.selectedPhases,p=e.phases,v=e.selectedTopics,m=e.projectId,h=e.statuses,b=e.selectedStatus,y=e.onUpdatePhases,g=e.onUpdateTopics,I=e.onUpdateStatus,w=e.allowedTransitions,P=e.postType;return r.default.createElement(d.Table.Row,{active:t,className:a},r.default.createElement(d.Table.Cell,{as:s.FilterCell,collapsing:!0}),r.default.createElement(d.Table.Cell,{colSpan:6,as:s.FilterCell},"phases"===n&&p&&r.default.createElement(i.default,{selectedPhases:f||[],phases:p,onUpdatePhases:y}),"topics"===n&&r.default.createElement(l.default,{selectedTopics:v||[],onUpdateTopics:g}),"projects"===n&&m&&r.default.createElement(o.default,{projectId:m}),"statuses"===n&&"initiative"===P&&h&&void 0!==w&&r.default.createElement(c.default,{statuses:h,selectedStatus:b,onUpdateStatus:I,allowedTransitions:w}),"statuses"===n&&"idea"===P&&h&&r.default.createElement(u.default,{statuses:h,selectedStatus:b,onUpdateStatus:I})))}},nTKo:function(e,t,a){"use strict";a("SuFq");var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("ma9I"),a("2B1R");var r=n(a("lwsE")),i=n(a("W8MJ")),l=n(a("PJYZ")),o=n(a("7W2i")),u=n(a("a1gu")),c=n(a("Nsbk")),d=n(a("lSNA")),s=n(a("q1tI")),f=a("FvIY"),p=n(a("3A/8")),v=n(a("vOnD"));function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=(0,c.default)(e);if(t){var r=(0,c.default)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return(0,u.default)(this,a)}}var h=v.default.div.withConfig({displayName:"IdeasStatusSelector__Container",componentId:"uitoj1-0"})(["display:flex;"]),b=v.default.div.withConfig({displayName:"IdeasStatusSelector__ColorIndicator",componentId:"uitoj1-1"})(["width:1rem;height:1rem;border:1px solid ",";border-radius:",";margin-right:0.5rem;cursor:pointer;margin:0 0.25rem;",""],(function(e){return e.color}),(function(e){return e.theme.borderRadius}),(function(e){return e.active?"background-color: ".concat(e.color,";"):""})),y=function(e){(0,o.default)(a,e);var t=m(a);function a(){var e;(0,r.default)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return e=t.call.apply(t,[this].concat(i)),(0,d.default)((0,l.default)(e),"isActive",(function(t){return e.props.selectedStatus===t})),(0,d.default)((0,l.default)(e),"handleStatusClick",(function(t){return function(a){a.stopPropagation(),e.props.onUpdateStatus(t)}})),e}return(0,i.default)(a,[{key:"render",value:function(){var e=this,t=this.props.statuses;return s.default.createElement(h,null,t.map((function(t){return s.default.createElement(f.Popup,{key:t.id,basic:!0,trigger:s.default.createElement(b,{color:t.attributes.color,active:e.isActive(t.id),onClick:e.handleStatusClick(t.id)}),content:s.default.createElement(p.default,{value:t.attributes.title_multiloc}),position:"top center"})})))}}]),a}(s.default.PureComponent);t.default=y},"u7c+":function(e,t,a){"use strict";a("SuFq"),a("tkto"),a("pNMO"),a("TeQF"),a("5DmW"),a("27RR");var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("sMBO"),a("2B1R"),a("FZtP"),a("ma9I");var r=n(a("RIqP")),i=n(a("pVnL")),l=n(a("lwsE")),o=n(a("W8MJ")),u=n(a("PJYZ")),c=n(a("7W2i")),d=n(a("a1gu")),s=n(a("Nsbk")),f=n(a("lSNA")),p=n(a("q1tI")),v=a("DtyJ"),m=a("ahDk"),h=a("T89o"),b=a("i8i4"),y=a("l8Oe"),g=a("ngE2"),I=a("FvIY"),w=n(a("e3cQ")),P=n(a("3A/8")),E=n(a("G62B")),C=n(a("UjkJ")),k=n(a("V3HD")),_=a("JRPe"),R=a("Rw3A"),S=n(a("1R3D")),O=a("KuRP"),j=n(a("f2mI")),T=a("plw8"),D=n(a("iIHp")),F=a("pGZn"),N=n(a("Yjdl"));function q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function M(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?q(Object(a),!0).forEach((function(t){(0,f.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):q(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function A(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=(0,s.default)(e);if(t){var r=(0,s.default)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return(0,d.default)(this,a)}}var x=function(e){(0,c.default)(a,e);var t=A(a);function a(e){var n;(0,l.default)(this,a),n=t.call(this,e),(0,f.default)((0,u.default)(n),"onUpdateIdeaPhases",(function(e){(0,g.updateIdea)(n.props.idea.id,{phase_ids:e})})),(0,f.default)((0,u.default)(n),"onUpdateIdeaTopics",(function(e){(0,g.updateIdea)(n.props.idea.id,{topic_ids:e})})),(0,f.default)((0,u.default)(n),"onUpdateIdeaStatus",(function(e){var t=n.props.idea.id;(0,g.updateIdea)(t,{idea_status_id:e}),(0,O.trackEventByName)(j.default.ideaStatusChange,{location:"Idea overview",method:"Clicked on the squares representing the statuses",idea:t})})),(0,f.default)((0,u.default)(n),"renderCell",(function(e,t){var a=e.idea,n=e.selection,r=t.cellProps,l=void 0===r?{}:r,o=t.name,u=t.Component,c=t.onChange,d=t.onClick,s=t.featureFlag,f=M(M({},c?{onChange:c}:{}),d?{onClick:d}:{}),v=p.default.createElement(I.Table.Cell,(0,i.default)({},l,{key:o}),p.default.createElement(u,(0,i.default)({idea:a,selection:n},f)));return s?p.default.createElement(C.default,{name:s,key:o},v):v})),(0,f.default)((0,u.default)(n),"handleData",(function(e){n.setState((function(t){var a=t.cells;return{cells:(0,F.insertConfiguration)(e)(a)}}))}));var r=e.onClickCheckbox,o=e.onClickTitle;return n.state={cells:[{name:"selection",cellProps:{collapsing:!0},onChange:r,Component:function(e){var t=e.selection,a=e.idea,n=e.onChange;return p.default.createElement(E.default,{checked:!!t.has(a.id),onChange:n,size:"21px"})}},{name:"title",onClick:o,Component:function(e){var t=e.idea,a=e.onClick;return p.default.createElement(T.TitleLink,{className:"e2e-idea-manager-idea-title",onClick:a},p.default.createElement(P.default,{value:t.attributes.title_multiloc}))}},{name:"published_on",Component:function(e){var t=e.idea;return p.default.createElement(_.FormattedRelative,{value:t.attributes.published_at})}},{name:"up",cellProps:{singleLine:!0},Component:function(e){var t=e.idea;return p.default.createElement(p.default.Fragment,null,p.default.createElement(I.Icon,{name:"thumbs up"}),t.attributes.upvotes_count)}},{name:"down",cellProps:{singleLine:!0},Component:function(e){var t=e.idea;return p.default.createElement(p.default.Fragment,null,p.default.createElement(I.Icon,{name:"thumbs down"}),t.attributes.downvotes_count)}},{name:"picks",cellProps:{singleLine:!0},featureFlag:"participatory_budgeting",Component:function(e){var t=e.idea;return p.default.createElement(p.default.Fragment,null,t.attributes.baskets_count)}}]},n}return(0,o.default)(a,[{key:"render",value:function(){var e,t=this,a=this.props,n=a.idea,r=a.selection,i=a.connectDragSource,l=a.activeFilterMenu,o=a.phases,u=a.statuses,c=a.className,d=this.state.cells,s=(0,h.get)(n,"relationships.idea_status.data.id"),f=n.relationships.phases.data.map((function(e){return e.id})),v=null===(e=n.relationships.topics)||void 0===e?void 0:e.data.map((function(e){return e.id})),m=r.has(n.id),y=(0,h.get)(n,"relationships.project.data.id");return p.default.createElement(p.default.Fragment,null,p.default.createElement(N.default,{id:"app.components.admin.PostManager.components.PostTable.IdeaRow.cells",onData:this.handleData}),p.default.createElement(w.default,{className:"".concat(c," e2e-idea-manager-idea-row"),as:T.StyledRow,active:m,ref:function(e){e&&i((0,b.findDOMNode)(e))}},d.map((function(e){return t.renderCell({idea:n,selection:r},e)}))),p.default.createElement(D.default,{active:m,className:c,activeFilterMenu:l,selectedPhases:f,phases:o,selectedTopics:v,projectId:y,statuses:u,selectedStatus:s,allowedTransitions:null,onUpdatePhases:this.onUpdateIdeaPhases,onUpdateTopics:this.onUpdateIdeaTopics,onUpdateStatus:this.onUpdateIdeaStatus,postType:"idea"}))}}]),a}(p.default.PureComponent),B={beginDrag:function(e){return{type:"idea",id:e.idea.id}},endDrag:function(e,t){var a=t.getItem(),n=t.getDropResult(),i=e.selection;if(n&&"status"===n.type)i.has(a.id)&&i.forEach((function(e){(0,g.updateIdea)(e,{idea_status_id:n.id})})),!i.has(a.id)&&(0,g.updateIdea)(a.id,{idea_status_id:n.id}),(0,O.trackEventByName)(j.default.ideaStatusChange,{location:"Idea overview",method:"Dragged and dropped idea(s) in manager"});else if(n&&n.type){var l=i.has(a.id)?(0,r.default)(i).map((function(e){return(0,g.ideaByIdStream)(e).observable})):[(0,g.ideaByIdStream)(a.id).observable];"topic"===n.type&&(0,v.combineLatest)(l).pipe((0,m.take)(1)).subscribe((function(e){e.map((function(e){var t,a=null===(t=e.data.relationships.topics)||void 0===t?void 0:t.data.map((function(e){return e.id})),r=(0,h.uniq)(null==a?void 0:a.concat(n.id));(0,g.updateIdea)(e.data.id,{topic_ids:r})}))})),"phase"===n.type&&(0,v.combineLatest)(l).pipe((0,m.take)(1)).subscribe((function(e){e.map((function(e){var t=e.data.relationships.phases.data.map((function(e){return e.id})),a=(0,h.uniq)(t.concat(n.id));(0,g.updateIdea)(e.data.id,{phase_ids:a})}))})),"project"===n.type&&(0,v.combineLatest)(l).pipe((0,m.take)(1)).subscribe((function(t){t.map((function(t){var a=n.id;if(!(0,h.isEmpty)(t.data.relationships.phases.data)){var r=e.localize(t.data.attributes.title_multiloc),i=e.intl.formatMessage(S.default.losePhaseInfoConfirmation,{ideaTitle:r});window.confirm(i)&&(0,g.updateIdea)(t.data.id,{project_id:a,phase_ids:[]})}else(0,g.updateIdea)(t.data.id,{project_id:a,phase_ids:[]})}))}))}}};var U=(0,R.injectIntl)((0,k.default)((0,y.DragSource)("IDEA",B,(function(e,t){return{connectDragSource:e.dragSource(),isDragging:t.isDragging()}}))(x)));t.default=U},"xE6+":function(e,t,a){"use strict";a("SuFq");var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("ma9I"),a("2B1R");var r=n(a("lwsE")),i=n(a("W8MJ")),l=n(a("PJYZ")),o=n(a("7W2i")),u=n(a("a1gu")),c=n(a("Nsbk")),d=n(a("lSNA")),s=n(a("q1tI")),f=a("T89o"),p=a("MfpC"),v=a("FvIY"),m=n(a("3A/8"));function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=(0,c.default)(e);if(t){var r=(0,c.default)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return(0,u.default)(this,a)}}var b=function(e){(0,o.default)(a,e);var t=h(a);function a(){var e;(0,r.default)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return e=t.call.apply(t,[this].concat(i)),(0,d.default)((0,l.default)(e),"isActive",(function(t){return e.props.selectedPhases.indexOf(t)>=0})),(0,d.default)((0,l.default)(e),"handlePhaseClick",(function(t){return function(a){if(a.stopPropagation(),e.isEnabled(t)){var n=(0,f.xor)(e.props.selectedPhases,[t.id]);e.props.onUpdatePhases(n)}}})),(0,d.default)((0,l.default)(e),"isEnabled",(function(e){return(0,p.canContainIdeas)(e)})),e}return(0,i.default)(a,[{key:"render",value:function(){var e=this,t=this.props.phases;return s.default.createElement("div",null,t.map((function(t,a){return s.default.createElement(v.Popup,{basic:!0,key:t.id,trigger:s.default.createElement(v.Label,{as:e.isEnabled(t)?"a":void 0,color:e.isActive(t.id)?"teal":void 0,active:e.isActive(t.id),onClick:e.handlePhaseClick(t),circular:!0,basic:!0},a+1),content:s.default.createElement(m.default,{value:t.attributes.title_multiloc}),position:"top center"})})))}}]),a}(s.default.PureComponent);t.default=b}}]);
//# sourceMappingURL=102.29a5e8c28fa8a268445a.chunk.js.map