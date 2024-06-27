const setTransition = (el, transitionName, duration) => {
  const enterClass = `enter-${transitionName}`
  const enterActiveClass = `enter-active-${transitionName}`
  el.classList.add(enterClass)
  el.offsetHeight
  el.classList.add(enterActiveClass)
  setTimeout(() => {
    el.classList.remove(enterClass, enterActiveClass)
  }, duration)
}

{/* <route
  enter-name="fade-in"
  enter-delay="500"
  leave-name="fade-out"
  leave-delay="500"
></route>

.enter-fade-in {
  transition: opacity 0.5s;
  opacity: 0;
}
.enter-active-fade-in {
  opacity: 1;
}
.leave-fade-out {
  transition: opacity 0.5s;
  opacity: 1;
}
.leave-active-fade-out {
  opacity: 0;
} */}