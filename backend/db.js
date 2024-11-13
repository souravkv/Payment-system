//const {mongoose} = require('mongoose')
// mongodb+srv://zourv:<db_password>@cluster0.07p8rrk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const mongoose = require('mongoose')

// mongoose.connect('mongodb+srv://zourv:1CzzGtZUocFeuBmq@cluster0.07p8rrk.mongodb.net/paytmm')
mongoose.connect('mongodb+srv://zourv:1CzzGtZUocFeuBmq@cluster0.07p8rrk.mongodb.net/payytm')


const   UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    firstName:String,
    lastName:String

})

const AccountSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'

    },
    balance:Number
})

const User = mongoose.model('User', UserSchema)
const Account = mongoose.model('Account', AccountSchema)
module.exports = {User,Account};


