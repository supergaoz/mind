<template>
  <div class="container">
    <div class="dialog-container">
      <div v-for="(item, index) in dialogs" :key="index" :style="index === dialogs.length - 1 ? 'opacity:1' : ''"
        :class="item.role" :index="String(index)">
        <img v-if="item.role === 'user'" src="~/assets/images/user.jpg" />
        <div v-if="item.role === 'user'"  class="arrow-user"></div>
        <span>{{ item.content }}</span>
        <div v-if="item.role !== 'user'"  class="arrow-ai"></div>
        <!-- <span :style="item.role === 'user' ? 'color:#0dcaf0' : 'color:green'">{{ item.content }}</span> -->
        <img v-if="item.role !== 'user'" src="~/assets/images/ai.png" />
        <!-- <span v-if="item.role === 'user'">用户->  </span>{{ item.content }}<span v-if="item.role !== 'user'">&lt;-AI</span> -->
      </div>
      <div id="loading_man"></div>
    </div>
    <div class="input-container">
      <div class="input-group">
        <textarea class="form-control" placeholder="你要问的问题" v-model="currentContent"
          aria-describedby="button-addon2"></textarea>
        <!-- <input type="text" class="form-control" v-model="currentContent" placeholder="你要问的问题" aria-label="输入内容" aria-describedby="button-addon2"> -->
        <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="sendMsg">发送(shift +
          enter)</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { v4 as uuidv4 } from 'uuid'
import loadingMan from '~/assets/aminiation/coding.json'
import lottie from 'lottie-web'
const props = defineProps({
  conversationApi: {
    type: String,
    default: "conversation",
  }
})
const userId = uuidv4();
let amin
const dialogs = ref([])
const startFlag = ref(false)
const currentContent = ref("")

onMounted(() => {
  document.addEventListener('keydown', (e) => {
    if (e.shiftKey && e.key === "Enter") {
      sendMsg();
    }
  })
  amin = lottie.loadAnimation({
    container: document.querySelector('#loading_man'), // 挂载动画的容器dom元素
    renderer: 'svg', // 渲染方式，svg、canvas、html（轻量版仅svg渲染）
    loop: true, // 是否循环播放
    autoplay: false, // 是否自动播放
    animationData: loadingMan, // 动画json文件路径
  });
})

let userInput = ""


const sendMsg = async () => {
  if (!startFlag.value) {
    startFlag.value = true
    dialogs.value = [{ content: currentContent.value.trim(), role: "user" }]
  } else {
    dialogs.value.push({ content: currentContent.value.trim(), role: "user" })
  }
  userInput = currentContent.value.trim()
  currentContent.value = ''
  amin.play()
  const res = await useFetch(`/api/${props.conversationApi}`, { method: "POST", body: { userId,userInput } })
  amin.pause()
  if (res.error.value) {
    console.error('you may need handle error here')
  } else {
    dialogs.value.push({ content: res.data.value, role: "you" })
    // conversions.yous.push(res.data.value)
  }
}

</script>
<style>
.container {
  width: 100% !important;
  max-width: 100% !important;
  height: 100% !important;
  padding: 0 !important;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: baseline;
}

.dialog-container {
  width: 100% !important;
  max-width: 100% !important;
  height: calc(100vh - 186px);
  border: 0;
  padding: 10px;
  /* margin: 10px 0; */
  overflow-y: auto;
  position: relative;
  overflow-x:hidden;
}

#loading_man {
  height: 100%;
  width: 80%;
  position: absolute;
  top: 0;
  z-index: -1;
  margin: auto;
  opacity: 0.5;
  right: -20%;
}

.dialog-container div {
  opacity: 0.6;
}

.dialog-container span {
  white-space: pre-wrap;
}


.dialog-container img {
  height: 30px;
  width: 30px;
  margin: 0 .5rem;
}

.user {
  display: flex;
  align-items: center;
  margin: 0.4rem 0;
}

.you {
  display: flex;
  align-items: center;
  text-align: right !important;
  justify-content: end;
  margin: 0.4rem 0;
}

.user span, .you span {
  max-width: 70%;
  color: #cecece;
  background: #2d2c2c;
  padding: 0.35rem;
  border-radius: 0.35rem;
}

.arrow-user {
  height: 1rem;
  width: 1rem;
  background: #2d2c2c;
  margin-right: -.7071rem;
  transform: rotate(-45deg);
  z-index: -1;
}

.arrow-ai {
  height: 1rem;
  width: 1rem;
  background: #2d2c2c;
  margin-left: -.7071rem;
  transform: rotate(-45deg);
  z-index: -1;
}

.input-container {
  width: 100%;
}
</style>