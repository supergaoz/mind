import { Configuration, OpenAIApi } from "openai"
import { H3Event } from "h3";
import { useFormatter } from '../../composables/useFormatter'
import { useOpenAi } from '../../composables/useOpenAi'
const { conversationFormatter,answerFormatter } =useFormatter()
const { contentCompletion } = useOpenAi()
const conversations:Array<any> = []
const maxSessionNum = 10 // 服务端最多缓存会话数

const PROMPT_INFO = `You're an advanced chatbot. Your job is to answer the users' question as short and concise as possible. The dialogue history is as below, please give the response for the latest user's conversation.` // 场景注入

export default async (event: H3Event, res: any) => {
  const body = await readBody(event)

  if(conversations.filter((it)=>{ return it.key === body.userId}).length === 0) {
    console.log('try to add', body.userId)
    conversations.push({key:body.userId, conversation: ""})
    if(conversations.length > maxSessionNum) {
      conversations.shift()
    }
  }
  const currentConversation = conversations.find((it)=>{ return it.key === body.userId})
  console.log('current conversation', conversations, body.userId, currentConversation)
  currentConversation.conversation += `user: ${body.userInput}\n`
  const result= answerFormatter(await contentCompletion(`${PROMPT_INFO} \n ${currentConversation.conversation} you:`))
  currentConversation.conversation += `you: ${result}\n`
  return result
}

