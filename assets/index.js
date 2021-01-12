const video = document.querySelector("video")
      const button = document.querySelector("button")

	  function MediaPlayer(config){
		    this.media = config.el;
	  }
		
	  MediaPlayer.prototype.play = function(){
      this.media.play();
	  }
    MediaPlayer.prototype.play = function(){
      this.media.pause();
    }
    MediaPlayer.prototype.togllePlay = function(){
      if(this.media.pause){
        this.play()
      }else{
        this.pause();
      }
    }
	 
const player = new MediaPlayer({el:video});

      button.onclick= ()=>video.play;