import axios from './axios';

export const getNews = async (request: { category: string, page: number }) => {
    try {
        const { data } = await axios.post(`/news`, request);
        return data;
    } catch (err) {
        console.error(err);
    }
}