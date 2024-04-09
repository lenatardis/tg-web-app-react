import {createSlice} from "@reduxjs/toolkit";
import IconTether from "../assets/images/tether.svg";
import IconBitcoin from "../assets/images/bitcoin.svg";
import IconLitecoin from "../assets/images/litecoin.svg";
import IconEtherium from "../assets/images/etherium.svg";
import IconSomecoin from "../assets/images/somecoin.svg";

const initialState = {
    user: [
        {currency: "eur", total: "27 378,00", sign: '€'}
    ],
    exchange:
        {give: 'ETH', get: 'BTC'},

    selectedCurrency: 'USDT',

    currencyInfo : [
        {name: "USDT", commercial: 0, warrants: 0, balance: 0, src: IconTether, networks: ['TRC20', 'ERC20']},
        {name: "BTC", commercial: 0, warrants: 0, balance: 1, src: IconBitcoin, networks: ['TRC20']},
        {name: "LTC", commercial: 0, warrants: 0, balance: 0, src: IconLitecoin, networks: ['TRC20']},
        {name: "ETH", commercial: 0, warrants: 0, balance: 3, src: IconEtherium, networks: ['TRC20']},
        {name: "BNB", commercial: 0, warrants: 0, balance: 1, src: IconSomecoin, networks: ['TRC20']}
    ],

    networks: {
        "TRC20": {
            "wallets": [
                {"name": "Wallet-1", "address": "AdXn0uQbzN"},
                {"name": "Wallet-2", "address": "RdTHDQbzN"},
                {"name": "Wallet-3", "address": "RdTCVNQbzN"}
            ]
        },
        "ERC20": {
            "wallets": [
                {"name": "Wallet-1", "address": "AdXn0uQbzN"},
                {"name": "Wallet-2", "address": "RdTHDQbzN"},
                {"name": "Wallet-3", "address": "RdTCVNQbzN"}
            ]
        }
    }
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

        setSelectedCurrency(state, action) {
            state.selectedCurrency = action.payload;
            console.log(state.selectedCurrency);
        }
    }
});

export default userSlice.reducer;

export const {
    setGiveCurrency,
    setGetCurrency,
    setSelectedCurrency,
} = userSlice.actions;