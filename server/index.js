const express = require('express');
const dotEnv = require('dotenv');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const ConnectDb = require('./db/db');
const postRoute = require('./routes/postRoute');
const catRoute = require('./routes/categoriesRoutes');
const authRoute = require('./routes/authRoutes');
const userRoute = require('./routes/userRoute');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(cors());
dotEnv.config();

ConnectDb();

app.use('/api/post', postRoute);
app.use('/api/categories', catRoute);
app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> console.log('Server listening on port ', PORT));