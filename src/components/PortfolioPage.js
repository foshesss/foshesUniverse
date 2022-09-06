import React, { useState } from "react";
import isOverflowing from "../functions/isOverflowing";
import PortfolioBanner from "./PortfolioBanner";
import PortfolioBar from "./PortfolioBar";
import $ from 'jquery';

const PortfolioPage = ({ pageName, contents }) => {

    const [overflowing, setOverflowing] = useState(false);
    const barKey = pageName + "-bar";

    $({barKey}).ready(function() {
        setOverflowing(
            isOverflowing(document.getElementById(barKey))
        );
    });

    return (
        <div
            className="portfolio-page"
            id={pageName}
        >
            <PortfolioBanner
                text={pageName.toUpperCase()}
            />
            <PortfolioBar
                contents={contents}
                id={barKey}
            />
            <h1 
                className="portfolio-page__helper"
                style={{
                    visibility: overflowing === true ? 
                        'visible' : 'hidden',
                }}
            >
                <i>scroll left or right to see more items</i>
            </h1>
        </div>
    );
    
};

export default PortfolioPage;