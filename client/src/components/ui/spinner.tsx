export const Spinner = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="w-32 h-32 border-t-2 border-b-2 border-gray-900 rounded-full animate-spin"></div>
            <span className='mt-5 font-medium'>Loading...</span>
        </div>
    )
}


