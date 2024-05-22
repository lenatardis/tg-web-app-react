const baseUrl = 'https://3e9b0805ba857dfd70a9195e7ff3918f.serveo.net/api/v2/home/start_web_app/';
const domain = 'https://3e9b0805ba857dfd70a9195e7ff3918f.serveo.net/api/v2/';

const token  = 'Token 82a3586477d9ace3929bd9111e9e7955eaae4fb0';

export const getUserInfo = async (value) => {
    try {
        const response = await fetch(`${baseUrl}${value}/`, {
            method: "GET",
            headers: {
                Authorization: token,
            },
        });
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

export const getTotalBalance = async (value) => {
    try {
        const response = await fetch(`${domain}home/total_balance/${value}/`, {
            method: "GET",
            headers: {
                Authorization: token,
            },
        });
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

export const getTransactionHistory = async (value) => {
    try {
        const response = await fetch(`${domain}home/transaction_history/${value}/`, {
            method: "GET",
            headers: {
                Authorization: token,
            },
        });
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

/*export const getTokensIcon = async () => {
    try {
        const response = await fetch(`${domain}home/tokens_icon/`, {
            method: "GET",
            headers: {
                Authorization: token,
            },
        });
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}*/

export const getNetworks = async () => {
    try {
        const response = await fetch(`${domain}networks/`, {
            method: "GET",
            headers: {
                Authorization: token,
            },
        });
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

export const getTokens = async () => {
    try {
        const response = await fetch(`${domain}tokens/`, {
            method: "GET",
            headers: {
                Authorization: token,
            },
        });
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}


