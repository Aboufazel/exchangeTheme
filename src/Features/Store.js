import {configureStore} from '@reduxjs/toolkit'
import ItemReducer from "@/Features/coin/ItemSlices";


const store = configureStore({
    reducer: {
      AllCoin:ItemReducer,
    }
})


export default store;