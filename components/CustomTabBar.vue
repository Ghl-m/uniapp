<template>
	<view class="tabBar">
		<view class="cont">
			<block v-for="(item,index) in list" :key="index" class="cont-item">
				<view @click="switchTab(item.pagePath)"
					:class="{'search': item.search ? true : false, 'item': !item.search, 'on': selected === index ? true : false, 'off': selected != index ? true : false}">
					<image :src="selected==index?item.selectedIconPath:item.iconPath">
					</image>
					<view class="selectedColor">{{item.text}}</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		selected: Number
	},
	data() {
		return {
			color: "#fff",
			// selectedColor: "#00BCD4",
			list: [{
					pagePath: "/pages/index/index",
					text: "首页",
					iconPath: "/static/homePage/shouyeclick.jpg",
					selectedIconPath: "/static/homePage/shouye.jpg"
				},
				{
					pagePath: "/pages/market/ground",
					text: "商单广场",
					iconPath: "/static/homePage/ground.jpg",
					selectedIconPath: "/static/homePage/groundclick.jpg",
					// serach:1
					
				},
				{
					pagePath: "/pages/market/ground",
					text: "在线客服",
					iconPath: "/static/homePage/kefu.jpg",
					selectedIconPath: "/static/homePage/kefuclick.jpg",
					// serach:1
				},
				{
					pagePath: "/pages/myInfo/myInfo",
					text: "我的",
					iconPath: "/static/homePage/wode.jpg",
					selectedIconPath: "/static/homePage/wodeclick.jpg"
				}
			]
		}
	},
	methods: {
		switchTab(url) {
			uni.switchTab({
				url
			})
		}
	}
}
</script>

<style lang="scss">
.tabBar {
	z-index: 100;
	width: 100%;
	position: fixed;
	bottom: 0;
	left: 0;
	font-size: 28rpx;
	background-color: #fff;
	color: #636363;
	// border-radius: 50rpx 50rpx 0px 0px;
}	
.cont {
	z-index: 0;
	height: calc(100rpx + env(safe-area-inset-bottom) / 2);
	// padding-bottom: 30rpx;
	display: flex;
	justify-content: space-around;
	.item {
		font-size: 24rpx;
		position: relative;
		width: 15%;
		text-align: center;
		padding: 0;
		display: block;
		height: auto;
		line-height: 1;
		margin: 0;
		background-color: inherit;
		overflow: initial;
		justify-content: center;
		align-items: center;
		padding-top: 20rpx;
	}
	.item:first-child {
		// right: 45rpx;
	}
	.item:last-child {
		// left: 45rpx;
	}
	.item image:first-child {
		width: 43rpx !important;
		height: 43rpx !important;
		margin: auto
	}
	.item image:last-child {
		width: 41rpx !important;
		height: 43rpx !important;
		margin: auto
	}
	// .on {
	// 	position: relative;
	// }
	// .on:not(:nth-child(2)):before {
	// 	content: "";
	// 	display: block;
	// 	position: absolute;
	// 	top: 0;
	// 	width: 100%;
	// 	height: 6rpx;
	// 	background-color: #00BCD4;
	// 	border-radius: 120rpx !important;
	// }
	.search {
		position: absolute;
		left: 50%;
		transform: translate(-50%, 0);
		top: -50rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.search image {
		width: 100rpx !important;
		height: 100rpx !important;
		z-index: 2;
		border-radius: 100%;
	}
	.search .txt {
		margin-top: 26rpx;
	}
	.selectedColor {
		color: #00BCD4;
		font-size: 20rpx;
	}
}
</style>
