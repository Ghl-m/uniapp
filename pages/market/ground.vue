<template>
	<view class="pages">
		<view class="backclass">
			<searchInput style="width:100%;height:200rpx;background-color: black;"></searchInput>
			<uni-view data-v-1fd6d03c="" class="cu-custom" style="height: 45px;">
			<uni-view data-v-1fd6d03c="" class="cu-bar fixed square-custom-bg" style="height: 45px; padding-top: 0px;">
				<uni-view data-v-1fd6d03c="" class="content" style="top: 0px;">商单广场</uni-view>
			</uni-view></uni-view>
			
			<!-- 搜索 -->
			<uni-view data-v-1fd6d03c="" class="search flex align-center">
				<uni-image data-v-1fd6d03c="" style="width: 40rpx; height: 40rpx;">
					<div style="background-image: url(&quot;/static/homePage/sousuo.ba62fa34.png&quot;); background-size: 100% 100%; background-repeat: no-repeat;width: 40rpx;height: 40rpx;"></div>
					<uni-resize-sensor><div><div></div></div><div><div></div></div></uni-resize-sensor><img src="/static/img/sousuo.ba62fa34.png" draggable="false" style="width: 100%;height: 100%;"></uni-image>
					<uni-input data-v-1fd6d03c="" enterkeyhint="search" autocomplete="off" class="uni-input-input" style="margin-left: 20rpx;"><div class="uni-input-wrapper">
					<input maxlength="15" @blur="racallChange($event)" step="" id="inputId" placeholder="請輸入商單標題" enterkeyhint="done" autocomplete="off" type="text" class="uni-input-input" style="margin-top: 4rpx;"><!----></div>
				</uni-input></uni-view>

		<!-- 数据 -->
		<view v-for="(item,index) in list" :key="item.title" @click="itemClick(key)" :class="index==list.length-1?'botclass':'line'">
			<!-- <view> -->
				<text :class="item.one==''?'noneclass':'textHellow'" style="color: #696969;display: block;width: 80%;">{{item.one}}\n</text>
				<image class="imageStype" src="/static/logo.png"></image>
				<text class="textHellow" style="color:#70c6c1;display: block;width: 60%;">{{item.two}}\n</text>
				<text class="textHellow" style="color:#d16ca5;font-weight: bold;display: block;width: 38%;">{{item.three}}
					<text class="textHellow" style="color:black;font-weight: 800;position: absolute;left: 47%;bottom: 50rpx;">{{item.five}}\n</text>
				</text>
				<text class="textHellow" style="color: #b0b1b0;font-size: 24rpx;">收益</text><text class="textHellow" style="color: #b0b1b0;margin-left: 35%;font-size: 24rpx;">剩余预算</text>
			<!-- </view> -->
				<view class="joinhands">立即合作</view>
		</view>
		<view class="hitclas">
			<text>目前数据量过大，只能显示前11名的商单信息</text>
			
		</view>
		<!-- tabbar -->
		<!-- <view>
			<custom-tab-bar :selected="1" />
		</view> -->
		
	</view>
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
		computed: {
			
			// inputPlaceholder(e) {
			// 	if (uni.getStorageSync('CURRENT_LANG') == "en") {
			// 		return 'Please enter the search content'
			// 	} else {
			// 		return '请输入搜索内容'
			// 	}
			// },
		},
		data() {
			return {
				list:[{"one":'快手-创作任务-种草广告-推广合作-快手-创作任务',
				"two":'粉丝10000000000000000000000000000000000000000+',
				'five':"98%","three":"2002222220sssss-100222222222220(cyn)"},
				{"one":'',"two":'粉丝1000000+',"three":"2000-1000(cyn)"},
				{"one":'合作-任务',"five":'999%',"two":'粉丝1000000+',
				"three":"2000-1000(cyn)"},{"one":'合作-任务',"two":'粉丝1000000+',
				"three":"2000-1000(cyn)"}],
				where: '"article_status" == 1',
				keyword: [{"one":'快手-创作任务-种草广告-推广合作-快手-创作任务',
				"two":'粉丝10000000000000000000000000000000000000000+',
				'five':"98%","three":"2002222220sssss-100222222222220(cyn)"},
				{"one":'',"two":'粉丝1000000+',"three":"2000-1000(cyn)"},
				{"one":'合作-任务',"five":'999%',"two":'粉丝1000000+',
				"three":"2000-1000(cyn)"},{"one":'合作-任务',"two":'粉丝1000000+',
				"three":"2000-1000(cyn)"}],
				showRefresh: false,
				listHight: 0
			}
		},
		watch: {
	
		},
		
		methods: {
			// 搜索框 走接口
			racallChange(val){
				
				console.log(val.detail.value)
				console.log(this.fuzzySearch(this.list,val.detail.value))
				
				if(val.detail.value==''){
					this.list=this.keyword
				}else{
					this.list=this.fuzzySearch(this.list,val.detail.value)
				}
			},
			// 模糊查询
			fuzzySearch(dataArray, searchTerm) {
			  const regex = new RegExp(searchTerm, 'gi'); // 'gi' 表示全局搜索和忽略大小写
			  return dataArray.filter(item => regex.test(item.one));
			},
			switchTab(e) {
			  const data = e.currentTarget.dataset
			  const url = data.path
			  wx.switchTab({ url })
			},
			// searchClick(e) { //点击搜索框
			// 	uni.hideKeyboard();
			// 	uni.navigateTo({
			// 		url: '/pages/list/search/search',
			// 		animationType: 'fade-in'
			// 	});
			// },
		},
	
	}
</script>

<style>
	.backclass{
		background: linear-gradient(to bottom,#8ed8d7,white);
		width: 100%;
		height: 600rpx;
		/* display: ; */
		/* -bottom: 300rpx; */
		/* position: relative; */
		/* padding-bottom: 200rpx; */
	}
	.pages {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: #f6f7f6;
		/* padding: 20rpx; */
		/* height: calc(100% - 20rpx); */
		/* padding: 0 0 300rpx 0; */
	}
	/* 数据 */
	.line{
		width: 94%;
		margin: 20rpx;
		background:linear-gradient(to bottom,#ecfffb,#fdfffd);
		box-shadow: 1px 1px 1px 1px #eee;
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
		background:linear-gradient(to bottom,#ecfffb,#fdfffd);
		box-shadow: 1px 1px 1px 1px #eee;
		border: 1rpx;
		/* border-color: ; */
		border-radius: 20rpx;
		padding: 20rpx 0;
		position: relative;
		margin-bottom: 20rpx;
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
		line-height: 30rpx;
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
		padding: 8rpx;
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
		bottom: 30rpx;
	}
	
	.hitclas{
		/* position: absolute; */
		padding-bottom: 160rpx;
		/* position: absolute; */
		color: #b2b2b2;
		/* display: flex; */
		/* color: black; */
		display: block;
		font-size: 26rpx;
		font-weight: bolder;
		margin-bottom: 140rpx;
		/* margin-top: 20rpx; */
		/* margin-left:15%; */
		text-align: center;
		/* justify-content: center;
		align-items: center; */
	}
	
	
	
	/* 导航 */
	.content{
		color: white;
		padding: 26rpx 0;
		font-weight: bold;
		text-align: center;
		box-shadow: 0 1rpx 3rpx rgba(0, 0, 0, .1);
		/* border-bottom: 1px solid #eee; */
	}
	.search {
		display: flex;
		/* text-align: left; */
	    width: calc(100% - 110rpx);
	    margin: 15px;
	    background: #fff;
	    border-radius: 8px;
	    border: 1px solid #36cfc9;
	    padding: 10px 15px;
	    position: relative;
	    z-index: 10;
	}
	
	/* #ifndef APP-NVUE */
	/* view {
		display: flex;
		box-sizing: border-box;
		flex-direction: column;
	} */
	/* #endif */
	/* .pages {
		background-color: #FFFFFF;
	} */

	/* .avatar {
		width: 200rpx;
		height: 200rpx;
		margin-right: 10rpx;
	} */

	/* .main {
		justify-content: space-between;
		flex: 1;
	}

	.title {
		font-size: 16px;
	}

	.info {
		flex-direction: row;
		justify-content: space-between;
	}

	.author,
	.last_modify_date {
		font-size: 14px;
		color: #999999;
	} */

	.uni-search-box {
		background-color: #FFFFFF;
		position: sticky;
		height: 50px;
		top: 0;
		left: 0;
		/* #ifndef APP-PLUS */
		z-index: 9;
		/* #endif */
		/* #ifdef MP-WEIXIN */
		width: 580rpx;
		/* #endif */
	}
	.cover-search-bar {
		height: 50px;
		position: relative;
		top: -50px;
		margin-bottom: -50px;
		/* #ifndef APP-NVUE */
		z-index: 999;
		/* #endif */
	}
</style>
