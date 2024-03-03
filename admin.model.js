import mongoose from "mongoose";
const admin_schema=new mongoose.Schema({
    username:{type:String},
    email:{type:String},
    phone:{type:String},
    password:{type:String},
    confirmpassword:{type:String}
})

export default mongoose.model.Admins||mongoose.model("admin",admin_schema)