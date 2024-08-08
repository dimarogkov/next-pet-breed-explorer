import { HTMLAttributes, forwardRef } from 'react';

interface Props extends HTMLAttributes<HTMLHeadingElement> {
    className?: string;
}

const Subtitle: React.FC<Props> = forwardRef<HTMLHeadingElement, Props>(({ className = '', ...props }, ref) => (
    <h3 ref={ref} {...props} className={`w-full text-3xl lg:text-4xl font-bold text-black ${className}`} />
));

Subtitle.displayName = 'Subtitle';
export default Subtitle;
