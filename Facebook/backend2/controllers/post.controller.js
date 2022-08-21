const mongoose = require('mongoose');


const Post = mongoose.model('Post');


module.exports.addpost = (req, res) => {
    var post = new Post();
    post.status = req.body.status;
    post.email = req.body.email;

   console.log(req.body)
    // user.verified = false;
    post.save(
        (err, doc) =>{
           
        if(!err){
            res.status(200).send(doc);
        }
        else{
            if(err.code == 11000)
                res.status(422).send(['Duplicate email address found']);
            else
                return next(err);
 
        }
        } 
        )
}



module.exports.getpost = (req, res) => {
    console.log("hello");
    const q =  Post.find({email:{$ne:req.params.email}}).limit(15);
    q.exec((error,doc)=> {
        if(!error)
        {
            res.send(doc);
        }
        else{
            console.log(error);
        }
    })
    console.log(res.data)
}

