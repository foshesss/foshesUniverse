import React from "react";
import isOverflowing from "../functions/isOverflowing";
import PortfolioBanner from "./PortfolioBanner";
import PortfolioBar from "./PortfolioBar";

const PortfolioPage = ({ pageName, contents }) => {

    const barKey = pageName + "-bar";

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
                    visibility: isOverflowing(
                        document.getElementById(barKey)
                    ) === true ? 'visible' : 'hidden',
                }}
            >
                <i>scroll left or right to see more items</i>
            </h1>
        </div>
    );
    
};

export default PortfolioPage;