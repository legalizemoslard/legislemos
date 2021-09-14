(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{hT2Z:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,a("JRPe").defineMessages)({folderManagerTooltip:{id:"app.containers.AdminPage.FolderPermissions.folderManagerTooltip",defaultMessage:"Folder managers can edit the folder description, create new projects within the folder, and have project management rights over all projects within the folder. They cannot delete projects and they do not have access to projects that are not within their folder. You can {projectManagementInfoCenterLink} to find more information on project management rights."},moreInfoFolderManagerLink:{id:"app.containers.AdminPage.FolderPermissions.moreInfoFolderManagerLink",defaultMessage:"https://support.citizenlab.co/en/articles/4648650-assign-the-right-project-managers"},projectManagementInfoCenterLinkText:{id:"app.containers.AdminPage.FolderPermissions.projectManagementInfoCenterLinkText",defaultMessage:"visit our Help Center"},folderManagerSectionTitle:{id:"app.containers.AdminPage.FolderPermissions.folderManagerSectionTitle",defaultMessage:"Folder managers"},searchFolderManager:{id:"app.containers.AdminPage.FolderPermissions.searchFolderManager",defaultMessage:"Search users"},noMatch:{id:"app.containers.AdminPage.FolderPermissions.noMatch",defaultMessage:"No match found"},deleteFolderManagerLabel:{id:"app.containers.AdminPage.FolderPermissions.deleteFolderManagerLabel",defaultMessage:"Delete"},addFolderManager:{id:"app.containers.AdminPage.FolderPermissions.addFolderManager",defaultMessage:"Add"}});t.default=n},kfba:function(e,t,a){"use strict";a("4mDm"),a("07d7"),a("PKPk"),a("ENF9"),a("3bBZ"),a("5DmW");var n=a("TqRt"),r=a("cDf5");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("FZtP"),a("2B1R"),a("TeQF"),a("ma9I");var o=n(a("o0o1")),i=n(a("pVnL")),l=n(a("yXPU")),d=n(a("J4zp")),s=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var a=S(t);if(a&&a.has(e))return a.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(n,i,l):n[i]=e[i]}n.default=e,a&&a.set(e,n);return n}(a("q1tI")),u=n(a("vOnD")),c=n(a("uANZ")),f=a("ahDk"),p=a("P6wW"),m=a("KLnl"),g=a("yE4y"),M=a("Dsgy"),h=n(a("uN1B")),b=a("/eYC"),F=n(a("hT2Z")),P=a("Rw3A"),y=a("Loij"),v=a("iP56"),w=n(a("2fl8")),j=a("gzy/"),E=n(a("Qs0S")),k=n(a("m7jU")),I=a("18VM");function S(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(S=function(e){return e?a:t})(e)}var O=u.default.div.withConfig({displayName:"permissions__Container",componentId:"fag74i-0"})(["width:100%;margin-bottom:25px;"]),_=u.default.a.withConfig({displayName:"permissions__StyledA",componentId:"fag74i-1"})(["&:hover{text-decoration:underline;}"]),C=u.default.section.withConfig({displayName:"permissions__UserSelectSection",componentId:"fag74i-2"})(["display:flex;margin-bottom:12px;"]),L=(0,u.default)(c.default).withConfig({displayName:"permissions__UserSelectSelect",componentId:"fag74i-3"})(["min-width:300px;"]),N=(0,u.default)(w.default).withConfig({displayName:"permissions__UserSelectButton",componentId:"fag74i-4"})(["margin-left:12px;"]),x=(0,P.injectIntl)((function(e){var t=e.params.projectFolderId,a=e.intl.formatMessage,n=(0,h.default)(),r=(0,g.useProjectFolderModerators)(t),u=(0,s.useState)([]),c=(0,d.default)(u,2),S=c[0],x=c[1],T=(0,s.useState)(""),A=(0,d.default)(T,2),D=A[0],R=A[1],U=(0,s.useState)(!1),W=(0,d.default)(U,2),Z=W[0],z=W[1],B=(0,s.useState)(!1),J=(0,d.default)(B,2),q=J[0],K=J[1],Q=function(){var e=(0,l.default)(o.default.mark((function e(t){return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=(0,s.useCallback)((function(){K(!0),S.forEach((function(e){var a=e.value;return(0,b.addFolderModerator)(t,a)})),K(!1),x([])}),[S]),Y=function(e,t){return function(){(0,b.deleteFolderModerator)(e,t)}},H=function(e){return(0,m.isNilOrError)(e)?[]:e.data.filter((function(e){return!(0,p.isProjectFolderModerator)(e,t)})).map((function(e){return{value:e.id,label:"".concat(G(e)," (").concat(e.attributes.email,")"),email:"".concat(e.attributes.email),disabled:(0,p.isProjectFolderModerator)(e)&&!(0,I.isAdmin)({data:e})}}))},X=(0,s.useMemo)((function(){return!(0,m.isNonEmptyString)(D)}),[D]),G=function(e){return"".concat(e.attributes.first_name," ").concat(e.attributes.last_name)};return s.default.createElement(O,null,s.default.createElement(y.SubSectionTitle,null,s.default.createElement(P.FormattedMessage,F.default.folderManagerSectionTitle),s.default.createElement(v.IconTooltip,{content:s.default.createElement(P.FormattedMessage,(0,i.default)({},F.default.folderManagerTooltip,{values:{projectManagementInfoCenterLink:s.default.createElement(_,{href:a(F.default.moreInfoFolderManagerLink),target:"_blank"},s.default.createElement(P.FormattedMessage,F.default.projectManagementInfoCenterLinkText))}}))})),s.default.createElement(C,null,s.default.createElement(L,{name:"search-user",isMulti:!0,cacheOptions:!1,defaultOptions:!1,loadOptions:function(e,t){e&&(z(!0),(0,M.usersStream)({queryParameters:{search:e}}).observable.pipe((0,f.first)()).subscribe((function(e){z(!1),t(H(e))})))},isLoading:Z,isDisabled:q,value:S,onChange:Q,placeholder:a(F.default.searchFolderManager),styles:k.default,noOptionsMessage:function(){return(0,m.isNonEmptyString)(D)?a(F.default.noMatch):null},onInputChange:function(e){R(e)},components:X&&{DropdownIndicator:function(){return null}}}),s.default.createElement(N,{text:a(F.default.addFolderManager),buttonStyle:"cl-blue",icon:"plus-circle",padding:"13px 16px",onClick:V,disabled:!S||0===S.length,processing:q})),s.default.createElement(j.List,null,s.default.createElement(s.default.Fragment,null,!(0,m.isNilOrError)(r)&&!(0,m.isNilOrError)(n)&&r.map((function(e,a){return s.default.createElement(j.Row,{key:e.id,isLastItem:a===r.length-1},s.default.createElement(E.default,{userId:e.id,size:30}),s.default.createElement("p",{className:"expand"},G(e)),s.default.createElement("p",{className:"expand"},e.attributes.email),s.default.createElement(w.default,{onClick:Y(t,e.id),buttonStyle:"text",icon:"delete",disabled:!(0,m.isNilOrError)(n)&&n.id===e.id},s.default.createElement(P.FormattedMessage,F.default.deleteFolderManagerLabel)))})))))}));t.default=x}}]);
//# sourceMappingURL=170.cb613ef2e8fbdf811193.chunk.js.map