const { Console } = require('console');
const fs = require('fs');
const path = require('path');

console.log("Inicio de programa");

const info = fs.readFileSync('./sync/file.txt', 'utf-8');
console.log(info)
//ESCRIBIR UN ARCHIVO
console.log("Archivo creado exitosamente");
const file = fs.writeFileSync('./sync/output-sync.txt', 'Soy un archivo nuevecito :)\n');

//Agregar contenido a un archivo

fs.appendFileSync('./sync/output-sync.text', 'SOY UN CONTENIDO AGREGADO');
console.log("Archivo actualizado");


//Eliminar arhicvos 

fs.unlinkSync('./sync/output-sync.text');
console.log("Eliminado correctamente")


const fileExist = fs.existsSync('./sync/output-sync.text');
console.log(fileExist);

