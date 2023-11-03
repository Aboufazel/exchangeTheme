

import{getCoin} from "./itemActions"
import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    value:null,
}



const ItemSlices = createSlice({
    name:"coin",
    initialState ,
    extraReducers: (builder)=>{
        builder.addCase(getCoin.fulfilled , (state , action) =>{
            state.value = action.payload
        })
    }
})




export default ItemSlices.reducer;