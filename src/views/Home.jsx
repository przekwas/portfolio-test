import React from 'react';
import Headshot from '../assets/Headshot.JPG';
import InfoBox from '../components/infobox/InfoBox';

const Home = () => {
    return (
        <div className="font-sans flex justify-center">
            <div className="w-screen rounded overflow-hidden shadow-lg">
                <div className="md:flex md:justify-center">
                    <img className="w-1/2 h-1/2 block my-5 mx-auto rounded-lg border border-purple-600 border-solid shadow-lg md:w-auto md:h-auto md:mx-1 lg:mx-5" src={Headshot} alt="headshot" />
                    <div className="px-3 md:px-1">
                        <InfoBox />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;