 
const mongoose = require('mongoose');

// const dbURI = 'mongodb://user:user@ds013574.mlab.com:13574/infanton';
const dbURI = 'mongodb://127.0.0.1/modelo-padrao';

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


mongoose.model('User', require('../modules/User/molecules/user'));
mongoose.model('Aluno', require('../modules/Aluno/molecules/aluno'));
mongoose.model('Curso', require('../modules/Curso/molecules/curso'));
mongoose.model('Professor', require('../modules/Professor/molecules/professorCurso'));