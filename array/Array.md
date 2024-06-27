Array 
============
#### 1. Array.from()
> 유사 배열 객체(array-like object)나반복 가능한 객체(iterable object)를 얕게 복사해새로운Array 객체를 만듭니다.
#### 2. Array.isArray()
> 인자가 Array인지 판별합니다.
#### 3. Array.of()
> 인자의 수나 유형에 관계없이 가변 인자를 갖는 새 Array 인스턴스를 만듭니다.
#### 4. Array.prototype.concat()
> 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환합니다.    
> 기존배열을 변경하지 않습니다. / 추가된 새로운 배열은 반환
#### 5. Array.prototype.copyWithin()
> 배열의 일부를 얕게 복사한 뒤, 동일한 배열의 다른 위치에 덮어쓰고 그 배열을 반환합니다.   
> 이 때, 크기(배열의 길이)를 수정하지 않고 반환합니다.
#### 6. Array.prototype.entries()
> 배열의 각 인덱스에 대한 키/값 쌍을 가지는 새로운 Array Iterator 객체를 반환합니다.
#### 7. Array.prototype.every()
> 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트
#### 8. Array.prototype.fill()
> 배열의 시작 인덱스부터 끝 인덱스의 이전까지 정적인 값 하나로 채웁니다
#### 9. Array.prototype.filter()
> 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.
#### 10. Array.prototype.find()
> 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환합니다. 그런 요소가 없다면 undefined를 반환
#### 11. Array.prototype.findIndex()
> 주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환합니다. 만족하는 요소가 없으면 -1을 반환
#### 12. Array.prototype.flat()
> 메서드는 모든 하위 배열 엘리먼트를 지정된 깊이까지 재귀적으로 이어붙여 새로운 배열을 생성합니다.
#### 14. Array.prototype.flatMap()
> 먼저 매핑함수를 사용해 각 엘리먼트에 대해 map 수행 후, 결과를 새로운 배열로 평평화합니다.   
> 이는 깊이 1의 flat 이 뒤따르는 map 과 동일하지만, flatMap 은 아주 유용하며 둘을 하나의 메소드로 병합할 때 조금 더 효율적
#### 15. Array.prototype.forEach()
> 주어진 함수를 배열 요소 각각에 대해 실행합니다
#### 16. Array.prototype.includes()
> 배열이 특정 요소를 포함하고 있는지 판별합니다
#### 17. Array.prototype.indexOf()
> 배열에서 지정된 요소를 찾을 수있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환
#### 18. Array.prototype.join()
> 배열의 모든 요소를 연결해 하나의 문자열로 만듭니다
#### 19. Array.prototype.keys()
> 배열의 각 인덱스를 키 값으로 가지는 새로운 Array Iterator 객체를 반환합니다.
#### 20. Array.prototype.lastIndexOf()
> 지정된 요소가 배열에서 발견 될 수있는 마지막 인덱스를 반환하고,     
> 존재하지 않으면 -1을 반환합니다. 배열은 fromIndex에서 시작하여 뒤로 검색
#### 21. Array.prototype.map()
> 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.
#### 22. Array.prototype.pop()
> 배열에서 마지막 요소를 제거하고 그 요소를 반환합니다.
#### 23. Array.prototype.push()
> 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환합니다.
#### 24. Array.prototype.reduce()
> 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.
#### 25. Array.prototype.reduceRight()
> 누적기에 대해 함수를 적용하고 배열의 각 값 (오른쪽에서 왼쪽으로)은 값을 단일 값으로 줄여야합니다.
#### 26. Array.prototype.reverse()
> 배열의 순서를 반전합니다. 첫 번째 요소는 마지막 요소가 되며 마지막 요소는 첫 번째 요소가 됩니다.
#### 27. Array.prototype.shift()
> 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환합니다. 이 메서드는 배열의 길이를 변하게 합니다.
#### 28. Array.prototype.slice()
> 어떤 배열의 begin부터 end까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다. 원본 배열은 수정되지 않습니다.
#### 29. Array.prototype.some()
> 배열 안의 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트합니다.
#### 30. Array.prototype.sort()
> 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환합니다.    
> 정렬은 stable sort가 아닐 수 있습니다. 기본 정렬 순서는 문자열의 유니코드 코드 포인트를 따릅니다.
#### 31. Array.prototype.splice()
> 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.
#### 32. Array.prototype.toLocaleString()
> 배열의 요소를 나타내는 문자열을 반환
#### 33. Array.prototype.toString()
> 정된 배열 및 그 요소를 나타내는 문자열을 반환
#### 34. Array.prototype.unshift()
> 새로운 요소를 배열의 맨 앞쪽에 추가하고, 새로운 길이를 반환합니다.
#### 35. Array.prototype.values()
> 배열의 각 인덱스에 대한 값을 가지는 새로운 Array Iterator 객체를 반환합니다.