<template>
	<view class="content">
		<!-- <view>
			<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="120">
				<view id="demo1" class="scroll-view-item_H uni-bg-red"><image class="image1" click="" src="../../static/homePage/title.jpg"></image></view>
				<view id="demo2" class="scroll-view-item_H uni-bg-green"><image class="image1" click="" src="../../static/homePage/title.jpg"></image></view>
				<view id="demo3" class="scroll-view-item_H uni-bg-blue"><image class="image1" click="" src="../../static/homePage/title.jpg"></image></view>
			</scroll-view>
		</view> -->
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular indicator-dots="true" autoplay="true" interval="3000"
				duration="500">
				<swiper-item>
					<view class="swiper-item uni-bg-red">
						<image class="image1" click="" src="../../static/homePage/title.jpg"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-green">
						<image class="image1" click="" src="../../static/homePage/title.jpg"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-blue">
						<image class="image1" click="" src="../../static/homePage/title.jpg"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		
		<view class="text-area uni-padding-wrap uni-common-mt">
			<view hover-class="other-navigator-hover" class="bannertit" style="background:linear-gradient(to right,#faf6ef,#faf4e7)" @click="redhotclick()">
				
				<router-link :to="{'path':'/pages/redhot/redhotview'}">
					<text class="bannertext">红人热榜</text> 
				</router-link>
				<image class="smallicon" src="../../static/homePage/red1.jpg"></image>
			</view>
			<view class="bannertit" style="background:linear-gradient(to right,#e0f4ec,#eafafd);margin-left: 10rpx;" @click="myviewclick()">
				
				<router-link to="/pages/myTask/mytask/mytask"><text class="bannertext">我的任务</text></router-link>
				 <image class="smallicon" src="../../static/homePage/view2.jpg"></image>
			</view>
			
		</view>
		<view class="text-area uni-padding-wrap uni-common-mt">
			<view class="bannertit" style="background:linear-gradient(to right,#f1f2fa,#f1f3fb);" @click="hintclick()">
				<router-link to="/pages/notice/noticeindex">
					<text class="bannertext">公告提示</text> 
				</router-link>
				<image class="smallicon" src="../../static/homePage/hint3.jpg"></image>
			</view>
			<view class="bannertit" style="background:linear-gradient(to right,#e0f3f5,#eaf5fa);margin-left: 10rpx;" @click="serviceclick()">
				<router-link to="/pages/notice/noticeindex">
					<text class="bannertext">在线客服</text> 
				</router-link>
				<image class="smallicon" src="../../static/homePage/service4.jpg"></image>
			</view>
		</view>
	
		<!-- 商单推荐 -->
		<view class="section-box">
			<text class="decoration"></text>
			<text class="section-text">商单推荐</text>
		</view>
		
		
		<!-- 数据 -->
		<view v-for="(item,index) in list" :key="item.title" @click="itemClick(key)" :class="index==list.length-1?'botclass':'line'">
			<!-- <view> -->
			
				<text :class="item.one==''?'noneclass':'textHellow'" style="color: #696969;display: block;width: 80%;">{{item.one}}\n</text>
				<image class="imageStype" src="/static/logo.png"></image>
				<text class="textHellow" style="color: #70c6c1;display: block;width: 60%;">{{item.two}}\n</text>
				<text class="textHellow" style="color: #d16ca5;font-weight: bold;display: block;width: 38%;">{{item.three}}
					<text class="textHellow" style="color:black;font-weight: 800;position: absolute;left: 47%;bottom: 60rpx;">{{item.five}}\n</text>
				</text>
				<text class="textHellow" style="color: #b0b1b0;font-size: 24rpx;">收益</text><text class="textHellow" style="color: #b0b1b0;margin-left: 35%;font-size: 24rpx;">剩余预算</text>
			<!-- </view> -->
				<view class="joinhands">立即合作</view>
		</view>
		
		<!-- <view class="tab-bar">
			<view v-for="(tab, index) in tabs" :key="index" @click="switchTab(tab)">
			  <image :src="currentTab === tab.pagePath ? tab.selectedIconPath : tab.iconPath" mode="aspectFit"></image>
			  <text :class="currentTab === tab.pagePath ? 'active' : ''">{{ tab.text }}</text>
			</view>
		  </view> -->
		<!-- <view>
			<custom-tab-bar :selected="0" />
		</view> -->
	</view>
</template>

<script>
	import CustomTabBar from "@/components/CustomTabBar.vue"
	export default {
		components: {
			CustomTabBar,
		},
		 props: {
		     currentTab: {
		       type: String,
		       required: true
		     }
		   },
		data() {
			return {
				// title: ''
				list:[{"one":'快手-创作任务-种草广告-推广合作-快手-创作任务',"two":'粉丝10000000000000000000000000000000000000000+','five':"98%","three":"2002222220sssss-100222222222220(cyn)"},{"one":'',"two":'粉丝1000000+',"three":"2000-1000(cyn)"},{"one":'合作-任务',"five":'999%',"two":'粉丝1000000+',"three":"2000-1000(cyn)"},{"one":'合作-任务',"two":'粉丝1000000+',"three":"2000-1000(cyn)"}]
			}
		},
		// onLoad(option) {
		//     this.url = decodeURIComponent(option.url);
		// },
		mounted() {
		    console.log(this.$router); // 在这里使用 this.$router 应该没有问题
		},
		onHide(){
			// var page=getCurrentPages().pop()
			// if(page==undefined || page==null){
			// 	return;
			// }
			// page.onLoad()
			// this.getTablelist()
			// location.reload()
			// url(newUrl) {
			  // if (newUrl === '') {
			   
			  // }
			// },
		},
		// 获取数据信息
		 onTabItemTap(e) {
			 location.reload()
			 uni.showToast({
			   title: '加载中',
			   icon: 'loading',
			   duration: 100,
			 })
			 // console.log(e)
		  //     this.url = '';
		  //     // 异步重新设置 src，相当于刷新 web-view
		  //     setTimeout(() => {
		  //       this.url = 'https://www.baidu.com';
		  //     }, 100);
		    },
		computed: {
		    tabs() {
		      return [
		        {
		          pagePath: '/pages/index/index',
		          iconPath: '/static/homePage/red1.jpg',
		          // selectedIconPath: '/static/homePage/red1.jpg',
		          text: '首页'
		        },
		        {
		          pagePath: '/pages/market/ground',
		          iconPath: '/static/homePage/red1.jpg',
		          // selectedIconPath: '/static/images/commonUserTabbar/order_.jpg',
		          text: '商单广场'
		        },
				{
					pagePath: "/pages/market/ground",
					text: "在线客服",
					iconPath: "/static/homePage/kefu.jpg",
					selectedIconPath: "/static/homePage/kefuclick.jpg",
					// serach:1
				},
		        {
		          pagePath: '/pages/index/index',
		          iconPath: '/static/homePage/red1.jpg',
		          // selectedIconPath: '/static/images/commonUserTabbar/mine_.jpg',
		          text: '我的'
		        }
		      ];
		    }
		  },
		methods: {
			
			// 获取数据信息
			 // onTabItemTap(e) {
				//  console.log(e)
			 //      this.url = '';
			 //      // 异步重新设置 src，相当于刷新 web-view
			 //      setTimeout(() => {
			 //        this.url = 'https://www.baidu.com';
			 //      }, 100);
			 //    },
			// openExternalUrl() {
			//   // 假设你有一个网页链接
			//   const url = 'https://ask.dcloud.net.cn'';
			//   // 使用uni的API打开这个链接
			//   uni.navigateTo({
			// 	url: '/pages/inde/index?url=' + encodeURIComponent(url)
			//   });
			// },
			// switchTab(e) {
			//   const data = e.currentTarget.dataset
			//   const url = data.path
			//   wx.switchTab({ url })
			// },
			// switchTab(tab) {
			//       uni.redirectTo({
			//         url: tab.pagePath,
			// 		delta:1
			//       });
			//     },
			// 红人热榜
			redhotclick(){
				console.log(this.$router)
				this.$router.push( '/pages/redhot/redhotview' )
				// uni.navigateTo({  
				//     url: '/pages/redhot/redhotview',
				// 	delta: 1 
				// });
				console.log(this.$router.url)
			},
			// 我的任务
			myviewclick(){
				this.$router.push( '/pages/myTask/mytask/mytask' )
				console.log('b')
			},
			// 公告提示
			hintclick(){
				this.$router.push( '/pages/notice/noticeindex' )
				console.log('c')
			},
			// 在线客服
			serviceclick(){
				// this.$router.push( '/pages/redhot/redhotview' )
				console.log('d')
			},
			
		}
	}
</script>

<style>
	.uni-margin-wrap {
			/* width: rpx; */
			width: 100%;
		}
		.swiper {
			height: 300rpx;
		}
		.swiper-item {
			display: block;
			height: 300rpx;
			line-height: 300rpx;
			text-align: center;
		}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: #efefef;
		padding: 20rpx 0;
	}
	.content .image1{
		/* top: 20rpx; */
		margin-bottom: 20rpx;
		height: 300rpx;
		border-radius: 10rpx;
		width: 95%;
	}
	/* .scroll-view_H {
		white-space: nowrap;
		width: 100%;
	}
	.scroll-view-item {
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
		font-size: 36rpx;
	}
	.scroll-view-item_H {
		display: inline-block;
		width: 100%;
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
		font-size: 36rpx;
	} */
	
	
	.content .text-area .smallicon{
		width: 80rpx;
		height: 80rpx;
		position: absolute;
		right: 40rpx;
		top: 40rpx;
	}
	.text-area {
		display: flex;
		justify-content: center;
		margin-top: 20rpx;
		width: 100%;
	}
	.content .text-area .bannertit{
		width: 47%;
		position: relative;
		height: 160rpx;
		border-radius: 20rpx 0;
	}
	.content .text-area .bannertext{
		position: absolute;
		left:50rpx;
		top:60rpx;
		color: #525b75;
	}
	
	/* 商单推荐 */
	.section-box{
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 40rpx 20rpx 20rpx 20rpx;
		width: 100%;
		margin-left: 40rpx;
	}
	.decoration{
		width: 10rpx;
		height: 30rpx;
		margin-top: 6rpx;
		/* border-radius: 10px; */
		background-color: #69cdc9;
	}
	.section-text{
		color: #646464;
		font-family: ;
		font-weight: bolder;
		margin-left: 15rpx;
		font-size: 40rpx;
	}
	
	/* 数据 */
	.line{
		width: 94%;
		margin: 20rpx;
		background: white;
		box-shadow: pink;
		border: 1rpx;
		/* border-color: ; */
		border-radius: 20rpx;
		padding: 20rpx 0;
		position: relative;
	}
		/* 数据中的图片 */
	.line .imageStype{
		width: 60rpx;
		height: 60rpx;
		position: absolute;
		right: 30rpx;
		top: 30rpx;
	}
	/* 最后一条数据距离下方位置 */
	.botclass{
		width: 94%;
		margin: 20rpx;
		background: white;
		box-shadow: pink;
		border: 1rpx;
		/* border-color: ; */
		border-radius: 20rpx;
		padding: 20rpx 0;
		position: relative;
		margin-bottom: 60rpx;
	}
	.botclass .imageStype{
		width: 60rpx;
		height: 60rpx;
		position: absolute;
		right: 30rpx;
		top: 30rpx;
	}
	
	.textHellow{
		margin: 20rpx;
		line-height: 40rpx;
		/* width: 100rpx;
		height: 100rpx; */
		/* white-space: pre-wrap;
		word-wrap: break-word; */
		white-space: nowrap; /* 确保文本在一行内显示 */
		overflow: hidden; /* 隐藏溢出的内容 */
		text-overflow: ellipsis; /* 使用省略号表示溢出的文本 */
	}
	.noneclass{
		display: none;
		margin-top:-30rpx;
	}
	.joinhands{
		font-weight: bold;
		padding: 10rpx;
		background: #e365a7;
		width: 140rpx;
		font-size: 24rpx;
		height: 40rpx;
		line-height: 40rpx;
		border-radius: 50rpx 0 0 50rpx;
		text-align: center;
		color: white;
		position: absolute;
		right: 0;
		bottom: 40rpx;
	}
	
	.tab-bar {
	  justify-content: space-around;
	  align-items: center;
	  height: 70rpx;
	  background-color: #f7f7f7;
	  border-top: 1px solid #e6e6e6;
	  position: fixed;
	  bottom: 0;
	  z-index: 999;
	  width: 100%;
	  display: flex;
	  justify-content: space-around;
	  padding-bottom: 30rpx;
	}
	
	.tab-bar view {
	  flex: 1;
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  justify-content: center;
	}
	
	.tab-bar image {
	  width: 40rpx;
	  height: 40rpx;
	  margin-top: 30rpx;
	  /* color: skyblue; */
	}
	
	.tab-bar text {
	  font-size: 20rpx;
	  margin-top: 10rpx;
	  color: skyblue;
	}
	
	.tab-bar text.active {
	  font-weight: bold;
	}

</style>
