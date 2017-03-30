const deletearticle = require('../app/dbutils/deletearticle.js');

module.exports =(request, reply)=> {
    var id = encodeURIComponent(request.params.id);
    deletearticle(id, (err, inform) => {
        reply().redirect('/admin');
    });
}
