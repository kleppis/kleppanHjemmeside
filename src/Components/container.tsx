import React, { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
    height?: number;
}

const Container: React.FC<ContainerProps> = ({ children, height = 4 }) => {
    return (
        <div className="bg-primary rounded-xl shadow-2xl p-6 w-full border-2 border-text h-auto">
            {children}
        </div>
    );
};

export default Container;