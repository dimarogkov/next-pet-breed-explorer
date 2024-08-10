import Image from 'next/image';
import Link from 'next/link';
import { PROJECT_NAME } from '@/src/variables';

const HeaderLogo = () => {
    return (
        <Link
            href='/'
            className='relative flex items-center gap-2.5 w-fit transition-opacity duration-300 hover:opacity-65'
        >
            <Image src='/header_logo.png' alt='pet_breed_explorer' width={50} height={50} className='w-8 sm:w-9' />
            <span className='hidden sm:block font-medium text-xl lg:text-2xl text-red'>{PROJECT_NAME}</span>
        </Link>
    );
};

export default HeaderLogo;
