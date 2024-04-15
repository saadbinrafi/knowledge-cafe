import profile from '../../assets/img/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 mx-4 border-b-2'>
            <h1 className='text-2xl font-bold'>Knowledge cafe </h1>

            <img src={profile} alt=""/>
            
        </header>
        

    );
};

export default Header;