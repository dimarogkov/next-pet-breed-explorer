import { AnchorHTMLAttributes, forwardRef } from 'react';
import Link from 'next/link';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    className?: string;
}

const BtnLink: React.FC<Props> = forwardRef<HTMLAnchorElement, Props>(({ href, className = '', ...props }, ref) => (
    <Link
        ref={ref}
        {...props}
        href={href}
        className={`flex items-center justify-center w-full sm:w-fit sm:min-w-32 lg:min-w-36 h-10 lg:h-12 font-media text-base lg:text-lg px-4 rounded text-white bg-red transition-opacity duration-300 hover:opacity-80 ${className}`}
    />
));

BtnLink.displayName = 'BtnLink';
export default BtnLink;
