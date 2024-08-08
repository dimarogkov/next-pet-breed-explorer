import { HTMLAttributes, forwardRef } from 'react';

interface Props extends HTMLAttributes<HTMLSpanElement> {
    className?: string;
}

const Label: React.FC<Props> = forwardRef<HTMLSpanElement, Props>(({ className = '', ...props }, ref) => (
    <span ref={ref} {...props} className={`text-base lg:text-lg text-black px-2 py-1 rounded bg-gray ${className}`} />
));

Label.displayName = 'Label';
export default Label;
