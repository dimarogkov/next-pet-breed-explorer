import { Metadata } from 'next';
import { getBreedById } from '@/src/services/breed';
import BreedInfo from '@/src/components/elements/BreedInfo/BreedInfo';
import { BtnLink, Title } from '@/src/components/ui';

type Props = {
    params: {
        breedId: string;
    };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const [type, id] = params.breedId.split('-');
    const data = await getBreedById(type, id);

    return {
        title: data.data.name,
    };
};

const BreedPage: React.FC<Props> = ({ params }) => {
    return (
        <div className='relative w-full'>
            <div className='flex flex-col-reverse sm:flex-row items-center justify-between gap-5 w-full mb-5 lg:mb-8 last:mb-0'>
                <Title>Breed Page</Title>
                <BtnLink href='/'>Black</BtnLink>
            </div>

            <BreedInfo breedId={params.breedId} />
        </div>
    );
};

export default BreedPage;
