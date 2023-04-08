const mongoose = require('mongoose');


const ConnectDb = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(()=>console.log('database connected successfully'))
        .catch((err)=> console.error('err :', err.message)); 
    } catch (error) {
        console.log('db', error.message);
    }
}

module.exports = ConnectDb;


