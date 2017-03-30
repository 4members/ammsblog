
const home = require ('./handlers/home.js')
const admin = require ('./handlers/admin.js')
const insert = require ('./handlers/insert.js')
const addarticle = require ('./handlers/addarticle.js')
const deleteart = require ('./handlers/deletearticle.js')
const editart = require ('./handlers/editarticle.js')
const updateart = require ('./handlers/updatearticle.js')
const searchart = require ('./handlers/searchart.js')
const readmore = require ('./handlers/readmore.js')
const getarticles = require('./app/dbutils/selectarticles.js');
var test ;
  module.exports =
    [
      {
    method:"GET",
    path:"/assets/bundle.js",
    handler:(req,res) => {
      res.file('./dist/assets/bundle.js')
    }
  },
      {
        method: 'GET',
        path: '/',
        handler: home
    },
    {
      method: 'GET',
      path: '/script/index.js',
      handler:(req,reply)=> {
        var id = -1;
        getarticles(id, (err, inform) => {
          test = inform;
          console.log(inform);
            reply.view('index.js', {
                p: test
            });
        });
        return p;
      }
  },

    {
        method: 'GET',
        path: '/admin',
        handler: admin
    },
    {
        method: 'GET',
        path: '/addarticle',
        handler: addarticle
    },

    {
        method: 'POST',
        path: '/insertarticle',
        handler: insert
    },
  {
        method: 'GET',
        path: '/deletearticle/{id}',
        handler: deleteart
    },
    {
        method: 'GET',
        path: '/editarticle/{id}',
        handler:editart
    },

    {
        method: 'POST',
        path: '/updatearticle/{id}',
        handler:updateart
    },

  {
        method: 'GET',
        path: '/readmore/{id}',
        handler: readmore
    },
    {
        method: 'GET',
        path: '/search/{val}',
        handler:searchart
    },

    {
        method: 'GET',
        path: '/template/style/{file*}',
        handler: {
            directory: {
                path: 'template/style'
            }
        }
    }
  ]
