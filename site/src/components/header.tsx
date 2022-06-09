import React from "react";

const header = () => {
    const title: string = "ebwry";
    const subtitle: string = "in god we trust, all others must bring data";

    return (
        <div className="header">
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
        </div>
    );
};
export default header;
