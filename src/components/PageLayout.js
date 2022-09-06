import React from "react";
import Intro from "./Intro";
import NavBar from "./NavBar";
import ResumePage from "./ResumePage";

import projects from "../resumeEntries/projects";
import experiences from "../resumeEntries/experiences";

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
    </div>
);

export default PageLayout;