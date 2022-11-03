// const mongoose=require("mongoose")
// const { $and } = require("sift")
// mongoose.connect("mongodb://localhost:27017/experiment",{
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
//     // useCreateIndex:true
// }).then(()=>{
//     console.log("connection successful")
// }).catch((error)=>{
//     console.log(error)
// })

// const shema=new mongoose.Schema({
//     name:{
//         type:String,
//         required:true,
//         lowercase:true,
//         enum:["Asit","Krishna","Vinit","Kakde"]
//     },
//     lastname:{
//         type:String,
//         required:true
//     },
//     phone:{
//         type:Number,
//         required:true
//     },
//     age:{
//         type:Number,
//         required:true
//     }
// })

// const Modelschema=mongoose.model("experiment",shema)

// const upaadteDocument=async ()=>{
//     try {
//         const result=await Modelschema.aupdate
        
//     } catch (error) {
//         console.log(error)
        
//     }
// }


// // const createDocument=async ()=>{
// //     try{
// //         const reactplaylist=new Modelschema(
// //             {
// //                 name:"Asit",
// //                 lastname:"Bakade",
// //                 phone:48,
// //                 age:49
// //             }
// //         )
// //         const reactplaylist1=new Modelschema(
// //             {
// //                 name:"Krishna",
// //                 lastname:"Bakade",
// //                 phone:48,
// //                 age:49
// //             }
// //         )
// //         const reactplaylist2=new Modelschema(
// //             {
// //                 name:"Pramod",
// //                 lastname:"Bakade",
// //                 phone:48,
// //                 age:49
// //             }
// //         )
// //         const reactplaylist3=new Modelschema(
// //             {
// //                 name:"balatkar",
// //                 lastname:"Bakade",
// //                 phone:48,
// //                 age:49
// //             }
// //         )
// //         // const result=await reactplaylist.save();
// //         // const result1=await reactplaylist1.save();
// //         // const result2=await reactplaylist2.save();
// //         // const result3=await reactplaylist3.save();
// //         // console.log(result)
// //         // console.log(result1)
// //         // console.log(result2)
// //         // console.log(result3)

// //         // inserting multiple files
// //         // const result=await Modelschema.insertMany([reactplaylist,reactplaylist1,reactplaylist2,reactplaylist3])
// //         // console.log(result)

// //         //// finding the specific values in the database
// //         // const result=await Modelschema
// //         // .find({name:"Krishna"}) // use to find tuples by condition
// //         // .select({age:1})     // use to find atributes of the tuple specifically
// //         // console.log(result)

// //         // const result=await Modelschema
// //         // .find({age:49}).select({name:1}).sort({name:-1})
// //         const result=await Modelschema                  // play with 1 and -1
// //         .find({age:49}).select({name:1}).sort({name:1})

// //         console.log(typeof(result.value))

// //     }catch(err)
// //     {
// //         console.log(err)
// //     }
// // }
// // createDocument()



// // const express=require("express")
// // const app=express()
// // const path=require("path");
// // const {json}=require("express")

// // const bcrypt=require("bcryptjs")

// // const hbs=require("hbs")
// // const mong=require("./db/conn")
// // const port=process.env.PORT||3000;

// // const static_path=path.join(__dirname,"../public")
// // const template_path=path.join(__dirname,"../template/views")
// // const partials_path=path.join(__dirname,"../template/partials")

// // app.use(express.json())
// // app.use(express.urlencoded({extended:true}))

// // app.use(express.static(static_path))
// // app.set("view engine","hbs")
// // app.set("views",template_path);
// // hbs.registerPartials(partials_path)


//  new section
const  express=require("express")
const app=express()
const path=require("path")
const {json}=require("express")
const port=3000
app.get("/",(req,res)=>{
res.render("hello world")
})
app.listen(port,console.log(`app is listenning on ${port}`))

