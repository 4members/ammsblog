const Hapi = require('hapi');
const server = new Hapi.Server();
const routes = require('./routes.js')
const conncrea = require('./app/dbutils/client.js');



server.connection({
    port: process.env.PORT || 8080

});



server.register([require('vision'), require('inert')], (err) => {

    server.views({
        engines: {
            html: require('handlebars')
        },
        relativeTo: __dirname,
        path: 'template',
        helpersPath: 'helpers'
    });
server.route(routes)
});



if (!module.parent) {
    server.start(function() {
        console.log("server running at localhost:8080");
    });
}
