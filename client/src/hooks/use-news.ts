import { getNews } from "@/api/news"
import { useQuery } from "@tanstack/react-query"

export const useNews = () =>
    useQuery({
        queryKey: ['news'],
        queryFn: getNews,
    })
