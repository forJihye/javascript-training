var app = (function() {

	// 전역변수
	var wrapElement,
		container;

	// 엘리먼트 캐시화
	var _cacheElements = function() {
		wrapElement = document.getElementById('wrap');
	}

	// 엘리먼트 생성
	var _createElements = function() {
		container = document.createElement('div');
		container.className += "class";

		wrapElement.appendChild(container);
	}

	// 이벤트 추가
	var _eventHandler = function() {
		var request = new XMLHttpRequest();

		request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

		request.onload = function() {
			var data = JSON.parse(this.response);

			if(request.status >= 200 && request.status < 400) {
				data.forEach(movie => {
					var card = document.createElement('div');
					card.className += "card";

					var h1 = document.createElement('h1');
					h1.textContent = movie.title;

					var p = document.createElement('p');
					movie.description = movie.description.substring(0, 300);
					p.textContent = `${movie.description}...`;

					container.appendChild(card);
					card.appendChild(h1);
					card.appendChild(p);
				});
			} else {
				var errorMessage = document.createElement('marquee');
			    errorMessage.textContent = `Gah, it's not working!`;
			    app.appendChild(errorMessage);
			}
		}

		request.send();
	}
	

	// 모듈 초기화
	var initModule = function() {
		_cacheElements();
		_createElements();
		_eventHandler();
	}

	return {
		init: initModule
	}

})().init();