const getarticles = require('../app/dbutils/selectarticles.js');

module.exports = (request, reply) => {
   var id = encodeURIComponent(request.params.id);
   getarticles(id, (err, inform) => {
       reply.view('editarticle', inform[0]);
   });
}
