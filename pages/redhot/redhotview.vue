<template>
	<view class="backclass">
		
	
		<view class="warp">
			<image @click="backindex()" style="cursor:pointer;width:50rpx;height:50rpx;margin: 20rpx;" src="../../static/homePage/jiantou.png" mode=""></image>
			<view class="jianwa">
				<text class="redtext" style="font-size: 70rpx;margin-bottom: 50rpx;">红人热榜\n</text>
				<image src="../../static/logo.png" mode=""></image>
				<text class="redtext">\n{{list.one}}\n</text>
				<text class="redtext">今日收入:{{list.two}}\n</text>
				<text class="redtext" style="margin-bottom: 80rpx;">粉丝量:{{list.three}}\n</text>
			</view>
		<view class="brawclas"></view>
		</view>
	</view>
</template>

<script>
	
	export default {
		components: {
			
		},
		data() {
			return {
				list:{"one":"yuan","two":"7500.00","three":"00"},
			}
		},
		
		methods: {
			backindex(){
				// console.log('ss')
				uni.reLaunch({
					url:'/pages/index/index',
					delta:1
				})
				// uni.navigateBack({
				// 	delta:1
				// })
			},
			
		}
	}
</script>

<style>	
	.backclass{
		background: #f6f6f6;
		/* background:pink; */
		height:2000rpx;
		width:100%;
	}
	.jianwa{
		display: grid;
		place-items: center; 
		
	}
	.jiantouclass{
		width: 30rpx;
		height: 20rpx;
		margin: 20rpx;
	}
	.warp{
		background: linear-gradient(to right,#9ed9da,#7bccc9);
		/* height: calc(100% - 80rpx); */
		position: relative;
		/* background: #f6f6f6; */
	}
		
	.warp image{
		width: 100rpx;
		height: 100rpx;
	}
	.redtext{
		color: white;
		font-size: 34rpx;
		margin-bottom: 20rpx;
	}
	.brawclas{
		width: 100%;
		background: white;
		height: 80rpx;
		border-radius:30rpx;
		margin-top: -30rpx;
		position: absolute;
	}
</style>
