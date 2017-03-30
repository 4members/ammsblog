const updatearticle = require('../app/dbutils/updatearticle.js');
const editvalues = require('../app/utils/editvalues.js');

module.exports = (request, reply)=> {
   var arr = editvalues(request);
   updatearticle(arr, (err, inform) => {
       reply().redirect('/admin');
   });
}
