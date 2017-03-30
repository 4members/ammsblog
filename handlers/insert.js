const insertarticle = require('../app/dbutils/insertarticle.js');
const arrvalues = require('../app/utils/arrvalues.js');

module.exports = (request, reply)=> {
    var arr = arrvalues(request);
    insertarticle(arr, (err, inform) => {
        reply().redirect('/admin');
    });
}
