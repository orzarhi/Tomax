const axios = require('axios');
const { AxiosError } = axios;

const api = axios.create({
    baseURL: `https://${process.env.SECRET_URL}${process.env.SECRET_COMPANY}`,
    withCredentials: true,
    headers: {
        "Content-type": "application/json",
    },

})

module.exports = { api, AxiosError };