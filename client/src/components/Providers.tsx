import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ReactNode, useState } from 'react'
import { Toaster } from 'sonner'

interface ProvidersProps {
    children: ReactNode
}

export const Providers = ({ children }: ProvidersProps) => {
    const [queryClient] = useState(() => new QueryClient())
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            {children}
            <Toaster />
        </QueryClientProvider>
    )
}
