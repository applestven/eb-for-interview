<template>
	<view class="content">
		<u-tabbar :value="currentTab" :fixed="true" :placeholder="false" >
			<u-tabbar-item @click="click1">
				<div class="tabbar-icon" slot="active-icon">
					<u-icon name="file-text-fill" size="130" color="#fff"></u-icon>
				</div>
				<u-icon slot="inactive-icon" name="file-text" size="30" color="#259C77"></u-icon>
			</u-tabbar-item>
			<u-tabbar-item @click="click1">
				<div class="tabbar-icon" slot="active-icon">
					<u-icon name="coupon-fill" size="30" color="#fff"></u-icon>
				</div>
				<u-icon slot="inactive-icon" name="coupon" size="30" color="#259C77"></u-icon>
			</u-tabbar-item>
			<u-tabbar-item @click="click1">
				<div class="tabbar-icon" slot="active-icon">
					<u-icon name="account-fill" size="30" color="#fff"></u-icon>
				</div>
				<u-icon slot="inactive-icon" name="account" size="30" color="#259C77"></u-icon>
			</u-tabbar-item>
		</u-tabbar>
	</view>
</template>

<script>
	export default {
		name: 'tabbar',
		props:['currentTab'],
		data() {
			return {
				switchTab: [
					"/pages/index/index",
					"/pages/index/gcashOrder",
					"/pages/index/my",
				]

			}
		},
		methods: {
			click1(e) {
				uni.switchTab({
					url: this.switchTab[e]
				})

			}
		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.tabbar-icon {
		width: 86rpx;
		height: 86rpx;
		background: #259C77;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
