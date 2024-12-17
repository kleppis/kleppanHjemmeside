import React from "react";
import "../css/globals.css";
import "../css/about.css";
import Navbar from "../Components/navbar/navbar.tsx";
import picture from "../Bilder/photo-1532372320572-cda25653a26d.avif";


const About: React.FC = () => {
    return (
        <div className="px-40">
            <div className="navAbout">
                <Navbar />
            </div>
            <div className="flex justify-between">
                <div className=" w-1/2">
                    <h1 className=" text-text">Letsgo</h1>
                </div>
                <div className=" w-1/2 -">
                    <img src={picture} alt="p" className="h-screen -mt-40 absolute top-0 right-0 -mr-40 -z-10" />
                </div>
            </div>
        </div>
    );
}

export default About;