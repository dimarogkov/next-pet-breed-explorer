import { IBreed } from '../types/Breed';

type Props = {
    dog: IBreed[];
    cat: IBreed[];
};

export const getRandomPets = (pets: Props) => {
    const [dog, cat] = Object.keys(pets).map((type) => pets[type as keyof Props].map((pet) => ({ ...pet, type })));

    return [...dog, ...cat]
        .map((a) => ({ ...a, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => ({ ...a }))
        .slice(0, 12);
};
