import { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from './ui/button';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(_: Error): ErrorBoundaryState {
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo): void {
        console.log(error, info);
    }

    render(): ReactNode {
        if (this.state.hasError) {

            return (
                <div className='h-screen flex flex-col justify-center items-center gap-8'>
                    <span className='text-xl'>Something went wrong...</span>
                    <Button onClick={() => window.location.href = '/'}>Take me home ⛵</Button>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
