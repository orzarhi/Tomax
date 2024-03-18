const { api, AxiosError } = require('../lib/connect');
const { newsValidator } = require('../lib/validators/news');
const { z } = require('zod');

const getNews = async (req, res) => {
    try {
        const { category, page } = newsValidator.parse(req.body);



        const { data } = await api.get(`${category ?? 'sports'}&from=2024-02-17&sortBy=publishedAt`);

        const pageSize = 10;
        const startIndex = (page - 1) * pageSize;
        const endIndex = page * pageSize;

        const paginatedItems = data.articles.slice(startIndex, endIndex);

        return res.status(200).json({
            items: paginatedItems,
            currentPage: page,
            totalPages: Math.ceil(data.articles.length / pageSize)
        });

    } catch (err) {
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
    getNews
}