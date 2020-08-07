const mongoose = require('mongoose')
const User = require('../models/user')
const bcrypt = require('bcrypt')

exports.createFirst = ()=>{
User.count({'authorization' : 'admin'},(err,count)=>{
    if(err){
        console.log(err)
        return
    }
    if(count == 0){
        console.log(count)
        let email = require('./../../config/credentials.json').email
        let password = require('./../../config/credentials.json').password
        let name = require('./../../config/credentials.json').name
           bcrypt.hash(password,10).then(function(hash) {
                
            console.log(hash)
            
            const user = new User({
                _id: new mongoose.Types.ObjectId(),
                name: name,
                email: email,
                password: hash,
                authorization: 'admin'
            });
            user.save().then(()=>{
    
                console.log(`Admin Created
                Name: ${name}
                Email: ${email}`)
    
            }).catch((err)=>{
                console.log(err)
            })
        });
    }
})
}

exports.addAdmin = (req,res)=>{
    bcrypt.hash(req.body.password,10).then(function(hash) {
        let authorizationLevel = 'junioradmin'
        if(req.body.authorizationLevel == 1){
            authorizationLevel = 'admin'
        }
        const user = new User({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            email: req.body.email,
            password: hash,
            authorization: authorizationLevel
        });
        user.save().then(()=>{
            res.send('true')
        }).catch((err)=>{
            console.log(err)
            res.status(500).json({
                Reason: "Email taken",
            });
        })
    });
}

exports.getAdmin = (req,res)=>{
    User.find({})
    .populate('','-password')
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

exports.deleteAdmin = (req,res)=>{
    User.deleteOne({_id: req.params.id},err=>{
        if(!err){
            res.send(true)
        }
    })
}
