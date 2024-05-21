const baseUrl = 'https://a280508d80ae04089db8315aed56df27.serveo.net/api/v2/home/start_web_app/';
const domain = 'https://a280508d80ae04089db8315aed56df27.serveo.net/api/v2/';

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
