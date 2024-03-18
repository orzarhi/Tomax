import axios from './axios';

export const getNews = async (page: number) => {
    try {
        const { data } = await axios.get(`/get-news/${page}`);
        return data;
    } catch (err) {
        console.error(err);
    }
}

export const chooseCategory = async (request: { category: string, page: number }) => {
    try {
        const { data } = await axios.post('/choose-category', request);
        return data;
    } catch (err) {
        console.error(err);
    }
}