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

        setSelectedCurrencyWallet(state, action) {
            const {name, commercial, warrants, balance} = action.payload;
            state.selectedCurrencyWallet = {name, commercial, warrants, balance};

        }
    }
});

export default userSlice.reducer;

export const {
    setGiveCurrency,
    setGetCurrency,
    setSelectedCurrencyWallet
} = userSlice.actions;