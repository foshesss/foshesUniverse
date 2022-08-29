import React from "react";
import Name from "./Name";
import PersonalDescription from "./PersonalDescription";
import CallToAction from "./CallToAction";

const Introduction = () => (
    <div className="introduction" id="home">
        <div className="introduction__container">
            <Name />
            <PersonalDescription />
            <CallToAction />
        </div>
    </div>
);

export default Introduction;