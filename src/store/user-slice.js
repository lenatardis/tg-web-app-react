import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: [
        {currency: "eur", total: "27 378,00", sign: '€'}
    ],
    exchange:
        {give: 'ETH', get: 'BTC'},

    selectedCurrencyWallet: {name: "USDT", commercial: 0, warrants: 0, balance: 0}
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setGiveCurrency(state, action) {
            state.exchange.give = action.payload;
        },

        setGetCurrency(state, action) {
            state.exchange.get = action.payload;
        },
    }
});

export default userSlice.reducer;

export const {
    setGiveCurrency,
    setGetCurrency
} = userSlice.actions;