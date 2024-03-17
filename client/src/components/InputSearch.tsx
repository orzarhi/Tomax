import { cn } from "@/lib/utils"
import { Input } from "./ui/input"
import { Dispatch, SetStateAction } from "react"

interface InputSearchProps {
    className?: string
    placeholder: string
    setSearchText: Dispatch<SetStateAction<string>>
}

export const InputSearch = ({ className, placeholder, setSearchText }: InputSearchProps) => {
    return (
        <Input
            className={cn('', className)}
            placeholder={placeholder}
            onChange={({ target }) => setSearchText(target.value)}
        />
    )
}
