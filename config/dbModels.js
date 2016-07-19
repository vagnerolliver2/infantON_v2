 
const mongoose = require('mongoose');

 const dbURI = 'mongodb://127.0.0.1/modelo-padrao';
//const dbURI = 'mongodb://vagnerolliver:teste123@ds013574.mlab.com:13574/infantonv2';


mongoose.connect(dbURI); 

mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection connected to ' + dbURI);
});
mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});
mongoose.connection.on('open', function () {
  console.log('Mongoose default connection is open');
});

process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});


mongoose.model('User', require('../modules/User/model'));
mongoose.model('Aluno', require('../modules/Aluno/molecules/aluno'));
mongoose.model('Turma', require('../modules/Turma/molecules/turma'));
mongoose.model('Funcionario', require('../modules/Funcionario/molecules/funcionario'));