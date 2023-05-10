<template>
  <NuxtLayout>
    <div class="outer-container">
      <div class="bd-content ps-lg-2">
        <h2 id="站点">站点 <a class="anchor-link" href="#%e5%9b%a2%e9%98%9f" aria-label="Link to this section: 站点"></a></h2>
        <p>该站点是有 贾斯丁 出于个人兴趣研发的站点, 通过 Gitee 进行维护的。我正在积极壮大团队，如果您对 CSS、编写和维护纯
          JavaScript 插件、以及改进前端代码的构建工具和流程感兴趣，请告诉我。</p>
        <h2 id="技术路线"> <a aria-label="Link to this section: 技术路线">技术路线</a></h2>
        <p>本项目主要基于Vue+Nuxt实现前后端业务，并结合openAI接口服务实现实际的内容应答。</p>
        <p>后期考虑在各个独立垂直领域进行数据收集和用户行为记录，从而优化某些特定领域的知识问答。</p>
        <h2 id="里程碑"> <a aria-label="Link to this section: 里程碑">里程碑</a></h2>
        <p>首个版本发布于 于 <time datetime="2023-02-19 12:25">2023 年 2 月 19 日（星期日）</time></p>
        <h2 id="支持作者"> <a aria-label="Link to this section: 里程碑">支持作者</a></h2>
        <p>该站点目前由作者个人维护和测试，相关硬件和时间成本也由作者个人承担，如果您觉得这个应用还挺有意思的，可以请作者喝一杯咖啡。</p>
        <div class="row g-3 reward">
            <div class="col-sm-6"><img src="~/assets/images/reward.jpeg" /></div>
            <div class="col-sm-6"><div class="col-sm-6" id="coffeeDog"></div></div>
        </div>
        
        <h2 id="期待您的参与">期待您的参与 <a class="anchor-link" href="#%e6%9c%9f%e5%be%85%e6%82%a8%e7%9a%84%e5%8f%82%e4%b8%8e"
            aria-label="Link to this section: 期待您的参与"></a></h2>
        <p>* 如果您有什么建议和想法，做出更有趣的应用，也欢迎您<a
            href="mailto:supergaoz@foxmail.com?subject=mindplusSuggestion&amp;body=内容">联系作者</a></p>
        <p>* 如果您想投资作者，并和作者聊聊后续计划，做出更有趣的应用，也欢迎您<a
            href="mailto:supergaoz@foxmail.com?subject=mindplusInvest&amp;body=内容">联系作者</a></p>

      </div>
    </div>

  </NuxtLayout>
</template>
<script setup>
import coffeeDog from '~/assets/aminiation/coffee.json'
import lottie from 'lottie-web' 
onMounted(() => {
  const anim = lottie.loadAnimation({
    container:  document.querySelector('#coffeeDog'), // 挂载动画的容器dom元素
    renderer: 'svg', // 渲染方式，svg、canvas、html（轻量版仅svg渲染）
    loop: true, // 是否循环播放
    autoplay: true, // 是否自动播放
    animationData: coffeeDog, // 动画json文件路径
  });
})

</script>
<style>
.outer-container {
  display: flex;
  justify-content: center;
}

.ps-lg-2 {
  padding: 1.5rem;
  max-width: 800px;
}

h2 {
  margin-top: 3rem;
}
.reward {
  height: 360px;
}
.reward img {
  height: 353px;
}
.reward div {
  height: 330px;
}
</style>