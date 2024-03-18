import { Spinner } from '@/components';
import { useNews } from '@/hooks/use-news';
import { NewsType } from '@/types/news';
import { format } from 'date-fns';
import { ArrowRight } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

export const Details = ({ }) => {
    const { id } = useParams();
    const navigate = useNavigate()

    const { data, isLoading } = useNews()
    console.log("🚀 ~ Details ~ data:", data)

    const itemsData = data?.pages.map((page: NewsType) => page.items).flat();

    const item = itemsData?.find((item: NewsType) => item.id === id)
    console.log(item)
    // show all content


    if (isLoading) return <Spinner className='w-12 h-12' />

    return (
        <main className="flex flex-col p-4">
            <h1 className="text-4xl font-bold">{item?.title}</h1>
            <img
                alt="Cover image"
                className="object-cover p-5 mx-auto overflow-hidden rounded-lg aspect-video"
                height={200}
                src={item?.urlToImage ?? 'https://via.placeholder.com/400x200?text=No+Image+Found'}
                width={400}
                loading='lazy'
            />
            <p className="mt-4 text-lg">{item?.description}</p>
            <p className="mt-4 text-lg">{item?.content}</p>
            <p className="mt-4 text-lg">{format(item?.publishedAt as string, 'dd/MM/yyyy')}</p>
            <ArrowRight
                size={32}
                className='mx-auto mt-24 cursor-pointer text-zinc-700 hover:text-black'
                onClick={() => navigate(-1)}
            />

        </main>
    )
}
