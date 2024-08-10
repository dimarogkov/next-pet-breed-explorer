import { ISocial } from '../types/Social';
import { GIT_URL, LINKEDIN_URL } from '@/src/variables';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

export const socials: ISocial[] = [
    { id: 0, href: GIT_URL, icon: FaGithub },
    { id: 1, href: LINKEDIN_URL, icon: FaLinkedin },
];
