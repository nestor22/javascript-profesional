function AutoPlay(){}

AutoPlay.prototype.run = function (player){
    if(!player.muted.){
        playera.muted();
    }
    player.play();

}

export default AutoPlay;
