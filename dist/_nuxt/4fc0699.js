(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{455:function(e,t,r){"use strict";var n=r(639);t.a=n.a},664:function(e,t,r){"use strict";var n=r(18),c=(r(11),r(29),r(42),r(56),[function(e){return e&&Object.keys(e).length&&e.constructor===Object||"This is field is required"}]),o=[function(e){return"object"===Object(n.a)(e)||"This field must be a reference from the list"}];t.a={standardRules:[function(e){return!!e||"This field is required"}],emptyObjectFieldRule:c,emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}],emailFormatRule:[function(e){return null===e||""===e||(/.+@.+\..+/.test(e)||"E-mail must be valid")}],max10Char:[function(e){return e.length<=10||"Input too long!"}],max150Char:[function(e){return e.length<150||"Input too long!"}],mobileChar:[function(e){return 10===e.length&&!e.includes("-")||12===e.length||"Invalid mobile format"}],fieldArrayRule:[function(e){return 0!==e.length||"This field is required"}],fieldArraySingleRule:[function(e){return 0!==e.length||"This field is required"},function(e){return!(e.length>1)||"You must choose only 1 role"}],notObjectFieldRule:o}},700:function(e,t,r){"use strict";r.r(t);var n=r(639),c=r(642),o=r(654),d=r(709),l=r(726),f=r(653),v=r(725),m=r(657),h=r(640),_=(r(11),r(12),r(10),r(5),r(16),r(13),r(17),r(9)),O=r(3),y=(r(65),r(2)),j=r(710),R=r(661),w=r(125),k=r(664);function x(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function $(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(t){Object(O.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}y.a.use(R.a,{});var I={computed:$({},Object(w.b)("certificate",["data"])),props:["account_type","selectedItem"],auth:!1,data:function(){var e;return $($($({userList:[],departMenu:!1},k.a),{},{e1:1,isLoading:!1,register:(e={firstname:"",lastname:"",gender:"",is_active:!0},Object(O.a)(e,"gender",""),Object(O.a)(e,"date_recorded",""),Object(O.a)(e,"email",""),Object(O.a)(e,"confirm_email",""),Object(O.a)(e,"mobile_number",""),Object(O.a)(e,"birthdate",""),Object(O.a)(e,"address",""),Object(O.a)(e,"province",""),Object(O.a)(e,"account_type","Resident"),Object(O.a)(e,"city",""),Object(O.a)(e,"barangay",""),Object(O.a)(e,"password",""),Object(O.a)(e,"confirm_password",""),e),isLoaded:!1},k.a),{},{isValid:!1,isRegister:!1})},created:function(){this.$store.dispatch("certificate/viewCertificate"),this.register.user=this.selectedItem.user,this.register.certificate_type=this.selectedItem.certificate_type,this.register.date_issued=this.selectedItem.date_issued,this.register.findings=this.selectedItem.findings,this.register.purpose=this.selectedItem.purpose,this.register.certificate_id=j.a(),console.log(this.$auth),this.$store.dispatch("users/viewUserResident")},methods:{cancel:function(){this.$emit("cancel")},submitHandlerRegister:function(){var e=this;return Object(_.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoaded=!0,e.register.status="Pending",e.register.user_id=e.$auth.user.id,t.prev=3,t.next=6,e.$store.dispatch("service/addServices",e.register);case 6:e.$toastr.s("SUCCESS MESSAGE","Successfully Added!"),e.$emit("cancel"),e.$store.dispatch("service/viewServicesUser"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(3),alert(t.t0);case 14:e.isLoaded=!1;case 15:case"end":return t.stop()}}),t,null,[[3,11]])})))()},selectRegister:function(){this.isRegister?this.isRegister=!1:this.isRegister=!0}}},S=r(103),component=Object(S.a)(I,(function(){var e=this,t=e._self._c;return t("div",[t(c.a,{staticClass:"pa-16"},[t("div"),e._v(" "),t(f.a,[t(o.a,[t(f.a,[t(o.a,{attrs:{cols:"12"}},[t("div",[e._v("Resident Name")]),e._v(" "),t("div",[t(h.a,{attrs:{readonly:"",rules:e.standardRules,outlined:"",dense:""},model:{value:e.register.user,callback:function(t){e.$set(e.register,"user",t)},expression:"register.user"}})],1)]),e._v(" "),t(o.a,{attrs:{cols:"12"}},[t(f.a,[t(o.a,[t("div",[e._v("Certificate Type")]),e._v(" "),t("div",[t(v.a,{attrs:{rules:e.standardRules,outlined:"",dense:"",items:e.data,"item-text":"certificate_name","item-value":"certificate_name"},model:{value:e.register.certificate_type,callback:function(t){e.$set(e.register,"certificate_type",t)},expression:"register.certificate_type"}})],1)]),e._v(" "),t(o.a,[t("div",[e._v("\n                  Date to be Issued\n                  "),t("div",{staticClass:"text-h5"},[t(l.a,{ref:"dateIssueMenu",attrs:{"close-on-content-click":!1,"return-value":e.register.date_issued,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(t){return e.$set(e.register,"date_issued",t)},"update:return-value":function(t){return e.$set(e.register,"date_issued",t)}},scopedSlots:e._u([{key:"activator",fn:function(r){var n=r.on,c=r.attrs;return[t(h.a,e._g(e._b({attrs:{dense:"",outlined:"",readonly:""},model:{value:e.register.date_issued,callback:function(t){e.$set(e.register,"date_issued",t)},expression:"register.date_issued"}},"v-text-field",c,!1),n))]}}]),model:{value:e.dateIssueMenu,callback:function(t){e.dateIssueMenu=t},expression:"dateIssueMenu"}},[e._v(" "),t(d.a,{attrs:{"no-title":"",scrollable:""},model:{value:e.register.date_issued,callback:function(t){e.$set(e.register,"date_issued",t)},expression:"register.date_issued"}},[t(m.a),e._v(" "),t(n.a,{attrs:{text:"",color:"primary"},on:{click:function(t){e.dateIssueMenu=!1}}},[e._v("\n                          Cancel\n                        ")]),e._v(" "),t(n.a,{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.dateIssueMenu.save(e.register.date_issued)}}},[e._v("\n                          OK\n                        ")])],1)],1)],1)])])],1)],1),e._v(" "),t(o.a,{attrs:{cols:"12"}},[t(f.a,[t(o.a,[t("div",[e._v("Findings")]),e._v(" "),t("div",[t(v.a,{attrs:{rules:e.standardRules,outlined:"",dense:"",items:["Financial Assistance","Medical Clearance","Educational Assitance","General Requirement"]},model:{value:e.register.findings,callback:function(t){e.$set(e.register,"findings",t)},expression:"register.findings"}})],1)]),e._v(" "),t(o.a,[t("div",[e._v("Purpose")]),e._v(" "),t("div",[t(v.a,{attrs:{rules:e.standardRules,outlined:"",dense:"",items:["No Record on File","No Derogatory Record","With Derogatory Record"]},model:{value:e.register.purpose,callback:function(t){e.$set(e.register,"purpose",t)},expression:"register.purpose"}})],1)])],1)],1)],1)],1)],1),e._v(" "),t("div",{attrs:{align:"end"}},[t(n.a,{attrs:{text:""},on:{click:e.cancel}},[e._v(" Close ")]),e._v(" "),t(n.a,{attrs:{color:"primary"},on:{click:e.submitHandlerRegister}},[e._v(" Submit ")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);