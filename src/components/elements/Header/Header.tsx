import HeaderLogo from '../HeaderLogo/HeaderLogo';

const Header = () => {
    return (
        <header className='relative z-20 flex items-center w-full h-16 lg:h-20 border-b border-gray'>
            <div className='w-full max-w-screen-2xl px-4 sm:px-5 m-auto'>
                <HeaderLogo />
            </div>
        </header>
    );
};

export default Header;
