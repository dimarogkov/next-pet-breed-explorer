import PetList from '@/src/components/elements/PetList/PetList';
import { Title } from '@/src/components/ui';

const HomePage = () => {
    return (
        <div className='relative w-full'>
            <Title className='w-full mb-5 lg:mb-8 xl:mb-10 last:mb-0'>Home Page</Title>

            <PetList />
        </div>
    );
};

export default HomePage;
