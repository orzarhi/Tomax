import { CardDisplay, InputSearch } from '@/components'
import { useNews } from '@/hooks/use-news';

export const Home = () => {
    const { data, isLoading } = useNews();

    if (isLoading) {
        return <div>Loading...</div>
    }

    console.log(data)
    return (
        <main>
            <InputSearch
                placeholder="Search for a news article..."
                className='w-3/5 px-4 py-2 mt-4 mb-8'
            />
            <div>
                <CardDisplay />
            </div>
        </main>
    )
}
