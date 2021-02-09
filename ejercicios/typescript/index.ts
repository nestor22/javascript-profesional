console.log('hello, typescript');


function add(a: number, b: number){
    return a+b;
}


//boolean 
let muted: boolean = true;

//numero s 
let numerador: number =45;
let denominador: number =5
let resultado: number = numerador/denominador;

//string
let nombre: string = 'ricarhc';
let saludo: `mellamo ${nombre}`
// los arreglos podemos decidir si es algo variado o explicito 

let people: string[] = [];
people = ["isable", "raul", "oter"]
people.push('gerardo');

//array mixto definido 
let peopleAndNumbers: Array< string | number >=[]

peopleAndNumbers.push('ricarod');
peopleAndNumbers.push(1);


//Enum -> congunto de enum que son los definidos 

enum Color{
    rojo, 
    verde, 
    azul,
}
//al setiar el tipo color solo podemos obtener objetos de esto 
let colorFavorito: Color = Color.rojo;
// el return al imprimir sera el numero 0 es como un array 

//para imprimir el color 
enum Color2{
    rojo="rojo", 
    verde="verde", 
    azul="azul",
}


//any para  cuando no se sabe que sera la variable 
let comodin: any = 'joker';
//permite setear cualquier valor despues
comodin = {type:'wildcard'}


//object 
let someObject: object = {type:'object'}


