const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    
    name: {
        type:String,required:true,
    },
    email: {
        type:String,required:true,
    },
    password: {
        type:String,required:true,
    },
    pic: {
        type: String,
        required: true,
        default: "https://www.alchinlong.com/wp-content/uploads/2015/09/sample-profile.png",
    },
    
},{
    timestamps: true,
});
const User = mongoose.model("User", userSchema);
module.exports = { User };