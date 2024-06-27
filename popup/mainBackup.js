
// const popupBtn = document.querySelector('.btn-default') 
// const popupMain = document.getElementById('main-popup')
// const render = (el, html) => el.innerHTML = html
// const popOpen = (title, text, close = 'close') => render(popupMain, `
// <div class="popup-overlay">
//   <div class="popup-modal">
//     <div class="popup-title">${title}</div>
//     <div class="popup-text">${text}</div>
//     <div class="popup-footer">
//       ${close && `<button type="button" class="popup-btn">${close}</button>`}
//     </div>
//   </div>
// </div>
// `)
// document.addEventListener('click', (ev) => {
//     console.log(ev)
//     if (ev.path.includes(popupBtn)) popOpen(
//     'Good job!',
//     'You clicked the button!',
//     'close',
//   )
// })

/*

const closeBtn = dom('button', 'close', {class: 'close-btn'})
const footerEle = dom('div', '', {class: 'popup-footer'}, [closeBtn])
const textEle = dom('div', '', {class: 'popup-text'})
const titleEle = dom('div', '', {class: 'popup-title'})
const modalEle = dom('div', '', {class: 'popup-modal'}, [titleEle, textEle, footerEle])
const overlayEle = dom('div', '', {class: 'popup-overlay'}, [modalEle])
  // ...append /

popup = (title, text, hasClose, f) => {
  titleEle.innerText = title
  textEle.innerText = text

  if (typeof f === 'function') f()
}

uploadBtn.addEventListener('click', () => popup('업로드 중', '파일을 업로드하는 중입니다.', false, () => {
  setTimeout(() => {
    popup('성공', '업로드에 성공하였습니다.', true)
  }, 5000)
}))

 */

// element setting
const dom = (tagName, textNode, attrs={}, children=[]) => { 
  const el = document.createElement(tagName)
  const text = document.createTextNode(textNode)
  el.appendChild(text)
  for(const key in attrs){
    el.setAttribute(key, attrs[key])
  }
  for(const childs of children){
    el.appendChild(childs)
  }
  return el;
}

// element make
const closeBtn = dom('button', 'close', {class: 'close-btn'})
const footerEle = dom('div', '', {class: 'popup-footer'}, [closeBtn])
const textEle = dom('div', '', {class: 'popup-text'})
const titleEle = dom('div', '', {class: 'popup-title'})
const modalEle = dom('div', '', {class: 'popup-modal'}, [titleEle, textEle, footerEle])
const overlayEle = dom('div', '', {class: 'popup-overlay'}, [modalEle])
const main = document.getElementById('main-popup')

// event add
const btn = document.querySelector('.btn-default')
const popupEvent = () => {
  document.addEventListener('click', (e) => {
    if(e.path.includes(btn)){
      popupOpen()  
      return false;
    }
    if(e.path.includes(closeBtn) || e.path.includes(overlayEle)){
      popupClose()
      return false
    }
  })
} 

// popup open event
const popupOpen = () => {
  popupSetting()
  main.appendChild(overlayEle)
  overlayEle.classList.add('show-popup')
}

// popup close event
const popupClose = () => {
  overlayEle.remove()
  overlayEle.classList.remove('show-popup')
}

const setting = {
  title: 'Hello world!',
  text: 'You Clicked the button',
  closeButton: true,    
}

const popupSetting = () => {
  titleEle.textContent = setting.title
  textEle.textContent = setting.text
  if(setting.closeButton === false){
    footerEle.remove()
  }
}

popupEvent()

