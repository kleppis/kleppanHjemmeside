import React from 'react';
import './Navbar.css'; // Import your CSS styles
import Button from '../Button.tsx';
import '../../css/globals.css';
import '../../css/main.css';
import Link from '../link.tsx';
import logo from '../../Bilder/Logo/logo-no-background.png';

const Navbar = () => {
    return (
        <div className='flex space-x-96 w-full py-5 justify-between'>
            <a href="/" className=''>
                <img src={logo} alt="logo" style={{ width: '200px' }} className=' hover:scale-110 transition-all' />
            </a>
            <div className='space-x-10 flex'>
                <Link link='https://www.vg.no/'>
                    Eksempler
                </Link>
                <Link link='https://www.vg.no/'>
                    Om oss
                </Link>
                <Link link='/about'>
                    Kontakt
                </Link>
            </div>
        </div>
    );
};

export default Navbar;