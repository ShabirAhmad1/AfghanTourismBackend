const mongoose = require('mongoose')
const View = require('../models/view')

exports.getviews = (req,res)=>{
    if(!req.params.limit){
        req.params.limit = 10;
    }
    if(!req.params.page){
        req.params.page = 0;
    }
    req.params.limit = parseInt(req.params.limit);
    req.params.page = parseInt(req.params.page)
    View.find({})
        .populate('createdBy')
        .sort({createdAt: 'desc'})
        .skip(req.params.page > 0 ? ( ( req.params.page - 1 ) * req.params.limit ) : 0)
        .limit(req.params.limit)
        .then(obj=>{
                console.log(obj)
                    res.status(200).send(
                        obj
                    )
                }).catch(err=>{
                    console.log(err)
                    res.status(500).send(
                        {msg : "ERROR"}
                    )
                })
}
exports.getview = (req,res)=>{
    View.findOne({_id : req.params.id}).populate('createdBy').exec((err,data)=>{
            if(err){
                console.log(err)
                res.status(500).send('failed')
            }
            else{
                res.send(data)
            }
        })
}
exports.addView = (req,res)=>{
    const post = new View({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        description: req.body.description,
        images: req.body.images,
        createdBy: req.userData._id,
        location: {
            lon: req.body.lon,
            lat: req.body.lat
          },
       })
       post.save().then((obj)=>{
        View.findById(obj._id).populate('createdBy').exec((err,data)=>{
            if(err){
                console.log(err)
                res.status(500).send('failed')
            }
            else{
                res.send(data)
            }
        })
       }).catch((err)=>{
           console.log(err)
           res.send(err)
       })
}
exports.updateView = (req,res)=>{
    View.findById({_id: req.params.id}).then((obj)=>{
        if(obj == null){
            res.status(500).send({
                msg: "no such id / authorization"
            })
        }
        else if(obj.createdBy == req.userData._id || req.userData.authorization == 'admin'){

            View.findOneAndUpdate({_id: req.params.id}, 
                {title: req.body.title,
                description: req.body.description,
                images: req.body.images}
                , {upsert:true,new : true}, function(err, doc){
                if (err){
                    console.log(err)
                    return res.send(500, { error: "FAILED" });
                } 
                return res.send(doc);
            });
        }
        else{
            console.log(obj)
            res.status(500).send({
                msg: "failed authorization"
            })
        }
    }).catch((err)=>{
        console.log(err)
        res.send(500, { error: "FAILED" })
    })
    
}
exports.deleteView = (req,res)=>{
    View.findById({_id: req.params.id}).then((obj)=>{
        if(obj == null){
            res.status(500).send({
                msg: "no such id / authorization"
            })
        }
        else if(obj.createdBy == req.userData._id || req.userData.authorization == 'admin'){

            View.deleteOne({_id: req.params.id}, function (err) {
                if(err){
                    console.log(err)
                    res.status(500).send({
                        msg: "FAILED"
                    })
                }
                res.send(true)
              })
        }
        else{
            console.log(obj)
            res.status(500).send({
                msg: "failed authorization"
            })
        }
    }).catch((err)=>{
        console.log(err)
        res.send(500, { error: "FAILED" })
    })
    
}

