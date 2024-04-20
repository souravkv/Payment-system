const { JWT_SECRET} = require('./config')
const jwt = require('jsonwebtoken')

const authMiddleware = (req,res,next)=>{
    const autho = req.headers.authorization

if(!autho || !autho.startsWith('Bearer ')){
    return res.status(411).json({msg:"some issue"})
}

    const token = autho.split(' ')[1]
     
    
    try{
        const decoded = jwt.verify(token,JWT_SECRET)

        req.userId = decoded.userId
        next()

    }
    catch(err){
        res.status(411).json({msg:"error in ccooodeee"})
    }


}

module.exports = {authMiddleware}