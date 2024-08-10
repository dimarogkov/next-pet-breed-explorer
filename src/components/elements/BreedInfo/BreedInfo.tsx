'use client';
import { useEffect } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getBreedById, getImagesByBreed } from '@/src/services/breed';

import BreedInfoSlider from '../BreedInfoSlider/BreedInfoSlider';
import BreedInfoContent from '../BreedInfoContent/BreedInfoContent';
import { Loader } from '../../ui';

type Props = {
    breedId: string;
};

const BreedInfo: React.FC<Props> = ({ breedId }) => {
    const queryClient = useQueryClient();
    const [type, id] = breedId.split('-');

    useEffect(() => {
        return () => {
            queryClient.clear();
        };
    }, [queryClient]);

    const { data: breed, isLoading: isLoadingBreed } = useQuery({
        queryFn: () => getBreedById(type, id),
        select: (data) => data.data,
        queryKey: ['breed', type, id],
    });

    const { data: breedImages, isLoading: isLoadingBreedImages } = useQuery({
        queryFn: () => getImagesByBreed(type, id),
        select: (data) => data.data,
        queryKey: ['breedImages', type, id],
        refetchOnWindowFocus: false, // Вимкнути перезапит при фокусуванні
        staleTime: Infinity, // Дані завжди залишаються "свіжими"
        retry: false, // Вимкнути повторні запити при помилках
        retryOnMount: false,
    });

    const isDataLoading = isLoadingBreed || isLoadingBreedImages;

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
