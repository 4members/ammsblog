
const search = require('../app/dbutils/search.js');

module.exports = (request, reply) => {
   var val = encodeURIComponent(request.params.val);
   search(val, (err, inform) => {
       reply.view('index',{
           p: inform
       });
   });
}
