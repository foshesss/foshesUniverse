import React from "react";
import scrollToElement from "../functions/scrollToElement";

const NavBarButton = ({text, goal}) => (
    <li>
        <button
            type="button" 
            onClick={() => scrollToElement(goal)}
        >
            {text}
        </button>
    </li>
);

export default NavBarButton;