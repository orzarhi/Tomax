import { getNews } from "@/api/news";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useNews = (storedValue: string) =>
    useInfiniteQuery({
        queryKey: ['news'],
        queryFn: ({ pageParam }: any) => getNews({ page: pageParam, category: storedValue }),
        initialPageParam: 1,
        getNextPageParam: (pages) => {
            const { totalPages, currentPage } = pages;
            return totalPages ? currentPage + 1 : undefined
        },
        staleTime: Infinity
    })
