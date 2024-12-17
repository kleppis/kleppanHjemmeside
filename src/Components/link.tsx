import React, { ReactNode } from "react";
import '../css/main.css'

interface LinkProps {
    children: ReactNode;
    link: string;
}

const Link: React.FC<LinkProps> = ({ children, link }) => {

    return (
        <a href={link}><p className="hover:scale-110 transition-all text-primary">{children}</p></a>
    );
};

export default Link;