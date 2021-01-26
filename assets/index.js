import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugin/AutoPlay.js'




const video = document.querySelector("video")

const player = new MediaPlayer({el:video, [
  new AutoPlay()
]);


const button = document.querySelector("button")

button.onclick= ()=>video.play;