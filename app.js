const Hapi = require('hapi');
require('env2')('./.env')
const config = require('./config/index');
const routeHelloHapi =require('./routes/hello-word')

const server = new Hapi.Server();
server.connection({
    host:config.host,
    port:config.port
});

const init = async ()=>{
    server.route([
        ...routeHelloHapi
    ])
    await server.start();
    console.log(`Server runing at :${server.info.uri}`);
}

init();