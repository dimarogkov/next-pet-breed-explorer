import Image from 'next/image';
import { HTMLAttributes, forwardRef } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
    className?: string;
}

const DefaultImg: React.FC<Props> = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => (
    <div
        ref={ref}
        {...props}
        className={`absolute top-0 left-0 flex items-center justify-center w-full h-full bg-gray ${className}`}
    >
        <Image src='/header_logo.png' alt='default_img' width={50} height={50} className='w-16 h-16' />
    </div>
));

DefaultImg.displayName = 'DefaultImg';
export default DefaultImg;
