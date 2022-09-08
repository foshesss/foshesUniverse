import React from "react";
import Intro from "./Intro";
import NavBar from "./NavBar";
import ResumePage from "./ResumePage";
import Socials from "./Socials";

import projects from "../resumeEntries/projects";
import experiences from "../resumeEntries/experiences";
import buttonInfo from "../data/buttonInfo";

const PageLayout = () => (
    <div id='page-layout'>
        <NavBar />
        <Intro />
        <ResumePage
            name='PROJECTS'
            description='an assortment of my personal projects'
            cards={projects}
            id='projects'
        />
        <ResumePage
            name='EXPERIENCE'
            description='industry experience-- you know the vibe'
            cards={experiences}
            id='experience'
        />
        <Socials buttonInfo={buttonInfo} />
    </div>
);

export default PageLayout;