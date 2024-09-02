<template>
	<view class="p-10 flex justify-center w-60 h-[300px] flex-wrap">
		<!-- <view class="w-full">闪购logo</view> -->
		<view class="w-full flex justify-center"> 
			<image class="h-60" src="@/static/logo1.png"></image> 
		</view>
		<uv-input class="w-full" border="bottom" placeholder="请输入工号" v-model="value" @change="change"></uv-input>
		<uv-input class="w-full" border="bottom" placeholder="请输入密码" v-model="value" @change="change"></uv-input>
	</view>
</template>

<script setup>
	
</script>

<style>

</style>
