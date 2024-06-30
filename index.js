//import library express
const express = require('express');

//import dotenv
require ('dotenv').config();

//import database
const sequelize = require('./utils/database');

//import jadwalmodel
require('./models/jadwalmodel');

//import jadwalroute
const jadwalroutes = require('./routes/jadwalroute');

const app = express();

app.use(express.json());

//jalankan route
app.use('/api/jadwal',jadwalroutes);

const PORT = process.env.PORT || 5000;

sequelize.authenticate()
.then(()=>{
    sequelize.sync().then(()=>{
    console.log('database berhasil disambungkan');
    app.listen(
        PORT,
        console.log(`server running on port ${PORT}`)
    );

    })
   
})
.catch(() =>console.log('database tidak tersambung'));






