import { chooseCategory, getNews } from "@/api/news"
import { useMutation, useQuery } from "@tanstack/react-query"
import { toast } from "sonner"

export const useNews = () =>
    useQuery({
        queryKey: ["get-news"],
        queryFn: getNews
    })


export const useChooseCategory = () =>
    useMutation({
        mutationKey: ["choose-category"],
        mutationFn: (payload: { category: string, page: number }) => chooseCategory(payload),
        onError: (err: Error) => {
            toast.error(err.message)
        }
    })
