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
const favorisRoute = require('./routes/favorisRoute');
// const verifyUserToken = require('./middlewares/authMiddleware');

const app = express();


app.use(morgan('dev'));
app.use(bodyParser.json({limit:"50mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "50mb", extended:true }));
app.use(express.json());
app.use(cors());
dotEnv.config();

ConnectDb();

const Poststorage = multer.diskStorage({
    destination: (req,file, cb)=>{
        cb(null, './assets/posts/')
    },
    filename:(req,file, cb)=>{
        cb(null,file.originalname)
        console.log(file)
    }
});

const Profilestorage = multer.diskStorage({
    destination: (req,file, cb)=>{
        cb(null, './assets/profile/')
    },
    filename:(req,file, cb)=>{
        cb(null,file.originalname)
        console.log(file)
    }
});

const bg_profilestorage = multer.diskStorage({
    destination: (req,file, cb)=>{
        cb(null, './assets/profile/bg_picture/')
    },
    filename:(req,file, cb)=>{
        cb(null,file.originalname)
        console.log(file)
    }
});


const upload_post = multer({storage: Poststorage});
const upload_profile = multer({storage: Profilestorage});
const upload_bg_profile = multer({storage: bg_profilestorage});

app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/post', postRoute);
app.use('/api/favoris', favorisRoute);
app.use('/api/categories', catRoute);

app.use("/assets/posts", express.static(path.join(__dirname,"/assets/posts")));
app.use("/assets/profile", express.static(path.join(__dirname,"/assets/profile")));
app.use("/assets/profile/bg_picture", express.static(path.join(__dirname,"/assets/profile/bg_picture")));

app.post('/api/upload-post', upload_post.single("img-post"),(req,res)=>{
    res.send("Image uploaded");
    res.status(200).json("file has been upload");
});

app.post('/api/upload-profile',upload_profile.single('img-profil'), (_, res)=>{
    res.send("Profile uploaded");
    res.status(200).json("profile has been uploaded");
});

app.post('/api/upload-bg_profile',upload_bg_profile.single('bg-picture'), (_, res)=>{
    res.send("bg-picture uploaded");
    res.status(200).json("bg-picture has been uploaded");
});



const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> console.log('Server listening on port ', PORT));