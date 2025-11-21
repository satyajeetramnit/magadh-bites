import { InputHTMLAttributes, useState } from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    containerClassName?: string;
}

export function Input({
    label,
    id,
    className,
    containerClassName,
    ...props
}: InputProps) {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(true);
        props.onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(false);
        setHasValue(!!e.target.value);
        props.onBlur?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHasValue(!!e.target.value);
        props.onChange?.(e);
    };

    return (
        <div className={cn("relative pt-4", containerClassName)}>
            <input
                id={id}
                className={cn(
                    "block w-full appearance-none rounded-md border bg-transparent px-3 py-2 text-base text-purple-royal placeholder-transparent focus:outline-none transition-colors duration-200",
                    isFocused
                        ? "border-orange-brand border-2"
                        : "border-purple-secondary border",
                    className
                )}
                placeholder={label}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                {...props}
            />
            <label
                htmlFor={id}
                className={cn(
                    "absolute left-3 transition-all duration-200 pointer-events-none",
                    isFocused || hasValue || props.value
                        ? "-top-2 text-xs bg-cream-offwhite px-1 text-orange-brand"
                        : "top-6 -translate-y-1/2 text-base text-gray-500"
                )}
            >
                {label}
            </label>
        </div>
    );
}
