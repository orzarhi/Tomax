import { Badges, CardDisplay, InputSearch, SkeletonCard } from '@/components';
import { useDebounce } from '@/hooks/use-debounce';
import { useChooseCategory, useNews } from '@/hooks/use-news';
import { NewsType } from '@/types/news';
import { useState } from 'react';

export const Home = () => {
    const [searchText, setSearchText] = useState<string>('')

    const debouncedSearch = useDebounce(searchText);
    const { mutate: chooseCategory, data, isPending } = useChooseCategory();
    const { data: news, isLoading } = useNews();


    const filteredData = news?.items?.filter((item: NewsType) => {
        return item.title.toLowerCase().includes(debouncedSearch.toLocaleLowerCase())
    })
    const isDataEmpty = !filteredData?.length && !isLoading && !isPending;

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
            {!isDataEmpty && <Badges chooseCategory={chooseCategory} />}
            {!isDataEmpty ? <h1 className='my-4 text-4xl font-bold'>News</h1> : <h1 className='mt-12 text-3xl font-medium'>No News Found ☹</h1>}
            <article className='flex flex-wrap gap-2'>
                {filteredData?.map((item: NewsType) => (
                    <CardDisplay
                        key={item.id}
                        item={item}
                    />
                ))}
            </article>
        </main>
    )
}
