
<template>
  <view class="content">
		我的
		<my-tabbar :currentTab='0'/>
	</view>
</template>
<script setup lang="ts">
// import myTabbar from '@/components/my-tabbar.vue'
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";

onLaunch(() => {
  console.log("App Launch");
  // uni.hideTabBar()
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style>
@import url('styles/tailwind.css');
</style>
