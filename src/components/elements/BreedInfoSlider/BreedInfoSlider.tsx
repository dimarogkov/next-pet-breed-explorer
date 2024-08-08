import { useEffect, useState } from 'react';
import Image from 'next/image';
import { IBreedImg } from '@/src/types/Breed';
import cn from 'classnames';

type Props = {
    images: IBreedImg[];
};

const BreedInfoSlider: React.FC<Props> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imageLoaded, setImageLoaded] = useState(true);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (!isHovered) {
            const interval = setInterval(() => nextSlide(), 4000);

            return () => {
                clearInterval(interval);
            };
        }
    }, [isHovered]);

    const nextSlide = () => {
        setCurrentIndex((prevState) => prevState + 1);
    };

    return (
        <>
            <div className='relative w-full'>
                <div
                    className='relative w-full pb-[70%] rounded-xl overflow-hidden border border-gray bg-gray mb-3 last:mb-0'
                    onMouseOver={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {imageLoaded && (
                        <Image
                            loader={() => images[currentIndex].url}
                            src={images[currentIndex].url}
                            alt={images[currentIndex].id}
                            fill
                            className='absolute top-0 left-0 w-full h-full object-fill object-center'
                            onError={() => setImageLoaded(false)}
                        />
                    )}
                </div>

                {images.length > 1 && (
                    <div className='flex justify-center gap-3 lg:gap-4 w-full'>
                        {images.map((img, index) => (
                            <div
                                key={img.id}
                                className={cn(
                                    `w-3 lg:w-4 h-3 lg:h-4 rounded-full cursor-pointer transition-opacity duration-300 hover:opacity-75`,
                                    {
                                        'bg-red': index === currentIndex,
                                        'bg-gray': index !== currentIndex,
                                    }
                                )}
                                onClick={() => setCurrentIndex(index)}
                            />
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default BreedInfoSlider;
