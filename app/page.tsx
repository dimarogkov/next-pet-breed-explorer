import { BtnLink, Input, Subtitle, Text, Title } from '@/src/components/ui';

const HomePage = () => {
    return (
        <section className='relative w-full'>
            <div className='w-full mb-5 last:mb-0'>
                <Title className='mb-5 last:mb-0'>Main Title</Title>

                <Subtitle className='mb-5 last:mb-0'>Sub Title</Subtitle>

                <Input name='search' placeholder='Search' className='mb-5 last:mb-0' />

                <Text className='mb-5 last:mb-0'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium non commodi earum. Minus
                    numquam iure, aliquid esse quae vitae. Voluptas, magni laudantium! Eos sapiente similique officiis
                    expedita distinctio aliquam quos!
                </Text>

                <BtnLink href='/'>Button Link</BtnLink>
            </div>
        </section>
    );
};

export default HomePage;
