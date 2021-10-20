const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config(); 

const app = express();


app.use(bodyParser.json());
app.use(cors());


mongoose.connect(process.env.MONGO_DB, {useNewUrlParser: true}, ()=>{
    console.log('DB CONNECTED');
})

app.use('/api/tasks', require('./router/todoListRoute'));


module.exports = app;