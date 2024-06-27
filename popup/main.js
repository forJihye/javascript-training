
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
const popupEvent = (title, text, close, callback) => {
  document.addEventListener('click', (e) => {
    if(e.path.includes(btn)){
      main.appendChild(overlayEle)
      overlayEle.classList.add('show-popup')
      titleEle.innerText = title
      textEle.innerText = text
      if(close === false){
        footerEle.remove()
      }
      if(typeof callback === 'function'){
        callback()
      }
    }
    if(e.path.includes(closeBtn) || e.path.includes(overlayEle)){
      popupClose()
    }
  })
} 

// popup close event
const popupClose = () => {
  overlayEle.remove()
  overlayEle.classList.remove('show-popup')
}

popupEvent('Are you sure', 'Once deleted, you will not be able to recover this imaginary file!', true)