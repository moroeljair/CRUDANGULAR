const express = require('express');
const app = express();
const morgan =  require('morgan')
const { mongoose } = require('./database');

app.use(morgan('combined'));

//declaracion
const cors=require('cors');


//SETTINGS
app.set('nombreApp', 'Aplicación para manejo de gastos SRI')
app.set('puerto', process.env.PORT || 3000)
app.set('view engine', 'ejs')

//MIDDLEWARE
app.use(morgan('dev'));
app.use(express.json());
//uso del middleware conexion con frontend
app.use(cors({origin:'http://localhost:4200'}));


//ROUTERS
app.use('/api/gastos',require('./routes/server.routes'));

app.listen(app.get('puerto'), ()=>{
    console.log('Nombre de la App:',app.get('nombreApp'));
    console.log('Puerto del servidor:',app.get('puerto'));
});
