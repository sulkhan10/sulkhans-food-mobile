const router = require('express').Router()
const userRouter = require('./users')
const itemRouter = require('./items')


router.get('/',(req,res)=>res.json('This Is Orchestrator Server Of Sulkhans '))
router.use('/users',userRouter)
router.use('/items',itemRouter)

module.exports=router