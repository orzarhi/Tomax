const axios = require('axios');
const { AxiosError } = axios;

const api = axios.create({
    baseURL: `${process.env.BASE_URL}${process.env.SECRET_KEY}`,
    withCredentials: true,
    headers: {
        "Content-type": "application/json",
    },

})

module.exports = { api, AxiosError };