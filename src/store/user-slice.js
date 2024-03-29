import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: [
        {currency: "eur", total: "27 378,00", sign: '€'}
    ],
    exchange:
        {give: 'ETC', get: 'BTC'}
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setGiveCurrency(state, action) {
            state.exchange.give = action.payload;
            console.log(state.exchange);
        },

        setGetCurrency(state, action) {
            state.exchange.get = action.payload;
            console.log(state.exchange);
        },
    }
});

export default userSlice.reducer;

export const {
    setGiveCurrency,
    setGetCurrency
} = userSlice.actions;