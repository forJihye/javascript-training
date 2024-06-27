/**
 * @typedef {Object} Scene
 * @property {HTMLElement} el 
 * @property {number} delay
 */

/**
 * 씬 트랜지션 초기화
 * @param {Scene} scene 
 */
function initScene(scene) {
  scene.el.style.transition = 'opacity 0.5s'
}
/**
 * 씬 숨기기
 * @param {Scene} scene 
 */
function hideScene(scene) {
  scene.el.style.opacity = 0
}
/**
 * 씬을 해당 딜레이만큼 노출시키고 콜백
 * @param {Scene} scene 
 * @param {function (): void} callback
 */
function showScene(scene, callback) {
  var el = scene.el
  var delay = scene.delay

  el.style.opacity = 1
  setTimeout(function () {
    if (typeof callback === 'function') callback()
    setTimeout(function() {hideScene(scene)}, 500)
  }, delay)
}
/**
 * 씬의 엘리먼트가 없을 경우 해당 딜레이만큼 노출시키고 콜백
 * @param {Scene} scene 
 * @param {function (): void} callback
 */
function waitScene(scene, callback) {
  var delay = scene.delay
  setTimeout(function () {
    if (typeof callback === 'function') callback()
  }, delay)
}

/**
 * 삽입광고 진행
 * @param {Array<Scene>} scenes
 * @example
 * interstitial([
 *  {el: document.querySelector('.test-1'), delay: 5000},
 *  {el: document.querySelector('.test-2'), delay: 5000},
 *  {el: null, delay: 5000},
 *  {el: document.querySelector('.test-3'), delay: 5000},
 * ])
 */
function interstitial(scenes) {
  scenes.filter(function (scene) {return scene.el}).forEach(initScene)
  scenes.filter(function (scene) {return scene.el}).forEach(hideScene)
  var i = 0
  function loop() {
    var currentScene = scenes[i++ % scenes.length]
    if (currentScene.el) showScene(currentScene, function () {
      loop()
    })
    else waitScene(currentScene, function () {
      loop()
    })
  }
  loop()
}