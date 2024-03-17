import { Skeleton } from "@/components/ui/skeleton"

export const SkeletonCard = () => {
    return (
        <div className="flex flex-col mx-auto space-y-3">
            <Skeleton className="h-[155px] w-[350px] rounded-xl bg-zinc-300" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px] bg-zinc-300" />
                <Skeleton className="h-4 w-[200px] bg-zinc-300" />
            </div>
        </div>
    )
}
