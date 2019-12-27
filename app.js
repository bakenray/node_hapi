const Hapi = require('hapi');
require('env2')('./.env')
const config = require('./config/index');
const routeHelloHapi =require('./routes/hello-word')
const routeShops =require('./routes/shops')
const routeOrders =require('./routes/orders')
const pluginHapiSwagger = require('./plugins/hapi-swagger')

const server = new Hapi.Server();
server.connection({
    host:config.host,
    port:config.port
});

const init = async ()=>{
    await server.register([
        ...pluginHapiSwagger
    ])
    server.route([
        ...routeHelloHapi,
        ...routeShops,
        ...routeOrders
    ])
    await server.start();
    console.log(`Server runing at :${server.info.uri}`);
}

init();