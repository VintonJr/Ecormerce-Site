import { createSlice } from '@reduxjs/toolkit'

const productsSlice = createSlice({
    name: 'products',
    initialState:[],
    reducers:{
        addproducts: (state, {payload})=>{
            return state= payload
        },
        searchproducts:(state,{payload})=>{
            return state=payload
        }
    }
})

export const {addproducts,searchproducts} = productsSlice.actions
export default productsSlice.reducer;