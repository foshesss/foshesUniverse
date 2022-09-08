import React, { useEffect } from "react";
import onHover from "../functions/socialsOnHover";
import onLeave from "../functions/socialsOnLeave";

const SocialButton = ({ style }) => {

    const appName = style.appName;
    const src = style.src;
    const imgStyle = style.imgStyle;

    useEffect(() => {
        const button = document.getElementById(appName);

        const hover = () => {
            onHover(appName);
        }

        const leave = () => {
            onLeave(appName);
        }

        button.addEventListener('mouseover', hover);
        button.addEventListener('mouseout', leave);
        button.addEventListener('click', leave);

        return () => {
            button.removeEventListener('mouseover', hover);
            button.removeEventListener('mouseout', leave);
            button.removeEventListener('click', leave);
        };
    });

    return (
        <a href={style.href} target="_blank" rel="noreferrer" className="social-anchor" id={appName}>
            <div className="social-button">
                <img src={src} alt={appName} style={imgStyle || {}}/>
                <h2>{appName}</h2>
            </div>
        </a>
    );
}

export default SocialButton;