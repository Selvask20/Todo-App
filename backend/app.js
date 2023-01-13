const express=require('express')
const app=express()
const mongoose=require('mongoose')
const url='mongodb://localhost:27017/newcurd'
const schema=require('./models/schema')
app.use(express.json())
mongoose.set({strictQuery:true})
const cors=require('cors')

app.use(cors())
mongoose.connect(url,(err)=>{
    if(err){
        console.log(err)
        console.log('error')
    }else{
        console.log('connect to DB')
    }
})
app.post('/',async(req,res)=>{
    const data=await new schema({
        name:req.body.name
    })
     data.save();
    res.json(data)
})
app.get('/',async(req,res)=>{
    const data=await schema.find()
   res.json(data)
})
app.get('/:id',async(req,res)=>{
    const data= await schema.findById(req.params.id)
    res.json(data)
})
app.put('/:id',async(req,res)=>{
    const data= await schema.findByIdAndUpdate(req.params.id)
    data.name=req.body.name
    data.save()
    res.json('successfully')
})
app.delete('/:id',async(req,res)=>{
   await schema.findByIdAndDelete(req.params.id)
   res.json('deleted')
})

app.listen(8000,()=>{
    console.log('successfully') 
})
