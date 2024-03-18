import { getNews } from "@/api/news"
import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner"

export const useNews = () =>
    useMutation({
        mutationKey: ["news"],
        mutationFn: (payload: { category: string, page: number }) => getNews(payload),
        onError: (err: Error) => {
            toast.error(err.message)
        }
    })
