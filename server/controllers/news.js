const { api, AxiosError } = require('../lib/connect');
const { paginateAndRespond } = require('../lib/utils');
const { newsValidator } = require('../lib/validators/news');
const { z } = require('zod');
const { v4: uuidv4 } = require('uuid');

const getNews = async (req, res) => {
    try {
        const { page } = req.params;

        const { data } = await api.get('sports&from=2024-03-17&sortBy=publishedAt');
        const items = data.articles;

        // Add an id to each item
        items.forEach((item) => item.id = uuidv4());

        const pageSize = 10;
        const paginatedResponse = paginateAndRespond(items, page, pageSize);

        return res.status(200).json(paginatedResponse);
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
        // Add an id to each item
        items.forEach((item) => item.id = uuidv4());

        const pageSize = 10;
        const paginatedResponse = paginateAndRespond(items, page, pageSize);

        return res.status(200).json(paginatedResponse);

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