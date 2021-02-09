function MediaPlayer(config){
    this.media = config.el;
    this.plugins = config.plugins || [];


    this._initPlugins();

  }

MediaPlayer.prototipe._initPlugins= function (){
    const player = {

        play:() => this.play(),
        pause:() => this.pause(),
        media: this.media,
        get muted(){
            return this.media.muted;
        },
        set muted(value){
            this.media.muted = value
        },
    }
}

    
  MediaPlayer.prototype.play = function(){
  this.media.play();
  }
MediaPlayer.prototype.play = function(){
  this.media.pause();
}

MediaPlayer.prototype.togglePlay = function(){

    this.media.pause();
  }
  

MediaPlayer.prototype.togllePlay = function(){
  if(this.media.pause){
    this.play()
  }else{
    this.pause();
  }
}

MediaPlayer.prototype.muted = function (){
    this.media.muted = true;
}
MediaPlayer.prototype.unmute = function (){
    this.media.unmute;
}