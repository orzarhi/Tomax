import { Badges, CardDisplay, InputSearch, SkeletonCard } from '@/components';
import { useNews } from '@/hooks/use-news';
import { NewsType } from '@/types/news';

export const Home = () => {
    const { mutate: news, isPending, data } = useNews();
    console.log("🚀 ~ Home ~ data:", data)

    if (isPending) {
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
            />
            <Badges news={news} />
            <h1 className='my-4 text-4xl font-bold'>News</h1>
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
