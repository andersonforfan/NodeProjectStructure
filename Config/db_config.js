
var mongoose = require('mongoose');

var urlString = 'mongodb://localhost:27017/dbApi';

mongoose.connect(urlString, function(err, res){

    if(err){
      console.log('Erro ao conectar');
    }else {
      console.log('Conectado');
    }
});
