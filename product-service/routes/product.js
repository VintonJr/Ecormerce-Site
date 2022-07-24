const productRouter = require('express').Router();

const { createProduct, updateProduct, viewProducts, getProduct, deleteProduct ,searchProduct} = require('../controllers/productController')

productRouter.post('/createProduct', createProduct)

productRouter.put('/updateProduct', updateProduct)
productRouter.get('/search', searchProduct)

productRouter.get('/product/:product_name', getProduct)

productRouter.get('/viewProduct', viewProducts)

productRouter.delete('/product/:product_name', deleteProduct)

module.exports = { productRouter };