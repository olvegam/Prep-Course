// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  retrun array[array.length-1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (i=0; i<array.length; i++) {
    array[i]+=1; 
  }
  return array; 
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento); 
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var frase = ""; 
  for (i=0; i< palabras.length; i++) {
    frase = frase + ' ' + palabras[i]; 
  }
  return frase; 
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var esta = false; 
  for (i=0; (i< palabras.length && !esta ); i++) {
    if (array[i] === elemento) esta = true; 
  }
  return esta; 
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var total = 0; 
  numeros.forEach(element => { 
    total += element    
  });
  return total; 
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var promedio = 0; 
  var numPuntajes = 0; 
  resultadosTest.forEach(element => {
    totalpuntajes += element; 
    numPuntajes++; 
  });
  if (numPuntajes > 0) {
    promedio = totalPuntajes / numPuntajes; 
  }
  return promedio; 
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  mayor = 0; 
  array.forEach(element => {
    if (element > mayor) {
      mayor = element; 
    }
  });
  return mayor; 
}


function multiplicarArgumentos(argumentos) {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (argumentos.length == 0){
    return 0;
  }
  var producto = 1; 
  array.forEach(element => {
    producto = producto * element; 
  });
  return producto; 
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var cantMayores = 0; 
  array.forEach(element => {
    if (element>18){
      cantMayores++; 
    }
  });
  return cantMayores; 
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDía === 7 || numeroDeDia ===1) {
    return "Es fin de semana"
  }
  return "Es día laboral";
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var nString = n.toString(); 
  if (nString[0] === '9'){
    return true; 
  }
  return false; 
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var iguales = false;
  if (arreglo.length > 0){
    var antElement = arreglo[0]; 
    iguales = true; 
    for (let i = 0; (i < arreglo.length && iguales); i++) {
      const element = arreglo[i];
      if (element != antElement){
        iguales = false; 
      }
    }
  }
  return iguales; 
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var mesesEncontrados = 3;
  var marzoYa = false; 
  var eneroYa = false; 
  var noviembreYa = false;  
  var nuevoArray = []; 
  for (let i = 0; (i < array.length && mesesEncontrados != 0); i++) {
    if (!eneroYa) {
      if (array[i] === 'Enero'){
        mesesEncontrados--;
        eneroYa = true;
        nuevoArray.push('Enero'); 
      }
    } 
    if (!marzoYa) {
      if (!array[i] === 'Marzo'){
        mesesEncontrados--;
        marzoYa = true; 
        nuevoArray.push('Marzo'); 
      }    
    }
    if (!noviembreYa) {
      if (!array[i] === 'Noviembre'){
        mesesEncontrados--;
        noviembreYa = true; 
        nuevoArray.push('Noviembre'); 
      }    
    }
  }
  if (mesesEncontrados === 0){
    return nuevoArray; 
  }  
  return "No se encontraron los meses pedidos"
}

function
var marzoYa = false; 
var eneroYa = false; 
var noviembreYa = false;  mayorACien(array) {
  //La función recibe un array con enteros (entre 0 y 200 && mesesEncontrados != 0). Recorrer el array y guardar en un nuevo array sólo los
  !eneroYa &&) {
    if (valores go:if (array[i] === 'Enero'){
      mesesEncontrados--;
      eneroYa = 
    }true;
    }   
  !eneroYa &&) {
  marzores !go:if (array[Marzo] === 'Enero'){
      mesesEncontrados--;
      marzoYa = true;
  }
  ()
}Ya &&) noviembrearzores !go:if (array[Noviembre] === 'Enero'){
      mesesEncontrados--;
      marzoYa = noviembre
  ()
}

if 


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
