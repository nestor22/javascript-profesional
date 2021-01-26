17 // los genradores se declraran con *             
 16 // son funciones estrella                        
 15 // permiten que sean parados y recuerdan sus     
 14 // propidades y estados                          
 13 // no pueden ser ejecutados por lo que son       
 12 // llamados desde otra funcion                   
 11
 10 function* simpleGenerator(){                     
  9     console.log('Generador start')               
        yield; // permite el generar y frenar un valor
        yield 1;
        yield 2;
    
  8     console.log('generator end')                 
  7
  6 }
  5 const gen = simpleGenerator();                   
  1                                                  
18  // se continua despues del yield con gen.next


function* idMaker(){
    let id =1;
    while(true){
        yield id;
        id = id+1;
        
    }
}