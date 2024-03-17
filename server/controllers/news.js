const { api, AxiosError } = require('../lib/connect');

const getNews = async (req, res) => {
    try {
        const { data } = await api.get();

        return res.status(200).json(data.articles.slice(0, 5));

    } catch (err) {
        if (err instanceof AxiosError) {
            const status = err.response.status;

            return res.status(status).json({ message: `Axios Error: ${err}` });
        }

        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = {
    getNews
}