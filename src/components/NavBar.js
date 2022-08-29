import React from 'react';
import NavBarButton from './NavBarButton';
import NavBarSocial from './NavBarSocial';
import scrollToElement from '../functions/scrollToElement';

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
                <NavBarButton text="projects" goal="projects" />
                <NavBarButton text="experience" goal="experience" />
                <NavBarSocial
                    link="https://www.linkedin.com/in/will-foshes-hamilton"
                    img="https://www.shareicon.net/data/2015/08/03/79433_linkedin_512x512.png"
                    alt="linkedin.png"
                />
                <NavBarSocial
                    link="https://github.com/foshesss"
                    img="https://cdn-icons-png.flaticon.com/512/38/38401.png"
                    alt="github.png"
                />
                <NavBarSocial
                    link="https://www.twitch.tv/superjoshiepartyanimal123"
                    img="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Twitch_Glitch_Logo_Black.svg/1756px-Twitch_Glitch_Logo_Black.svg.png"
                    alt="twitch.png"
                    widthRatio={12 / 14}
                />
            </ul>
        </div>
    </nav>
);

export default NavBar;