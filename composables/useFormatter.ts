const conversationFormatter= (users, ais) => {
  let conversationHistory = ''
  for (let index = 0; index < ais.length; index++) {
    conversationHistory += `user:${users[index]} \n`
    conversationHistory += `you:${ais[index]} \n`
  }
  conversationHistory += `user:${users[users.length -1]} \n`
  return conversationHistory
}

const answerFormatter = (str) => {
  return str.replace('\n\n','\n').replace('you:','').replace('You:','').replace('me:','').trim()
}

export const useFormatter = () => {
  return {
    conversationFormatter,
    answerFormatter
  }
}