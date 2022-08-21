import React from "react";

const imgSize = 18;

const NavBarSocial = ({link, img, alt, widthRatio, heightRatio}) => (
    <li>
        <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
        >
            <img
                src={img}
                alt={alt}
                width={imgSize * widthRatio}
                height={imgSize*heightRatio}
            />
        </a>
    </li>
);

NavBarSocial.defaultProps = {
    widthRatio: 1,
    heightRatio: 1,
};

export default NavBarSocial;