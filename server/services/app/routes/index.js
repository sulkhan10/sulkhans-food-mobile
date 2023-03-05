const router = require('express').Router()
const itemRouter = require('./items')

router.get('/',(req,res)=>res.json('This Is App Server Of Sulkhans '))

router.use('/items',itemRouter)

module.exports=router