
var app = require('./Config/app_config');
var db = require('./Config/db_config');

app.get('/', function(req, res){

    console.log('Version: '+ process.version);
    console.log(process.versions);

    var testUpcase = 'anderson'
    testUpcase = testUpcase[0].toUpperCase() + testUpcase.slice(1);

    var pessoa = {
              nome : 'Anderson de Carvalho',
              date : new Date('1969-12-29 22:07:44'),
              maiuscula : testUpcase
          };

    res.json(pessoa);
});
