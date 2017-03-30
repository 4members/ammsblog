
const home = require ('./handlers/home.js')
const admin = require ('./handlers/admin.js')
const insert = require ('./handlers/insert.js')
const addarticle = require ('./handlers/addarticle.js')
const deleteart = require ('./handlers/deletearticle.js')
const editart = require ('./handlers/editarticle.js')
const updateart = require ('./handlers/updatearticle.js')
const searchart = require ('./handlers/searchart.js')
const readmore = require ('./handlers/readmore.js')
  module.exports =
    [
      {
        method: 'GET',
        path: '/',
        handler: home
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
