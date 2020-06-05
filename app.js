const argv = require('./config/yargs').argv;
const colors = require('colors')
const { crear,guardarDB,getListado,actualizar,borrar } = require('./por-hacer/por-hacer')
let comando = argv._[0];

switch( comando ) {
    case 'crear':
        let tarea = crear(argv.descripcion);
        guardarDB();
        console.log(tarea);
        
        break;

    case 'listar':
        let listado = getListado();
        for ( let tarea of listado){
            console.log('=======Por Hacer======='.green);
            console.log(tarea.desc);
            console.log('Estado: ', tarea.completado);
            console.log('======================='.green);          
            
        }
        break;

    case 'actualizar':
        let actualizado = actualizar(argv.descripcion, argv.completado)
        break;

    case 'borrar':
        borrar(argv.descripcion);
        break;    

    default:
                    
}