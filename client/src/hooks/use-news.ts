import { chooseCategory, getNews } from "@/api/news"
import { useInfiniteQuery, useMutation } from "@tanstack/react-query"
import { toast } from "sonner"

export const useNews = () =>
    useInfiniteQuery({
        queryKey: ['news'],
        queryFn: ({ pageParam }: any) => getNews(pageParam),
        initialPageParam: 1,
        getNextPageParam: (pages) => {
            const { totalPages, currentPage } = pages;
            return totalPages ? currentPage + 1 : undefined
        },
        staleTime: Infinity
    })

export const useChooseCategory = () =>
    useMutation({
        mutationKey: ["choose-category"],
        mutationFn: (payload: { category: string, page: number }) => chooseCategory(payload),
        onError: (err: Error) => {
            toast.error(err.message)
        }
    })
