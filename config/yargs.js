const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer',{
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de tarea por hacer'
        }
    })
    .command('actualizar', 'Actualiza el estado completado de una tare',{
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de tarea por hacer'
        },
        completado: {
            alias: 'c',
            default: true,
            desc: 'Marca como completado la tarea'
        }
    })
    .help()
    .argv

module.exports = {
    argv
}    