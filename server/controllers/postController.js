const Post = require('../models/Posts');
const User = require('../models/user');

const getAllPost = async (_, res)=>{
    const data = await Post.find().sort({'createdAt':-1}).populate('user',['username','_id']).populate('category').limit(20);
    res.status(200).json({data});
}

const addPost = async(req, res) =>{
    try {

        const existingUser = await User.findById(req.body.user);
        if(!existingUser) res.status(401).json("user not found");
        const data = await new Post(req.body);
        const saveData = await data.save();
        await existingUser.post.push(saveData);
        await existingUser.save();

    res.status(201).json(saveData);
    } catch (error) {
        res.status(400).send(error)
    }
}

const getPost = async(req, res) => {
    const {id} = req.params;
    try {
        const post = await Post.findById(id).populate('user',['username','_id']);
        res.status(200).json(post);
    } catch (error) {
        res.status(400).send(error)
    }
}

const updatePost = async(req, res) => {
    const id = req.params.id;

    try {
        const post = await Post.findByIdAndUpdate(id, {$set:req.body},{ new:true})
        res.status(201).json(post);

    } catch (error) {
        res.status(400).json(error)
        
    }
}

const deletePost = async(req, res) => {
    const id = req.params.id;

    try {
        const post = await Post.findByIdAndDelete(id).populate('user');
        await post.user.post.pull(post);
        await post.user.save();
       return res.status(200).send({message:"blog is deleted"});
    } catch (error) {
        res.status(400).json(error.message)
    }

}




module.exports = {getAllPost, addPost, getPost, deletePost,updatePost};