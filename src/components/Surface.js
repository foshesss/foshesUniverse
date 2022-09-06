import React from 'react';
import PropTypes from 'prop-types';

const Surface = ({ offset }) => (
    <div
        className="surface__body"
        id="home"
        offset={offset}
    >
        <div className="surface__info-container">
            <div>
                <h1 className="surface__name">
                    will hamilton
                </h1>
            </div>
            <div>
                <h2 className="surface__job-title">
                    game developer, twitch streamer
                </h2>
            </div>
        </div>
    </div>
);

Surface.propTypes = {
    offset: PropTypes.number.isRequired,
};

export default Surface;
