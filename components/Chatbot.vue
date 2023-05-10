<template>
  <div class="container">
    <div class="dialog-container">
      <p v-for="(item, index) in dialogs" :key="index" :style="index === dialogs.length - 1 ? 'opacity:1' : ''"
        :class="item.role" :index="String(index)">
        <img v-if="item.role === 'user'" src="~/assets/images/user.jpg" />
        <span :style="item.role === 'user' ? 'color:#0dcaf0' : 'color:green'" v-html="item.content"></span>
        <img v-if="item.role !== 'user'" src="~/assets/images/ai.png" />
        <!-- <span v-if="item.role === 'user'">用户->  </span>{{ item.content }}<span v-if="item.role !== 'user'">&lt;-AI</span> -->
      </p>
    </div>
    <div class="input-container">
      <div class="input-group mb-3">
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
const props = defineProps({
  conversationApi: {
    type: String,
    default: "conversation",
  }
})

const dialogs = ref([{ content: "", role: "user" }])
const startFlag = ref(false)
const currentContent = ref("")

onMounted(() => {
  document.addEventListener('keydown', (e) => {
    if (e.shiftKey && e.key === "Enter") {
      sendMsg();
    }
  })
})

const conversions = { users: [], yous: [] }


const sendMsg = async () => {
  if (!startFlag.value) {
    startFlag.value = true
    dialogs.value = [{ content: currentContent.value, role: "user" }]
    conversions.users = [currentContent.value]
  } else {
    dialogs.value.push({ content: currentContent.value, role: "user" })
    conversions.users.push(currentContent.value)
  }
  // console.log(currentContent.value)
  // setTimeout(() => {
  //   currentContent.value = ''
  // }, 500);
  currentContent.value = ''
  const res = await useFetch(`/api/${props.conversationApi}`, { method: "POST", body: { conversions } })
  if (res.error.value) {
    console.error('you may need handle error here')
  } else {
    dialogs.value.push({ content: res.data.value, role: "you" })
    conversions.yous.push(res.data.value)
  }
}

</script>
<style>
.container {
  width: 100% !important;
  max-width: 100% !important;
  padding:0 !important;
  display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: baseline;
}
.dialog-container {
  width: 100% !important;
  max-width: 100% !important;
  height: calc(100vh - 240px);
  border: 0;
  padding: 10px;
  margin: 10px 0;
  overflow-y: scroll;
}

.dialog-container p {
  align-items: center;
  display: flex;
  opacity: 0.8;
}

.dialog-container img {
  height: 30px;
  width: 30px;
  margin: 0 10px;
}

.user {}

.you {
  text-align: right !important;
  justify-content: end;
}
.input-container {
  width:100%;
}
</style>