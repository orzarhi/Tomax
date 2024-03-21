import { Skeleton } from "@/components/ui/skeleton"

export const SkeletonCard = () => {
    return (
        <div className="flex flex-col mx-auto space-y-3 mt-6">
            <Skeleton className=" h-[300px] md:h-[380px] w-[250px]  md:w-[350px] rounded-xl bg-zinc-300" />
            <div className="space-y-2 mx-auto ">
                <Skeleton className="h-4 w-[180px] md:w-[250px] bg-zinc-400/60 -mt-16" />
                <Skeleton className="h-4 w-[180px] md:w-[250px] bg-zinc-400/60" />
            </div>
        </div>
    )
}
