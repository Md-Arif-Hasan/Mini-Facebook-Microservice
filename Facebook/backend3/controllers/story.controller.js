const mongoose = require('mongoose');
const crypto = require('crypto');
const Story = mongoose.model('Story');





var Minio = require('minio')

var minioClient = new Minio.Client({
    endPoint: 'storyobjectdb',
    port: 9000,
    useSSL: false,
    accessKey: 'minioadmin',
    secretKey: 'minioadmin'
});


module.exports.addstory = async(req, res) => {
    console.log("storyyyy ");
        var url = crypto.randomUUID() + '.png';
        console.log(url);
        console.log(req.body);


    minioClient.makeBucket('story', 'us-east-1', function(err) {
        if (err) return console.log(err)

        console.log('Bucket created successfully');
    });


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



exports.storyInd = ((req, res) =>{
    try {
        let data;
        console.log(req.params.id);
        minioClient.getObject('story', req.params.id, (err, objStream) => {

            if(err) {
               
                return res.status(404).send({ message: "Image not found" });
            } 
            //console.log("req is " + req.params.id);
            objStream.on('data', (chunk) => {
                data = !data ? new Buffer(chunk) : Buffer.concat([data, chunk]);
            });
            objStream.on('end', () => {
                res.writeHead(200, { 'Content-Type': 'image/png' });
                res.write(data);
                res.end();
            });
        });
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error at fetching image" });
    }
});

