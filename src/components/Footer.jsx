import moment from 'moment/moment';
import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer footer-center p-5 bg-base-200 gap-5 text-base-content rounded">
            <div className="grid grid-flow-col gap-4">
                <Link to='/'>Home</Link>
                <Link to='/recipe'>Recipe</Link>
                <Link to='/blog'>Blog</Link>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4 text-2xl">
                    <Link className='hover:text-accent' target='_blank' to='https://facebook.com/MyselfRaselMahmud'><FaFacebook /></Link>
                    <Link className='hover:text-accent' target='_blank' to='https://github.com/myself-rasel-mahmud'><FaGithub /></Link>
                    <Link className='hover:text-accent' target='_blank' to='https://www.linkedin.com/in/myselfraselmahmud'><FaLinkedin /></Link>
                </div>
            </div>
            <div>
                <p>Copyright © {moment().format('yyy')} - All right reserved by <span className='text-accent uppercase'>Satisfaction Recipe</span></p>
            </div>
        </footer>
    );
};

export default Footer;