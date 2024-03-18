import axios from './axios';

export const getNews = async (request: { category: string, page: number }) => {
    const { category, page } = request;
    try {
        const { data } = await axios.get(`/get-news/${page}/${category}`);
        return data;
    } catch (err) {
        console.error(err);
    }
}
