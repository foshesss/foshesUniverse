import React from 'react';
import PropTypes from 'prop-types';
import scrollToElement from '../functions/scrollToElement';

const NavBarButton = ({ text, goal }) => (
    <li>
        <button
            type="button"
            onClick={() => scrollToElement(goal)}
        >
            {text}
        </button>
    </li>
);

NavBarButton.propTypes = {
    text: PropTypes.string.isRequired,
    goal: PropTypes.string,
};

NavBarButton.defaultProps = {
    goal: null,
};

export default NavBarButton;