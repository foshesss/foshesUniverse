import React from "react";
import getLanguageColor from "../functions/getLanguageColor";
import SocialButton from "./SocialButton";

const Socials = ({ buttonInfo }) => {

    const backgrounds = [];
    const buttons = [];

    buttonInfo.forEach(info => {
        const color = getLanguageColor(info.companyName)[0];
        const background = (
            <div className="socials-background" style={{
                background: `linear-gradient(transparent, ${color} 50%)`,
            }} id={info.appName + '-background'}/>
        );

        backgrounds.push(background);
        buttons.push(<SocialButton style={info} background={background} />);
    });

    const name = "SOCIAL MEDIA"

    return (
        <section className="socials" id='social-buttons-container'>
            {backgrounds}
            <div className="socials-container">
                <header className="resume-page__header socials-header" id="socials-header">
                    <span>
                        <h2 id='previous_item'>{name}</h2>
                        <h2 id='current_item'>{name}</h2>
                        <h2>{name}</h2>
                        <h2>{name}</h2>
                        <h2>{name}</h2>
                        <h2>{name}</h2>
                        <h2>{name}</h2>
                        <h2>{name}</h2>
                        <h2>{name}</h2>
                    </span>
                    <p>all of my social media. let's connect!</p>
                </header>
                <div className="socials-buttons" id="socials-buttons">
                    {buttons}
                </div>
            </div>
        </section>
    );
};

export default Socials;