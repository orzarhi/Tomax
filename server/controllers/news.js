const { api, AxiosError } = require('../lib/connect');
const { newsValidator } = require('../lib/validators/news');
const { z } = require('zod');

const getNews = async (req, res) => {
    try {
        const { data } = await api.get('sports&from=2024-03-17&sortBy=publishedAt');
        const items = data.articles;

        const page = 1;
        const pageSize = 10;
        const startIndex = (page - 1) * pageSize;
        const endIndex = page * pageSize;

        const paginatedItems = items.slice(startIndex, endIndex);


        return res.status(200).json({
            items: paginatedItems,
            currentPage: page,
            totalPages: Math.ceil(items.length / pageSize)
        });
    } catch (err) {
        console.log(err)
        if (err instanceof AxiosError) {
            const status = err.response.status;

            return res.status(status).json({ message: `Axios Error: ${err}` });
        }
        return res.status(500).json({ message: 'Internal Server Error' });
    }

}

const chooseCategory = async (req, res) => {
    try {
        const { category, page } = newsValidator.parse(req.body);

        const { data } = await api.get(`${category}&from=2024-03-17&sortBy=publishedAt`);
        const items = data.articles;

        const pageSize = 10;
        const startIndex = (page - 1) * pageSize;
        const endIndex = page * pageSize;

        const paginatedItems = items.slice(startIndex, endIndex);

        return res.status(200).json({
            items: paginatedItems,
            currentPage: page,
            totalPages: Math.ceil(items.length / pageSize)
        });

    } catch (err) {
        console.log(err)
        if (err instanceof z.ZodError) {
            return res.status(400).json({ message: err.errors[0].message });
        }

        if (err instanceof AxiosError) {
            const status = err.response.status;

            return res.status(status).json({ message: `Axios Error: ${err}` });
        }
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = {
    chooseCategory,
    getNews
}