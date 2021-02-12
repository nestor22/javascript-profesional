import MediaPlayer from './mediaPlayer'
import AutoPlay from './plugins/Autoplay'
	  
const video = document.querySelector("video")
const player = new MediaPlayer({el:video, plugins:[
  new AutoPlay()
]});
const button: HTMLElement = document.querySelector("button")
button.onclick= ()=>video.play;


// service worker 
//interceptan peticiones 
//guardan en cache las peteciones 
 if ('serviceWorker' in navigator ){
   navigator.serviceWorker.register('/sw.js').catch(error=>{
     console.log(error.message);
   })
 }