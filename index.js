const express=require("express")
const app=express()
const products=require("./products")
const mongoose=require("mongoose")
const cors=require("cors")
const bodyparser=require("body-parser")
const Content=require("./schema")

console.log(Content)
app.use(bodyparser.urlencoded({
    extended:true
}))

app.use(bodyparser.json())


app.use(cors())

mongoose.connect("mongodb+srv://UzmaAkhtarShivalli:Uzma@cluster0.l8iihhw.mongodb.net/firstdb?retryWrites=true&w=majority")
    .then(()=>{
        console.log("Mongodb Connected successfully")
    })
    .catch((err)=>{
        console.log(err)
    })


app.get("/",(req,res)=>{
        res.send("server started successfully")
})
app.post("/add",(req,res)=>{

})

app.post("/add",(req,res)=>{
    console.log("data from front end",req.body)
    const {name,passcode}=req.body
    const newData=new Content({
        name,passcode
    })
    newData.save("added")
})
app.get("/retrieve",(req,res)=>{
    Content.find()
        .then(found=>res.json(found))
})

app.get("/products",(req,res)=>{
    res.json(products)
})
app.get("/name",(req,res)=>{
    res.send("codegnan IT Solutions")
}
)


app.listen(5000,()=>console.log("server is started"))