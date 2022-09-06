import React, { useEffect } from "react";
import scrollToElement from "../functions/scrollToElement";
import toggleHamburgerMenu from "../functions/toggleHamburgerMenu";

const NavBar = () => {

    useEffect(() => {
        const navToggle = document.querySelector('#mobile-nav-toggle');
        navToggle.addEventListener('click', toggleHamburgerMenu);

        return () => {
            navToggle.removeEventListener('click', toggleHamburgerMenu);
        };
    }, []);


    const onClick = (goal) => {
        scrollToElement(goal);
        toggleHamburgerMenu(false);
    }
    
    return (
        <header id='primary-header'>
            <h1>foshesUniverse</h1>

            <button
                id='mobile-nav-toggle'
                aria-controls='primary-navigation'
                aria-expanded='false'
            >
                <span className='sr-only'>Menu</span>
            </button>

            <nav>
                <ul id='primary-navigation' data-visible='false'>
                    <li>
                        <button
                            type="button"
                            onClick={() => onClick('projects')}
                        >
                            projects
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            onClick={() => onClick('experience')}
                        >
                            experience
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;