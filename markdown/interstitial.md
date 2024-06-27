interstitial 스크린 광고 삽입 전환 모듈
=============
* #### elements, delay Object 생성
> el : null 은 스크린화면
> video 를 배열로 생성한 이유는 한 장면에 video 갯수가 2개 이상일 경우를 대비
```jsx
const $ = document.querySelector.bind(document);
var scenes = [
  {
    el : null, 
    delay : 10000  
  },
  {
    el : $('.advertise1'),
    delay : 10000  
  },
  {
    el : $('.video1'),
    delay : 10000,
    video: [$('.video1 video')]
  },
  {
    el : null,
    delay : 10000  
  },
  {
    el : $('.advertise2'),
    delay : 10000  
  },
  {
    el : $('.video2'),
    delay : 10000,
    video: [$('.video2 video')]
  },
]
```

* #### All elements Hide
> 모든 장면 elements 숨김 처리  
> scenesArr 매개변수(Paramaeter 파라미터) / scenes 객체가 인자값으로 들어감  
> scenes.el : 객체 el 속성 값에 접근  
```jsx
var hideStyle = scenesArr => scenesArr.el.style.opacity = 0;
```

* #### All elements transition 
> 모든 장면 elements CSS transition 적용  
> scenesArr 매개변수(Paramaeter 파라미터) / scenes 객체가 인자값으로 들어감  
> scenes.el : 객체 el 속성 값에 접근  
```jsx
var initStyle = scenesArr => scenesArr.el.transition = 'opacity 0.5s';
```

* #### Video Loop function Setting
> 속성 video 배열값을 videos의 인자값으로 받고 배열 요소 각각에 function 적용 
```jsx
const videoLoop = (videos. fun) => videos.filter(item => item).forEach(fun)
```

* #### Show Scenes Function Setting
> 매개변수 {el, delay, video} = 현재 보이는 장면의 index 객체
> callback == loop()
```jsx
const showScenes = ({el, delay, video}, callback) => {
  el.style.opacity = 1;
  if(video) videoLoop(video, (item)=>item.play());

  setTimeOut(() => {
    if(typeof callback === 'function') callback();
    setTimeOut(() => {
      hideStyle({el, delay});
      setTimeOut(() => {
        if(video) {
          videoLoop(video, (item) => {
            item.pause(); // video 정지
            item.currentTime = 0; // video 0초로 지정
          })
        }
      },500)
    },500)
  },delay) 
  // 해당화면 delay 종료 후 callback() 함수실행 == loop() 
}
```
* #### Wait Scenes Function Setting
> el : null 즉 인스타그램 화면인 경우
```jsx
const waitScenes = ({delay}, callback) => {
  setTimeOut(() => {
    if(typeOf callback === 'function') callback()
  },delay)
}
```

* #### interstitial 함수 실행
> .filter 메서드로 객체의 모든 el 값을 가져와서 초기 style 적용   
 (el: null값 때문에 style적용이 오류남 "Cannot read property 'style' of null") 
```jsx
const interstitial = (scenesArr) => {
  scenesArr.filter(({el}) => el).forEach(hideStyle); //elements hide function
  scenesArr.filter(({el}) => el).forEach(initStyle); //elements transition
  
  let i = 0;
  //loop function setting
  const loop = () => {
    //scenes 객체에서 반복되면서 나오는 장면 index
    const currentScene = scenesArr[i++ % scenesArr.length] 
    if(currentScene.el) showScenes(currentScene, loop); //el 값 null이 아닌경우
    else waitScene(currentScene, loop); //el 값 null인 경우
  }
  loop();
}

interstitial(scenes)
```
