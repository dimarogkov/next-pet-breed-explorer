'use client';
import { useQuery } from '@tanstack/react-query';
import { getDogs } from '@/src/services/dogs';
import { getCats } from '@/src/services/cats';
import { getRandomPets } from '@/src/helpers/getRandomPets';

import PetCard from '../PetCard/PetCard';
import { Loader } from '../../ui';

const PetList = () => {
    const { data: dogs, isLoading: isLoadingDogs } = useQuery({
        queryFn: () => getDogs(),
        select: (date) => date.data,
        queryKey: ['dogs'],
    });

    const { data: cats, isLoading: isLoadingCats } = useQuery({
        queryFn: () => getCats(),
        select: (date) => date.data,
        queryKey: ['cats'],
    });

    const pets = dogs && cats && getRandomPets({ dog: [...dogs], cat: [...cats] });

    return (
        <section className='relative w-full'>
            {isLoadingDogs && isLoadingCats && <Loader />}

            <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 w-full'>
                {pets?.map((pet) => (
                    <PetCard pet={pet} key={pet.id} />
                ))}
            </div>
        </section>
    );
};

export default PetList;
