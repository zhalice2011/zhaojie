webpackJsonp([1],{"+cgv":function(t,e){},"3f40":function(t,e){},"4qOc":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),o=n("zL8q"),l=n.n(o),r=(n("tvR6"),{render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]});var s=n("VU/8")({name:"App"},r,!1,function(t){n("gsu9")},null,null).exports,a=n("/ocq"),c=n("mvHQ"),u=n.n(c),m=n("Dd8w"),d=n.n(m),f=n("G0J2"),p=n.n(f),v=n("e6ea");Date.prototype.Format=function(t){var e={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var n in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),e)new RegExp("("+n+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[n]:("00"+e[n]).substr((""+e[n]).length)));return t};var h={data:function(){return{infoForm:{title:"",subTitle:"",time:(new Date).Format("yyyy-MM-dd"),start:"",end:"",endTime:""},content:[],editorOption:{modules:{toolbar:[["image"]]}},rules:{title:[{required:!0,message:"请输入标题",trigger:"blur"}]}}},computed:{editor:function(){return this.$refs.myQuillEditor.quill}},created:function(){},methods:{onEditorReady:function(t){},delContent:function(t){this.content.splice(t,1)},onAddTXT:function(){this.content.push({type:"text",text:""})},onAddTitle:function(){this.content.push({type:"subheading",subheading:""})},onEditorChange:function(t){var e=t.html.match(/<img.*?(?:>|\/>)/gi),n=e[e.length-1].match(/src=[\'\"]?([^\'\"]*)[\'\"]?/i);this.content.push({type:"image",src:n[1]})},onSubmit:function(){var t=this;this.$refs.infoForm.validate(function(e){if(e){var n=d()({},t.infoForm,{content:t.content});console.log("parmas :",n),t.$axios.post("/add",n).then(function(t){200==t.errCode&&alert("上传成功",u()(n))}).catch(function(t){return alert(u()(n))})}})}},components:{quillEditor:f.quillEditor,quillRedefine:v.quillRedefine}},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-row",{staticClass:"warp"},[n("el-row",{staticClass:"main-title",attrs:{gutter:20}},[n("el-col",{attrs:{span:6}},[n("i",{staticClass:"title-mark"}),t._v(" "),n("h2",{staticClass:"title-txt"},[t._v("文章编辑")])]),t._v(" "),n("el-col",{attrs:{span:18}})],1),t._v(" "),n("el-col",{staticClass:"warp-main",attrs:{span:24}},[n("el-form",{ref:"infoForm",attrs:{model:t.infoForm,rules:t.rules,"label-width":"120px"}},[n("el-form-item",{attrs:{label:"标题",prop:"title"}},[n("el-input",{model:{value:t.infoForm.title,callback:function(e){t.$set(t.infoForm,"title",e)},expression:"infoForm.title"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"副标题",prop:"subTitle"}},[n("el-input",{model:{value:t.infoForm.subTitle,callback:function(e){t.$set(t.infoForm,"subTitle",e)},expression:"infoForm.subTitle"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"时间",prop:"time"}},[n("el-input",{model:{value:t.infoForm.time,callback:function(e){t.$set(t.infoForm,"time",e)},expression:"infoForm.time"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"开头",prop:"start"}},[n("el-input",{model:{value:t.infoForm.start,callback:function(e){t.$set(t.infoForm,"start",e)},expression:"infoForm.start"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"结尾",prop:"end"}},[n("el-input",{model:{value:t.infoForm.end,callback:function(e){t.$set(t.infoForm,"end",e)},expression:"infoForm.end"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"底部时间",prop:"endTime"}},[n("el-input",{model:{value:t.infoForm.endTime,callback:function(e){t.$set(t.infoForm,"endTime",e)},expression:"infoForm.endTime"}})],1),t._v(" "),t._l(t.content,function(e,i){return t.content?n("div",[e.src?n("el-form-item",{attrs:{label:"图片"}},[n("div",{staticClass:"flex"},[n("img",{staticClass:"rendersrc",attrs:{src:e.src}}),t._v(" "),n("el-button",{staticClass:"del",on:{click:function(e){t.delContent(i)}}},[t._v("删除")])],1)]):t._e(),t._v(" "),void 0!==e.text?n("el-form-item",{attrs:{label:"段落"}},[n("div",{staticClass:"flex"},[n("el-input",{attrs:{type:"textarea"},model:{value:e.text,callback:function(n){t.$set(e,"text",n)},expression:"item.text"}}),t._v(" "),n("el-button",{staticClass:"del",on:{click:function(e){t.delContent(i)}}},[t._v("删除")])],1)]):t._e(),t._v(" "),void 0!==e.subheading?n("el-form-item",{attrs:{label:"小标题"}},[n("div",{staticClass:"flex subheading"},[n("el-input",{model:{value:e.subheading,callback:function(n){t.$set(e,"subheading",n)},expression:"item.subheading"}}),t._v(" "),n("el-button",{staticClass:"del",on:{click:function(e){t.delContent(i)}}},[t._v("删除")])],1)]):t._e()],1):t._e()}),t._v(" "),n("div",{staticClass:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:t.onAddTXT}},[t._v("添加段落")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.onAddTitle}},[t._v("添加小标题")]),t._v(" "),n("div",{staticClass:"img "},[t._v("\n                添加图片\n                "),n("quill-editor",{ref:"newEditor",attrs:{options:t.editorOption},on:{change:function(e){t.onEditorChange(e)}}})],1)],1),t._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("最终确认提交")])],1)],2)],1)],1)],1)},staticRenderFns:[]};var g=n("VU/8")(h,b,!1,function(t){n("e+UV")},null,null).exports;i.default.use(a.a);var _=new a.a({routes:[{path:"/",name:"Editor",component:g}]}),x=n("mtWM"),F=n.n(x);n("3f40"),n("4qOc"),n("+cgv");i.default.use(p.a),i.default.use(l.a),i.default.config.productionTip=!1,i.default.prototype.$axios=F.a,new i.default({el:"#app",router:_,components:{App:s},template:"<App/>"})},"e+UV":function(t,e){},gsu9:function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.6b944cb2565225e7927b.js.map