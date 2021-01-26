//usa levenshtein par a ahcer lastrampas

const target = {
    red: 'rojo',
    green: 'verde',
    blue: 'azul'
}

const handlrer = {

    get(obj, prop){
        if (prop in objetc){
            return obj[prop]
        }
    const suggestion  = Object.keys(obj).find(key =>{
        return Levenshteein.get(key, prop)<= 3
    })

    if(suggestion){
        console.log(`${prop} no se encontro quisiste decir la sugerencia`)
    }
    return obj[prop];

    }
    //https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Proxy


}



const p = new Proxy(target, handlrer)
//tarnger el objeto a interseptar
