
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
                        className="aspect-video overflow-hidden rounded-lg object-cover"
                        height={200}
                        src="https://images.unsplash.com/photo-1612830723350-3e3d3e3e3e3e"
                        width={400}
                    />
                    <p>
                        Shimmer is a stunning new framework for creating expressive and elegant designs. With its sleek components
                        and delightful interactions, Shimmer makes it easy to craft web experiences that shine.
                    </p>
                </CardContent>
            </div>
        </Card>
    )
}

