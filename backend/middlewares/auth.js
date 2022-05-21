const jwt = require('jsonwebtoken')
 
exports.checkForAccess = async(req,res)=>{
    const token = req.headers.token.split(" ")[1]
    if(!token) return res.status(400).json({message:"No token generated"})
    const result = await jwt.verify()
}