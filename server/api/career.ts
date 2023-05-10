import { Configuration, OpenAIApi } from "openai"
import { H3Event } from "h3";
import { useFormatter } from '../../composables/useFormatter'
import { useOpenAi } from '../../composables/useOpenAi'
const { conversationFormatter,answerFormatter } =useFormatter()
const { contentCompletion } = useOpenAi()
const conversations = []
const maxSessionNum = 10 // 服务端最多缓存会话数

const PROMPT_INFO = `你是一个超级聊天机器人，有着丰富的职场经验，你的名字叫职场达人。你的任务是用尽可能间断的语言回答用户关于职业规划的问题，如果问题和职业规划毫不相关或者很不礼貌，请友善的提醒对方。现在对话记录内容如下，请回答用户最后的问题。` // 场景注入

export default async (event: H3Event, res: any) => {
  const body = await readBody(event)

  if(conversations.filter((it)=>{ return it.key === body.userId}).length === 0) {
    conversations.push({key:body.userId, conversation: ""})
    if(conversations.length > maxSessionNum) {
      conversations.shift()
    }
  }
  const currentConversation = conversations.find((it)=>{ return it.key === body.userId})

  currentConversation.conversation += `user: ${body.userInput}\n`
  const result= answerFormatter(await contentCompletion(`${PROMPT_INFO} \n ${currentConversation.conversation} you:`))
  currentConversation.conversation += `you: ${result}\n`
  return result
}