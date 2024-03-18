import { Badges, CardDisplay, InputSearch, SkeletonCard, Spinner } from '@/components';
import { useDebounce } from '@/hooks/use-debounce';
import { useLocalStorage } from '@/hooks/use-localStorage';
import { useNews } from '@/hooks/use-news';
import { NewsType } from '@/types/news';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export const Home = () => {
    const [searchText, setSearchText] = useState<string>('')

    const debouncedSearch = useDebounce(searchText);

    const { ref, inView } = useInView({ threshold: 0 });

    const [storedValue, setValue] = useLocalStorage('category', 'sports')

    const { data: news, isLoading, fetchNextPage, hasNextPage, refetch, isFetching } = useNews(storedValue)

    const itemsData = news?.pages.map((page: NewsType) => page.items).flat() as NewsType[];

    const filteredData = itemsData?.filter((item: NewsType) => {
        return item.title.toLowerCase().includes(debouncedSearch.toLocaleLowerCase())
    })

    const isDataEmpty = !filteredData?.length && !isLoading;

    useEffect(() => {
        if (inView && hasNextPage && !searchText) fetchNextPage()

        if (storedValue && !inView) refetch()

    }, [inView, hasNextPage, fetchNextPage, storedValue])

    if (isLoading) {
        return (
            <div className="flex flex-wrap gap-4 p-2 mt-8">
                {Array(9).fill(0).map((_, i) => (
                    <SkeletonCard key={i} />
                ))}
            </div>
        )
    }

    return (
        <main>
            <InputSearch
                placeholder="Search Text..."
                className='w-1/2 px-4 py-2 mt-4 mb-8'
                setSearchText={setSearchText}
            />
            {!isDataEmpty && <Badges
                key={storedValue}
                setValue={setValue}
                storedValue={storedValue}
                isFetching={isFetching}
            />}
            {!isDataEmpty ? <h1 className='my-4 text-4xl font-bold'>News</h1> : <h1 className='mt-12 text-3xl font-medium'>No News Found ☹</h1>}
            <article className='flex flex-wrap gap-2'>
                {filteredData?.map((item: NewsType) => (
                    <CardDisplay
                        key={item.id}
                        item={item}
                    />
                ))}
            </article>
            {!searchText &&
                <div ref={ref}>
                    <Spinner className='w-8 h-8' />
                </div>}
        </main>
    )
}
