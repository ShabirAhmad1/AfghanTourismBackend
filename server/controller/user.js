const mongoose = require('mongoose')
const User = require('../models/user')
const bcrypt = require('bcrypt')



exports.login = (req,res)=>{
    console.log("here")
    User.findOne({
        email : req.body.email
    }, (err,obj)=>{
        if(err){
            res.status(500).json({
                Status : "false",
                Reason :  "Connectivity Error"             
            });
        }
        else if(obj){
            // console.log(req.body.password)
            // console.log(obj.password)
            bcrypt.compare(req.body.password, obj.password,function(err,result){
                if(result == true){
                    let userToken = obj.CreateToken()
                    // console.log(userToken)
                    res.json(userToken)
                }
                if(result == false){
                    res.status(500).json({
                        Status : "false",
                        Reason :  "Wrong Pass"             
                    });

                    if(err){
                        console.log(err)
                        res.status(500).json({
                            Status : "false",
                            Reason :  "Server"             
                        });
                    }
                }
                // console.log(result)
            })
        }
        else{
            res.status(500).send({
                Reason :  "No Such User"             
            });
        }
    }).select('+password')
}
exports.signup = (req,res)=>{
    bcrypt.hash(req.body.password,10).then(function(hash) {
        const user = new User({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            email: req.body.email,
            password: hash
        });
        user.save().then((obj)=>{
            let userToken = obj.CreateToken()
                    res.json(userToken)
        }).catch((err)=>{
            console.log(err)
            res.status(500).json({
                Reason: "Email taken",
            });
        })
    });
}