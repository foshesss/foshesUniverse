import React from 'react';
import PropTypes from 'prop-types';

const AboutHeader = ({ scrollPercent }) => (
    <h1
        className="about__header"
        style={{
            transform: `translateX(${(scrollPercent / 7.5)}vw)`,
        }}
    >
        ABOUT ME
    </h1>
);

AboutHeader.propTypes = {
    scrollPercent: PropTypes.number.isRequired,
};

export default AboutHeader;
