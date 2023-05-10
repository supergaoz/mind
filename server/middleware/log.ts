const logInfo = []


export default defineEventHandler((event) => {
  logInfo.push(event.node.req.url)
  // console.log('New request: ' + logInfo)
})