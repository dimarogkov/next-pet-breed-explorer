import axios from 'axios';
import { IBreed, IBreedImg } from '../types/Breed';
import { API_KEY } from '../variables';

export const getBreeds = (type: string) => {
    return axios.get<IBreed[]>(`https://api.the${type}api.com/v1/breeds?api_key=${API_KEY}`);
};

export const getBreedById = (type: string, id: string) => {
    return axios.get<IBreed>(`https://api.the${type}api.com/v1/breeds/${id}?api_key=${API_KEY}`);
};

export const getImagesByBreed = (type: string, id: string) => {
    return axios.get<IBreedImg[]>(
        `https://api.the${type}api.com/v1/images/search?breed_ids=${id}&include_breeds=true&limit=10&api_key=${API_KEY}`
    );
};
