const Post = require("../models/Posts");
const User = require("../models/user")


const getAllUsers = async(_, res) =>{
   try {
    const users = await User.find();
    res.status(200).json({users});
   } catch (error) {
    res.json(error)
   }
}

const getUserCount = async(_, res)=>{
   try {
      const count = await User.countDocuments();
      res.status(200).send({count: count});
   } catch (error) {
      res.status(500).json({error: error});
   }
}

const getBlogCount = async(_, res)=>{
   try {
      const count = await Post.countDocuments();
      res.status(200).send({count: count});
   } catch (error) {
      res.status(500).json({error: error});
   }
}



module.exports = {getAllUsers, getUserCount,getBlogCount};