import { Configuration, OpenAIApi } from "openai"

const runtimeConfig = useRuntimeConfig()
const OPENAI_API_KEY = runtimeConfig.public.apiKey
const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration);

const contentCompletion = async (conversation:any) => {
  if (!configuration.apiKey) {
    throw createError({
      statusCode: 500,
      statusMessage: 'config the api please.',
    })
  }
  try {
    const MODEL = 'text-davinci-003' // 模型名
    const completion = await openai.createCompletion({
      model: MODEL,
      // prompt: generatePrompt(animal),
      prompt: conversation, 
      temperature: 0.3, // 0 ～ 2, 回答的随机程度
      // top_p: 1, // 0 ~ 1,  神经元，结果取样区间， 0.1 表示前10%，一般和temperature 二选一使用
      // n: 1, // 返回多少条回答
      // best_of: // 生成多少条最佳记录，必须大于 n
      // stream: false, // 是否通过流文件形式进行传输，
      max_tokens: 400,// 答复最大内容量，与输入最大的总和一般小于 2048， 最新模型可能支持4096
      presence_penalty: 0, //-2.0 ~ 2.0 数字越大，越可能产生新话题
      frequency_penalty: 0,//  -2.0 ~ 2.0 数字越大，越不可能重复之前的回答内容
      // suffix: '', // 内容填充完成后的内容，后缀
      // echo: false, //是否把原来prompt 内容一并返回
      // stop: ''|[], // 最多4个数组，如果结果包含相关内容，则停止生成
      // user: '', // 用户标识，
    });
    console.log('completion', completion)
    return completion.data.choices[0].text
  } catch(err:any) {
    console.log('err here', err)
    if (err.response) {
      throw createError({
        statusCode: err.response.status,
        statusMessage: err.response.data,
      })
    } else {
      throw createError({
        statusCode: 500,
        statusMessage: 'An error occurred during your request.',
      })
    }
  }
}

export const useOpenAi = () => {
  return {
    contentCompletion
  }
}