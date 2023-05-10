<template>
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 border-top border-bottom">
    <div class="bottom-info">
      <div class="left">
        <div class="brand-area"><a href="/about">© GT Software.2023</a></div>
      </div>
      <div class="right">
        <a v-if="!isMobile" href="/">Privacy policy</a>
        <a v-if="!isMobile" href="/">Terms of use</a>
        <a href="https://beian.miit.gov.cn/">备案号： 沪ICP备2021034284号-6</a>
        <a v-if="!isMobile" href="/">Cookies Setting</a>
      </div>
    </div>
  </footer>
</template>
<script lang="ts" setup>
// import Alert from 'bootstrap/js/dist/alert'?
import Button from 'bootstrap/js/dist/button'
// or, specify which plugins you need:
// import { Tooltip, Toast, Popover } from 'bootstrap'
const isMobile = ref(false)
onMounted(() => {
    checkMobile()
    window.onresize = checkMobile
})
const checkMobile = () => {
    isMobile.value = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i) !== null
}
</script>
<style>
footer {
  padding: 0 20px;
  background: #f5f5f5;
}

.bottom-info {
  color: #484848;
  text-decoration: none;
  font-size: 0.75rem;
  line-height: 1.125rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.bottom-info a {
  color: #484848;
  text-decoration: none;
}

.bottom-info .right a:hover {
  text-decoration: underline;
}

.bottom-info .right a::after {
  margin: 0 10px;
  content: '|';
}
.bottom-info .right a:last-child::after {
  display: none;
}
</style>