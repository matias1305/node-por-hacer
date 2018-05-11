const descripcion = {
   demand: true,
   alias: 'd',
   description: "Descripcion de tarea por hacer"
};

const completado = {
   alias: 'c',
   default: true,
   desc: "Marca como completado o pendiente"
}

const argv = require('yargs')
             .command('crear', 'Crear un elemento por hacer', {descripcion} )
             .command('actualizar', 'Actualizar el estado completado de una tarea', {descripcion, completado} )
             .command('borrar', 'Borra una tarea', {descripcion} )
             .help()
             .argv;

module.exports = {
   argv
}
