<template>
	<view style="background-color: #f6f7f6;width: 100%;height: 2000rpx;">
		<view class="backclass">
			<image @click="backindex()" style="cursor:pointer;width:50rpx;height:50rpx;margin: 25rpx;" src="/static/homePage/jiantou.png" mode=""></image>
			
			<uni-view data-v-1fd6d03c="" class="cu-bar fixed square-custom-bg">
				<uni-view data-v-1fd6d03c="" class="content" style="top: 0px;">我的任务</uni-view>
			</uni-view>
			
		</view>
		<view class="welltab">
			<!-- tab选项 -->
			<view class="flex-around" style="border-bottom: 1px solid #E6E6E8;">
				<view v-for="(item, index) in topList" :key="index" style="box-flex: 1;text-align: center;min-width: 25%;"
					:class="[item.default ? 'screen-item-avtive' : 'screen-item']" @click="changeTabs(item)">{{ item.name
					}}</view>
			</view>
			<!-- 列表 -->
			<view v-for="(item,index) in list" :key="item.title" @click="itemClick(key)" class="line">
					<text :class="item.one==''?'noneclass':'textHellow'" style="color: #696969;display: block;width: 80%;">{{item.one}}\n</text>
					<!-- <image class="imageStype" src="/static/logo.png"></image> -->
					<text class="textHellow" style="color:#d16ca5;display: block;width: 60%;margin-bottom: 40rpx;">{{item.two}}\n</text>
						<text class="textHellow" style="display: flex;color:#696969;font-size: 26rpx;line-height:60rpx;"><text class="textHellow browclas"></text>等待广告商确认付款合作
					</text>
					<!-- <text class="textHellow" style="color: #b0b1b0;font-size: 24rpx;">收益</text><text class="textHellow" style="color: #b0b1b0;margin-left: 35%;font-size: 24rpx;">剩余预算</text> -->
					<!-- <view class="joinhands">立即合作</view> -->
			</view>
		</view>
		<text class="showclas">{{showlist?'暂无更多数据～':''}}</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				status:"",
				list:[{"one":'快手-创作任务-种草广告-推广合作-快手-创作任务',
				"two":'粉丝10000000000000000000000000000000000000000+',
				'five':"98%","three":"2002222220sssss-100222222222220(cyn)"}],
				showlist:true,
				otherlist:[{"one":'快手-创作任务-种草广告-推广合作-快手-创作任务',
				"two":'粉丝10000000000000000000000000000000000000000+',
				'five':"98%","three":"2002222220sssss-100222222222220(cyn)"}],
				topList: [{
					name: '全部',
					default: true,
					// default: false,
					id: 0
					}, {
						name: '等待合作',
						default: false,
						// default: true,
						id: 1
					}, {
						name: '合作中',
						default: false,
						// default: true,
						id: 2
					},{
						name: '完成合作',
						default: false,
						// default: true,
						id: 3
					}],
					
			}	
		},
		// 初始化调用接口
		onLoad(){
			console.log(this.list)
			// this.list=
			
		},
		methods:{
			// 获取数据
			// getlist(){
			// 	this.list=
			// },
			
			// 切换tab
			changeTabs(item) {
				uni.showLoading({
					title: '加载中'
				});
				
				setTimeout(function () {
					uni.hideLoading();
				}, 200);
				// this.getlist()
				console.log(item.id)
				if(item.id=='1'){
					this.list=this.otherlist
				}else{
					this.list=[]
				}
				let obj = this.topList.find(v => v.default)
				if (obj) {
					obj.default = false
					item.default = true
				}
				this.status = item.id
				// 	this.getRequestList()
			},
			backindex(){
				uni.reLaunch({
					url:'/pages/index/index',
					delta:1
				})
			}
		}
	}
	
</script>

<style >
	.backclass{
		/* background: linear-gradient(to right,#8ed8d7,#95dad9); */
		background: #6accc8;
		width: 100%;
		height: 100rpx;
		display: flex;
	}
	.cu-bar{
		display: flex;
		align-items: center;
		justify-content: center;
		margin: auto;
		margin-left: 27%;
		color: white;
		font-size: 36rpx;
	}
	.showclas{
		margin-top:20rpx;
		font-size:26rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		color:#b2b2b2;
		font-weight: bolder;
	}
	
	/* 原点 */
	.browclas{
		display: flex;
		float: left;
		width: 20rpx;
		height: 20rpx;
		/* margin-top: 10rpx; */
		border-radius: 20rpx;
		background: #6accc8;
		/* padding-top: 10rpx; */
	}
	/* 数据 */
	.line{
		width: 94%;
		margin: 20rpx;
		/* background:linear-gradient(to bottom,#ecfffb,#fdfffd); */
		/* box-shadow: pink; */
		border: 1rpx;
		box-shadow: 1rpx 1rpx 1rpx 1rpx #d7d9df;
		/* border-color:white ; */
		background: white;
		border-radius: 20rpx;
		padding: 20rpx 0;
		position: relative;
	}
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
		margin-bottom: 150rpx;
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
		white-space: nowrap; /* 确保文本在一行内显示 */
		overflow: hidden; /* 隐藏溢出的内容 */
		text-overflow: ellipsis; /* 使用省略号表示溢出的文本 */
	}
	.noneclass{
		display: none;
		margin-top:-30rpx;
	}
	
	/* tab */
	/* .welltab{
		display: flex;
		
	} */
	.flex-around{
		display: flex;
		background: white;
		/* box-flex: 1;
		text-align: center; */
	}
		/* 点击文字的颜色 */
		.screen-item-avtive {
			position: relative;
			/* box-flex: 1; */
			font-size: 28rpx;
			font-family: PingFang SC, PingFang SC;
			font-weight: bold;
			color: #428AF6;
			letter-spacing: 2rpx;
			padding: 24rpx 0;
		}
		/* 本来展示的颜色 */
		.screen-item {
			font-size: 28rpx;
			font-family: PingFang SC, PingFang SC;
			color: #333;
			letter-spacing: 2rpx;
			padding: 24rpx 0;
		}
		/* 点击的底部线条颜色 */
		.screen-item-avtive::after {
			content: '';
			position: absolute;
			left: 50%;
			bottom: 0;
			height: 4rpx;
			background-color: #428AF6;
			width: 50%;
			transform: translateX(-50%);
			border-radius: 4rpx;
			
			/* // transition: all .5s linear; */
			animation: change 1s linear;
		}
		/* 底部变化 */
		@keyframes change {
			0% {
				width: 50%;
			}
		
			50% {
				width: 100%;
			}
		
			100% {
				width: 50%;
			}
		}
	
</style>
