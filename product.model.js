import mongoose from "mongoose";
const product_schema=new mongoose.Schema({
  product_name:{type:String},
  category:{type:String},
  description:{type:String},
  price:{type:String},
  stock:{
      size1:{type:String},
      size2:{type:String},
      size3:{type:String},
      size4:{type:String},
      size5:{type:String},
      size6:{type:String},
      size7:{type:String},
      size8:{type:String},
      size9:{type:String},
      size10:{type:String},
      size11:{type:String},
  },
  banner:{type:String},
  images:{type:Object}
})

export default mongoose.model.Products||mongoose.model("products",product_schema)