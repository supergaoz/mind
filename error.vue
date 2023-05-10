<template>
  <div>
    <AppHeader />
    <div class="error-info">
      <h1 class="alert alert-danger">Meet an Error - {{error.statusCode}}</h1>
    </div>
    <!-- <NuxtLink to="/">Home page</NuxtLink> -->
  </div>
  <div>The Page is maybe playing sketebaord outside</div>
  <div id="skateboard"></div>
  <div class="error-code alert alert-danger">Meet an Error - {{error.statusCode}}</div>
  <AppFooter />
  
</template>
  
<script setup>
import lottie from 'lottie-web' 
import skateMan from '~/assets/aminiation/skateboarding-boy.json'
const props = defineProps({
  error: {
        type: Object,
        default: {},
    }
})

// export default {
//   props: ['error'],

//   layout: 'error' // you can set a custom layout for the error page
// }

onMounted(() => {
  const anim = lottie.loadAnimation({
    container:  document.querySelector('#skateboard'), // 挂载动画的容器dom元素
    renderer: 'svg', // 渲染方式，svg、canvas、html（轻量版仅svg渲染）
    loop: true, // 是否循环播放
    autoplay: true, // 是否自动播放
    animationData: skateMan, // 动画json文件路径
  });
})
</script>
<style>
  .error-info {
    font-size: 18px;
  }
  #skateboard {
    width: 50vw;
    height: 50vh;
  }
</style>