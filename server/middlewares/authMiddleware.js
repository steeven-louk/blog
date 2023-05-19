const jwt = require("jsonwebtoken");

const verifyUserToken = (req, res, next) =>{
    if(!req.headers.authorization) return res.status(403).json({msg: "Not authorized, No Token"});

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer ')){
        const token = req.headers.authorization.split(" ")[1]; // ["Bearer", "lfjglhnrsoughklsdngbshklgnsjl"]

    jwt.verify(token, process.env.JWT_TOKEN, (err, data) =>{
        if(err) return res.status(403).json({msg:"Wrong or expire token."})
        else{
            req.token = token;
            req.user = data; // data = {id: user._id}
            next();
        }
    })
    }
}


module.exports= verifyUserToken;