import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { NewsType } from "@/types/news";
import { format } from "date-fns";
import { Link } from "react-router-dom";

interface CardDisplayProps {
    item: NewsType
}

export const CardDisplay = ({ item: { title, description, urlToImage, id, publishedAt, author } }: CardDisplayProps) => {
    return (
        <Card className="w-full max-w-sm mx-auto shadow-sm cursor-pointer hover:shadow-black/70 hover:shadow-sm">
            <Link to={`/details/${id}`}>
                <div className="p-4">
                    <CardHeader className="pb-6">
                        <CardTitle>{title}</CardTitle>
                        <CardDescription>{author}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Published on {format(publishedAt, 'MMMM, dd yyyy')}</p>
                        <img
                            alt="Cover image"
                            className="object-cover overflow-hidden rounded-lg aspect-video"
                            height={200}
                            src={urlToImage ?? 'https://via.placeholder.com/400x200?text=No+Image+Found'}
                            width={400}
                            loading='lazy'
                        />
                        <p className="w-full max-w-lg">
                            {description.slice(0, 80)}...
                        </p>
                    </CardContent>
                </div>
            </Link>
        </Card>
    )
}

