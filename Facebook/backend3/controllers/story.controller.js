const mongoose = require('mongoose');
const crypto = require('crypto');
const Story = mongoose.model('Story');





var Minio = require('minio')

var minioClient = new Minio.Client({
    endPoint: '127.0.0.1',
    port: 9000,
    useSSL: false,
    accessKey: 'VhM5Ih7d3CAmmTFR',
    secretKey: '72kY9Vv3WpCWUKay5LeqpdVXzLvxxyXq'
});


module.exports.addstory = async(req, res) => {
    console.log("storyyyy ");
        var url = crypto.randomUUID();
        console.log(url);
        console.log(req.body);


        minioClient.fPutObject('story', url, req.file.path, function(err, objInfo) {
            if(err) {
                return console.log(err)
            }
            console.log("Success", objInfo.etag, objInfo.versionId)
        })


        const newStory = new Story({
            email: req.body.email,
            url: url
        });
    
        try {
            const savedStory = await newStory.save();
            res.send({ story: 'Uploaded Successfully' });
        } catch (err) {
            res.status(400).send(err);
        }


    

}



module.exports.getday = (req, res, next) => {
   
    const q =  Story.find({email:{$ne:req.params.email}}).limit(10);
    q.exec((error,doc)=> {
        if(!error)
        {
            res.send(doc);
        }
        else{
            console.log(error);
        }
    })
   // console.log(res.data)
}

