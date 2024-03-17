const { api, AxiosError } = require('../lib/connect');


const getNews = async (req, res) => {
    try {

        const { data: { data } } = await api.get('/news');

        return res.status(200).json(data);

    } catch (err) {
        if (err instanceof AxiosError) {
            const { response: { status, data: { error: { message } } } } = err;

            return res.status(status).json({ message: `Axios Error: ${message}` });
        }

        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = {
    getNews
}