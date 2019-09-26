const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
}
const argv = require('yargs')
    //define argumentos (comandos) para la linea de comando
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('Crear', 'Crea un archivo TXT con la tabla', opts)
    .help()
    .argv;

//meto argv en el objeto general Module
module.exports = {
    argv
}