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
            <div className='w-full mb-5 lg:mb-8 last:mb-0'>
                <BtnLink href='/' className='mb-6 last:mb-0'>
                    Black
                </BtnLink>

                <Title>Breed Page</Title>
            </div>

            <BreedInfo breedId={params.breedId} />
        </div>
    );
};

export default BreedPage;
