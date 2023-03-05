const ItemController = require('../controllers/ItemController')

const router = require('express').Router()

router.get('/',ItemController.findAllItem)
router.post('/',ItemController.createItem)
router.put('/:id',ItemController.updateItem)
router.get('/:id',ItemController.findItemById)
router.delete('/:id',ItemController.deleteItemById)

module.exports=router