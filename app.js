
var app = require('./Config/app_config');
var db = require('./Config/db_config');

app.get('/', function(req, resp){

    console.log('Version: '+ process.version);
    console.log(process.versions);

    var pessoa = {
              nome : 'Anderson de Carvalho'
          };

    resp.json(pessoa);
});
