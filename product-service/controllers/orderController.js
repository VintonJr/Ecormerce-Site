const { response } = require('express')
const poolPromise = require('../config/poolPromise')

module.exports = {
    createOrder: async(req, res) => {
        let { product_id, user_id, product_image, product_name, price, quantity } = req.body
        try {
            let pool = await poolPromise()
            pool.request()


            .input('product_id', product_id)
                .input('user_id', user_id)
                .input('product_image', product_image)
                .input('product_name', product_name)
                .input('price', price)
                .input('quantity', quantity)
                .input('StatementType', 'Insert')
                .execute('dbo.order_queries')



            .then(results => {
                if (results.rowsAffected) {
                    res.send("Order Successful!")
                    console.log("Order Successful!")
                }
            })
        } catch (err) {
            console.log(err.message)
        }



    }
}