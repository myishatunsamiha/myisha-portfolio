import React from 'react';
import { Link } from 'react-router-dom';
import pdf from '../../files/pdf/Myisha_Resume.pdf';


const Navbar = () => {



    return (
        <>
            <div className="navbar bg-slate-800 text-white">
                <div className="navbar-start">
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {/* <li><a className="font-bold" href="https://myishatunsamiha-portfolio.netlify.app/">Home</a></li> */}
                        <li><Link to="/" className="font-bold">Home</Link></li>
                        <li><Link to="/about" className="font-bold">About Me</Link></li>
                        <li><Link to="/blogs" className="font-bold">Blogs</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul tabIndex="0"
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-800 rounded-box w-52 right-0">
                            {/* <li><a className="font-bold" href="https://myishatunsamiha-portfolio.netlify.app/">Home</a></li> */}
                            <li><Link to="/" className="font-bold">Home</Link></li>
                            <li><Link to="/about" className="font-bold">About Me</Link></li>
                            <li><Link to="/blogs" className="font-bold">Blogs</Link></li>
                            <li><a href="./../../files/pdf/Myisha_Resume.pdf" target="_blank"
                                className="btn bg-green-700 border-0 rounded-3xl px-6 animate__animated animate__headShake animate__infinite	infinite" download>Download
                                Resume</a>

                            </li>
                        </ul>
                    </div>

                    <div className="hidden lg:flex">
                        <a href={pdf} target="_blank"
                            className=" btn bg-green-700 border-0 rounded-3xl px-6 animate__animated animate__headShake animate__infinite	infinite" download>Download
                            Resume</a>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Navbar;