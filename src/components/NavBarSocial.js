import React from 'react';
import PropTypes from 'prop-types';

const imgSize = 18;

const NavBarSocial = ({
    link, img, alt, widthRatio, heightRatio,
}) => (
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
                height={imgSize * heightRatio}
            />
        </a>
    </li>
);

NavBarSocial.propTypes = {
    link: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    widthRatio: PropTypes.number,
    heightRatio: PropTypes.number,
};

NavBarSocial.defaultProps = {
    widthRatio: 1,
    heightRatio: 1,
};

export default NavBarSocial;
