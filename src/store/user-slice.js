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

    currencyInfo: [
        {name: "USDT", commercial: 0, warrants: 0, balance: 0, src: IconTether, networks: ['TRC20', 'ERC20']},
        {name: "BTC", commercial: 0, warrants: 0, balance: 1, src: IconBitcoin, networks: ['BTC']},
        {name: "LTC", commercial: 0, warrants: 0, balance: 0, src: IconLitecoin, networks: ['LTC']},
        {name: "ETH", commercial: 0, warrants: 0, balance: 3, src: IconEtherium, networks: ['ERC20']},
        {name: "BNB", commercial: 0, warrants: 0, balance: 1, src: IconSomecoin, networks: ['BSC']}
    ],


    networks: {
        "TRC20": [
            {"name": "Wallet-1", "address": "AdXn0uQbzN"},
            {"name": "Wallet-2", "address": "RdTHDQbzN"},
            {"name": "Wallet-3", "address": "RdTCVNQbzN"}
        ],
        "ERC20": [
            {"name": "Wallet-1", "address": "AdXn0dsdsds"},
            {"name": "Wallet-2", "address": "JsffLddsdf"},
            {"name": "Wallet-3", "address": "RdaHdjjdJk"}
        ],
        "BTC": [
            {"name": "Wallet-1", "address": "AdXn0dsfdsfs"},
            {"name": "Wallet-2", "address": "Jsffsfsfds"},
            {"name": "Wallet-3", "address": "Rdafafsfsd"}
        ],
        "LTC": [
            {"name": "Wallet-1", "address": "GdsfsEfsfs"},
            {"name": "Wallet-2", "address": "JGJhdhdhh"},
            {"name": "Wallet-3", "address": "KjdshdHkdkd"}
        ],
        "BSC": [
            {"name": "Wallet-1", "address": "HdkdjJdkkdk"},
            {"name": "Wallet-2", "address": "JLdjdjdHkkdk"},
            {"name": "Wallet-3", "address": "LslssKkdkdkd"}
        ]
    },

    selectedNetwork: ''
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
        },

        setNetwork(state, action) {
            state.selectedNetwork = action.payload;
        },

        updateName(state, action) {
            let {address, network, addressName} = action.payload;
            const networkWallets = state.networks[network];
            const updatedWallets = networkWallets.map(wallet => {
                if (wallet.address === address) {
                    return { ...wallet, name: addressName };
                }
                return wallet;
            });

            state.networks[network] = updatedWallets;
        }
    }
});
export default userSlice.reducer;

export const {
    setGiveCurrency,
    setGetCurrency,
    setSelectedCurrency,
    setNetwork,
    updateName
} = userSlice.actions;