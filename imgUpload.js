var app = (function() {

	// 전역변수
	var inputElement, 
		reader,
		progress,
		progressBar,
		list;

	// 엘리먼트 캐시화
	var _cacheElements = function() {
		inputElement = document.getElementById('files'),
		progress = document.querySelector('.percent'),
		progressBar = document.getElementById('progress_bar'),
		list = document.getElementsByTagName('ul')[0];
	}

	// 이벤트 추가
	var _eventHandler = function() {
		inputElement.addEventListener("change", _handleFileSelect, false);
	}

	// 에러체크
	var _errorHandler = function(e) {
		switch(e.target.error.code) {
			case e.target.error.NOT_FOUND_ERR:
				alert('File Not Found!');
				break;
			case e.target.error.NOT_READABLE_ERR:
				alert('File is not readable');
				break;
			case e.target.error.ABORT_ERR:
				break;
				default:
			alert('An error occurred reading this file.');
	    };
	}

	// 진행 과정
	var _updateProgress = function(e) {
		if (e.lengthComputable) {
			var percentLoaded = Math.round((e.loaded / e.total) * 100);
			if (percentLoaded < 100) {
				progress.style.width = percentLoaded + '%';
				progress.textContent = percentLoaded + '%';
			}
	    }
	}

	// 파일 이미지 추가
	var _handleFileSelect = function(e) {
		progress.style.width = '0%';
    	progress.textContent = '0%';

    	reader = new FileReader();
    	reader.onerror = _errorHandler;
    	reader.onprogress = _updateProgress;
    	reader.onloadstart = function(e) {
    		progressBar.className = 'loading';
    	}
    	reader.onload = function(e) {
    		progress.style.width = '100%';
    		progress.textContent = '100%';

    		img = new Image();
    		img.src = reader.result;

    		newItem = document.createElement('li');
    		newItem.className += "item";
    		newSpan = document.createElement('span');
    		newSpan.innerHTML = 'delete';
    		newSpan.addEventListener("click", function(){
    			this.parentNode.remove();
    		})
    		
    		newItem.appendChild(newSpan);
    		newItem.appendChild(img);
    		list.appendChild(newItem);
    	}

    	if(e.target.files[0].type.match('image')) {
    		reader.readAsDataURL(e.target.files[0]);
    	}
    	// reader.readAsBinaryString(e.target.files[0])

    	setTimeout("document.getElementById('progress_bar').className='';", 2000);
	}

	// 모듈 초기화
	var initModule = function() {
		_cacheElements();
		_eventHandler();
	}

	return {
		init: initModule
	}

})().init();