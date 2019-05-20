const path = require('path');
const express = require ('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

//cbd
mongoose.connect('mongodb://localhost/crud')
.then(db => console.log('exito'))
.catch(err => console.log(err));
// rutas
const indexRoutes = require('./routes/index');
// settings
app.set('port', process.env.PORT || 3000);
//path.join libreria que integra el directorio
//segun el sistema operativ
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

//middlewares
app.use(morgan('dev'));
//urlencoded es para leer formularios en json
app.use(express.urlencoded({extended:false}));
//routes
app.use('/', indexRoutes);


//iniciando el servidor
app.listen(app.get('port'), () =>{
    console.log(`Escuchando en el puerto ${app.get('port')}`);
});