import { getNews } from "@/api/news"
import { useMutation } from "@tanstack/react-query"

export const useNews = () =>
    useMutation({
        mutationKey: ['news'],
        mutationFn: (category: string) => getNews(category),
    })
