// Importaciones
fs = require('fs');

let listadoPorHacer = [];

// Guardo en el archivo JSON las tareas por hacer.
const guardarDB = () => {
   let data = JSON.stringify(listadoPorHacer);
   fs.writeFile('db/data.json', data, (err) => {
      if( err ) throw new Error('No se pudo grabar');
   });
}


// Cargo la data del archivo JSON
const cargarDB = () => {
   try {
      listadoPorHacer = require('../db/data.json');
   } catch (e) {
      listadoPorHacer = [];
   }
}


// Escribe en el archivo JSON las tareas por hacer
const crear = (descripcion) => {

   cargarDB();

   let porHacer = {
      descripcion,
      completado: false
   };

   listadoPorHacer.push(porHacer);
   guardarDB();
   return porHacer;
}

// Muestra la data del archivo JSON
const getListado = () => {
   cargarDB();
   return listadoPorHacer;
}

// actualiza el estado desde el archivo JSON
const actualizar = (descripcion, completado = true) => {
   cargarDB();
   let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion );

   if( index >= 0 ){
      listadoPorHacer[index].completado = completado;
      guardarDB();
      return true;
   }else{
      return false;
   }
}

const borrar = (descripcion) => {
   cargarDB();
   let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion );

   if( index >= 0 ){
      listadoPorHacer.splice(index, 1);
      guardarDB();
      return true;
   }else{

      return false;
   }
}

// Exporto las funciones al app.js
module.exports = {
   crear,
   getListado,
   actualizar,
   borrar
}
