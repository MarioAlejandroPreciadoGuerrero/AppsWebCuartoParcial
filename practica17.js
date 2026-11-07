//Mario Alejandro Preciado Guerrero 00000252940

// =====================================
// Sistema de Gestión de Tareas
// =====================================

/*
INSTRUCCIONES GENERALES:

1. Lee cuidadosamente cada sección.
2. Completa únicamente donde se indica con TODO.
3. No borres la estructura base.
4. Agrega comentarios explicando tu lógica.
5. Prueba cada función antes de continuar.
6. NO USAR INTELIGENCIA ARTIFICIAL.
*/


// =====================================
// 1. Arreglo inicial de tareas
// =====================================

/*
Cada tarea tiene:
- nombre: string
- prioridad: number (1 = alta, 2 = media, 3 = baja)
- completada: boolean
*/

const tareas = [
  { nombre: "Ir a la playa", prioridad: 1, completada: false },
  { nombre: "Estudiar JS", prioridad: 2, completada: true },
  { nombre: "Ver películas", prioridad: 3, completada: false }
];


// =====================================
// 2. Funciones
// =====================================

/*
TODO 1:
Crear una función que recorra el arreglo de tareas
y muestre en consola:
- nombre de la tarea
- estado: "Completada" o "Pendiente"
*/

// se usa un for comun para recorrer el arreglo de tareas y mostrar el nombre y estado de cada tarea con la vairable i
function mostrarTareas(lista) {
  for(let i = 0; i < lista.length; i++){
    console.log(lista[i].nombre + " - " + (lista[i].completada ? "Completada" : "Pendiente"));
  }
}


/*
TODO 2:
Crear una función flecha que retorne
solo las tareas completadas.
Usar filter.
*/

// se usa filter para filtrar las tareas completadas y se retorna el arreglo de tareas completadas
const obtenerCompletadas = (lista) => {
    tareasCompletadas = lista.filter(tarea => tarea.completada);
    return tareasCompletadas;
};


/*
TODO 3:
Crear una función flecha que retorne
solo las tareas pendientes.
Usar filter.
*/
// se usa filter para filtrar las tareas pendientes y se retorna el arreglo de tareas pendientes
const obtenerPendientes = (lista) => {
  tareasPedientes = lista.filter(tarea => !tarea.completada);
  return tareasPedientes;
};


/*
TODO 4:
Crear una función flecha que retorne
solo los nombres de las tareas.
Usar map.
*/
// se usa map para recorrer el arreglo de tareas y retornar un nuevo arreglo con solo los nombres de las tareas
const obtenerNombres = (lista) => {
     return lista.map(tarea => tarea.nombre);        
  
};


/*
TODO 5:
Crear una función que retorne
el total de tareas.
*/
// se retorna la longitud del arreglo de tareas
function contarTareas(lista) {
    return lista.length;
  
}


// =====================================
// 3. Objeto sistema
// =====================================

/*
TODO 6:
Completar los métodos usando this.tareas

- mostrarTareas: debe llamar a la función mostrarTareas
- mostrarCompletadas: debe usar obtenerCompletadas
- mostrarPendientes: debe usar obtenerPendientes
*/
// se crea un objeto sistema con las propiedades y metodos necesarios para mostrar las tareas, completadas y pendientes
const sistema = {
  tareas: tareas,

  mostrarTareas: function() {
    mostrarTareas(this.tareas);
  },

  mostrarCompletadas: function() {
    mostrarTareas(obtenerCompletadas(this.tareas));
  },

  mostrarPendientes: function() {
    mostrarTareas(obtenerPendientes(this.tareas));
  }
};


// =====================================
// 4. Condicionales
// =====================================

/*
TODO 7:

i

- Si el arreglo tareas está vacío:
  mostrar "No hay tareas"

- Si todas las tareas están completadas:
  mostrar "Todas las tareas completadas"
*/
// se usa un if para verificar si el arreglo de tareas esta vacio y mostrar un mensaje en consola
if(tareas.length === 0) {
    console.log("No hay tareas");
}
if(tareas.every(tarea => tarea.completada)) {
    console.log("Todas las tareas completadas");
}


// =====================================
// 5. Switch
// =====================================

/*
TODO 8:

Usar la variable opcion para ejecutar:

1 -> mostrar todas las tareas
2 -> mostrar tareas completadas
3 -> mostrar tareas pendientes
default -> mostrar "Opción inválida"
*/
// se usa un switch para verificar el valor de la variable opcion y ejecutar la funcion correspondiente
const opcion = 1;

switch (opcion) {
  case 1:
    sistema.mostrarTareas();
    break;

  case 2:
    sistema.mostrarCompletadas();
    break;

  case 3:
    sistema.mostrarPendientes();
    break;

  default:
    console.log("Opción inválida");
}


// =====================================
// 6. Pruebas
// =====================================

/*
TODO 9:

Llamar funciones para comprobar que todo funciona correctamente.
Usar console.log donde sea necesario.
*/

sistema.mostrarTareas();
sistema.mostrarCompletadas();
sistema.mostrarPendientes();
console.log("Total de tareas: " + contarTareas(tareas));
console.log("Nombres de las tareas: " + obtenerNombres(tareas));
