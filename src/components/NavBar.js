import React, { useEffect } from "react";
import scrollToElement from "../functions/scrollToElement";

const NavBar = () => {

    const primaryNav = document.querySelector('#primary-navigation');
    const navToggle = document.querySelector('#mobile-nav-toggle');

    const toggleVisibility = (newState) => {
        let newVisibility;

        if (newState === true || newState === false) {
            newVisibility = newState
        } else {
            let visible = primaryNav.getAttribute('data-visible');
            newVisibility = visible === "false" ? true : false;
        }
        
        primaryNav.setAttribute('data-visible', newVisibility);
        navToggle.setAttribute('aria-expanded', newVisibility);
    };

    useEffect(() => {
        const primaryNav = document.querySelector('#primary-navigation');
        const navToggle = document.querySelector('#mobile-nav-toggle');

        const toggleVisibility = () => {
            const visible = primaryNav.getAttribute('data-visible');
            const newVisibility = visible === "false" ? true : false;
            
            primaryNav.setAttribute('data-visible', newVisibility);
            navToggle.setAttribute('aria-expanded', newVisibility);
        };

        navToggle.addEventListener('click', toggleVisibility);

        return () => {
            navToggle.removeEventListener('click', toggleVisibility);
        };
    }, []);


    const onClick = (goal) => {
        scrollToElement(goal);
        toggleVisibility(false);
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