import React from "react";

const onClick = (goal) => {
    const element = document.getElementById(goal);
    if (element == null) return;
    element.scrollIntoView({
        block: 'end',  
        behavior: 'smooth'
    });
}

const NavBarButton = ({text, goal}) => (
    <li>
        <button
            type="button" 
            onClick={() => onClick(goal)}
        >
            {text}
        </button>
    </li>
);

export default NavBarButton;