(window.webpackJsonp=window.webpackJsonp||[]).push([[50,22],{720:function(t,e,r){"use strict";r.r(e);var n=r(225),o=r(639),l=r(642),c=r(654),d=r(778),v=r(643),_=r(222),f=r(189),m=r(223),h=r(145),k=r(87),y=r(726),$=r(653),x=r(82),C=r(772),O=r(657),P=r(640),w=(r(11),r(12),r(10),r(5),r(16),r(13),r(17),r(3)),j=r(125);function D(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var S={created:function(){this.$store.dispatch("book/viewBookUser")},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?D(Object(source),!0).forEach((function(e){Object(w.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):D(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(j.b)("book",["book","book_details"])),data:function(){return{isLoading:!1,users:{name:"Jervin Macalawa",email:"jmacalawapersonal@gmail.com",number:"09056949242",address:"Julugan 4 tanza, cavite",birthdate:"October 04, 1999",gender:"Male"},items:[],headers:[{text:"ID",value:"id"},{text:"Reference Code",value:"reference_code"},{text:"Total",value:"total"},{text:"Date Start",value:"date_start"},{text:"Date End",value:"date_end"},{text:"Status",value:"status"},{text:"Actions",value:"opt"},,]}}},F=S,N=r(103),component=Object(N.a)(F,(function(){var t=this,e=t._self._c;return e("div",[e($.a,{attrs:{"no-gutters":""}},[e(c.a,{staticClass:"px-10",attrs:{cols:"5"}},[e(x.a,{attrs:{height:"80vh"}},[e("div",{staticClass:"pt-10",attrs:{align:"center"}},[e("span",{staticClass:"text-h6 secondary--text"},[e("b",[t._v("Profile")])])]),t._v(" "),e($.a,{staticClass:"pt-0"},[e(c.a,{attrs:{cols:"auto"}},[e("div",{attrs:{align:"center"}},[e(n.a,[e(f.a,{attrs:{src:"https://e7.pngegg.com/pngimages/436/585/png-clipart-computer-icons-user-account-graphics-account-icon-vector-icons-silhouette.png"}})],1)],1),t._v(" "),e(o.a,{attrs:{color:"black",plain:"",to:"/client/profile/edit"}},[e("span",{staticClass:"pointer"},[t._v("Edit Account")])])],1),t._v(" "),e(c.a,[e("div",[t._v("\n              Name\n              "),e(P.a,{attrs:{outlined:"",readonly:"","hide-details":""},model:{value:t.$auth.user.firstname,callback:function(e){t.$set(t.$auth.user,"firstname",e)},expression:"$auth.user.firstname"}})],1),t._v(" "),e("div",[t._v("\n              Email\n              "),e(P.a,{attrs:{outlined:"",readonly:"","hide-details":""},model:{value:t.$auth.user.email,callback:function(e){t.$set(t.$auth.user,"email",e)},expression:"$auth.user.email"}})],1),t._v(" "),e("div",[t._v("\n              Mobile Number\n              "),e(P.a,{attrs:{outlined:"",readonly:"","hide-details":""},model:{value:t.$auth.user.mobile_number,callback:function(e){t.$set(t.$auth.user,"mobile_number",e)},expression:"$auth.user.mobile_number"}})],1),t._v(" "),e("div",[t._v("\n              Address\n              "),e(P.a,{attrs:{outlined:"",readonly:"","hide-details":""},model:{value:t.$auth.user.address,callback:function(e){t.$set(t.$auth.user,"address",e)},expression:"$auth.user.address"}})],1),t._v(" "),e("div",[e($.a,[e(c.a,[t._v("\n                  Date of Birth\n                  "),e(P.a,{attrs:{outlined:"",readonly:"","hide-details":""},model:{value:t.$auth.user.birthdate,callback:function(e){t.$set(t.$auth.user,"birthdate",e)},expression:"$auth.user.birthdate"}})],1),t._v(" "),e(c.a,[t._v("\n                  Gender\n                  "),e(P.a,{attrs:{outlined:"",readonly:"","hide-details":""},model:{value:t.$auth.user.gender,callback:function(e){t.$set(t.$auth.user,"gender",e)},expression:"$auth.user.gender"}})],1)],1)],1)])],1)],1)],1),t._v(" "),e(c.a,{attrs:{cols:"7"}},[0!=t.book.length?e("div",{staticClass:"pa-5"},[e("div",{staticClass:"py-5",attrs:{align:"end"}},[e(o.a,{staticClass:"rounded-lg",attrs:{color:"secondary",to:"book",outlined:""}},[t._v("Book Now")])],1),t._v(" "),e(l.a,{staticClass:"rounded-xl pa-10",attrs:{elevation:"2"}},[e("div",{staticClass:"black--text text-h5",attrs:{align:"center"}},[e("b",[t._v("Book Details")])]),t._v(" "),e("div",{staticClass:"pt-5"},[e($.a,[e(c.a,{attrs:{"align-self":"center",cols:"6"}},[e("b",[t._v("Status")])]),t._v(" "),e(O.a),t._v(" "),e(c.a,{staticClass:"pa-0"},[e("div",{style:t.$StatusColor(t.book_details.status),attrs:{align:"center"}},[t._v("\n                  "+t._s(t.book_details.status)+"\n                ")])])],1)],1),t._v(" "),e("div",{staticClass:"pt-5"},[e($.a,{attrs:{"no-gutters":""}},[e(c.a,[e("b",[t._v("Date")])]),t._v(" "),e(c.a,{attrs:{align:"end"}},[e("div",{staticClass:"black--text"},[t._v("\n                  "+t._s(t.$FormatDate(t.book_details.date[0]))+" -\n                  "+t._s(t.$FormatDate(t.book_details.date[1]))+"\n                ")])])],1),t._v(" "),e($.a,{attrs:{"no-gutters":""}},[e(c.a,[e("b",[t._v("Guest")])]),t._v(" "),e(c.a,{attrs:{align:"end"}},[e("div",{staticClass:"black--text"},[t._v(t._s(t.book_details.guest))])])],1),t._v(" "),e($.a,{attrs:{"no-gutters":""}},[e(c.a,[e("b",[t._v("Nights")])]),t._v(" "),e(c.a,{attrs:{align:"end"}},[t._v("\n                ("+t._s(t.$NDays(t.book_details.date))+") night/s\n              ")])],1),t._v(" "),e($.a,{attrs:{"no-gutters":""}},[e(c.a,[e("b",[t._v("Price")])]),t._v(" "),e(c.a,{attrs:{align:"end"}},[t._v(" "+t._s(t.$FormatPrice("1100")))])],1),t._v(" "),e(v.a,{staticClass:"pb-5"}),t._v(" "),e($.a,{attrs:{"no-gutters":""}},[e(c.a,[e("b",[t._v("Total")])]),t._v(" "),e(c.a,{attrs:{align:"end"}},[e("div",{staticClass:"secondary--text"},[t._v("\n                  "+t._s(t.$FormatPrice(t.book_details.total))+"\n                ")])])],1),t._v(" "),e($.a,{attrs:{"no-gutters":""}},[e(c.a,[e("b",[t._v("Potential Points")])]),t._v(" "),e(c.a,{attrs:{align:"end"}},[e("div",{staticClass:"green--text"},[e("b",[t._v(" "+t._s(t.book_details.points))])])])],1)],1),t._v(" "),e("div",{staticClass:"secondary--text",attrs:{align:"center"}},[e("b",[t._v(" Ariving in "+t._s(t.$NDays(t.book_details.date))+" day/s ")])])])],1):e("div",{attrs:{align:"center"}},[e(f.a,{attrs:{src:"/images/bookVector.jpg",height:"450",width:"650"}}),t._v(" "),e("div",[e(o.a,{staticClass:"rounded-lg",attrs:{color:"secondary",to:"book",outlined:""}},[t._v("Book Now")])],1)],1)])],1),t._v(" "),e("div",{staticClass:"px-5 pb-5"},[e(l.a,{staticClass:"pa-10 rounded-xl",attrs:{elevation:"5"}},[e(x.a,[e("div",{staticClass:"pt-0",attrs:{align:"start"}},[e("span",{staticClass:"text-h6 black--text"},[e("b",[t._v("Booking History")])])]),t._v(" "),e("div",[e(d.a,{staticClass:"pa-5",attrs:{headers:t.headers,items:t.book,loading:t.isLoading},scopedSlots:t._u([{key:"item.date_start",fn:function(e){var r=e.item;return[t._v("\n              "+t._s(t.$FormatDate(r.date_start))+"\n            ")]}},{key:"item.date_end",fn:function(e){var r=e.item;return[t._v("\n              "+t._s(t.$FormatDate(r.date_end))+"\n            ")]}},{key:"item.status",fn:function(r){var n=r.item;return[e("div",{style:t.$StatusColor(n.status),attrs:{align:"center"}},[t._v("\n                "+t._s(n.status)+"\n              ")])]}},{key:"item.total",fn:function(r){var n=r.item;return[e("div",[t._v("Php "+t._s(t.$FormatPrice(n.total)))])]}},{key:"loading",fn:function(){return t._l(5,(function(t){return e(C.a,{key:t,staticClass:"my-2",attrs:{type:"list-item-avatar-two-line"}})}))},proxy:!0},{key:"item.opt",fn:function(r){var n=r.item;return[e(y.a,{attrs:{"offset-y":"","z-index":"1"},scopedSlots:t._u([{key:"activator",fn:function(r){var n=r.attrs,l=r.on;return[e(o.a,t._g(t._b({attrs:{icon:""}},"v-btn",n,!1),l),[e(_.a,[t._v("mdi-dots-horizontal")])],1)]}}],null,!0)},[t._v(" "),e(m.a,{attrs:{dense:""}},[e(h.a,{on:{click:function(e){return e.stopPropagation(),t.editItem(n)}}},[e(k.a,[e(k.b,[t._v("Edit")])],1)],1),t._v(" "),e(h.a,{on:{click:function(e){return e.stopPropagation(),t.deleteItem(n)}}},[e(k.a,[e(k.b,[t._v("Delete")])],1)],1)],1)],1)]}}],null,!0)})],1)])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},794:function(t,e,r){"use strict";r.r(e);var n={head:function(){return{title:"My Profile"}},components:{ProfileForm:r(720).default}},o=r(103),component=Object(o.a)(n,(function(){var t=this._self._c;return t("div",[t("div",[t("profile-form")],1)])}),[],!1,null,null,null);e.default=component.exports}}]);