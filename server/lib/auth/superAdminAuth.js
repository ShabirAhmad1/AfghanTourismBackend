const jwt = require('jsonwebtoken')


module.exports = (req, res, next)=>{
    try{
        // console.log("HERE IN AUTH")
        const decoded = jwt.verify(req.headers.authorization.split(' ')[1], 'abc12385')
        req.userData = decoded;
        console.log("++++++++++++++++++++++++++++++")
        console.log(decoded)
        if(decoded.authorization == 'admin'){
            console.log("FROM AUTHORIZATION")
            console.log('passed')
            next();
        }
        else{
            res.status(500).json({
                msg: "not authorized"
            });
        }
    }
    catch(err){
        res.status(500).json({
            msg: "auth failed from auth"
        });
    }
}