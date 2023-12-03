const express = require('express');
const router = express.Router();
const CartController = require('../controllers/CartController')

router.get('/getCart/:phone', CartController.getCart)
router.post('/addcartDetails', CartController.addCartDetails)
router.get('/getAllCartDetails/:idcart', CartController.getAllCartDetailsAPI)
router.put('/updateCartDetails', CartController.updateCartDetails)
router.delete('/deleteCartDetail/', CartController.deleteCartDetail)
module.exports = router;