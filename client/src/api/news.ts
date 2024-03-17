import axios from './axios';

export const getNews = async () => {
    try {
        const { data } = await axios.get('/news');

        return data;
    } catch (err) {
        console.error(err);
    }
}