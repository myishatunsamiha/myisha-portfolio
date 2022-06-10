import React from 'react';
import myPhoto from '../../files/images/my-photo.png';
import pdf from '../../files/pdf/Myisha_Resume.pdf';

const Banner = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-items-center">
            <img src={myPhoto} className="rounded-lg shadow-2xl h-screen" alt="myisha" />
            <div className="flex flex-col items-center md:items-start justify-center w-4/6 md:w-5/6">
                <p className="text-base md:text-xl font-bold text-yellow-300 mb-4">Junior Front-End Developer</p>
                <p className="text-2xl md:text-5xl font-bold text-yellow-800 mb-4">MYISHA TUN SAMIHA</p>
                <p className="text-sm md:text-sm font-normal text-gray-400 text-center md:text-left mb-6">I enjoy
                    developing
                    websites
                    and creating useful
                    content. I
                    have done projects on front-end and back-end.</p>
                <a href={{ pdf }} target="_blank" rel="noreferrer"
                    className=" btn bg-green-700 border-0 rounded-3xl px-6 animate__animated animate__headShake animate__infinite	infinite" download>Download
                    Resume</a>

            </div>
        </div>
    );
};

export default Banner;