//promise
var waitSecond = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000)
})


waitSecond.then(() => {
  return waitSecond
}).then(() => {
  
})