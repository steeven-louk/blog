const Post = require('../models/Posts');
const User = require('../models/user');


const getPostByUser = async (req, res) =>{
    const id = req.params.id
        try {
        const userBlog = await User.findById(id).sort({'createdAt':-1}).populate('post');

        if(!userBlog) return res.status(404).send('User not found');
            // const posts = await Post.filter((e)=> e._id === id);
      
       return res.status(200).send({
        username: userBlog.username,
        post: userBlog.post,
       });
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

const getUser = async (req, res) =>{
    const id = req.params.id;
    try {
        const user = await User.findById(id).populate('post');
        const {password, ...others} = user._doc;
        res.status(200).send(others);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

const addUserPhoto = async (req, res) =>{
    const id = req.params.id;
    try {
        const user = await User.findByIdAndUpdate(id, {photo:req.body.photo}, {new: true});
         await user.save();

        res.status(200).send(user);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

const addBgPhoto = async (req, res) =>{
    const id = req.params.id;
    try {
        const user = await User.findByIdAndUpdate(id, {bg_picture:req.body.bg_picture}, {new: true});
        await user.save();

        res.status(200).send(user);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}


const addToFavories = async (req, res) =>{
    const id = req.params.userId;
    const postId = await Post.findById(req.params.postId);
    const user = await User.findById(id);

    try {
        
    if(!user) return res.status(404).send('user not found, connected first');
    if(!postId) return res.status(404).json({message:"post not found"});
    
    if(user.favories.includes(postId)) return res.status(404).json({message:"Post already exists"});

    user.favories.addToSet(postId);
   const addFav = await user.save();
   res.status(200).json(addFav);

    } catch (error) {
        res.status(500).json(error);
    }

}

const removeToFavories = async (req, res) =>{
    const id = req.params.userId;
    const postId = await Post.findById(req.params.postId);
    const user = await User.findById(id);

    try {
        
    if(!user) return res.status(404).send('user not found, connected first');
    if(!postId) return res.status(404).json({message:"post not found"});
    
    if(!user.favories.includes(postId)) return res.status(404).json({message:"Post not in favorite"});

    user.favories.pull(postId);
    await user.save();
    res.status(200).json({message:"Post removed from favorite"});

    } catch (error) {
        res.status(500).json(error);
    }

}

const getFavories = async (req, res) =>{
    try {
        const id = req.params.id;
    const user = await User.findById(id).populate('favories');
    if(!user) return res.status(404).send('user not found')

    res.status(200).json({favoris:user.favories});
    } catch (error) {
        res.status(500).json(error);
    }
}




module.exports = {getPostByUser, getFavories, getUser, addBgPhoto, removeToFavories, addUserPhoto, addToFavories};