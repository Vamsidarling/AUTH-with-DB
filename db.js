const mongoose = require("mongoose")
 const Schema = mongoose.Schema
const ObjectId = mongoose.ObjectId
 const User = new Schema(
    {
        name : String,
        email : String,
        password : String,
        fname : String,
        lname : String,
        purchasecourse :
        [{
            type: Schema.Types.ObjectId,
            ref : "Courses"
        }],
        userId : ObjectId
    })
    const UserModel = mongoose.model("User", User,"User")

    module.exports = {
        UserModel : UserModel,
    }