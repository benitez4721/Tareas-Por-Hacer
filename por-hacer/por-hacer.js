const fs = require('fs');

let listadoPorHacer = [];

const crear = (desc) => {
    cargarDB();
    let porHacer = {
        desc,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    return porHacer;
}

const guardarDB = () =>{
    
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json',data,(err) => {
        if (err){
            throw new Error('No se pudo grabar la info')
        }
    })

}

const cargarDB = () => {
    try {
        
        listadoPorHacer = require('../db/data.json');
        
    } catch (error) {
        listadoPorHacer = []
    }
}

function getListado() {
    cargarDB()
    return listadoPorHacer
}

function actualizar( desc, completado = false){
    cargarDB();

    let index =listadoPorHacer.findIndex( tarea => {
        return tarea.desc === desc
    })
    listadoPorHacer[index].completado = completado
    guardarDB();
}

function borrar(desc) {
    cargarDB();
    let index =listadoPorHacer.findIndex( tarea => {
        return tarea.desc === desc
    })
    listadoPorHacer.splice(index,1);
    guardarDB();
}
module.exports = {
    crear,
    guardarDB,
    getListado,
    actualizar,
    borrar
}