
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const CardDisplay = () => {
    return (
        <Card className="w-full max-w-sm mx-auto">
            <div className="p-4">
                <CardHeader className="pb-6">
                    <CardTitle>Introducing Shimmer</CardTitle>
                    <CardDescription>A beautiful new design framework</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Published on March 17, 2024</p>
                    <img
                        alt="Cover image"
                        className="object-cover overflow-hidden rounded-lg aspect-video"
                        height={200}
                        src="https://fakeimg.pl/350x200/ff0000/000"
                        width={400}
                    />
                    <p className="w-full max-w-lg truncate">
                        Shimmer is a stunning new framework for creating expressive and elegant designs. With its sleek components
                        and delightful interactions, Shimmer makes it easy to craft web experiences that shine.
                    </p>
                </CardContent>
            </div>
        </Card>
    )
}

