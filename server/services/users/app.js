const express = require('express')
const app = express()
const port = process.env.PORT 
const userRouter = require('./routes/users')
const {connectDB}= require('./config/db')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/',(req,res)=>res.json('This Is Server Of Sulkhans '))
app.use('/users',userRouter)

connectDB().then(()=>{
    app.listen(port, () => {
      console.log(`Yuhuuu server MONGODB is running on port ${port}`)
    })
})