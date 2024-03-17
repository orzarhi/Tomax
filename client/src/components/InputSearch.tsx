import { cn } from "@/lib/utils"
import { Input } from "./ui/input"

interface InputSearchProps {
    className?: string
    placeholder: string
}

export const InputSearch = ({ className, placeholder }: InputSearchProps) => {
    return (
        <Input
            className={cn('', className)}
            placeholder={placeholder}
        />
    )
}
