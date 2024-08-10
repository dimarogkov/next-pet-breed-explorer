import Link from 'next/link';
import { ISocial } from '@/src/types/Social';

type Props = {
    social: ISocial;
};

const HeaderSocial: React.FC<Props> = ({ social }) => {
    const { href, icon: SocialIcon } = social;

    return (
        <li>
            <Link href={href} target='blank' className='transition-opacity duration-300 hover:opacity-75'>
                <SocialIcon className='w-7 h-7 text-black' />
            </Link>
        </li>
    );
};

export default HeaderSocial;
