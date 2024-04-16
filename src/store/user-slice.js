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
            {"name": "Wallet-1", "address": "AdXn0uQbzNdss"},
            {"name": "Wallet-2", "address": "RdTHDQbzNdsds"},
            {"name": "Wallet-3", "address": "RdTCVNQbzNdsds"}
        ],
        "ERC20": [
            {"name": "Wallet-1", "address": "AdXn0dsdsdsdsds"},
            {"name": "Wallet-2", "address": "JsffLddsdfdsddw"},
            {"name": "Wallet-3", "address": "RdaHdjjdJkwdw"}
        ],
        "BTC": [
            {"name": "Wallet-1", "address": "AdXn0dsfdsfswdw"},
            {"name": "Wallet-2", "address": "Jsffsfsfdsdwdwe"},
            {"name": "Wallet-3", "address": "Rdafafsfsddwdw"}
        ],
        "LTC": [
            {"name": "Wallet-1", "address": "GdsfsEfsfsdwdw"},
            {"name": "Wallet-2", "address": "JGJhdhdhhdwdw"},
            {"name": "Wallet-3", "address": "KjdshdHkdkddqdq"}
        ],
        "BSC": [
            {"name": "Wallet-1", "address": "HdkdjJdkkdkdqdqw"},
            {"name": "Wallet-2", "address": "JLdjdjdHkkdkdqd"},
            {"name": "Wallet-3", "address": "LslssKkdkdkddqdq"}
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
            let { address, addressName } = action.payload;
            console.log(address, addressName);

            Object.keys(state.networks).forEach(network => {
                const updatedWallets = state.networks[network].map(wallet => {
                    if (wallet.address === address) {
                        return { ...wallet, name: addressName };
                    }
                    return wallet;
                });

                state.networks[network] = updatedWallets;
                console.log(updatedWallets);
            });
        },

        createWallet (state, action) {
            let {address, network, name} = action.payload;

            // just for demo purposes
            function generateRandomAddress(baseAddress) {
                const randomString = Math.random().toString(36).substring(2, 8);
                return `${baseAddress}-${randomString}`;
            }

            const randomAddress = generateRandomAddress(address);
            let newWallet = {name: name, address: randomAddress};
            state.networks[network] = [...state.networks[network], newWallet];
        }
    }
});
export default userSlice.reducer;

export const {
    setGiveCurrency,
    setGetCurrency,
    setSelectedCurrency,
    setNetwork,
    updateName,
    createWallet
} = userSlice.actions;