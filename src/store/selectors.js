import {createSelector} from '@reduxjs/toolkit';

export const getUser = (state) => state.user.user;

export const getGiveCurrency = (state) => state.user.exchange.give;
export const getGetCurrency = (state) => state.user.exchange.get;

export const getSelectedCurrency = (state) => state.user.selectedCurrency;

export const getCurrencyInfo = (state) => state.user.currencyInfo;

export const getSelectedCurrencyInfo = createSelector(
    [getCurrencyInfo, getSelectedCurrency],
    (currencyInfo, selectedCurrency) => currencyInfo.find(el => el.name === selectedCurrency)
);

export const getNetworks = (state) => state.user.networks;

export const getSelectedNetwork = (state) => state.user.selectedNetwork;

export const getWalletsForSelectedNetwork = createSelector(
    [getNetworks, getSelectedNetwork],
    (networks, selectedNetwork) => networks[selectedNetwork] || []
);

// Withdraw
export const getCurrencyToWithdraw = (state) => state.user.currencyToWithdraw;

export const getCurrencyToWithdrawInfo = createSelector(
    [getCurrencyInfo, getCurrencyToWithdraw],
    (currencyInfo, currencyToWithdraw) => currencyInfo.find(el => el.name === currencyToWithdraw)
);

export const getCurrencyToWithdrawNetwork = (state) => state.user.currencyToWithdrawNetwork;

export const getAmountToWithdraw = (state) => state.user.amountToWithdraw;
export const getAddressToWithdraw = (state) => state.user.addressToWithdraw;

//Deposit
export const getCurrencyToDeposit = (state) => state.user.currencyToDeposit;

export const getCurrencyToDepositInfo = createSelector(
    [getCurrencyInfo, getCurrencyToDeposit],
    (currencyInfo, currencyToDeposit) => currencyInfo.find(el => el.name === currencyToDeposit)
);

export const getCurrencyToDepositNetwork = (state) => state.user.currencyToDepositNetwork;

