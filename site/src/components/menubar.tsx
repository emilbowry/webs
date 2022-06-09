import path from "path";
import { title } from "process";
import { useHistory, useLocation } from "react-router";
import React, { useRef } from "react";
const history = useHistory();

interface MenuItemProps {
    title: string;
    path: string;
    selected: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, path, selected }) => {
    const itemRef = useRef<any>();

    const onClick = () => {
        selected = true;
        history.push(path);
        //change page
    };

    return (
        <div className="item">
            <li onClick={() => onClick()}>{title}</li>
        </div>
    );
};

export default MenuItem;
