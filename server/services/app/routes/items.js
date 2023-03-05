const ItemController = require('../controllers/ItemController')

const router = require('express').Router()

router.get('/',ItemController.allItems)
router.get('/:itemId',ItemController.getItemById)
router.post('/',ItemController.createItem)
router.delete('/:itemId',ItemController.deleteItem)
router.put('/:itemId',ItemController.editItem)

module.exports=router