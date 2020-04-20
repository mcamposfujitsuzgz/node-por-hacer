const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer')

//console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = porHacer.getListado(argv.completado);

        for (let tarea of listado) {
            console.log('======== Tarea ========'.green);
            console.log(tarea.descripcion);
            console.log('Completado: ' + tarea.completado);
            console.log('======================='.green);
        }
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log('== Tarea Actualizada =='.green);
        console.log(actualizado);
        console.log('======================='.green);
        break;

    case 'borrar':
        let borrada = porHacer.borrar(argv.descripcion);
        console.log('=== Tarea Borrada ====='.green);
        console.log(borrada);
        console.log('======================='.green);
        break;

    default:
        console.log('Comando desconocido');
}