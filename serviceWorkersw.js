const VERSION = "V1"
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
    event.waitUntil(updateCache(request))

})




async function precache(){
//se usa api del dom caches 
    const cache = await caches.open(VERSION)
   return cache.addAll([
       '/',
       '/indles.hamtl',
       '/assets/index.js'
       '/assets/MediaPlayer.js'
       //aqui van todos los archivos que hemos escrito 
   ])


}




async function updateCache(request){
    const cach = await caches.open(VERSION);
    const response = await fetch(request)
    return cache.put(request, reponse)

}


async function cacheREsponse(request){
    const cache = await caches.open(VERSION)
    const response = await cache.match(request )
    return response || fetch(request)// se hace si el documento no tiene cacheado dl sapito 

}