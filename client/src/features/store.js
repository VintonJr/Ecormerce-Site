import { configureStore } from '@reduxjs/toolkit'
import  productsreducer  from './slices/productsReducer'

const store= configureStore({
    reducer: {
        products: productsreducer,
        
    }
})

export default store