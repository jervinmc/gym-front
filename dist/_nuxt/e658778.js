(window.webpackJsonp=window.webpackJsonp||[]).push([[42,18],{717:function(t,e,n){"use strict";n.r(e);var o=n(639),r=n(642),c=n(654),l=n(778),d=n(222),v=n(189),_=n(223),m=n(145),f=n(87),h=n(726),k=n(653),y=n(772),P=(n(29),n(231),n(11),n(12),n(16),n(13),n(17),n(3)),O=(n(43),n(10),n(5),n(682)),w=n.n(O),C=n(125);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(P.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var S={computed:x(x(x({},Object(C.b)("book",["book_data"])),Object(C.b)("transaction",["transaction_data"])),{},{total_bookings:function(){return this.book_data.length},total_bookings_today:function(){var t=(new Date).toISOString().slice(0,10);return this.book_data.filter((function(e){return e.created_date.slice(0,10)===t})).length}}),created:function(){this.$store.dispatch("book/view"),this.$store.dispatch("transaction/view")},components:{VueApexCharts:w.a},data:function(){var t;return t={cards:[{title:"Number of Users",subtitle:"1000",icon:"mdi-account-group"},{title:"Number of Bookings",subtitle:this.book_data,icon:"mdi-calendar-multiple-check"},{title:"Number of Pending",subtitle:"200",icon:"mdi-calendar-alert"},{title:"Number of Approved",subtitle:"300",icon:"mdi-calendar-check"}],carousel:1,series:[{name:"series-1",data:[30,40,45,50,49,60,70,91]}],chartOptions:{chart:{height:250,type:"line",zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{curve:"straight"},title:{text:"",align:"left"},grid:{row:{colors:["#f3f3f3","transparent"],opacity:.5}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},isAdd:!1,register:{},addForm:!1,isConfirmationApprove:!1,search:"",requestedStatus:!1,isConfirmation:!1,file:""},Object(P.a)(t,"addForm",!1),Object(P.a)(t,"editForm",!1),Object(P.a)(t,"account_type","Resident"),Object(P.a)(t,"selectedItem",{}),Object(P.a)(t,"status","Easy"),Object(P.a)(t,"items",[{name:"Juan Dela Cruz",street:"Chino Roces",purok:"Pio Del Pilar",age:"24",birthday:"10/20/10",is_active:!0}]),Object(P.a)(t,"headers_book",[{text:"ID",value:"id"},{text:"User ID",value:"user_id"},{text:"Firstname",value:"firstname"},{text:"Lastname",value:"lastname"},{text:"Date",value:"created_date"},,]),Object(P.a)(t,"headers",[{text:"ID",value:"id"},{text:"Product Name",value:"product_name"},{text:"Price",value:"price"},{text:"Quantity",value:"quantity"},{text:"Image",value:"image"},,]),t}},D=n(103),component=Object(D.a)(S,(function(){var t=this,e=t._self._c;return e("div",[t._m(0),t._v(" "),e("div",[e("div",[e(k.a,[e(c.a,{attrs:{cols:"12",md:"6"}},[e(r.a,{staticClass:"pa-4"},[e(d.a,{staticClass:"display-1"}),t._v(" "),e("div",{staticClass:"title"},[t._v("No. of Bookings")]),t._v(" "),e("div",{staticClass:"subtitle"},[t._v(t._s(t.total_bookings))])],1)],1),t._v(" "),e(c.a,{attrs:{cols:"12",md:"6"}},[e(r.a,{staticClass:"pa-4"},[e(d.a,{staticClass:"display-1"}),t._v(" "),e("div",{staticClass:"title"},[t._v("No. of bookings today")]),t._v(" "),e("div",{staticClass:"subtitle"},[t._v(t._s(t.total_bookings_today))])],1)],1)],1)],1),t._v(" "),e("div",{staticClass:"py-10"},[e("div",{staticClass:"pa-5 text-h6"},[t._v("\n        Product Management\n      ")]),t._v(" "),e(l.a,{staticClass:"pa-5",attrs:{search:t.search,headers:t.headers,items:t.transaction_data,loading:t.isLoading},scopedSlots:t._u([{key:"loading",fn:function(){return t._l(5,(function(t){return e(y.a,{key:t,staticClass:"my-2",attrs:{type:"list-item-avatar-two-line"}})}))},proxy:!0},{key:"item.is_active",fn:function(e){var n=e.item;return[t._v("\n          "+t._s(n.is_active?"Yes":"No")+"\n        ")]}},{key:"item.image",fn:function(t){var n=t.item;return[e(v.a,{attrs:{src:n.image,height:"100",width:"100"}})]}},{key:"item.opt",fn:function(n){var r=n.item;return[e(h.a,{attrs:{"offset-y":"","z-index":"1"},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.attrs,c=n.on;return[e(o.a,t._g(t._b({attrs:{icon:""}},"v-btn",r,!1),c),[e(d.a,[t._v("mdi-dots-horizontal")])],1)]}}],null,!0)},[t._v(" "),e(_.a,{attrs:{dense:""}},[e(m.a,{on:{click:function(e){return e.stopPropagation(),t.edit(r,"")}}},[e(f.a,[e(f.b,[t._v("View")])],1)],1),t._v(" "),"Pending"==r.status?e(m.a,{on:{click:function(e){return e.stopPropagation(),t.statusConfirmation(r,"Approved")}}},[e(f.a,[e(f.b,[t._v("Approve")])],1)],1):t._e(),t._v(" "),"Pending"==r.status?e(m.a,{on:{click:function(e){return e.stopPropagation(),t.statusConfirmation(r,"Declined")}}},[t._v(">\n                "),e(f.a,[e(f.b,[t._v("Decline")])],1)],1):t._e(),t._v(" "),"Pending"==t.status?e(m.a,{on:{click:function(e){return e.stopPropagation(),t.editItem(r,"For Review")}}},[e(f.a,[e(f.b,[t._v("For Review")])],1)],1):t._e(),t._v(" "),"For Review"==t.status?e(m.a,{on:{click:function(e){return e.stopPropagation(),t.editItem(r,"Summon")}}},[e(f.a,[e(f.b,[t._v("Summon")])],1)],1):t._e(),t._v(" "),"Summon"==t.status?e(m.a,{on:{click:function(e){return e.stopPropagation(),t.editItem(r,"Settled")}}},[e(f.a,[e(f.b,[t._v("Settled")])],1)],1):t._e(),t._v(" "),"Summon"==t.status?e(m.a,{on:{click:function(e){return e.stopPropagation(),t.editItem(r,"Dismissed")}}},[e(f.a,[e(f.b,[t._v("Dismissed")])],1)],1):t._e()],1)],1)]}}],null,!0)}),t._v(" "),e("div",[e("div",{staticClass:"pa-5 text-h6"},[t._v("\n        Book Management\n      ")]),t._v(" "),e(l.a,{staticClass:"pa-5",attrs:{search:t.search,headers:t.headers_book,items:t.book_data,loading:t.isLoading},scopedSlots:t._u([{key:"loading",fn:function(){return t._l(5,(function(t){return e(y.a,{key:t,staticClass:"my-2",attrs:{type:"list-item-avatar-two-line"}})}))},proxy:!0},{key:"item.is_active",fn:function(e){var n=e.item;return[t._v("\n          "+t._s(n.is_active?"Yes":"No")+"\n        ")]}},{key:"item.image",fn:function(t){var n=t.item;return[e(v.a,{attrs:{src:n.image,height:"100",width:"100"}})]}},{key:"item.opt",fn:function(n){var r=n.item;return[e(h.a,{attrs:{"offset-y":"","z-index":"1"},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.attrs,c=n.on;return[e(o.a,t._g(t._b({attrs:{icon:""}},"v-btn",r,!1),c),[e(d.a,[t._v("mdi-dots-horizontal")])],1)]}}],null,!0)},[t._v(" "),e(_.a,{attrs:{dense:""}},[e(m.a,{on:{click:function(e){return e.stopPropagation(),t.edit(r,"")}}},[e(f.a,[e(f.b,[t._v("View")])],1)],1),t._v(" "),"Pending"==r.status?e(m.a,{on:{click:function(e){return e.stopPropagation(),t.statusConfirmation(r,"Approved")}}},[e(f.a,[e(f.b,[t._v("Approve")])],1)],1):t._e(),t._v(" "),"Pending"==r.status?e(m.a,{on:{click:function(e){return e.stopPropagation(),t.statusConfirmation(r,"Declined")}}},[t._v(">\n                "),e(f.a,[e(f.b,[t._v("Decline")])],1)],1):t._e(),t._v(" "),"Pending"==t.status?e(m.a,{on:{click:function(e){return e.stopPropagation(),t.editItem(r,"For Review")}}},[e(f.a,[e(f.b,[t._v("For Review")])],1)],1):t._e(),t._v(" "),"For Review"==t.status?e(m.a,{on:{click:function(e){return e.stopPropagation(),t.editItem(r,"Summon")}}},[e(f.a,[e(f.b,[t._v("Summon")])],1)],1):t._e(),t._v(" "),"Summon"==t.status?e(m.a,{on:{click:function(e){return e.stopPropagation(),t.editItem(r,"Settled")}}},[e(f.a,[e(f.b,[t._v("Settled")])],1)],1):t._e(),t._v(" "),"Summon"==t.status?e(m.a,{on:{click:function(e){return e.stopPropagation(),t.editItem(r,"Dismissed")}}},[e(f.a,[e(f.b,[t._v("Dismissed")])],1)],1):t._e()],1)],1)]}}],null,!0)})],1)],1)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"pa-5 text-h5"},[t("b",[this._v("Report Management")])])}],!1,null,null,null);e.default=component.exports},789:function(t,e,n){"use strict";n.r(e);var o={components:{ReportContainer:n(717).default},data:function(){return{}},created:function(){}},r=n(103),component=Object(r.a)(o,(function(){var t=this._self._c;return t("div",[t("report-container")],1)}),[],!1,null,null,null);e.default=component.exports}}]);