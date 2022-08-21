import React from "react";
import NavBarButton from "./NavBarButton";
import NavBarSocial from "./NavBarSocial";
import scrollToElement from "../functions/scrollToElement";

const NavBar = () => (
    <nav className="navbar">
        <button
            className="navbar__title"
            type="button"
            onClick={() => scrollToElement('home')}
        >
            foshesUniverse
        </button>
        <div className="navbar__links">
            <ul>
                <NavBarButton text='about' goal='about'/>
                <NavBarButton text='projects' goal='projects'/>
                <NavBarSocial 
                    link='https://www.linkedin.com/in/will-foshes-hamilton'
                    img='https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/linkedin-icon-18-256.png'
                    alt='linkedin.png'
                />
                <NavBarSocial
                    link='https://github.com/foshesss'
                    img='https://git-scm.com/images/logos/downloads/Git-Icon-White.png'
                    alt='github.png'
                />
                <NavBarSocial
                    link='https://www.twitch.tv/superjoshiepartyanimal123'
                    img='https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Twitch_Glitch_Logo_White.svg/1200px-Twitch_Glitch_Logo_White.svg.png'
                    alt='twitch.png'
                    widthRatio={12/14}
                />
            </ul>
        </div>
    </nav>
);

export default NavBar;