//callback function
/* 
const setTransition = (el, transitionName, duration, callback) => {
  const enterClass = `enter-${transitionName}`
  const enterActiveClass = `enter-active-${transitionName}`
  el.classList.add(enterClass)
  el.offsetHeight
  el.classList.add(enterActiveClass)
  setTimeout(() => {
    el.classList.remove(enterClass, enterActiveClass)
    callback()
  }, duration)
}

setTransition(document.querySelector('.box1'), 'fade-in', 1000, () => {
  setTransition(document.querySelector('.box3'), 'fade-in', 1000, () => {
    setTransition(document.querySelector('.box2'), 'fade-in', 1000, () => {});
  });
})
*/

const setAnimate = (el,transitionName, duration) => {
  const enterClass = `enter-${transitionName}`
  const enterActiveClass = `enter-active-${transitionName}`
  el.classList.add(enterClass)
  el.offsetHeight
  el.classList.add(enterActiveClass) 
  setTimeout(() => {
    el.classList.remove(enterClass, enterActiveClass)
  }, duration);
}

const setTransition = (ms) => new Promise((resolve) => {
  setTimeout(resolve, ms)
  console.log('=====promise====')
})

setTransition(500)
  .then(() => {
    setAnimate(document.querySelector('.box1'), 'left-in', 500)
    console.log('resolve1')
    return setTransition(500)
  })
  .then(() => {
    setAnimate(document.querySelector('.box2'), 'right-in', 500)
    console.log('resolve2')
    return setTransition(500)
  })
  .then(() => {
    setAnimate(document.querySelector('.box3'), 'left-in', 500)
    console.log('resolve3')
    return setTransition(500)
  })
  .then(() => {
    setAnimate(document.querySelector('.box4'), 'right-in', 500)
    console.log('resolve4')
  })

