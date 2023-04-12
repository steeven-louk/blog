const User = require("../models/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Register = async (req, res) =>{
    const {username, password, email} = req.body;
    
    const existingUser = await User.findOne({email});

    if(!existingUser) {
        try {

            if(username =="" || password =="" || email == ""){
              return  res.status(403).send("required fields are missing");
            }

            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hashSync(password, salt)
            const addUser = await User({
                username,
                email,
                password: hash,
            });
         
            await addUser.save();
            res.status(201).send("user successfully registered");
        } catch (error) {
            res.status(400).json(error.message);
        }
    } else{
        res.status(401).json({message:'user as ready exist'});
        return;
    }
}

const Login = async (req, res) =>{

    try {
        const {email} = req.body
            const existingUser = await User.findOne({email})
        if(!existingUser) return res.status(404).send('password or email dont match');
        
        const compare = await bcrypt.compareSync(req.body.password, existingUser.password );
        if(!compare) res.status(404).send('password or email dont match');
        
        const {password,isAdmin, ...info} = existingUser._doc;
        const token = await jwt.sign({id:existingUser._id}, process.env.JWT_TOKEN,{expiresIn: '1d'});
        res.status(200).json({
            id:info._id,
            username:info.username,
            token
        })
      } catch (error) {
        res.status(400).json({error:error.message});
      }

}

module.exports = {Register, Login};