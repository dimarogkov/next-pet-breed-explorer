import axios from 'axios';
import { IPet } from '../types/interfaces/Pet';
import { DOG_API_KEY, DOG_API_URL } from '../variables';

export const getDogs = () => {
    return axios.get<IPet[]>(`${DOG_API_URL}/breeds?api_key=${DOG_API_KEY}`);
};
