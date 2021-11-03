// No cambies los nombres de las funciones.

function invocarCallback(cb) {
  // Invoca al callback `cb`
  // Tu código:
  cb(invocarCallback);
}

function operacionMatematica(n1, n2, cb) {
  // Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  // Devolver lo que retorne el ejecutar el callback pasándole como argumentos los números recibidos.
  // Tu código:
  cb(n1 * n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  // Tu código:
  const resultado = numeros.reduce((acum, numero) => {
    return (acum += numero);
  });
  cb(resultado);
}

function forEach(array, cb) {
  // Itera sobre el array "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada elemento el arreglo)
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    cb(array[i]);
  }
}

function map(array, cb) {
  // Itera sobre cada elemento de "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  // Tu código:
  let nuevoArreglo = [];

  nuevoArreglo = array.map(elemento => {
    return elemento * elemento;
  });

  return nuevoArreglo;
}

function filter(array) {
  // Filtrar todos los elementos del array que comiencen con la letra "a".
  // Devolver un nuevo array con los elementos que cumplen la condición
  // Tu código:
  const nuevoArreglo = array.filter((dato) => {
    if (dato[0] === "a") {
      return dato;
    }
  });

  return nuevoArreglo;
}

// ---- Ejercicios de Repaso ----

function deObjetoArray(objeto) {
  // Escribe una función que convierta un objeto en un arreglo, donde cada elemento representa
  // un par clave-valor.
  // Ejemplo:
  /* objeto({
      D: 1,
      B: 2,
      C: 3
     }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  // Tu código:

  nuevoArreglo = Object.entries(objeto);
  return nuevoArreglo;
}

function numberOfCharacters(string) {
  // La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  // en formato par clave-valor.
  // Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  let cont = 0;
  let letra = "";
  let obj = {};
  let aux = "";
  let letrasArreglo = []

  const arregloString = Array.from(string);
  
  arregloString.forEach((dato)=>{
    if(!letrasArreglo.includes(dato)){
      letrasArreglo.push(dato);
    }
  });
  
  arregloString.sort();
  letrasArreglo.sort();
  for (let i = 0; i < letrasArreglo.length; i++) {
    for (let j = 0; j < arregloString.length; j++) {
      if(letrasArreglo[i] === arregloString[j]){
        cont += 1;
      }
    }
    obj[letrasArreglo[i]] = cont;
    cont = 0;
  }

  return obj;
}

function capicua(numero) {
  // Escribe una función, la cual recibe un número y determina si es o no capicúa.
  // La misma debe retornar: "Es capicua" si el número se lee igual de
  // izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  // Tu código:

  let Numero = numero.toString();
  let aux = "";
  for (let i = Numero.length - 1; i > -1; i--) {
    aux = aux + Numero[i];
  }

  if (numero === parseInt(aux)) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}

function deleteAbc(cadena) {
  // Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  // y devuelva la versión modificada o la misma cadena, en caso de no contener dichas letras.
  // Tu código:
  let resultado = "";

  const arregloString = Array.from(cadena);
  
  for (let i = 0; i < arregloString.length; i++) {
    if (
      arregloString[i] !== "a" &&
      arregloString[i] !== "b" &&
      arregloString[i] !== "c"
    ) {
      resultado += arregloString[i];
    }
  }
  return resultado;
}

function buscoInterseccion(arreglo1, arreglo2) {
  // Existen dos arrays, cada uno con cierta cantidad de números. A partir de ello, escribir una función que permita
  // retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // Aclaración: los arreglos no necesariamente tienen la misma longitud
  // Tu código:

  let nuevoArreglo = [];

  for (let i = 0; i < arreglo1.length; i++) {
    for (let j = 0; j < arreglo2.length; j++) {
      if (arreglo1[i] === arreglo2[j]) {
        nuevoArreglo.push(arreglo2[j]);
      }
    }
  }

  return nuevoArreglo.sort((a, b) => {
    return a - b;
  });
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter,
  deObjetoArray,
  numberOfCharacters,
  capicua,
  deleteAbc,
  buscoInterseccion,
};
