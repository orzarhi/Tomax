import { CardDisplay, InputSearch } from '@/components'

export const Home = () => {
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
