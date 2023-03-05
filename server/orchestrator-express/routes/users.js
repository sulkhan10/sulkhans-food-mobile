const UserController = require('../controllers/UserController')

const router = require('express').Router()

router.get('/',UserController.findAllUser)
router.post('/',UserController.createUser)
router.get('/:id',UserController.findUserById)
router.delete('/:id',UserController.deleteUserById)

module.exports=router