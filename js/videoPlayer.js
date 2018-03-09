(function(window, document){
	var video = document.getElementsByTagName('video')[0],
		videoContainer = document.getElementById('videoContainer'),
		videoControls = document.getElementById('videoControls'),
		play = document.getElementById('videoPlay'),

		progressContainer = document.getElementById('videoProgress'),
		progressHolder = document.getElementById('videoProgressBox'),
		playProgressBar = document.getElementById('videoPlayProgress'),
		volumeContainer = document.getElementById('videoVolume'),
		volumeHolder = document.getElementById('videoVolumeBox'),
		volumeProgressBar = document.getElementById('videoVolumeProgress'),

		volumeAdjustButton = document.getElementById('videoVolumeButton'),
		isAdjusting = false;
		fullScreenToggleButton = document.getElementById('videoFullScreen'),
		isVideoFullScreen = false;

	var videoPlayer = {
		init: function(){
			var that = this;
			//document.documentElement.className = 'js'; //Helpful css trigger for js
			video.load();
			video.removeAttribute('controls');
			//video.addEventListener('loadeddata', this.initializeControls, false);
			fullScreenToggleButton.addEventListener('click', function(){
				isVideoFullScreen ? that.fullScreenOff() : that.fullScreenOn();
			}, true);
			this.handleButtonPresses();
			this.videoScrubbing();
			this.volumeScrubbing();
			//在对象方法中，我们不能通过自身引用initializeControls方法。我们必须首先引用对象本身: 如： this.initializeControls
		},
		initializeControls: function(){
			videoPlayer.showHideControls();
		},
		showHideControls: function(){
			video.addEventListener('mouseover', function(){
				videoControls.style.opacity = 1;
			}, false);
			videoControls.addEventListener('mouseover', function(){
				videoControls.style.opacity = 1;
			}, false);
			video.addEventListener('mouseout', function(){
				videoControls.style.opacity = 0;
			}, false);
			videoControls.addEventListener('mouseout', function(){
				videoControls.style.opacity = 0;
			}, false);
		},
		handleButtonPresses: function(){
			video.addEventListener('click', this.playPause, false);
			play.addEventListener('click', this.playPause, false);
			volumeAdjustButton.addEventListener('click', this.volumeAdjust, false);

			video.addEventListener('play', function(){
				play.className = 'videoPause';
				videoPlayer.trackPlayProgress();
			}, false);

			video.addEventListener('pause', function(){
				play.className = 'videoPlay';
				videoPlayer.stopTrackingPlayProgress();
			}, false);

			video.addEventListener('ended', function(){
				this.currentTime = 0;
				this.pause();
			}, false);
		},
		playPause: function(){
			if(video.paused || video.ended){
				if(video.ended){video.currentTime = 0;}
				video.play();
			}
			else{
				video.pause();
			}
		},
		volumeAdjust: function(){
			if(isAdjusting){
				isAdjusting = false;
				volumeContainer.className = "hidden";
			}else {
				isAdjusting = true;
				volumeContainer.className = "show";
			}
		},
		fullScreenOn: function(){
			isVideoFullScreen = true;
			videoContainer.style.cssText = 'position: fixed; top:0; left:0; width:'+window.innerWidth+'px;height:'+window.innerHeight+'px;z-index:999;padding-top:0;';
			document.addEventListener('keydown', this.checkKeyCode, false);
		},
		fullScreenOff: function(){
			isVideoFullScreen = false;
			videoContainer.style.cssText = 'position: static; width:800px;';
			
		},
		checkKeyCode: function(e){
			e = e||window.event;
			if((e.keyCode || e.which) === 27) videoPlayer.fullScreenOff();
		},
		trackPlayProgress: function(){
			(function progressTrack(){
				videoPlayer.updatePlayProgress();
				playProgressInterval = setTimeout(progressTrack, 50);//获取id的方式来进行超时清除,命名函数表示式递归
			})();
		},
		updatePlayProgress: function(){
			playProgressBar.style.width = ((video.currentTime / video.duration + 0.01) * (progressHolder.offsetWidth)) + 'px';
		},
		stopTrackingPlayProgress: function(){
			clearTimeout(playProgressInterval);
		},
		videoScrubbing: function(){
			progressHolder.addEventListener('mousedown',function(){
				videoPlayer.stopTrackingPlayProgress();
				videoPlayer.playPause();
				document.onmousemove = function(e){
					videoPlayer.setPlayProgress(e.pageX);
				}
				progressHolder.onmouseup = function(e){
					document.onmouseup = null;
					document.onmousemove = null;
					video.play();
					videoPlayer.setPlayProgress(e.pageX);
					videoPlayer.trackPlayProgress();
				}
			},true);
		},
		setPlayProgress: function(clickX){
			var newPercent = Math.max(0, Math.min(1, (clickX - this.findPosX(progressHolder)) / progressHolder.offsetWidth));
			video.currentTime = newPercent * video.duration;
			playProgressBar.style.width = newPercent * (progressHolder.offsetWidth) + "px";
		},
		findPosX: function(progressHolder){
			var curLeft = progressHolder.offsetLeft;
			while(progressHolder = progressHolder.offsetParent){
				curLeft += progressHolder.offsetLeft;
			}
			return curLeft;
		},
		volumeScrubbing: function(){
			volumeHolder.addEventListener('mousedown', function(){
				document.onmousemove = function(e){
					videoPlayer.setVolume(e.pageY);
				}
				volumeHolder.onmouseup = function(e){
					document.onmouseup = null;
					document.onmousemove = null;
					videoPlayer.setVolume(e.pageY);
				}
			})
		},
		setVolume: function(clickY){
			var percentage = Math.max(0, Math.min(1, (this.findPosY(volumeHolder) + volumeHolder.offsetHeight - clickY) / volumeHolder.offsetHeight));
			video.volume = percentage;
			volumeProgressBar.style.height = (percentage * volumeHolder.offsetHeight - 4) + "px";
		},
		findPosY: function(volumeHolder){
			var curTop = volumeHolder.offsetTop;
			while(volumeHolder = volumeHolder.offsetParent){
				curTop += volumeHolder.offsetTop;
			}
			return curTop;
		}
	};//创建一个包含所有方法的videoPlayer对象

	videoPlayer.init();
}(this, document))//自我调用的匿名函数，防止产生不必要的全局变量