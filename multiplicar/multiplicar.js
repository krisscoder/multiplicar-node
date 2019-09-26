const fs = require('fs'); //pack nativo de Node para escribir aerchivos
const colors = require('colors'); //importa pack para usar colores en consola

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject(`El valor introducido en ${base} o en ${limite} no es un numero.`);
            return;
        } else {
            let data = '';
            for (let i = 1; i <= limite; i++) {
                data += `${base} * ${i} = ${base * i}\n`;
            }
            resolve(data);
        }
    });
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero.`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else {
                let archivo = `tabla${base}.txt`;
                resolve(`Archivo creado: ${archivo.green}`)
            }
        });

    })
}

//module es un objeto automatico de Node
module.exports = {
    crearArchivo,
    listarTabla
}