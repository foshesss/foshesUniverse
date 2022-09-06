import React from "react";
import getLanguageColor from "../functions/getLanguageColor";

const ResumeCard = ({ title, description, fileType, src, alt, imgStyle, link, linkText }) => {
    const [ backgroudColor, color ] = getLanguageColor(fileType);
    const style = {
        color: color,
        background: backgroudColor,
    }

    return (
        <div className='card' style={style}>
            <img
                style={imgStyle || {}}
                src={src}
                alt={alt}
            />
            <div className='card-content' id={title}>
                <h2 className='card-title'>
                    {title}
                </h2>
                <p className='card-body'>
                    {description}
                </p>
                <div className="card-bottom-bar">
                    <a 
                        style={link && linkText ? {} : {
                            visibility: "hidden",
                        }}
                        target="_blank"
                        rel="noreferrer"
                        href={link} 
                        className='card-button'
                    >
                        {linkText}
                    </a>
                    <p className="card-fileType">
                        {'.' + fileType}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ResumeCard;

