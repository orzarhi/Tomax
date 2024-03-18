const axios = require('axios');
const { AxiosError } = axios;

const api = axios.create({
    baseURL: process.env.BASE_URL,
    withCredentials: true,
    headers: {
        "Content-type": "application/json",
        "X-Api-Key": process.env.SECRET_KEY,
    },

})

module.exports = { api, AxiosError };