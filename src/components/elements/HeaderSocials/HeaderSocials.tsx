import { socials } from '@/src/data/socials';
import HeaderSocial from '../HeaderSocial/HeaderSocial';

const HeaderSocials = () => {
    return (
        <ul className='flex gap-4'>
            {socials.map((social) => (
                <HeaderSocial social={social} key={social.id} />
            ))}
        </ul>
    );
};

export default HeaderSocials;
