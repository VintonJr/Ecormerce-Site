import { configureStore } from '@reduxjs/toolkit'
import productsreducer from './slices/productsReducer'
import productdetailreducer from './slices/productDetailReducer'
import searchproductreducer from './slices/searchReducer'


const store = configureStore({
    reducer: {
        products: productsreducer,
<<<<<<< HEAD
        detail: productdetailreducer

=======
        detail:productdetailreducer,
        product:searchproductreducer
        
        
>>>>>>> cad86d44d965bce574ce7c32322b3534f615dc10
    }
})

export default store