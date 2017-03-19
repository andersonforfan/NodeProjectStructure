
var mongoose = require('mongoose');

var urlString = process.env.MONGODB_URL || 'mongodb://localhost:27017/dbApi';

mongoose.connect(urlString, function(err, res) {

    if(err){
      console.log('Erro ao conectar');
    }else {
      console.log('Conectado');
    }
});
