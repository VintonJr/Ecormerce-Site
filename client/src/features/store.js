import { configureStore } from '@reduxjs/toolkit'
import productsreducer from './slices/productsReducer'
import productdetailreducer from './slices/productDetailReducer'


const store = configureStore({
    reducer: {
        products: productsreducer,
        detail: productdetailreducer

    }
})

export default store