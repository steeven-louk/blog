const express = require('express');
const dotEnv = require('dotenv');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const ConnectDb = require('./db/db');
const postRoute = require('./routes/postRoute');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
dotEnv.config();

ConnectDb();

app.use('/api/post', postRoute)

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> console.log('Server listening on port ', PORT));