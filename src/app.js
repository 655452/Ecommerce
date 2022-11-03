const express=require("express")
const app=express()
const path=require("path");
const {json}=require("express")

const bcrypt=require("bcryptjs")

const hbs=require("hbs")
const mong=require("./db/conn")
const port=process.env.PORT||3000;

const static_path=path.join(__dirname,"../public")
const template_path=path.join(__dirname,"../template/views")
const partials_path=path.join(__dirname,"../template/partials")

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static(static_path))
app.set("view engine","hbs")
app.set("views",template_path);
hbs.registerPartials(partials_path)
// console.log(path.join(__dirname,"../public"))

const Register=require("./models/registers")
const Product=require("./models/adminProducts")

app.get("/",(req,res)=>{
    // res.send("Hello from the  asit")
    res.render("index")
})

app.get("/register",(req,res)=>{
    // res.send("Hello from the  asit")
    res.render("register")
})

app.post("/register",async (req,res)=>{
    try {
        const password=req.body.password;
        const cpassword=req.body.confirmpassword;
        
        if(password===cpassword)
        {
            const registerEmployee=new Register({
                firstname:req.body.firstname,
                lastname:req.body.lastname,
                email:req.body.email,
                password:password,
                confirmpassword:cpassword,
                age:req.body.age,
                phone:req.body.phone,
                gender:req.body.gender


            })

          const registered=  await registerEmployee.save();

          res.status(201).render("index")
        }
        else{
            res.send("password are not matching")
            
        }


        
    } catch (error) {
        res.status(400).send(error)
        
    }
   
})

app.get("/login",(req,res)=>{
    res.render("login")
})
app.post("/login",async (req,res)=>{
    try {
        
        const email1=req.body.email
        const password1=req.body.password
        const result=await Register.findOne({email:email1})
     
        const  passwordMatch=await bcrypt.compare(password1,result.password)

        console.log(passwordMatch)
       
        
        if(passwordMatch===true)
        {
            res.render("index")
        }
        else{
            res.render("login")
        }
        
    } catch (error) {
        console.log(error)
        res.send(error)
        
    }
    
    
})
app.get("/purchase",(req,res)=>{
    res.render("purchase")
})

// Admin section
// app.get("/admin/:name",async(req,res)=>{
    
//      console.log(req.params.name)
//      const name=await Register.findOne({firstname:req.params.name})
//      console.log(name.firstname)
//     // res.send(`hello Admin ${name}`)
//     const obj={
//         name:"asit",
//         age:78,
//         tax:"45"
//     }
//     res.render("admin",{name})
// })

app.get("/adminlogin",(req,res)=>{
    res.render("adminlogin")
})
app.post("/adminlogin",async(req,res)=>{
    try {
        
        
        const email1=req.body.email
        const password1=req.body.password
        const result=await Register.findOne({email:email1})
     
        const  passwordMatch=await bcrypt.compare(password1,result.password)

        console.log(passwordMatch)
       
        
        if(passwordMatch===true)
        {
           res.render("admin",{result})
        }
        else{
            res.render("index")
        }
        
    } catch (error) {
        console.log(error)
        res.send(error)
        
    }
    
        res.render("admin")
    })

app.post("/admin",async(req,res)=>{
    console.log(req.body)
     const main=  req.body
     const productAdded =new Product({
       title:req.body.card_title,
       price:req.body.price

    })
    const product=  await productAdded.save();

    console.log(product.title)
    const result=await Product.find()
    console.log(result)
     const new_card=result
        try {
            // res.status(400).send(req.body.card_title,req.body.price)
            res.render("purchase",{new_card})
        } catch (error) {
            res.send(error)
        }
 })


app.listen(3000,()=>
{
 console.log(` running port on the ${port}`)
})