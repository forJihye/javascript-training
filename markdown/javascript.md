Javascript 식 및 연산자 문법
=============
* #### 구조 분해 할당 destructuring assignment
> 배열이나 객체의 속성을 해체하여, 그 값을 개별 변수에 담을 수 있게 하는 표현식   
1. 배열 분해 할당
```jsx
const array = [1,2,3,4,5]
const [one,two,three,four,five] = array;

console.log(one) // Output 1
console.log(two) // Output 2
console.log(three) // Output 3
console.log(four) // Output 4
console.log(five) // Output 5
```