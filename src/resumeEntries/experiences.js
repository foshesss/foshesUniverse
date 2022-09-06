import React from "react";
import ResumeCard from "../components/ResumeCard";

const experiences = [
    <ResumeCard 
        title="TeleTracking Internship"
        description="Worked on the Productivity Engineering team, creating developer tools and contributing to a front-end framework."
        imgStyle={{
            "objectFit": "contain",
            "width": "95%",
            "top": "0",
        }}
        src="https://www.teletracking.com/media/1751/open-graph-teletracking-default.png?width=3000&upscale=false"
        alt="teletracking"
        fileType="tele"
    />,
    <ResumeCard 
        title="Programming Livestreamer"
        description="Host an educational software development stream, explaining code and collaborating with viewers."
        src="https://iconape.com/wp-content/png_logo_vector/twitch-2.png"
        alt="twitch"
        fileType="twitch"
        linkText="Channel link"
        link="https://www.twitch.tv/superjoshiepartyanimal123"
    />,
    <ResumeCard 
        title="Game Developer"
        description="Host an educational software development stream, explaining code and collaborating with viewers."
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Roblox_player_icon_black.svg/1200px-Roblox_player_icon_black.svg.png"
        alt="roblox"
        fileType="blox"
        linkText="Profile link"
        link="https://www.roblox.com/users/14219595/profile"
    />,
];

export default experiences;