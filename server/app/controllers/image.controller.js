const aws = require('aws-sdk')
const { v4: uuidv4 } = require('uuid');
const s3 = new aws.S3( {
    accessKeyId:process.env.S3_ACCESS_KEY_ID,
    secretAccessKey:process.env.S3_SECRET_ACCESS_KEY,
    region:process.env.S3_REGION
})
const ImageController = {

    async upload(req,res){  
        const key = `${req.body.Type}/${uuidv4()}.${req.body.ContentType}`
        const url = await s3.getSignedUrlPromise('putObject',{
            Bucket:'blossom-bucket',
            ContentType: `image/${req.body.ContentType}`,
            Key:key
        })
        res.status(200).send({key:key,url:url})
    }

}
module.exports=ImageController;