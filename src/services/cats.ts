import axios from 'axios';
import { IPet } from '../types/interfaces/Pet';
import { CAT_API_KEY, CAT_API_URL } from '../variables';

export const getCats = () => {
    return axios.get<IPet[]>(`${CAT_API_URL}/breeds?api_key=${CAT_API_KEY}`);
};
