class MediaPlayer {
  media: HTMLMediaElement;
  plugins: Array<any>;




  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    this.initPlugins();

  }

  private initPlugins(){
    this.plugins.forEach(plugin => {
      this.plugins.run(this);
    });
  }

  play() {
    this.media.play();
  }
  togglePlay() {

    this.media.pause();
  }
  togllePlay() {
    if (this.media.pause) {
      this.play();
    } else {
      this.pause();
    }
  }
  muted() {
    this.media.muted = true;
  }
  unmute() {
    this.media.unmute;
  }
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
  this.media.pause();
}

  


