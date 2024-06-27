const setAnimate = (result, duration) => {
  setTimeout(() => {
    console.log(result)
  },duration)
}

const transition = (ms) => new Promise((resolve) => {
  setTimeout(resolve, ms)
})

transition(2000).then(() => {
  setAnimate('1', 2000)
  return transition(2000)
})
.then(() => {
  setAnimate('2', 2000)
  return transition(2000)
})
.then(() => {
  setAnimate('3', 2000)
  return transition(2000)
})
.then(() => {
  setAnimate('4', 2000)
  return transition(2000)
})