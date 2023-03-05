const UserController = require('../controllers/UserController')

const router = require('express').Router()

router.get('/',UserController.findAll)
router.post('/',UserController.createUser)
router.get('/:id',UserController.findById)
router.delete('/:id',UserController.deleteById)

module.exports=router