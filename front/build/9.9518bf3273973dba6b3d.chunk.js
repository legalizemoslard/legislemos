(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"590b":function(e,t,n){"use strict";n("2B1R"),n("SuFq"),n("tkto"),n("pNMO"),n("TeQF"),n("5DmW"),n("27RR");var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("QILm"));n("rB9j"),n("hByQ"),n("FZtP");var i=a(n("J4zp")),s=a(n("lwsE")),o=a(n("W8MJ")),u=a(n("PJYZ")),c=a(n("7W2i")),l=a(n("a1gu")),d=a(n("Nsbk")),p=a(n("lSNA")),f=a(n("q1tI")),h=n("T89o"),m=n("DtyJ"),v=n("ahDk"),y=n("kyyJ"),b=a(n("aTp4")),g=n("KLnl"),_=["children"],P=["children"];function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){(0,p.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,d.default)(e);if(t){var r=(0,d.default)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return(0,l.default)(this,n)}}var C=function(e){(0,c.default)(n,e);var t=j(n);function n(e){var a;(0,s.default)(this,n),a=t.call(this,e),(0,p.default)((0,u.default)(a),"queryParameters$",void 0),(0,p.default)((0,u.default)(a),"search$",void 0),(0,p.default)((0,u.default)(a),"subscriptions",void 0),(0,p.default)((0,u.default)(a),"getQueryParameters",(function(e,t){var n={author:t.authorId,search:t.search,topics:t.topics,areas:t.areas,initiative_status:t.initiativeStatusId,bounding_box:t.boundingBox,assignee:t.assignee,feedback_needed:t.feedbackNeeded};return x(x({},e.queryParameters),n)})),(0,p.default)((0,u.default)(a),"handleSearchOnChange",(function(e){a.search$.next(e)})),(0,p.default)((0,u.default)(a),"handleTopicsOnChange",(function(e){a.queryParameters$.next(x(x({},a.state.queryParameters),{},{topics:e}))})),(0,p.default)((0,u.default)(a),"handleAreasOnchange",(function(e){a.queryParameters$.next(x(x({},a.state.queryParameters),{},{areas:e}))})),(0,p.default)((0,u.default)(a),"handleInitiativeStatusOnChange",(function(e){a.queryParameters$.next(x(x({},a.state.queryParameters),{},{initiative_status:e}))})),(0,p.default)((0,u.default)(a),"handleAssigneeOnChange",(function(e){a.queryParameters$.next(x(x({},a.state.queryParameters),{},{assignee:e}))})),(0,p.default)((0,u.default)(a),"handleFeedbackFilterOnChange",(function(e){!0===e?a.queryParameters$.next(x(x({},a.state.queryParameters),{},{feedback_needed:!0})):!1===e&&a.queryParameters$.next(x(x({},a.state.queryParameters),{},{feedback_needed:void 0}))})),a.state={queryParameters:{author:void 0,search:void 0,topics:void 0,areas:void 0,initiative_status:void 0,bounding_box:void 0,assignee:void 0,feedback_needed:void 0},searchValue:void 0,count:void 0,querying:!0};var r=a.getQueryParameters(a.state,e);return a.queryParameters$=new m.BehaviorSubject(r),a.search$=new m.Subject,a.subscriptions=[],a}return(0,o.default)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.getQueryParameters(this.state,this.props),n=this.queryParameters$.pipe((0,v.distinctUntilChanged)((function(e,t){return(0,b.default)(e,t)}))),a=n.pipe((0,v.map)((function(e){return e.search})),(0,v.distinctUntilChanged)()),r=(0,m.merge)(this.search$.pipe((0,v.tap)((function(t){return e.setState({searchValue:t})})),(0,v.debounceTime)(500)),a.pipe((0,v.tap)((function(t){return e.setState({searchValue:t})})))).pipe((0,v.startWith)(t.search),(0,v.map)((function(e){return(0,h.isString)(e)&&!(0,h.isEmpty)(e)?e:void 0})),(0,v.distinctUntilChanged)()),s=(0,m.combineLatest)(n,r).pipe((0,v.map)((function(e){var t=(0,i.default)(e,2),n=t[0],a=t[1];return x(x({},n),{},{search:a})})));this.subscriptions=[s.pipe((0,v.switchMap)((function(e){return(0,y.initiativesCount)({queryParameters:e}).observable.pipe((0,v.map)((function(t){return{queryParameters:e,initiativesCount:t}})))}))).subscribe((function(t){var n=t.initiativesCount,a=t.queryParameters;e.setState({queryParameters:a,count:(0,g.isNilOrError)(n)?n:n.count,querying:!1})}))]}},{key:"componentDidUpdate",value:function(e,t){e.children;var n=(0,r.default)(e,_),a=this.props,i=(a.children,(0,r.default)(a,P));if(!(0,h.isEqual)(n,i)){var s=this.getQueryParameters(this.state,this.props);this.queryParameters$.next(s)}}},{key:"componentWillUnmount",value:function(){this.subscriptions.forEach((function(e){return e.unsubscribe()}))}},{key:"render",value:function(){return(0,this.props.children)(x(x({},this.state),{},{onChangeSearchTerm:this.handleSearchOnChange,onChangeTopics:this.handleTopicsOnChange,onChangeAreas:this.handleAreasOnchange,onChangeInitiativeStatus:this.handleInitiativeStatusOnChange,onChangeAssignee:this.handleAssigneeOnChange,onChangeFeedbackFilter:this.handleFeedbackFilterOnChange}))}}]),n}(f.default.Component);t.default=C},"5gEA":function(e,t,n){"use strict";n("2B1R"),n("SuFq"),n("tkto"),n("pNMO"),n("TeQF"),n("5DmW"),n("27RR");var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("QILm"));n("rB9j"),n("hByQ"),n("FZtP");var i=a(n("J4zp")),s=a(n("lwsE")),o=a(n("W8MJ")),u=a(n("PJYZ")),c=a(n("7W2i")),l=a(n("a1gu")),d=a(n("Nsbk")),p=a(n("lSNA")),f=a(n("q1tI")),h=n("T89o"),m=n("DtyJ"),v=n("ahDk"),y=n("kyyJ"),b=(n("uZm3"),a(n("aTp4"))),g=n("KLnl"),_=["children"],P=["children"];function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){(0,p.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,d.default)(e);if(t){var r=(0,d.default)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return(0,l.default)(this,n)}}var C=function(e){(0,c.default)(n,e);var t=j(n);function n(e){var a;(0,s.default)(this,n),a=t.call(this,e),(0,p.default)((0,u.default)(a),"queryParameters$",void 0),(0,p.default)((0,u.default)(a),"search$",void 0),(0,p.default)((0,u.default)(a),"subscriptions",void 0),(0,p.default)((0,u.default)(a),"getQueryParameters",(function(e,t){var n={projects:t.projectIds,phase:t.phaseId,author:t.authorId,search:t.search,topics:t.topics,areas:t.areas,idea_status:t.ideaStatusId,project_publication_status:t.projectPublicationStatus,bounding_box:t.boundingBox,assignee:t.assignee,feedback_needed:t.feedbackNeeded};return x(x({},e.queryParameters),n)})),(0,p.default)((0,u.default)(a),"handleProjectOnChange",(function(e){a.queryParameters$.next(x(x({},a.state.queryParameters),{},{projects:e}))})),(0,p.default)((0,u.default)(a),"handlePhaseOnChange",(function(e){a.queryParameters$.next(x(x({},a.state.queryParameters),{},{phase:e}))})),(0,p.default)((0,u.default)(a),"handleSearchOnChange",(function(e){a.search$.next(e)})),(0,p.default)((0,u.default)(a),"handleTopicsOnChange",(function(e){a.queryParameters$.next(x(x({},a.state.queryParameters),{},{topics:e}))})),(0,p.default)((0,u.default)(a),"handleAreasOnchange",(function(e){a.queryParameters$.next(x(x({},a.state.queryParameters),{},{areas:e}))})),(0,p.default)((0,u.default)(a),"handleIdeaStatusOnChange",(function(e){a.queryParameters$.next(x(x({},a.state.queryParameters),{},{idea_status:e}))})),(0,p.default)((0,u.default)(a),"handleProjectPublicationStatusOnChange",(function(e){a.queryParameters$.next(x(x({},a.state.queryParameters),{},{project_publication_status:e}))})),(0,p.default)((0,u.default)(a),"handleAssigneeOnChange",(function(e){a.queryParameters$.next(x(x({},a.state.queryParameters),{},{assignee:e}))})),(0,p.default)((0,u.default)(a),"handleFeedbackFilterOnChange",(function(e){!0===e?a.queryParameters$.next(x(x({},a.state.queryParameters),{},{feedback_needed:!0})):!1===e&&a.queryParameters$.next(x(x({},a.state.queryParameters),{},{feedback_needed:void 0}))})),a.state={queryParameters:{projects:void 0,phase:void 0,author:void 0,search:void 0,topics:void 0,areas:void 0,idea_status:void 0,project_publication_status:void 0,bounding_box:void 0,assignee:void 0,feedback_needed:void 0},searchValue:void 0,count:void 0,querying:!0};var r=a.getQueryParameters(a.state,e);return a.queryParameters$=new m.BehaviorSubject(r),a.search$=new m.Subject,a.subscriptions=[],a}return(0,o.default)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.getQueryParameters(this.state,this.props),n=this.queryParameters$.pipe((0,v.distinctUntilChanged)((function(e,t){return(0,b.default)(e,t)}))),a=n.pipe((0,v.map)((function(e){return e.search})),(0,v.distinctUntilChanged)()),r=(0,m.merge)(this.search$.pipe((0,v.tap)((function(t){return e.setState({searchValue:t})})),(0,v.debounceTime)(500)),a.pipe((0,v.tap)((function(t){return e.setState({searchValue:t})})))).pipe((0,v.startWith)(t.search),(0,v.map)((function(e){return(0,h.isString)(e)&&!(0,h.isEmpty)(e)?e:void 0})),(0,v.distinctUntilChanged)()),s=(0,m.combineLatest)(n,r).pipe((0,v.map)((function(e){var t=(0,i.default)(e,2),n=t[0],a=t[1];return x(x({},n),{},{search:a})})));this.subscriptions=[s.pipe((0,v.switchMap)((function(e){return(0,y.ideasCount)({queryParameters:e}).observable.pipe((0,v.map)((function(t){return{queryParameters:e,ideasCount:t}})))}))).subscribe((function(t){var n=t.ideasCount,a=t.queryParameters;e.setState({queryParameters:a,count:(0,g.isNilOrError)(n)?n:n.count,querying:!1})}))]}},{key:"componentDidUpdate",value:function(e,t){e.children;var n=(0,r.default)(e,_),a=this.props,i=(a.children,(0,r.default)(a,P));if(!(0,h.isEqual)(n,i)){var s=this.getQueryParameters(this.state,this.props);this.queryParameters$.next(s)}}},{key:"componentWillUnmount",value:function(){this.subscriptions.forEach((function(e){return e.unsubscribe()}))}},{key:"render",value:function(){return(0,this.props.children)(x(x({},this.state),{},{onChangeProject:this.handleProjectOnChange,onChangePhase:this.handlePhaseOnChange,onChangeSearchTerm:this.handleSearchOnChange,onChangeTopics:this.handleTopicsOnChange,onChangeAreas:this.handleAreasOnchange,onChangeIdeaStatus:this.handleIdeaStatusOnChange,onChangeProjectPublicationStatus:this.handleProjectPublicationStatusOnChange,onChangeAssignee:this.handleAssigneeOnChange,onChangeFeedbackFilter:this.handleFeedbackFilterOnChange}))}}]),n}(f.default.Component);t.default=C},BjdT:function(e,t,n){"use strict";n("TeQF"),n("2B1R"),n("tkto"),n("pNMO"),n("5DmW"),n("FZtP"),n("27RR");var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.globalState=void 0;var r=a(n("lwsE")),i=a(n("W8MJ")),s=a(n("lSNA")),o=n("DtyJ"),u=n("ahDk"),c=n("T89o"),l=a(n("aTp4"));function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,s.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=new(function(){function e(){var t=this;(0,r.default)(this,e),(0,s.default)(this,"stream",void 0),this.stream={observer:null,observable:null},this.stream.observable=new o.Observable((function(e){t.stream.observer=e})).pipe((0,u.startWith)({}),(0,u.scan)((function(e,t){var n=t.propertyName,a=t.updatedStateProperties;return p(p({},e),{},(0,s.default)({},n,p(p({},e[n]),a)))})),(0,u.filter)((function(e){return(0,c.isObject)(e)&&!(0,c.isEmpty)(e)})),(0,u.publishReplay)(1),(0,u.refCount)()),this.stream.observable.subscribe()}return(0,i.default)(e,[{key:"init",value:function(e,t){var n=this,a=this.stream.observable.pipe((0,u.map)((function(t){return t[e]})),(0,u.filter)((function(e){return(0,c.isObject)(e)&&!(0,c.isEmpty)(e)})),(0,u.distinctUntilChanged)((function(e,t){return(0,l.default)(e,t)}))),r=function(t){return n.set(e,t)};return t&&(0,c.isObject)(t)&&!(0,c.isEmpty)(t)&&(this.stream.observer?r(t):setTimeout((function(){return r(t)}),0)),{observable:a,set:r,get:function(){return n.get(e)}}}},{key:"set",value:function(e,t){this.stream.observer.next({propertyName:e,updatedStateProperties:t})}},{key:"get",value:function(e){return this.stream.observable.pipe((0,u.map)((function(t){return(0,c.has)(t,e)?t[e]:null})),(0,u.first)()).toPromise()}}]),e}());t.globalState=f},kyyJ:function(e,t,n){"use strict";n("tkto"),n("pNMO"),n("TeQF"),n("5DmW"),n("FZtP"),n("27RR");var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.ideasByStatusStream=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return s.default.get(u({apiEndpoint:"".concat(c,"/ideas_by_status")},e))},t.ideasByTimeStream=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return s.default.get(u({apiEndpoint:"".concat(c,"/ideas_by_time")},e))},t.ideasByTimeCumulativeStream=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return s.default.get(u({apiEndpoint:"".concat(c,"/ideas_by_time_cumulative")},e))},t.ideasByTopicStream=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return s.default.get(u({apiEndpoint:"".concat(c,"/ideas_by_topic")},e))},t.ideasByProjectStream=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return s.default.get(u({apiEndpoint:"".concat(c,"/ideas_by_project")},e))},t.ideasCount=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return s.default.get(u({apiEndpoint:"".concat(c,"/ideas_count")},e))},t.ideasCountForUser=function(e){return s.default.get({apiEndpoint:"".concat(i.API_PATH,"/users/").concat(e,"/ideas_count")})},t.usersCount=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return s.default.get(u({apiEndpoint:"".concat(c,"/users_count")},e))},t.usersByTimeStream=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return s.default.get(u({apiEndpoint:"".concat(c,"/users_by_time")},e))},t.commentsByTimeStream=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return s.default.get(u({apiEndpoint:"".concat(c,"/comments_by_time")},e))},t.usersByTimeCumulativeStream=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return s.default.get(u({apiEndpoint:"".concat(c,"/users_by_time_cumulative")},e))},t.activeUsersByTimeStream=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return s.default.get(u({apiEndpoint:"".concat(c,"/active_users_by_time")},e))},t.activeUsersByTimeCumulativeStream=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return s.default.get(u({apiEndpoint:"".concat(c,"/active_users_by_time_cumulative")},e))},t.userEngagementScoresStream=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return s.default.get(u({apiEndpoint:"".concat(c,"/users_engagement_scores")},e))},t.commentsByTimeCumulativeStream=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return s.default.get(u({apiEndpoint:"".concat(c,"/comments_by_time_cumulative")},e))},t.commentsByTopicStream=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return s.default.get(u({apiEndpoint:"".concat(c,"/comments_by_topic")},e))},t.commentsByProjectStream=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return s.default.get(u({apiEndpoint:"".concat(c,"/comments_by_project")},e))},t.commentsCountForUser=function(e){return s.default.get({apiEndpoint:"".concat(i.API_PATH,"/users/").concat(e,"/comments_count")})},t.votesByTimeCumulativeStream=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return s.default.get(u({apiEndpoint:"".concat(c,"/votes_by_time_cumulative")},e))},t.votesByTimeStream=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return s.default.get(u({apiEndpoint:"".concat(c,"/votes_by_time")},e))},t.votesByTopicStream=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return s.default.get(u({apiEndpoint:"".concat(c,"/votes_by_topic")},e))},t.votesByProjectStream=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return s.default.get(u({apiEndpoint:"".concat(c,"/votes_by_project")},e))},t.initiativesCount=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return s.default.get(u({apiEndpoint:"".concat(c,"/initiatives_count")},e))},t.votesByProjectXlsxEndpoint=t.votesByTopicXlsxEndpoint=t.votesByTimeXlsxEndpoint=t.commentsByProjectXlsxEndpoint=t.commentsByTopicXlsxEndpoint=t.commentsByTimeCumulativeXlsxEndpoint=t.activeUsersByTimeCumulativeXlsxEndpoint=t.activeUsersByTimeXlsxEndpoint=t.usersByTimeCumulativeXlsxEndpoint=t.usersByTimeXlsxEndpoint=t.userXlsxEndpoint=t.ideasByProjectXlsxEndpoint=t.ideasByTopicXlsxEndpoint=t.ideasByTimeCumulativeXlsxEndpoint=t.ideasByTimeXlsxEndpoint=t.ideasByStatusXlsxEndpoint=void 0,n("ma9I");var r=a(n("lSNA")),i=n("p0gT"),s=a(n("1Kqg"));function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c="".concat(i.API_PATH,"/stats");var l="".concat(c,"/ideas_by_status_as_xlsx");t.ideasByStatusXlsxEndpoint=l;var d="".concat(c,"/ideas_by_time_as_xlsx");t.ideasByTimeXlsxEndpoint=d;var p="".concat(c,"/ideas_by_time_cumulative_as_xlsx");t.ideasByTimeCumulativeXlsxEndpoint=p;var f="".concat(c,"/ideas_by_topic_as_xlsx");t.ideasByTopicXlsxEndpoint=f;var h="".concat(c,"/ideas_by_project_as_xlsx");t.ideasByProjectXlsxEndpoint=h;var m="".concat(c,"/users_count_as_xlsx");t.userXlsxEndpoint=m;var v="".concat(c,"/users_by_time_as_xlsx");t.usersByTimeXlsxEndpoint=v;var y="".concat(c,"/users_by_time_cumulative_as_xlsx");t.usersByTimeCumulativeXlsxEndpoint=y;var b="".concat(c,"/active_users_by_time_as_xlsx");t.activeUsersByTimeXlsxEndpoint=b;var g="".concat(c,"/active_users_by_time_cumulative_as_xlsx");t.activeUsersByTimeCumulativeXlsxEndpoint=g;var _="".concat(c,"/comments_by_time_cumulative_as_xlsx");t.commentsByTimeCumulativeXlsxEndpoint=_;var P="".concat(c,"/comments_by_topic_as_xlsx");t.commentsByTopicXlsxEndpoint=P;var O="".concat(c,"/comments_by_project_as_xlsx");t.commentsByProjectXlsxEndpoint=O;var x="".concat(c,"/votes_by_time_as_xlsx");t.votesByTimeXlsxEndpoint=x;var j="".concat(c,"/votes_by_topic_as_xlsx");t.votesByTopicXlsxEndpoint=j;var C="".concat(c,"/votes_by_project_as_xlsx");t.votesByProjectXlsxEndpoint=C},"qnH+":function(e,t,n){"use strict";n("4mDm"),n("07d7"),n("PKPk"),n("ENF9"),n("3bBZ"),n("5DmW");var a=n("TqRt"),r=n("cDf5");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var o=i?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(a,s,o):a[s]=e[s]}a.default=e,n&&n.set(e,a);return a}(n("q1tI")),s=a(n("vOnD")),o=n("96Cm");function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}var c=s.default.span.withConfig({displayName:"CountBadge__Container",componentId:"qf4orc-0"})(["padding:0 3px;min-width:16px;height:16px;font-size:","px;font-weight:500;border-radius:3px;margin-left:6px;display:flex;align-items:center;justify-content:center;color:#ffffff;background:",";"],o.fontSizes.xs,(function(e){return e.bgColor?e.bgColor:o.colors.clRed})),l=(0,i.memo)((function(e){var t=e.count,n=e.bgColor;return t>0?i.default.createElement(c,{bgColor:n},t):null}));t.default=l}}]);
//# sourceMappingURL=9.9518bf3273973dba6b3d.chunk.js.map