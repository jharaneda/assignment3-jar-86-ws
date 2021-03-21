var express = require('express')
var router = express.Router()

var shoppingController = require('../controllers/shoppingControllerJar86.js')

router.get('/', shoppingController.getCartJar86)
router.get('/totals', shoppingController.getTotals)
router.post('/', shoppingController.addItemJar86)
router.delete('/', shoppingController.removeItemJar86)
router.post('/checkout', shoppingController.checkout)
router.get('/inventoryJar86', shoppingController.getInventory)

module.exports = router;