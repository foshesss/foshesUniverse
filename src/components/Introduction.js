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
        <button>
            <img
                className="moreIndicator"
                src={"https://assets.stickpng.com/images/58f8bcf70ed2bdaf7c128307.png"}
                alt={"down arrow"}
            >
            </img>
        </button>
    </div>
);

export default Introduction;