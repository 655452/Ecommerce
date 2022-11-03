const mongoose=require("mongoose")
const ProductsShema=new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            unique:true
        },
        price:{
            type:Number,
            require:true
        },
        discount:{
            type:Number,
        }
        
    }
)

const Product=new mongoose.model("adminProduct",ProductsShema)

module.exports= Product