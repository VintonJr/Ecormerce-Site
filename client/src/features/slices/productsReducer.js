import { createSlice } from '@reduxjs/toolkit'

const productsSlice = createSlice({
    name: 'products',
    initialState:[],
    reducers:{
        addproducts: (state, {payload})=>{
            return state= payload
        }
    }
})

export const {addproducts} = productsSlice.actions
export default productsSlice.reducer;