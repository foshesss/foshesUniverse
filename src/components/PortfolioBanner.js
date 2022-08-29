import React from "react";

const PortfolioBanner = ({ text }) => (
    <div className="portfolio__banner">
        <span className="portfolio__banner-prev-item">
            {text}
        </span>
        <span id="portfolio__banner-header">
            {text}
        </span>
        <span className="portfolio__banner-next-items">
            {text + " " + text + " " + text + " " + text}
        </span>
    </div>
);

export default PortfolioBanner;