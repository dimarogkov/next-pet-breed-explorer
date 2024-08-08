'use client';
import { useQuery } from '@tanstack/react-query';
import { getRandomPets } from '@/src/helpers/getRandomPets';

import BreedCard from '../BreedCard/BreedCard';
import { Loader } from '../../ui';
import { getBreeds } from '@/src/services/breed';

const BreedList = () => {
    const { data: dogsBreeds, isLoading: isLoadingDogs } = useQuery({
        queryFn: () => getBreeds('dog'),
        select: (date) => date.data,
        queryKey: ['dogsBreeds'],
    });

    const { data: catsBreeds, isLoading: isLoadingCats } = useQuery({
        queryFn: () => getBreeds('cat'),
        select: (date) => date.data,
        queryKey: ['catsBreeds'],
    });

    const petsBreeds = dogsBreeds && catsBreeds && getRandomPets({ dog: [...dogsBreeds], cat: [...catsBreeds] });

    return (
        <section className='relative w-full'>
            {isLoadingDogs && isLoadingCats && <Loader />}

            <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 w-full'>
                {petsBreeds?.map((breed) => (
                    <BreedCard breed={breed} key={breed.id} />
                ))}
            </div>
        </section>
    );
};

export default BreedList;
