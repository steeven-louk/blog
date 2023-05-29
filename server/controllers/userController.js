const Post = require('../models/Posts');
const User = require('../models/user');
const fs = require('fs');


const getPostByUser = async (req, res) => {
    const id = req.params.id
    try {
        const userBlog = await User.findById(id).sort({ 'createdAt': -1 }).populate('post');

        if (!userBlog) return res.status(404).send('User not found');
        // const posts = await Post.filter((e)=> e._id === id);

        return res.status(200).send({
            username: userBlog.username,
            post: userBlog.post,
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findById(id).populate('favoris');
        console.log('userServer', user);
        const { password,isAdmin, ...others } = user._doc;
        res.status(200).send(others);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const addUserPhoto = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findByIdAndUpdate(id, { photo: req.body.photo }, { new: true });
        await user.save();

        res.status(200).send(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const addBgPhoto = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findByIdAndUpdate(id, { bg_picture: req.body.bg_picture }, { new: true });
        await user.save();

        res.status(200).send(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const  updateUser = async (req, res) =>{
    const userId = req.params.userId;
    
    try {
        const user = await User.findById(userId);
        if(!user) return res.status(404).send('user not found');

                // Supprime l'image associée du user
                if (user.photo) {

                await fs.unlink(`./assets/profile/${user.photo}`, (err) => {
                    if (err) throw err;
                    console.log(' was deleted');
                });
            }

                if (user.bg_picture) {

                await fs.unlink(`./assets/profile/bg_picture/${user.bg_picture}`, (err) => {
                    if (err) throw err;
                    console.log(' was deleted');
                });
                }

        const update = await User.findByIdAndUpdate(user, {$set: req.body}, {new: true});
        await update.save();
        await user.save();

        res.status(200).json({update, message:"information modifier avec success"});
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const deleteUser = async(req, res) =>{
    try {
        const id = req.params.userId;
        const user = await User.findById(id);

        if(!user) return res.status(404).json({message: "User not found"});

        // vérification si l'utilisateur est autorisé à supprimer ce compte
        // if(user._id.toString() !== req.user._id.toString()){
        //     return res.status(401).json({message:"Unauthorized"});
        // }
        if (user.photo) {

await fs.unlink(`./assets/profile/${user.photo}`, (err) => {
    if (err) throw err;
});
}
        // suppression des posts associers à l'utilisateur
        await Post.deleteMany({user: user._id});
        //  // Supprime l'image associée au post
        //  if (posts.picture) {

        //     await fs.unlink(`./assets/posts/${posts.picture}`, (err) => {
        //         if (err) throw err;
        //         console.log(' was deleted');
        //     });
        // }


        // Suppression des posts associés à l'utilisateur
        await User.findOneAndDelete({_id:user._id})
        res.json({message:"User as been removed"})

    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}




module.exports = { getPostByUser, getUser, addBgPhoto, addUserPhoto, updateUser, deleteUser };