'use client';
import { useQuery } from '@tanstack/react-query';
import { getRandomBreeds } from '@/src/helpers/getRandomBreeds';
import { getBreeds } from '@/src/services/breed';

import BreedCard from '../BreedCard/BreedCard';
import { Loader } from '../../ui';

const BreedList = () => {
    const { data: dogsBreeds, isLoading: isLoadingDogs } = useQuery({
        queryFn: () => getBreeds('dog'),
        select: (data) => data.data,
        queryKey: ['dogsBreeds'],
    });

    const { data: catsBreeds, isLoading: isLoadingCats } = useQuery({
        queryFn: () => getBreeds('cat'),
        select: (data) => data.data,
        queryKey: ['catsBreeds'],
    });

    const petsBreeds = dogsBreeds && catsBreeds && getRandomBreeds({ dog: [...dogsBreeds], cat: [...catsBreeds] });
    const isDataLoading = isLoadingDogs || isLoadingCats;

    return (
        <section className='relative w-full'>
            {isDataLoading && <Loader />}

            {petsBreeds?.length && (
                <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 w-full'>
                    {petsBreeds.map((breed) => (
                        <BreedCard breed={breed} key={breed.id} />
                    ))}
                </div>
            )}
        </section>
    );
};

export default BreedList;
