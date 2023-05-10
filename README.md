# chatbotDemo
* 基于OPEN AI 接口实现多轮对话Demo
## 业务功能处理逻辑
1. 前端收集记录对话内容
2. 作为场景扩充交由后端处理
3. 后端接口收集相关请求内容后，进行格式化整理
4. 在后端请求 openAI 内容完善接口 createCompletion
5. 收到请求后按照应用要求进行格式化处理和一些边界问题优化。

## 框架及工具说明 Framework & tools
- [Nuxt 3](https://v3.nuxtjs.org) - SSR, ESR, File-based routing, components auto importing, modules, etc.
- [Vite](https://cn.vitejs.dev/) - Instant HMR
- [Pnpm](https://pnpm.io/) - package management tool

## 组件说明
- app.vue - nuxt应用入口
- error.vue - 错误处理页面
- pages/index.vue - 页面组件
- components/header.vue - 头部菜单基础组件
- conponents/footer.vue - 底部通用组件

### 前端代码
pages/index.vue 中实现基本对话窗口UI

### 后端代码
server/api/conversation.ts 实现后端接口逻辑

### 配置说明
配置内容以变量形式进行配置

```node
const OPENAI_API_KEY = 'xxxxx' // api key
const PROMPT_INFO = `You're an advanced chatbot. x x x x x` // 场景注入
const MODEL = 'text-davinci-003' // 模型名
```

## 相关命令

### 安装依赖
```shell
pnpm install
```

### 本地调试
```shell
pnpm dev
```

### 压缩打包
```shell
pnpm build
```

### 启动服务
```shell
node .output/server/index.mjs 
```
