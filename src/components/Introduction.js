import React from "react";
import Name from "./Name";
import PersonalDescription from "./PersonalDescription";
import CallToAction from "./CallToAction";
import scrollToElement from "../functions/scrollToElement";

const Introduction = () => (
    <div className="introduction" id="home">
        <div className="introduction__container">
            <Name />
            <PersonalDescription />
            <CallToAction />
        </div>
        <button 
            className="moreIndicator"
            onClick={() => scrollToElement('projects')}
        >
            <img
                src={"https://cdn-icons-png.flaticon.com/512/159/159666.png"}
                alt={"down arrow"}
            >
            </img>
        </button>
    </div>
);

export default Introduction;