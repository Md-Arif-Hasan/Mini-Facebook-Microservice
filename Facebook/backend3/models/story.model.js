const mongoose = require('mongoose');

var storySchema = new mongoose.Schema({
    
    url:{
            type: String
    },      
    
    email: {
        type:String
    }, 
    
    time:{
        type: String
    }
});

mongoose.model('Story', storySchema);