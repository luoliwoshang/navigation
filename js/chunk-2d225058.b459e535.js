(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d225058"],{e32f:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",[r("q-card",{style:{background:"linear-gradient(to top, #accbee 0%, #e7f0fd 100%)"}},[r("form",{staticClass:"q-gutter-md",on:{submit:function(t){return t.preventDefault(),t.stopPropagation(),e.onSubmit.apply(null,arguments)}}},[r("q-item",[r("q-card-section",{staticClass:"q-pb-none"},[r("q-btn",{staticStyle:{color:"#ff0080"},attrs:{flat:"",round:"",size:"lg",icon:"local_shipping"}})],1),r("q-card-section",{staticClass:"q-mt-md q-pt-none q-pa-none"},[r("div",[r("div",{staticClass:"text-h5 text-bold text-purple-5"},[e._v("快递查询")]),r("div",{staticClass:"text-subtitle2 text-cyan"},[e._v("By Luoliwoshang")])])])],1),r("q-card-section",{staticClass:"q-py-xs q-mb-none"},[r("q-input",{ref:"order",attrs:{rules:e.rule.order,color:"purple-12",label:"运单号"},scopedSlots:e._u([{key:"prepend",fn:function(){return[r("q-icon",{attrs:{name:"pin"}})]},proxy:!0}]),model:{value:e.order_num,callback:function(t){e.order_num=t},expression:"order_num"}}),r("q-select",{ref:"carrier",attrs:{rules:e.rule.carrier,label:"快递公司",options:e.carriers,"option-label":function(e){return e.courier_name_cn}},scopedSlots:e._u([{key:"prepend",fn:function(){return[r("q-icon",{attrs:{name:"business"}})]},proxy:!0},{key:"no-option",fn:function(){return[r("q-item",[r("q-item-section",{staticClass:"text-grey"},[e._v(" No results ")])],1)]},proxy:!0}]),model:{value:e.current_carrier,callback:function(t){e.current_carrier=t},expression:"current_carrier"}})],1),r("q-card-actions",{staticClass:"q-my-none"},[r("q-btn",{staticClass:"full-width",attrs:{type:"submit",push:"",color:"deep-purple-3",label:"查询",size:"lg"}})],1)],1)])],1),r("q-dialog",{attrs:{"no-route-dismiss":"",position:"right"},model:{value:e.show_timeline,callback:function(t){e.show_timeline=t},expression:"show_timeline"}},[r("q-card",e._l(e.express_data,(function(t,i){return r("div",{key:i,staticClass:"q-ma-lg"},[r("q-timeline",{attrs:{color:"secondary"}},[r("q-timeline-entry",{attrs:{heading:""}},[e._v(" 快递信息 ")]),e._l(t.origin_info.trackinfo,(function(t,i){return r("q-timeline-entry",{key:i,attrs:{title:t.checkpoint_date,subtitle:t.checkpoint_delivery_status}},[r("div",[e._v(" "+e._s(t.tracking_detail)+" ")])])}))],2)],1)})),0)],1)],1)},n=[],s=r("5530"),a=(r("d3b7"),r("4de4"),r("d4ec")),o=r("bee2"),c=(r("caad"),r("2532"),r("bc3a")),u=r.n(c),l=u.a.create({baseURL:"/api",timeout:1e4,headers:{"Content-Type":"application/json","Tracking-Api-Key":"33659c30-f818-4553-9844-9e34f79c8cfd"},validateStatus:function(e){return 200===e}});l.interceptors.response.use((function(e){if(e){switch(e.data.code){case 10010:Message.error("服务内部未知错误");break;case 10002:Message.error("Body 参数校验错误");break;case 0:break;default:break}return e.data}return Message.error(e.data.message)}),(function(e){return e.message.includes("timeout")&&Message.error("API 超时"),Promise.reject(e)}));var d=l,m=function(){function e(){Object(a["a"])(this,e)}return Object(o["a"])(e,null,[{key:"getCarriers",value:function(e){return d({url:"/v3/trackings/carriers",method:"get",params:Object(s["a"])({lang:"en"},e)})}},{key:"getInfo",value:function(e){return d({url:"/v3/trackings/get",method:"get",params:Object(s["a"])({lang:"cn"},e)})}},{key:"createTrack",value:function(e){return d({url:"/v3/trackings/create",method:"post",data:e})}}]),e}(),_=r("2f62"),f={name:"Express",props:["courier_code","tracking_number"],data:function(){var e=this;return{show_timeline:!1,order_num:"SF1315425317258",current_carrier:"",rule:{order:[function(e){return e&&e.length>0||"请输入运单号"}],carrier:[function(){return e.current_carrier||"请选择快递公司"}]},express_data:[]}},computed:Object(s["a"])(Object(s["a"])({},Object(_["c"])("moduleExpress",{carriers:function(e){return e.carriers},tracking_info:function(e){return e.tracking_info}})),{},{current_express_param:function(){return{tracking_number:this.order_num,courier_code:this.current_carrier.courier_code}}}),methods:Object(s["a"])(Object(s["a"])({},Object(_["b"])("moduleExpress",["SET_NEW_TRACKING_INFO"])),{},{getExpressInfo:function(){var e=this;return new Promise((function(t,r){m.createTrack([e.current_express_param]).then((function(){m.getInfo(e.current_express_param).then((function(r){0===e.tracking_info.filter((function(t){return t.tracking_number===e.current_express_param.tracking_number})).length&&e.SET_NEW_TRACKING_INFO(Object(s["a"])(Object(s["a"])({},e.current_express_param),{},{courier_name_cn:e.current_carrier.courier_name_cn})),e.express_data=r.data,e.show_timeline=!0,t(r)}))}))}))},onSubmit:function(){this.$refs.carrier.validate(),this.$refs.order.validate(),this.$refs.carrier.hasError||this.$refs.order.hasError?(this.formHasError=!0,this.$q.notify({type:"warning",message:"请输入快递公司以及快递单号",position:"top",closeBtn:"我了解了"})):(this.$q.notify({icon:"done",color:"positive",message:"获取成功"}),this.getExpressInfo())}}),mounted:function(){var e=this;this.$route.query.courier_code?(this.current_carrier={courier_code:this.$route.query.courier_code,courier_name_cn:this.$route.query.courier_name_cn},this.order_num=this.$route.query.tracking_number,this.getExpressInfo().then((function(t){console.log(t),e.$router.push("express")}))):console.log("添加新的快递查询")}},p=f,h=r("2877"),g=r("f09f"),b=r("66e5"),v=r("a370"),y=r("9c40"),q=r("27f9"),k=r("0016"),x=r("ddd8"),C=r("4074"),j=r("4b7e"),S=r("24e8"),O=(r("99af"),r("2b0e")),w=r("b7fa"),E=r("87e8"),Q=r("dde5"),I=O["a"].extend({name:"QTimeline",mixins:[w["a"],E["a"]],provide:function(){return{__timeline:this}},props:{color:{type:String,default:"primary"},side:{type:String,default:"right",validator:function(e){return["left","right"].includes(e)}},layout:{type:String,default:"dense",validator:function(e){return["dense","comfortable","loose"].includes(e)}}},computed:{classes:function(){return"q-timeline--".concat(this.layout," q-timeline--").concat(this.layout,"--").concat(this.side)+(!0===this.isDark?" q-timeline--dark":"")}},render:function(e){return e("ul",{staticClass:"q-timeline",class:this.classes,on:Object(s["a"])({},this.qListeners)},Object(Q["c"])(this,"default"))}}),T=O["a"].extend({name:"QTimelineEntry",inject:{__timeline:{default:function(){console.error("QTimelineEntry needs to be child of QTimeline")}}},mixins:[E["a"]],props:{heading:Boolean,tag:{type:String,default:"h3"},side:{type:String,default:"right",validator:function(e){return["left","right"].includes(e)}},icon:String,avatar:String,color:String,title:String,subtitle:String,body:String},computed:{colorClass:function(){return"text-".concat(this.color||this.__timeline.color)},classes:function(){return"q-timeline__entry--".concat(this.side)+(void 0!==this.icon||void 0!==this.avatar?" q-timeline__entry--icon":"")},reverse:function(){return"comfortable"===this.__timeline.layout&&"left"===this.__timeline.side}},render:function(e){var t,r=Object(Q["d"])(this,"default",[]);if(void 0!==this.body&&r.unshift(this.body),!0===this.heading){var i=[e("div"),e("div"),e(this.tag,{staticClass:"q-timeline__heading-title"},r)];return e("div",{staticClass:"q-timeline__heading",on:Object(s["a"])({},this.qListeners)},!0===this.reverse?i.reverse():i)}void 0!==this.icon?t=[e(k["a"],{staticClass:"row items-center justify-center",props:{name:this.icon}})]:void 0!==this.avatar&&(t=[e("img",{staticClass:"q-timeline__dot-img",domProps:{src:this.avatar}})]);var n=[e("div",{staticClass:"q-timeline__subtitle"},[e("span",Object(Q["c"])(this,"subtitle",[this.subtitle]))]),e("div",{staticClass:"q-timeline__dot",class:this.colorClass},t),e("div",{staticClass:"q-timeline__content"},[e("h6",{staticClass:"q-timeline__title"},Object(Q["c"])(this,"title",[this.title]))].concat(r))];return e("li",{staticClass:"q-timeline__entry",class:this.classes,on:Object(s["a"])({},this.qListeners)},!0===this.reverse?n.reverse():n)}}),$=r("93dc"),N=r.n($),A=Object(h["a"])(p,i,n,!1,null,null,null);t["default"]=A.exports;N()(A,"components",{QCard:g["a"],QItem:b["a"],QCardSection:v["a"],QBtn:y["a"],QInput:q["a"],QIcon:k["a"],QSelect:x["a"],QItemSection:C["a"],QCardActions:j["a"],QDialog:S["a"],QTimeline:I,QTimelineEntry:T})}}]);
//# sourceMappingURL=chunk-2d225058.b459e535.js.map