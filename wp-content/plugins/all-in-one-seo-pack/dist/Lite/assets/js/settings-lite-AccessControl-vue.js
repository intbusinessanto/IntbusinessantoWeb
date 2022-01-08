(window["aioseopjsonp"]=window["aioseopjsonp"]||[]).push([["settings-lite-AccessControl-vue"],{3562:function(t,s,e){},"61c3":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"aioseo-access-control-lite"},[e("core-card",{attrs:{slug:"accessControl"},scopedSlots:t._u([{key:"header",fn:function(){return[t._v(" "+t._s(t.strings.accessControl)+" "),e("core-pro-badge")]},proxy:!0},{key:"tooltip",fn:function(){return[t._v(" "+t._s(t.strings.tooltip)+" ")]},proxy:!0}])},[e("core-blur",[t._l(t.getRoles,(function(s){return[e("core-settings-row",{key:s.name,attrs:{name:s.label},scopedSlots:t._u([{key:"content",fn:function(){return[e("div",{staticClass:"toggle"},[e("base-toggle",{attrs:{disabled:!0,value:!0}},[t._v(" "+t._s(t.strings.useDefaultSettings)+" ")])],1)]},proxy:!0}],null,!0)})]}))],2),e("cta",{attrs:{"feature-list":[t.strings.granularControl,t.strings.wpRoles,t.strings.seoManagerRole,t.strings.seoEditorRole],"cta-link":t.$links.getPricingUrl("access-control","access-control-upsell"),"button-text":t.strings.ctaButtonText,"learn-more-link":t.$links.getUpsellUrl("access-control",null,"home")},scopedSlots:t._u([{key:"header-text",fn:function(){return[t._v(" "+t._s(t.strings.ctaHeader)+" ")]},proxy:!0},{key:"description",fn:function(){return[t._v(" "+t._s(t.strings.tooltip)+" ")]},proxy:!0}])})],1)],1)},o=[],n=e("9155"),r={mixins:[n["a"]],data:function(){return{strings:{wpRoles:this.$t.__("WP Roles (Editor, Author)",this.$td),seoManagerRole:this.$t.__("SEO Manager Role",this.$td),seoEditorRole:this.$t.__("SEO Editor Role",this.$td),defaultSettings:this.$t.__("Default settings that just work",this.$td),granularControl:this.$t.__("Granular controls per role",this.$td),ctaButtonText:this.$t.__("Upgrade to Pro and Unlock Access Control",this.$td),ctaHeader:this.$t.sprintf(this.$t.__("Access Control is only available for licensed %1$s %2$s users.",this.$td),"AIOSEO","Pro")}}}},a=r,l=(e("f689"),e("2877")),c=Object(l["a"])(a,i,o,!1,null,null,null);s["default"]=c.exports},9155:function(t,s,e){"use strict";e.d(s,"a",(function(){return n}));var i=e("5530"),o=(e("99af"),e("d81d"),e("b64b"),e("2f62")),n={data:function(){return{roles:[{label:this.$t.__("Administrator",this.$td),name:"administrator",description:this.$t.sprintf(this.$t.__("By default Admins have access to %1$sall SEO site settings%2$s",this.$td),"<strong>","</strong>")},{label:this.$t.__("Editor",this.$td),name:"editor",description:this.$t.sprintf(this.$t.__("By default Editors have access to %1$sSEO settings for General Settings, Search Appearance and Social Networks, as well as all settings for individual pages and posts.%2$s",this.$td),"<strong>","</strong>")},{label:this.$t.__("Author",this.$td),name:"author",description:this.$t.sprintf(this.$t.__("By default Authors have access to %1$sSEO settings for individual pages and posts that they already have permission to edit.%2$s",this.$td),"<strong>","</strong>")},{label:this.$t.__("Contributor",this.$td),name:"contributor",description:this.$t.sprintf(this.$t.__("By default Contributors have access to %1$sSEO settings for individual pages and posts that they already have permission to edit.%2$s",this.$td),"<strong>","</strong>")},{label:this.$t.__("SEO Manager",this.$td),name:"seoManager",description:this.$t.sprintf(this.$t.__("By default SEO Managers have access to %1$sSEO settings for General Settings, Redirections, and individual pages and posts.%2$s",this.$td),"<strong>","</strong>")},{label:this.$t.__("SEO Editor",this.$td),name:"seoEditor",description:this.$t.sprintf(this.$t.__("By default SEO Editors have access to %1$sSEO settings for individual pages and posts.%2$s",this.$td),"<strong>","</strong>")}],strings:{tooltip:this.$t.sprintf(this.$t.__("By default, only users with an Administrator role have permission to manage %1$s within your WordPress admin area. With Access Controls, though, you can easily extend specific access permissions to other user roles.",this.$td),"All in One SEO"),accessControl:this.$t.__("Access Control Settings",this.$td),useDefaultSettings:this.$t.__("Use Default Settings",this.$td)}}},computed:Object(i["a"])(Object(i["a"])({},Object(o["c"])(["settings"])),{},{getRoles:function(){var t=this;return this.roles.concat(Object.keys(this.$aioseo.user.customRoles).map((function(s){return{label:t.$aioseo.user.roles[s],name:s,description:t.$t.sprintf(t.$t.__("By default the %1$s role %2$shas no access%3$s to %4$s settings.",t.$td),t.$aioseo.user.roles[s],"<strong>","</strong>","All in One SEO"),dynamic:!0}})))}})}},f689:function(t,s,e){"use strict";e("3562")}}]);