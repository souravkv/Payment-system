const express = require('express')
const axios = require('axios')
const { Account } = require('../db')
const { default: mongoose } = require('mongoose')
const { authMiddleware } = require('../middleware')

const router = express.Router()

router.get('/balance',authMiddleware,async function(req,res){


    ///take userid

    const acc = await Account.findOne({
        userId:req.userId}
    )

   return res.json({"balance":acc.balance})







})



router.post('/transfer',authMiddleware,async function(req,res){

    const session =await  mongoose.startSession()

    session.startTransaction();





    const {amount , to} = req.body;

    const account =await  Account.findOne({
        userId:req.userId
    }).session(session)
    
    if(account.balance < amount){
        return res.status(411).json({msg:"you dont have suffucuent balance"})
    }
    
    const toAccount =await Account.findOne({
        userId:to
    }).session(session)
    
    if(!toAccount){
        await session.abortTransaction();
        return res.json("this user dosnt exist ")
    }
//8276.18
    await Account.updateOne({
        userId:to
    },{
        $inc:{
            balance:amount
        }
    }).session(session)

    await Account.updateOne({
        userId:req.userId
    },{
        $inc:{
            balance:-amount
        }
    }).session(session)
    //commit transac

    await session.commitTransaction(); 

    res.json({ msg:"tranfer chethirikunu"})

   

})

module.exports = router



    















module.exports = router 
