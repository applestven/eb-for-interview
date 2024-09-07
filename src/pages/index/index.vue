<template>
  <view class="min-h-[100vh] pt-11 rounded-none pb-1">
    <view class="p-2  h-[50px]">
      <up-search placeholder="Search..." @change="onChange" :showAction="false" v-model="keyword"></up-search>
    </view>

    <view class="border-[1px] border-solid border-[#EAEAEA]"></view>  

    <view class="pt-1 px-3 h-[170px]">
      <view class="my-3">Recommend</view>
      <uv-scroll-list :indicator="false" indicatorColor="#fff0f0" indicatorActiveColor="#f56c6c">
        <view v-for="(item, index) in toplistRes" :key="index" class="flex flex-col items-center w-[80px] mx-2">
           <image :src="item['link'][1]['attributes']['href']" class="w-[80px] h-[80px] rounded-lg "></image> 
          <view class="title text-center">{{item['im:name']['label']}}</view>
          <Text class="text-[14px] text-[#999999]">{{item["im:contentType"]?.['attributes']?.['label']}}</Text>
        </view>
	    </uv-scroll-list>
    </view>

    <view class="border-[1px] border-solid border-[#EAEAEA]"></view> 
    <scroll-view class="scroll-view h-[calc(100vh-300px)] p-1 pb-5 " :scroll-y="true" @scrolltolower="scrolltolower" :scroll-with-animation="true"> 
        <view v-for="(item, index) in freeListRes" :key="index" class="ml-2 mt-2 pb-2 rounded-none" style="border-bottom:1px solid #EAEAEA" >
          <view class="flex">
            <view class="w-3 fc mr-2 text-[#999999]">{{index+1}}</view>
            <image :src="item['link'][1]['attributes']['href']" class="w-[60px] h-[60px] rounded-lg"  :class="{ 'rounded-full': index % 2 === 1 }"></image> 
            <view class="flex flex-col ml-2 justify-between flex-start">
              <view class="title">{{item['im:name']['label']}}</view>
              <view class="text-[12px] text-[#999999]">{{item['im:name']['label']}}</view>
              <view class="text-[12px] text-[#999999] flex">
                <up-rate :value="item.score" active-color="#F3CB4C" ></up-rate>(173)
              </view>
            </view>
          </view>
        </view>
        <up-loadmore :status="status" v-if="status !== 'loadmore'" />
    </scroll-view>  
    
  </view>
</template>

<script setup lang="ts">
import { ref ,reactive ,onMounted ,toRaw } from 'vue'
import { topList , freeList } from "@/apis"

const keyword = ref('');  
const status = ref('loadmore');  
onMounted(async()=>{
  await initList();
})

const onChange = (value: string) =>{
  if(value === '') return initList();
  let tempData = toRaw(freeListRes.value)
  tempData = tempData.filter(item => {
    const contentTypeLabel = item["im:contentType"]?.['attributes']?.['label'] || '';
    const artistLabel = item["im:artist"]?.['label'] || '';
    const nameLabel = item["im:name"]?.['label'] || '';

    const labels = [contentTypeLabel, artistLabel, nameLabel];
    
    return labels.some(label => label.includes(value));
  })
  freeListRes.value = tempData
}

const toplistRes = ref([]); 
const freeListRes = ref<any[]>([]);
const initList = async () => {
  
  const res = await topList({ limit: 10 });
  toplistRes.value = res.feed.entry;
  status.value = 'loading';
  const res2 = await freeList({ limit: 10 });
  freeListRes.value = res2.feed.entry;
  status.value = 'loadmore';
}
  
const freelimit = ref(1)

const scrolltolower = async() =>{
  console.log('scrolltolower')
  if(freelimit.value === 10) return status.value = 'nomore';
  status.value = 'loading';
  
  freelimit.value += 1;
  const data = await freeList({ limit: 10 * (freelimit.value)});
  freeListRes.value = data.feed.entry
  status.value = 'loadmore';
}



</script>

<style scoped>
.uv-scroll-list__scroll-view__content {
  /* 隐藏滚动条 */
  -ms-overflow-style: none;  /* IE 和 Edge */
  scrollbar-width: none;     /* Firefox */
}

.uv-scroll-list__scroll-view__content::-webkit-scrollbar {
  display: none; /* 隐藏 WebKit 浏览器的滚动条 */
}

/* 保留滚动功能 */
.uv-scroll-list__scroll-view__content {
  overflow: auto;
}

</style>
