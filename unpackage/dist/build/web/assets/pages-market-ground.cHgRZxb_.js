import{k as e,r as t,o as s,c as a,w as l,i as o,a as i,l as n,d as c,e as r,F as d,b as u,I as h,h as p,n as f,t as g,f as y}from"./index-D0AnGzgb.js";import{C as w}from"./CustomTabBar.CCTJl-S0.js";import{_ as b}from"./logo.rRFpfryy.js";import{_ as m}from"./_plugin-vue_export-helper.BCo6x5W8.js";const x=m({components:{CustomTabBar:w},props:{currentTab:{type:String,required:!0}},computed:{},data:()=>({list:[{one:"快手-创作任务-种草广告-推广合作-快手-创作任务",two:"粉丝10000000000000000000000000000000000000000+",five:"98%",three:"2002222220sssss-100222222222220(cyn)"},{one:"",two:"粉丝1000000+",three:"2000-1000(cyn)"},{one:"合作-任务",five:"999%",two:"粉丝1000000+",three:"2000-1000(cyn)"},{one:"合作-任务",two:"粉丝1000000+",three:"2000-1000(cyn)"}],where:'"article_status" == 1',keyword:[{one:"快手-创作任务-种草广告-推广合作-快手-创作任务",two:"粉丝10000000000000000000000000000000000000000+",five:"98%",three:"2002222220sssss-100222222222220(cyn)"},{one:"",two:"粉丝1000000+",three:"2000-1000(cyn)"},{one:"合作-任务",five:"999%",two:"粉丝1000000+",three:"2000-1000(cyn)"},{one:"合作-任务",two:"粉丝1000000+",three:"2000-1000(cyn)"}],showRefresh:!1,listHight:0}),watch:{},methods:{racallChange(e){console.log(e.detail.value),console.log(this.fuzzySearch(this.list,e.detail.value)),""==e.detail.value?this.list=this.keyword:this.list=this.fuzzySearch(this.list,e.detail.value)},fuzzySearch(e,t){const s=new RegExp(t,"gi");return e.filter((e=>s.test(e.one)))},switchTab(t){const s=t.currentTarget.dataset.path;e({url:s})}}},[["render",function(e,w,m,x,v,k){const _=t("searchInput"),z=h,C=p,H=y,j=o;return s(),a(j,{class:"pages"},{default:l((()=>[i(j,{class:"backclass"},{default:l((()=>[i(_,{style:{width:"100%",height:"200rpx","background-color":"black"}}),n("uni-view",{"data-v-1fd6d03c":"",class:"cu-custom",style:{height:"45px"}},[n("uni-view",{"data-v-1fd6d03c":"",class:"cu-bar fixed square-custom-bg",style:{height:"45px","padding-top":"0px"}},[n("uni-view",{"data-v-1fd6d03c":"",class:"content",style:{top:"0px"}},"商单广场")])]),n("uni-view",{"data-v-1fd6d03c":"",class:"search flex align-center"},[n("uni-image",{"data-v-1fd6d03c":"",style:{width:"40rpx",height:"40rpx"}},[n("div",{style:{"background-image":'url("/static/homePage/sousuo.ba62fa34.png")',"background-size":"100% 100%","background-repeat":"no-repeat",width:"40rpx",height:"40rpx"}}),n("uni-resize-sensor",null,[n("div",null,[n("div")]),n("div",null,[n("div")])]),n("img",{src:"/takeOrders/static/img/sousuo.ba62fa34.png",draggable:"false",style:{width:"100%",height:"100%"}})]),n("uni-input",{"data-v-1fd6d03c":"",enterkeyhint:"search",autocomplete:"off",class:"uni-input-input",style:{"margin-left":"20rpx"}},[n("div",{class:"uni-input-wrapper"},[i(z,{maxlength:"15",onBlur:w[0]||(w[0]=e=>k.racallChange(e)),step:"",id:"inputId",placeholder:"請輸入商單標題",enterkeyhint:"done",autocomplete:"off",type:"text",class:"uni-input-input",style:{"margin-top":"4rpx"}})])])]),(s(!0),c(d,null,r(v.list,((t,o)=>(s(),a(j,{key:t.title,onClick:w[1]||(w[1]=t=>e.itemClick(e.key)),class:f(o==v.list.length-1?"botclass":"line")},{default:l((()=>[i(C,{class:f(""==t.one?"noneclass":"textHellow"),style:{color:"#696969",display:"block",width:"80%"}},{default:l((()=>[u(g(t.one)+"\\n",1)])),_:2},1032,["class"]),i(H,{class:"imageStype",src:b}),i(C,{class:"textHellow",style:{color:"#70c6c1",display:"block",width:"60%"}},{default:l((()=>[u(g(t.two)+"\\n",1)])),_:2},1024),i(C,{class:"textHellow",style:{color:"#d16ca5","font-weight":"bold",display:"block",width:"38%"}},{default:l((()=>[u(g(t.three)+" ",1),i(C,{class:"textHellow",style:{color:"black","font-weight":"800",position:"absolute",left:"47%",bottom:"50rpx"}},{default:l((()=>[u(g(t.five)+"\\n",1)])),_:2},1024)])),_:2},1024),i(C,{class:"textHellow",style:{color:"#b0b1b0","font-size":"24rpx"}},{default:l((()=>[u("收益")])),_:1}),i(C,{class:"textHellow",style:{color:"#b0b1b0","margin-left":"35%","font-size":"24rpx"}},{default:l((()=>[u("剩余预算")])),_:1}),i(j,{class:"joinhands"},{default:l((()=>[u("立即合作")])),_:1})])),_:2},1032,["class"])))),128)),i(j,{class:"hitclas"},{default:l((()=>[i(C,null,{default:l((()=>[u("目前数据量过大，只能显示前11名的商单信息")])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-52ab6fa0"]]);export{x as default};
