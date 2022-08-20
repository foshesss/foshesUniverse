import React from "react";
import FourGoalsItem from "./FourGoalsItem";

const Introduction = () => {

    return (
       <div className="underground__body">
            <h1 className="underground__mainTXT">
                Building Games for the Next Generation
            </h1>
            <div className="underground__four-goals">
                <ul>
                    <FourGoalsItem 
                        header="Challenge your imagination"
                        contents="My overall goal is to challenge what people's
                        imagination. When you were a kid, you might've imagined
                        insane things. As an adult, we brush those ideas off
                        as childish or not feasible. I want to break
                        that line of thinking."
                    />
                    <FourGoalsItem 
                        header="Well made games"
                        contents="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Sodales neque sodales ut etiam sit. Nibh nisl condimentum id 
                        venenatis a. Tincidunt lobortis feugiat vivamus at augue eget 
                        arcu dictum varius. Ultrices sagittis orci a scelerisque purus. 
                        Felis donec et odio pellentesque diam."
                    />
                                        <FourGoalsItem 
                        header="Well made games"
                        contents="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Sodales neque sodales ut etiam sit. Nibh nisl condimentum id 
                        venenatis a. Tincidunt lobortis feugiat vivamus at augue eget 
                        arcu dictum varius. Ultrices sagittis orci a scelerisque purus. 
                        Felis donec et odio pellentesque diam."
                    />
                                        <FourGoalsItem 
                        header="Well made games"
                        contents="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Sodales neque sodales ut etiam sit. Nibh nisl condimentum id 
                        venenatis a. Tincidunt lobortis feugiat vivamus at augue eget 
                        arcu dictum varius. Ultrices sagittis orci a scelerisque purus. 
                        Felis donec et odio pellentesque diam."
                    />
                </ul>
            </div>
       </div>
    )
}

export default Introduction;