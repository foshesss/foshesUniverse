import React from "react";

const Header = () => {

    const iconSize = "18";
    return (
       <header className="header">
            <div className="header__content">
                <h2 className="header__content__title">
                    foshesUniverse
                </h2>
                <nav className="header__content__nav">
                    <ul className="header__content__navbar">
                        <li>
                            <a href="/">blog</a>
                        </li>
                        <li>
                            <a href="/">projects</a>
                        </li>
                        <li>
                            <a href="/">resume</a>
                        </li>
                        <li>
                            <a 
                                href="https://www.linkedin.com/in/will-foshes-hamilton/" 
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/linkedin-icon-18-256.png"
                                    alt="linkedin.png"
                                    width={iconSize} height={iconSize}
                                />
                            </a>
                        </li>
                        <li>
                            <a 
                                href="https://github.com/foshesss"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="https://git-scm.com/images/logos/downloads/Git-Icon-White.png"
                                    alt="github.png"
                                    width={iconSize} height={iconSize}
                                />
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="header__content_toggle">

                </div>
            </div>
       </header>
    )
}

export default Header;