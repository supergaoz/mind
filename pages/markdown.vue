<template>
  <div class="mk-container">
    <img src="~/assets/images/bg.jpeg">
    <div class="glass-container" id="glass">
      <div v-html="result"></div>
    </div>
  </div>
</template>
<script setup>
import {marked} from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/foundation.css'//@ts-ignore
import bgImage from '~/assets/images/bg.jpeg'

const bgImg = ref(bgImage)

const markedRender = new marked.Renderer()
marked.setOptions({
  renderer: markedRender,
  gfm: true,
  pedantic:false,
  sanitize: false,
  highlight: (code, lang = 'shell') => hljs.highlight(code, {language: lang}).value
})


const tt = `
## 什么是机器学习
### 监督学习
首先我们来看个栗子，看看我们从小学就开始接触的机器学习。
\`
1,3,5,7,x,11,13. 求 x
\`
如果你能一眼看出 x=9, 那么恭喜你，有已经知道监督学习的主要流程和步骤了。 
因为就是机器学习，已知数据，推演出未知数据结果，这就是机器学习，这种有相关参考数据的学习方式，
我们也称之为监督学习，即有一些标准答案可以给到我们参考的机器学习方式。`


const result = ref(marked(tt))


</script>
<style>
.mk-container {
  display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vW;
}
img {
  position: fixed;
  height: 100vh;
  width: 100vw;
}
p {
  white-space: pre-wrap;
  width: 500px;
}
.glass-container{
    width: 700px;
    height: 375px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    border-radius: 10px;
    backdrop-filter: blur(4px);
    background-color: rgba(0,0,0, 0.249);
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
    border: 0px rgba(255,255,255,0.4) solid;
    border-bottom: 0px rgba(40,40,40,0.35) solid;
    border-right: 0px rgba(40,40,40,0.35) solid;
}
</style>