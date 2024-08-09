'use client';
import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getBreedById, getImagesByBreed } from '@/src/services/breed';

import BreedInfoSlider from '../BreedInfoSlider/BreedInfoSlider';
import BreedInfoContent from '../BreedInfoContent/BreedInfoContent';
import { Loader } from '../../ui';

type Props = {
    breedId: string;
};

const BreedInfo: React.FC<Props> = ({ breedId }) => {
    const [type, id] = breedId.split('-');

    const { data: breed, isLoading: isLoadingBreed } = useQuery({
        queryFn: () => getBreedById(type, id),
        select: (date) => date.data,
        queryKey: ['breed'],
    });

    const { data: breedImages, isLoading: isLoadingBreedImages } = useQuery({
        queryFn: () => getImagesByBreed(type, id),
        select: (date) => date.data,
        queryKey: ['breedImages'],
    });

    console.log(isLoadingBreed, isLoadingBreedImages);

    const isDataLoading = useMemo(() => {
        return isLoadingBreed || isLoadingBreedImages;
    }, [isLoadingBreed, isLoadingBreedImages]);

    return (
        <section className='relative w-full'>
            {isDataLoading && <Loader />}

            {breed && breedImages && (
                <div className='flex flex-col md:flex-row gap-8 lg:gap-10 w-full'>
                    <BreedInfoSlider images={breedImages} />
                    <BreedInfoContent breed={breed} />
                </div>
            )}
        </section>
    );
};

export default BreedInfo;
