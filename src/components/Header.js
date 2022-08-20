import React from "react";

const Header = () => {

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
                    </ul>
                </nav>
                <div className="header__content_toggle">

                </div>
            </div>
       </header>
    )
}

export default Header;