import Header from '../elements/Header/Header';

type Props = {
    children?: React.ReactNode;
};

const Root: React.FC<Props> = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <Header />
                <main className='relative w-full max-w-screen-2xl px-4 sm:px-5 py-6 sm:py-8 m-auto'>{children}</main>
            </body>
        </html>
    );
};

export default Root;
