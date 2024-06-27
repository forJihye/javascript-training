var app = (function() {

	// 전역변수
	var ratingBtn,
		ratingTxt,
		currentValue = -1,
		valueTxt = ["별로예요", "그저그래요", "괜찮아요", "좋아요", "최고예요"];

	// 엘리먼트 캐시화
	var _cacheElements = function(){
		var ratingWrap = document.getElementById('wrap');
			ratingBtn = ratingWrap.querySelectorAll('.rating_btn');
			ratingTxt = ratingWrap.querySelector('.txt');
	}

	// 이벤트 추가
	var _eventHandler = function() {
		for (var i = 0; i < ratingBtn.length; i++) {
			ratingBtn[i].addEventListener('click', function() {
				getValue = this.getAttribute("data-value");
				if (currentValue !== getValue) {
					currentValue = getValue;
					var btnList = Array.prototype.slice.call(ratingBtn);
					var selectedList = btnList.reverse().slice(0,currentValue);

					_removeClass(btnList);
					_addClass(selectedList);
					_changeText(currentValue, valueTxt[currentValue - 1]);
				} else {
					return false;
				}
			});
		}
	}

	// on 클래스 제거
	var _removeClass = function(btnList) {
		btnList.forEach(function(val, i){
			val.classList.remove("on");
		});
	}

	// on 클래스 추가
	var _addClass = function(selectedList) {
		selectedList.forEach(function(val, i){
			val.classList.add("on");
		});
	}

	// 텍스트 변경
	var _changeText = function(currentValue, valueTxt) {
		ratingTxt.innerText = currentValue + '점' + '(' + valueTxt + ')';
	}

	// var _addClass = function(elements, myClass) {
	// 	if(!elements) { return; }

	// 	if(typeof(elements) == 'string') {
	// 		elements = document.querySelectorAll(elements);
	// 	} else if(elements.tgaName) { elements = [elements]; }

	// 	for (var i = 0; i < elements.length; i++) {
	// 		if((''+elements[i].className+'').indexOf(''+myClass+'') < 0) {
	// 			elements[i].className += '' + myClass;
	// 		}
	// 	}
	// }

	// var _removeClass(elements, myClass) {
	// 	if(!elements) { return; }

	// 	if(typeof(elements) == 'string') {
	// 		elements = document.querySelectorAll(elements);
	// 	} else if(elements.tgaName) {
	// 		elements=[elements];
	// 	}

	// 	var reg = new RegExp('(^| )'+myClass+'($| )','g');

	// 	for (var i = 0; i< elements.length; i++) {
	// 		elements[i].className = elements[i].className.replace(reg, '');
	// 	}
	// }

	// 모듈 초기화
	var initModule = function() {
		_cacheElements();
		_eventHandler();
	}

	return {
		init: initModule
	}

})().init();