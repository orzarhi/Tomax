import axios from './axios';

export const getNews = async (category: string) => {
    try {
        const { data } = await axios.post(`/news/${category}`,);

        return data;
    } catch (err) {
        console.error(err);
    }
}