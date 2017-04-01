const getarticles = require('../app/dbutils/selectarticles.js');
const boom = require('boom');
module.exports = (request, reply) =>{
    var id = -1;
    getarticles(id, (err, inform) => {
         reply(inform);

    });
}
