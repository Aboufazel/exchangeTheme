import {createAsyncThunk} from "@reduxjs/toolkit";
import {GetExchangerCoin} from "@/Api/ExchangerApi";


export const getCoin = createAsyncThunk("coin/getCoin",
    async () => {
        const response = await GetExchangerCoin()

        return response;
    });



