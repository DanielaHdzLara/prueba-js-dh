/*
    FORMATO DE CADA TAREA
        - titulo: string
        - status: string (
           * terminada
           * pendiente
         )
*/
const fs = require('fs')

exports.leerTareas = function () {
    /*
        En esta función debes leer y retornar las tareas registradas.
    */
   const listado = fs.readFileSync('./tareas.json', 'utf-8')
    return JSON.parse(listado)
}

exports.agregarTarea = function (tarea) {
    /*
        Registra y guarda una nueva tarea.
    */
   let tareas = exports.leerTareas();
   tareas.push(tarea);

   fs.writeFileSync('./tareas.json', JSON.stringify(tareas));
   
}

exports.filtrarTareasPorEstado = function (estado) {
    /*
        En esta función debes de leer las tareas y retornar las que tengan el estado que se
        manda en el parametro.
    */
   let tareasFilter = exports.leerTareas().filter(function(tarea){
       return tarea.status == estado;
    })
    return tareasFilter;

}