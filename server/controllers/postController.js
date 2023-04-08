const Post = require('../models/Posts')

const getAllPost = async (_, res)=>{
    const data = await Post.find().sort({'createdAt':-1}).populate('category');
    res.status(200).json({data});
}

const addPost = async(req, res) =>{
    try {
        const data = await Post(req.body);
    const saveData = await data.save();
    res.status(201).send(saveData);
    } catch (error) {
        res.status(400).send(error)
    }
}

const getPost = async(req, res) => {
    const {id} = req.params;
    try {
        const post = await Post.findById(id);
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
        const post = await Post.findByIdAndDelete(id);
        res.status(200).json(post);
    } catch (error) {
        res.status(400).json(error)
    }

}


module.exports = {getAllPost, addPost, getPost, deletePost,updatePost};