// requireds 
//const multiplicar = require('./multiplicar/multiplicar');
// Para no tener que escribir multiplicar.crearArchivo para llamar al metodo podemos usar la destructuracion a nuestro favor

const { crearArchivo } = require('./multiplicar/multiplicar');

//const fs = require('express'); // Paquete que no es nativo de node
//const fs = require('./fs'); // Paquete que creamos nosotros mismos escribimos

// Tabla de multiplicas 
let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];

console.log( base );
// Con el comando process.argv podemos ver todos los parametros enviados desde la consola, estos valores los devuelve en un array
//console.log( process.argv[2] );

// Importar archivos 

crearArchivo( base )
    .then( archivo => console.log(`Archivo creado: ${ archivo }`))
    .catch( err => console.log( err ));


/* 
npm init - install - uninstall - package.json */
/* 
    TODO: npm init: Comando para crear el package.json
          npm install + ...: Comando para instalar un nuevo paquete
          npm uninstall: Comando para eliminar un paquete
          package.json: Tiene toda la informacion de las dependencias de los paquetes
          npm install: Instala todos los paquetes de un proyecto en node
*/