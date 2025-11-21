import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    className?: string;
}

export function Button({
    variant = 'primary',
    size = 'md',
    children,
    className,
    ...props
}: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center font-semibold uppercase tracking-wider transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-orange-brand text-white-pure hover:shadow-lg hover:brightness-110 focus:ring-orange-brand",
        secondary: "bg-transparent border-2 border-orange-brand text-orange-brand hover:bg-orange-brand hover:text-white-pure focus:ring-orange-brand",
    };

    const sizes = {
        sm: "px-4 py-2 text-xs",
        md: "px-6 py-3 text-sm",
        lg: "px-8 py-4 text-base",
    };

    return (
        <button
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            {...props}
        >
            {children}
        </button>
    );
}
