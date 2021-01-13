function MediaPlayer(config){
    this.media = config.el;
    this.plugins = config.plugins  || [];
    this._initPlugins();
}
MediaPlayer.prototype._initPlugins = function(){
    this.plugins.forEach(plugins=>{
        plugins.run(this);
    })
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

MediaPlayer.prototype.togleMute = function(){

    if (this.media.muted){
        this.unmute()
    }else{
        this.mute()
    }
}

MediaPlayer.prototype.mute = function (){
    this.media.muted = true;
}


MediaPlayer.prototype.unmute = function (){
    this.media.muted = false;
}