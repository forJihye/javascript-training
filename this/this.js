const testThis = {
  isThis: function () {
    console.log('this는 testThis를 가르킵니다', this)
  },
  isThis2() {
    console.log('isThis의 문법설탕이며 this는 testThis를 가르킵니다 ->', this)
  },
  isntThis: () => {
    console.log('Object안에 function함수가 들어오지 않았으므로 this는 window입니다. isntThis2도 마찬가지입니다', this)
  },
  isntThis2: this
}

testThis();