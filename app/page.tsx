import BreedList from '@/src/components/elements/BreedList/BreedList';
import { Title } from '@/src/components/ui';

const HomePage = () => {
    return (
        <div className='relative w-full'>
            <Title className='mb-5 lg:mb-8 xl:mb-10 last:mb-0'>Home Page</Title>

            <BreedList />
        </div>
    );
};

export default HomePage;
