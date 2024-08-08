'use client';
import { Btn, Subtitle } from '@/src/components/ui';

type Props = {
    error?: Error;
    reset?: () => void;
};

const Error: React.FC<Props> = ({ error, reset = () => {} }) => {
    return (
        <section className='relative w-full'>
            <Subtitle className='mb-5 last:mb-0'>{error?.message}</Subtitle>
            <Btn onClick={() => reset()}>Retry</Btn>
        </section>
    );
};

export default Error;
