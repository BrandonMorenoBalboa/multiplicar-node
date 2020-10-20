const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
//const { argv } = require('./config/yargs');

/* Cuando vemos en las lineas de comando --algo -algo se llaman flags */
let comando = argv._[0];

switch ( comando ) {
    case 'listar':
        listarTabla( argv.base, argv.limite );
        break;
    case 'crear':
        crearArchivo( argv.base, argv.limite )
            .then( archivo => console.log(`Archivo creado: `,  colors.red(archivo )))
            .catch( err => console.log( err ));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}

