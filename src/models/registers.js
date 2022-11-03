 const mongoose=require("mongoose")
 const bcrypt=require("bcryptjs")
  const employeeSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    }
    ,lastname:{
        type:String,
        required:true
    }
    ,email:{
        type:String,
        required:true,
        unique:true
    }
    ,gender:{
        type:String,
        required:true
        
    }
    ,phone:{
        type:Number,
        required:true,
        unique:true
    }
    ,age:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    }
    ,confirmpassword:{
        type:String,
        required:true
    }
  })

//   we need to create a collection
//  here we have added the middleware
employeeSchema.pre("save",async function(next){
    
    if(this.isModified("password"))
    {
        // console.log(` the current password is ${this.password}`)
        this.password=await bcrypt.hash(this.password,10)
        // console.log(` the current password after hashing is ${this.password}`)
        this.confirmpassword=undefined
    }
   
    next();
})

// const SecurePassword=async (password)=>{
//     const passwordHash=await bcrypt.hash(password,10);
//     console.log(passwordHash)
// }
// SecurePassword("Asit")

const Register =new mongoose.model("Register",employeeSchema)

module.exports=Register