import { IBreed } from '@/src/types/Breed';
import { BtnLink, Label, Subtitle, Text } from '../../ui';

type Props = {
    breed: IBreed;
};

const BreedInfoContent: React.FC<Props> = ({ breed }) => {
    const { name, cfa_url, vetstreet_url, vcahospitals_url, temperament, origin, description, life_span, weight } =
        breed;
    const isUrlsExist = cfa_url || vetstreet_url || vcahospitals_url;

    return (
        <div className='w-full'>
            <Subtitle className='border-b border-gray pb-4 lg:pb-5 last:pb-0 mb-4 lg:mb-5 last:mb-0'>{name}</Subtitle>

            <div className='flex flex-col gap-4 lg:gap-5 w-full'>
                {description && <Text>{description}</Text>}
                {life_span && (
                    <Text>
                        <span className='text-red'>Life Span:</span> {life_span}
                    </Text>
                )}
                {weight.imperial && (
                    <Text>
                        <span className='text-red'>Imperial Weight:</span> {weight.imperial}
                    </Text>
                )}
                {weight.metric && (
                    <Text>
                        <span className='text-red'>Imperial Metric:</span> {weight.imperial}
                    </Text>
                )}
                {origin && (
                    <Text>
                        <span className='text-red'>Origin:</span> {origin}
                    </Text>
                )}
                {temperament && (
                    <div className='flex flex-col sm:flex-row items-start gap-3 w-full'>
                        <span className='sm:py-1 text-base lg:text-lg text-red'>Temperament:</span>

                        <div className='flex flex-wrap gap-1'>
                            {temperament.split(', ').map((item) => (
                                <Label key={item}>{item}</Label>
                            ))}
                        </div>
                    </div>
                )}
                {isUrlsExist && (
                    <div className='flex flex-col sm:flex-row items-start gap-3 w-full'>
                        <span className='text-base lg:text-lg sm:py-2.5 text-red'>Links:</span>

                        <div className='flex flex-wrap gap-2 w-full'>
                            {cfa_url && (
                                <BtnLink href={cfa_url} target='blank'>
                                    CFA
                                </BtnLink>
                            )}
                            {vetstreet_url && (
                                <BtnLink href={vetstreet_url} target='blank'>
                                    Vet Street
                                </BtnLink>
                            )}
                            {vcahospitals_url && (
                                <BtnLink href={vcahospitals_url} target='blank'>
                                    VCA Hospitals
                                </BtnLink>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BreedInfoContent;
