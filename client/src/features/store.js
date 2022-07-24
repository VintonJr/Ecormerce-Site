import { configureStore } from '@reduxjs/toolkit'
import  productsreducer  from './slices/productsReducer'
import productdetailreducer from './slices/productDetailReducer'
import searchproductreducer from './slices/searchReducer'

const store= configureStore({
    reducer: {
        products: productsreducer,
        detail:productdetailreducer,
        product:searchproductreducer
        
        
    }
})

export default store