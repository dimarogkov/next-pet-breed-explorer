import { InputHTMLAttributes, forwardRef } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

const Input: React.FC<Props> = forwardRef<HTMLInputElement, Props>(({ className = '', ...props }, ref) => (
    <input
        ref={ref}
        {...props}
        className={`w-full h-10 lg:h-12 px-4 text-base lg:text-lg rounded border border-gray outline-none transition-all duration-300 focus:border-black ${className}`}
    />
));

Input.displayName = 'Input';
export default Input;
