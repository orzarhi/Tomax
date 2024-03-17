import { CardDisplay, InputSearch, SkeletonCard } from '@/components';
import { useNews } from '@/hooks/use-news';
import { NewsType } from '@/types/news';

export const Home = () => {
    const { data, isLoading } = useNews();

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
                placeholder="Search for a news article..."
                className='w-3/5 px-4 py-2 mt-4 mb-8'
            />
            <article className='flex flex-wrap gap-2'>
                {data?.map((article: NewsType) => (
                    <CardDisplay
                        key={article.id}
                        title={article.title}
                        description={article.description}
                        urlToImage={article.urlToImage}
                    />
                ))}
            </article>
        </main>
    )
}
