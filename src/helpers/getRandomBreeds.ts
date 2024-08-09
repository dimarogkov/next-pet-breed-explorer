import { IBreed } from '../types/Breed';

type Props = {
    dog: IBreed[];
    cat: IBreed[];
};

export const getRandomBreeds = (breeds: Props) => {
    const [dog, cat] = Object.keys(breeds).map((type) => {
        return breeds[type as keyof Props].map((breed) => ({ ...breed, type }));
    });

    return [...dog, ...cat]
        .map((a) => ({ ...a, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => ({ ...a }))
        .slice(0, 12);
};
