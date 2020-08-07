const mongoose = require('mongoose')
const Cuisine = require('../models/cuisine')

exports.getcuisines = (req,res)=>{
    if(!req.params.limit){
        req.params.limit = 10;
    }
    if(!req.params.page){
        req.params.page = 0;
    }
    req.params.limit = parseInt(req.params.limit);
    req.params.page = parseInt(req.params.page)
        Cuisine.find({})
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
exports.getcuisine = (req,res)=>{
    Cuisine.findOne({_id : req.params.id}).populate('createdBy').exec((err,data)=>{
        if(err){
            console.log(err)
            res.status(500).send('failed')
        }
        else{
            res.send(data)
        }
    })
}
exports.addcuisine = (req,res)=>{
    console.log('====================================================================')
    console.log(req.body)
    const cuisine = new Cuisine({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        description: req.body.description,
        images: req.body.images,
        ingredients: req.body.ingredients,
        createdBy: req.userData._id
       })
       cuisine.save().then((obj)=>{
        Cuisine.findById(obj._id).populate('createdBy').exec((err,data)=>{
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
exports.updatecuisine = (req,res)=>{
    Cuisine.findById({_id: req.params.id}).then((obj)=>{
        if(obj == null){
            res.status(500).send({
                msg: "no such id / authorization"
            })
        }
        else if(obj.createdBy == req.userData._id || req.userData.authorization == 'admin'){

            Cuisine.findOneAndUpdate({_id: req.params.id}, 
                {title: req.body.title,
                description: req.body.description,
                images: req.body.images,
                ingredients: req.body.ingredients,
                createdBy: req.userData._id}
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
exports.deletecuisine = (req,res)=>{
    Cuisine.findById({_id: req.params.id}).then((obj)=>{
        if(obj == null){
            res.status(500).send({
                msg: "no such id / authorization"
            })
        }
        else if(obj.createdBy == req.userData._id || req.userData.authorization == 'admin'){

            Cuisine.deleteOne({_id: req.params.id}, function (err) {
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
