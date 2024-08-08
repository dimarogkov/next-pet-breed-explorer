'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { IPet } from '@/src/types/interfaces/Pet';
import { BtnLink, Subtitle } from '../../ui';

type Props = {
    pet: IPet;
};

const PetCard: React.FC<Props> = ({ pet }) => {
    const [imageLoaded, setImageLoaded] = useState(true);
    const { name, type, reference_image_id } = pet;
    const src = `https://cdn2.the${type}api.com/images/${reference_image_id}.jpg`;

    return (
        <div className='relative flex flex-col w-full rounded-lg overflow-hidden border border-gray'>
            <Link
                href={name}
                className='relative w-full pb-[75%] cursor-pointer bg-gray transition-opacity duration-300 hover:opacity-75'
            >
                {imageLoaded && (
                    <Image
                        loader={() => src}
                        src={src}
                        alt={name}
                        fill
                        className='absolute top-0 left-0 w-full h-full object-cover object-center'
                        onError={() => setImageLoaded(false)}
                    />
                )}
            </Link>

            <div className='flex flex-col flex-grow justify-between w-full p-4'>
                <Subtitle className='mb-4 last:mb-0'>{name}</Subtitle>
                <BtnLink href={name}>About Breed</BtnLink>
            </div>
        </div>
    );
};

export default PetCard;
