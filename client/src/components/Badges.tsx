import { Dispatch, SetStateAction } from 'react';
import { Button } from "./ui/button";

interface BadgesProps {
    setChooseCategory: Dispatch<SetStateAction<string>>
    chooseCategory?: string
}

export const Badges = ({ setChooseCategory, chooseCategory }: BadgesProps) => {
    const categoryList = [
        { value: 'technology', className: 'text-blue-800 bg-blue-100 badge hover:bg-blue-200' },
        { value: 'science', className: 'text-green-800 bg-green-100 badge hover:bg-green-200' },
        { value: 'health', className: 'text-yellow-800 bg-yellow-100 badge hover:bg-yellow-200' },
        { value: 'sports', className: 'text-red-800 bg-red-100 badge hover:bg-red-200' },
        { value: 'entertainment', className: 'text-indigo-800 bg-indigo-100 badge hover:bg-indigo-200' },
        { value: 'business', className: 'text-purple-800 bg-purple-100 badge hover:bg-purple-200' },
        { value: 'politics', className: 'text-pink-800 bg-pink-100 badge hover:bg-pink-200' }
    ];


    const handleCategory = (category: string) => setChooseCategory(category);

    return (
        <div className='flex flex-wrap gap-4'>
            {categoryList.map(({ value, className }, i) => (
                <Button
                    key={i}
                    onClick={() => handleCategory(value)}
                    className={className}
                    disabled={chooseCategory === value}
                >
                    {value}
                </Button>
            ))}
        </div>
    );
};
