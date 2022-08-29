import React from "react";
import PortfolioBanner from "./PortfolioBanner";
import PortfolioBar from "./PortfolioBar";

const PortfolioPage = ({ pageName, contents }) => (
    <div
        className="portfolio-page"
        id={pageName}
    >
        <PortfolioBanner
            text={pageName.toUpperCase()}
        />
        <PortfolioBar
            contents={contents}
        />
        <h1 className="portfolio-page__helper">
            <i>scroll to see more items</i>
        </h1>
    </div>
);

export default PortfolioPage;