var cloudinary = require('cloudinary').v2
cloudinary.config({
  cloud_name: 'dmqxw5kdc',
  api_key: '848222857133348',
  api_secret: 'Eh0LS1jPEcbU7vs9JB28WaDJVn4'
})

exports.Upload = (req,res)=>{
    cloudinary.uploader.upload(req.body.image).then((obj)=>{
        res.send(obj.secure_url)
    }).catch((err)=>{
        res.status(500).send('failed')
    })
}