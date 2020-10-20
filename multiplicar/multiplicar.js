// Requireds
const fs = require('fs'); // Esta libreria ya existe en node
const colors = require('colors');


let listarTabla = ( base, limite = 10) => {

    console.log('============================');
    console.log(`Tabla de ${ base }`.red);
    console.log('============================');

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }`);
    }

}

let crearArchivo = ( base, limite = 10) => {
    return new Promise( ( resolve, reject ) => {

        if ( !Number(base)) {
            reject(`La base: ${ base } no es un numero`);
            return;
        }
        
        let data = '';


        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base  * i }\n`;
        }
        
        // Requerir paquete 
        
        fs.writeFile(`./tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
          
            if (err) 
                reject( err )
            else 
                resolve(`tabla-${ base }`)
            console.log(`El archivo tabla-${ base }-al-${ limite } ha sido creado`.rainbow);
        });
        
    });
}

// Exportamos el archivo para que se pueda acceder de forma grobal
module.exports = {
    crearArchivo,
    listarTabla
}