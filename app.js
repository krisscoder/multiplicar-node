//const fs = require('express'); //packs externos
//const fs = require('./');

//importo config para yargs
const argv = require('./config/yargs').argv;
const colors = require('colors');
//importo funciones desde JS externo
const { crearArchivo } = require('./multiplicar/multiplicar')
const { listarTabla } = require('./multiplicar/multiplicar')


let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(archivo => console.log(archivo.green))
            .catch(e => console.log(e));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(data => console.log(data))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}


//precess es un objeto automatico de Node
//lo uso para pasar un parametro por command line
//por ej: node app.js --base
//let argv2 = process.argv;
//console.log(process.argv);


// let parametro = argv[2];
// let base = parametro.split('=')[1];