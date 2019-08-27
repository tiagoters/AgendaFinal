'use strict'

//Importa os modulos (node_modules)
const app = require('../src/app'); //Refrencia a app na pasta /src/app.js
const debug = require('debug')('nodestr:server');
const http = require('http');

//Cria a porta, utilizando por padrão a 3000 
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

//Cria o servidor
const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
console.log('API rodando na porta ' + port);

 //Nromalizando a porta do servidor
 function  normalizePort(val){
    const port = parseInt(val, 10);
 
    if (isNaN(port)){
        return val;
    }

    if (port >= 0){
        return port
    }

    return false;
}

function onListening(){
    const addr = server.address();
    const bind = typeof addr =='string'
    ? 'pipe' + addr
    : 'port' + addr.port
    debug('listening on ' +bind);
}

function onError(error){
    if (error.syscall !== 'listen'){
         throw error;         
    }

    const bind = typeof port =='string' ? 
      'pipe ' + port :
      'port ' + port;

      switch (error.code){
          case 'EACCES':
                console.error(bind + ' requer privilegios elevado')
                process.exit(1);
                break; 
          case 'EADDRINUSE':
               console.error(bind + ' requisição está em uso')
               process.exit(1);
               break;
            default:
                throw error; 
      }   
    debug('listening on ' +bind);
    
}
