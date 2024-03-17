import React from 'react'

export const Badges = () => {
    return (
        <div className='flex flex-wrap gap-4'>
            <span className='px-2 py-1 text-blue-800 bg-blue-100 rounded-md'>Technology</span>
            <span className='px-2 py-1 text-green-800 bg-green-100 rounded-md'>Science</span>
            <span className='px-2 py-1 text-yellow-800 bg-yellow-100 rounded-md'>Health</span>
            <span className='px-2 py-1 text-red-800 bg-red-100 rounded-md'>Sports</span>
            <span className='px-2 py-1 text-indigo-800 bg-indigo-100 rounded-md'>Entertainment</span>
            <span className='px-2 py-1 text-purple-800 bg-purple-100 rounded-md'>Business</span>
            <span className='px-2 py-1 text-pink-800 bg-pink-100 rounded-md'>Politics</span>
        </div>
    )
}
