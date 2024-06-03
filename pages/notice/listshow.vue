<template>
    <view class="page">
		<view class="backclass">
			<image @click="backindex()" style="cursor:pointer;width:50rpx;height:50rpx;margin: 26rpx;" src="/static/homePage/jiantou.png" mode=""></image>
				<uni-view data-v-1fd6d03c="" class="cu-bar" style="top: 6rpx;"><text>{{this.list.one}}</text></uni-view>			
		</view>
		
       <view style="padding:70rpx 20rpx 40rpx 20rpx;">
            <text class="title">{{this.list.one}}</text>
        </view>
        <view class="text-item"  style="margin-bottom: 60rpx;">
            <text class="tl">{{this.list.tt}}</text>
        </view>
        <view class="text-item"  style="margin-bottom: 120rpx;">
            <text class="tl">{{this.list.rr}}</text>
        </view>
        <view class="text-item">
            <text class="tl">{{this.list.five}}</text>
        </view>
       <!-- <view class="text-item flex-r">
            <text class="tl hl" @click="openprotocol">《用户协议》</text>
            <text class="tl"> 和 </text>
            <text class="tl hl" @click="openPrivacyPolicy">《隐私政策》</text>
        </view>
        <view class="text-item">
            <text class="tl">以便了解我们收集、使用、共享、存储信息的情况，以及对信息的保护措施。</text>
        </view>
        <view class="text-item">
            <text class="service">如果你同意请点击下面的按钮以接受我们的服务</text>
        </view> -->
       <!-- <view class="text-item confirm">
            <button class="btn-privacy" type="primary" @click="agree">同意</button>
			<button class="btn-privacy btn-disagree" @click="disagree">暂不使用</button>
        </view> -->
        <!-- <view class="exit-area">
            
        </view> -->
    </view>
</template>

<script>
	// import QRCode from 'qrcode'
	 
	
// import config from '@/uni-starter.config.js';
// const { about } = config
    export default {
        data() {
            return {
				// title:"",
				list:{},
				
            }
        },
        onLoad() {
			console.log(this.$route.query)
			// this.list=this.$route.query
			// this.$router.go(0)
			
        },
		onShow(){
			this.getlisttab()
		},
		// onUnload(){
		// 	this.$router.go(0)
		// },
        // onBackPress() {
        //     return !this._canBack;
        // },
        methods: {
			getlisttab(){
				// this.$router.go(0)
				this.list=this.$route.query
				console.log(this.list)
			},
			backindex(){
				this.$router.push('/pages/notice/noticeindex')
				// this.$router.go(0)
			},
        }
    }
</script>

<style>
    .page {
        /* padding: 0 20px; */
		background-color: #f6f7f6;
		width: 100%;
		height: 2000rpx;
		/* display: flex; */
    }
	.backclass{
		background: #6accc8;
		width: 100%;
		position: relative;
		
	}
	.cu-bar{
		position: absolute;
		margin: 22rpx;
		/* bottom: 20rpx; */
		left: 34%;
		color: white;
		font-size: 36rpx;
	}
  .title {
	  /* margin-top: 20rpx; */
      font-size: 30rpx;
      line-height: 30rpx;
	  font-weight: 600;
      margin-bottom: 20rpx;
	  color: #666666;
  }
  
	.tl{
		color: #666666;
		font-size: 24rpx;
	}
  
  .text-item {
	  padding: 0 20rpx;
      margin-bottom: 5px;
  }
  
</style>