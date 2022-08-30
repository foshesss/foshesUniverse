import React from "react";
import NavBar from "./NavBar";
import Introduction from "./Introduction";
import PortfolioPage from "./PortfolioPage";

// constants
import projects from "../constants/projects";
import experience from "../constants/experience";

const PageLayout = ({ style }) => (
    <div
        className="page-layout"
        style={style}
    >
        <NavBar />
        <Introduction />
        <PortfolioPage
            pageName={"projects"}
            contents={projects}
        />
        <PortfolioPage
            pageName={"experience"}
            contents={experience}
        />
    </div>
);

export default PageLayout;