const mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
    
    status:{
            type: String
    },      
    
    email: {
        type:String
    }
});

mongoose.model('Post', postSchema);