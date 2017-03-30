const getarticles = require('../app/dbutils/selectarticles.js');

module.exports =(request, reply)=> {
    var id = -1;
    getarticles(id, (err, inform) => {
        reply.view('admin', {
            p: inform
        });
    });
}
