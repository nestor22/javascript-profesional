
//interfaces ason las que le dan la forma a un objeto 

enum Color{
    rojo: "rojo",
    verde: "verde"
}

interface Rectangulo{

    ancho: number
    alto: number 
    color?: Color.rojo;


}



// al crea una interface se buelve un tipo 

let react: Rectangulo = {
    ancho:4,
    alto:6,
    
}

function area(r: Rectangulo){
    return r.alto * r.ancho;
}



react.toString = function(){
    return `Un Rectangulo ${this.color}`
}