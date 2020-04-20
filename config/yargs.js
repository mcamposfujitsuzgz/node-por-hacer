const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completada la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crear una tarea por hacer', { descripcion })
    .command('actualizar', 'Actualiza una tarea por hacer', { descripcion, completado })
    .command('borrar', 'Borrar una tarea por hacer', { descripcion })
    .command('listar', 'Lista las tareas', { completado })
    .help()
    .argv;

module.exports = {
    argv
}