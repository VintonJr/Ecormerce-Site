import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
    name: 'product',
    initialState:{},
    reducers:{
       
        searchproduct:(state,{payload})=>{
            return state=payload
        }
    }
})

export const {searchproduct} = searchSlice.actions
export default searchSlice.reducer;