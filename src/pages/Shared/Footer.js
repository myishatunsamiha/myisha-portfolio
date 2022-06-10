import React from 'react';
import { Link } from 'react-router-dom';
import facebook from '../../files/images/facebook.png';
import github from '../../files/images/github.png';
import linkedin from '../../files/images/linkedin.png';

const Footer = () => {
    return (
        <footer class="footer footer-center p-10 bg-slate-800 text-white rounded">
            <div class="grid grid-flow-col gap-4">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/blogs'>Blogs</Link>
            </div>
            <div>
                <div class="grid grid-flow-col gap-4">
                    <a href='https://www.facebook.com/myisha.samiha/' target="_blank"><img src={facebook} alt="" height="30" width="30" className='border border-yellow-600 rounded-full bg-yellow-100' /></a>
                    <a href='https://github.com/myishatunsamiha' target='_blank'><img src={github} alt="" height="30" width="30" className='border border-yellow-600 rounded-full bg-yellow-100' /></a>
                    <a href='https://www.linkedin.com/in/myisha-tun-samiha/' target='_blank'><img src={linkedin} alt="" height="30" width="30" className='border border-yellow-600 rounded-full bg-yellow-100' /></a>
                </div>
            </div>
            <div>
                <p>Copyright © 2022 - All right reserved by Myisha Tun Samiha</p>
            </div>
        </footer>
    );
};

export default Footer;