const express = require('express');
const dotEnv = require('dotenv');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');

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

const storage = multer.diskStorage({
    destination: (req,file, cb)=>{
        cb(null, './assets/posts/')
    },
    filename:(req,file, cb)=>{
        cb(null,file.originalname)
        console.log(file)
    }
});


const upload_post = multer({storage: storage});

app.use('/api/post', postRoute);
app.use('/api/categories', catRoute);
app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);

app.use("/assets/posts", express.static(path.join(__dirname,"/assets/posts")));

app.post('/api/upload-post', upload_post.single("img-post"),(req,res)=>{
    res.send("Image uploaded");
    res.status(200).json("file has been upload");
});



const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> console.log('Server listening on port ', PORT));