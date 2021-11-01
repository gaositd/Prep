// No cambies los nombres de las funciones.

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // La clase debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:
  

  class Usuario{
    constructor(opciones){
      this.usuario = opciones.usuario,
      this.nombre = opciones.nombre,
      this.email = opciones.email,
      this.password = opciones.password
    }
    saludar(){
      return `Hola, mi nombre es ${this.nombre}`;
    }
  }
  return Usuario;

}

function agregarMetodoPrototype(ClaseInventada) {
  // Agrega un método al `prototype` de ClaseInventada
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
  ClaseInventada.prototype.saludar = function(){
    return "Hello World!";
  }
}

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
  // Tu código:

  String.prototype.reverse = function(){
    let contenedor = "";

    for(let i = this.length - 1; i >= 0; i-- ){
      contenedor += this[i];
    }
    return contenedor;
  };
}

// ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"

  class Persona {
    constructor(/*Escribir los argumentos que recibe el constructor*/nombre, apellido, edad, domicilio) {
      // Crea el constructor:
      this.nombre = nombre,
      this.apellido = apellido,
      this.edad = edad,
      this.domicilio = domicilio
    };
}

function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada
  // Tu código:
  const persona = new Persona(nombre, apellido, edad, dir);

  return persona;
}
  
function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"
  // Tu código:

  Persona.prototype.datos = function(){
    const _datos = this.nombre +", "+ this.edad + " años";
    return _datos;
  }
}
  

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo, 
  Persona
};
