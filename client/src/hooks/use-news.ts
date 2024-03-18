import { getNews } from "@/api/news";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useNews = (chooseCategory: string) =>
    useInfiniteQuery({
        queryKey: ['news'],
        queryFn: ({ pageParam }: any) => getNews({ page: pageParam, category: chooseCategory }),
        initialPageParam: 1,
        getNextPageParam: (pages) => {
            const { totalPages, currentPage } = pages;
            return totalPages ? currentPage + 1 : undefined
        },
        staleTime: Infinity
    })
