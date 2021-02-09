import MediaPlayer from './mediaPlayer.js'
import AutoPlay from './plugins/Autoplay.js'
	  
const video = document.querySelector("video")
const player = new MediaPlayer({el:video, plugins:[
  new AutoPlay()
]});
const button = document.querySelector("button")
button.onclick= ()=>video.play;


// service worker 
//interceptan peticiones 
//guardan en cache las peteciones 
 if ('serviceWorker' in navigator ){
   navigator.serviceWorker.register('/sw.js').catch(error=>{
     console.log(error.message);
   })
 }