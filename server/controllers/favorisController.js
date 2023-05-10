const Favoris = require("../models/Favorie");
const Post = require("../models/Posts");
const User = require("../models/user");


const addFavoris = async (req,res) =>{
    
    const {postId, userId} = req.params;

    try {
        const user_Id = await User.findById(userId);
        const post = await Post.findById(postId).populate('category');
    
        if(!user_Id) return res.status(404).json({message:"user not found"});
        if(!post) return res.status(404).json({message:"post not found"});

        const existingFavoris = await Favoris.findOne({user: userId, post:postId});
        if(existingFavoris) return res.status(409).json('post already exist');
        
        const favoris = await new Favoris({user: userId,post: post});

        await favoris.save();
        await User.findByIdAndUpdate(userId, {$push: {favoris: favoris._id}}, {new: true})
      
        
        res.status(201).json({message:"favoris added"});
    } catch (error) {
        res.status(404).json(error.message);
    }
}


const removeFavoris = async (req, res) => {
    const favorisId = req.params.postId;
    const user_id = req.params.userId

    const favoris = await Favoris.findById(favorisId)
    const user = await User.findById(user_id);

    try {
        if(!user) return res.status(404).json({message:'user not found'})
        if(!favoris) return res.status(404).json({message:'post not found'});

        await Favoris.findByIdAndDelete(favorisId)
        await User.findByIdAndUpdate(favoris.user, {$pull: {favoris: favoris._id}})

        res.status(200).json({ message: "Post removed from favorite" });

    } catch (error) {
        res.status(500).json(error.message);
    }

}

const getFavoris = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id).populate('favoris');
        if (!user) return res.status(404).send('user not found');

       const favoris = await Favoris.find({user: id});

       //Récupérer les données des posts favoris avec les informations de la catégorie associée
       const posts = await Post.find({ _id: { $in: favoris.map((favori) => favori.post) } })
         .populate('category');   

        res.status(200).json({ favoris: posts });
    } catch (error) {
        res.status(500).json(error);
    }
}




module.exports = {addFavoris, removeFavoris, getFavoris};