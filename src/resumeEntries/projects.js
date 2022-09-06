import React from "react";
import ResumeCard from "../components/ResumeCard";

const projects = [
    <ResumeCard 
        title="'Infinite Canvas' Game Jam"
        description="Won second place while working in a team for a retro-themed game jam with an adaptation of the classic game ’Bomberman’."
        src="https://nitter.net/pic/pbs.twimg.com%2Fprofile_images%2F1504872391608053767%2FxKmq2awo_400x400.jpg"
        alt="infinite canvas logo"
        fileType="lua"
        linkText="Game link"
        link="https://www.roblox.com/games/8294693777/Dunderman"
    />,
    <ResumeCard 
        title="Advent of Code 2021"
        description="Solved an assortment of small programming problems that require a multitude of skill sets and skill levels."
        src="https://cdn.thenewstack.io/media/2021/12/521cd034-advent-of-code-2021.jpg"
        alt="advent of code!"
        fileType="ex"
        linkText="Project link"
        link="https://github.com/foshesss/Elixir/tree/master/advent_of_code"
    />,
    <ResumeCard 
        title="Encyclopedia"
        description="Created and actively contribute to a light-weight open-sourced framework for ROBLOX developers."
        src="https://t3.ftcdn.net/jpg/03/23/91/56/360_F_323915666_UJLgte2pXGRzQLWgyWjVYzkqWuYHY6vt.jpg"
        alt="encyclopedia logo"
        fileType="lua"
        linkText="Project link"
        link="https://github.com/foshesss/Encyclopedia"
    />,
    <ResumeCard 
        title="LOLCODE Calculator"
        description="Used an esoteric language, LOLCODE, to create a basic command line calculator that is capable of simple arithmetic."
        src="https://cdn3.iconfinder.com/data/icons/wpzoom-developer-icon-set/500/51-512.png"
        alt="lolcode"
        fileType="lol"
        linkText="Project link"
        link="https://github.com/foshesss/LOLCODE"
    />,
    <ResumeCard 
        title="Text-Based RPG"
        description="Created a text-based RPG featuring player actions like healing, attacking, and looting."
        src="https://images.idgesg.net/images/article/2019/03/c-plus-plus_code-100790020-large.jpg?auto=webp&quality=85,70"
        alt="c++ rpg game"
        fileType="cpp"
    />,
    <ResumeCard 
        title="Olfert's Quarry"
        description="Created an infinite mining game that features complex cave generation using the Marching Cubes algorithm and an array of 3D math."
        src="https://i.gyazo.com/9c1e8713956ba4730f3eec4a15b77cdd.jpg"
        alt="olfert's quarry"
        fileType="lua"
    />,
    <ResumeCard 
        title="Deck of Cards"
        description="Created a deck of cards and other actions that are associated with a deck of cards (shuffle, deal, saving, loading)."
        src="https://static.thenounproject.com/png/15599-200.png"
        alt="deck of cards"
        fileType="go"
        linkText="Project link"
        link="https://github.com/foshesss/CardGame"
    />,
    <ResumeCard 
        title="Project: Foshes"
        description="Recreating a childhood game. Within the game, a murderer has special abilities and all other players must work together to defeat them."
        src="https://i.gyazo.com/5a221198e84afde3df06170c84a8363f.png"
        alt="project foshes"
        fileType="lua"
        linkText="Game link"
        link="https://www.roblox.com/games/8526259037/Project-Foshes"
    />,
    <ResumeCard 
        title="This Website"
        description="Created this website using ReactJS and SCSS. Deployed it through GitHub."
        src="https://64.media.tumblr.com/c9ae57ddaa9aace76a5a49f84b1809b4/0e2cf55e0a8da0c3-c2/s2048x3072/b5210aa9c40f2524b1e5f7a32697930d1461601b.jpg"
        alt="this-website"
        fileType="js"
        linkText="Source code"
        link="https://github.com/foshesss/foshesUniverse"
    />
];

export default projects;