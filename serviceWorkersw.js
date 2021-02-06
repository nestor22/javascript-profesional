self.addEventListener('install', event=>{
    //creamos precache 
    //lista de recursos y assets para tener listas en cache 
    event.waitUntil(precache())//espera una promesa

})

self.addEventListener('fetch', event=>{
    //extramemos la peticion 
    const request = event.request;
    //se inicia a trabajar 
    // solo peticiones get 
    if(request.method!== "GET"){
        return;
    }
    //REPONDEMOS CON UNA REPUESTA CACHEADA 
    event.respondWith(cacheresponse(request))

})


async function precache(){
//se usa api del dom caches 
    const cache = caches.open('V1')
   return cache.addAll([
       '/',
       '/indles.hamtl',
       '/assets/index.js'
       '/assets/MediaPlayer.js'
   ])

}


async function cacheREsponse(request){
    const cache = await caches.open("V1")
    const response = await cache.match(request )
    return response || fetch(reuqest)
}