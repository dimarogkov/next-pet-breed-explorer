'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IBreed } from '@/src/types/Breed';
import { BtnLink, DefaultImg, Label, Subtitle } from '../../ui';

type Props = {
    breed: IBreed;
};

const BreedCard: React.FC<Props> = ({ breed }) => {
    const [isImgError, setIsImgError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const { id, name, type, temperament, reference_image_id } = breed;
    const src = `https://cdn2.the${type}api.com/images/${reference_image_id}.jpg`;

    return (
        <div className='relative flex flex-col w-full rounded-lg overflow-hidden border border-gray'>
            <Link
                href={`${type}-${id}`}
                className='relative w-full pb-[75%] cursor-pointer bg-gray transition-opacity duration-300 hover:opacity-75'
            >
                {isLoading && <div className='absolute top-0 left-0 w-full h-full skeleton'></div>}

                {!isImgError ? (
                    <Image
                        src={src}
                        alt={name}
                        fill
                        className='absolute top-0 left-0 w-full h-full object-cover object-center'
                        onLoadingComplete={() => setIsLoading(false)}
                        onError={() => setIsImgError(true)}
                    />
                ) : (
                    <DefaultImg />
                )}
            </Link>

            <div className='flex flex-col flex-grow justify-between w-full p-4'>
                <div className='w-full mb-4 last:mb-0'>
                    <Subtitle className='mb-4 last:mb-0'>{name}</Subtitle>

                    {temperament && (
                        <div className='flex flex-wrap gap-1'>
                            {temperament.split(', ').map((item) => (
                                <Label key={item}>{item}</Label>
                            ))}
                        </div>
                    )}
                </div>

                <BtnLink href={`${type}-${id}`}>About Breed</BtnLink>
            </div>
        </div>
    );
};

export default BreedCard;
