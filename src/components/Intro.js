import React, { useState, useEffect } from "react";

const ChessWebAPI = require('chess-web-api');
const chessAPI = new ChessWebAPI();

const Intro = () => {
    const [chessRating, setChessRating] = useState(1000);
    const [age, setAge] = useState(21);

    useEffect(() => {
        // update chess rating
        chessAPI.getPlayerStats('foshes7')
        .then(function(response) {
            setChessRating(response.body.tactics.highest.rating);
        }, function(err) {
            console.error(err);
        });

        const birth = new Date("07/25/2001");
        const currentDate = new Date();

        const myAge = (currentDate.getTime() - birth.getTime())/ (1000 * 3600 * 24 * 365);

        // update age
        setAge(myAge.toFixed(1));
    }, []);


    return (
        <section id='intro-container'>
            <div>
                <h2>
                    Hi. My name's
                    <h1>Will Hamilton</h1>
                </h2>
                <p>
                    I'm a computer nerd with a knack for game development. 
                    My goal is to make somebody's childhood amazing through 
                    the games I make or contribute to, the same way games 
                    made my childhood.
                </p>
            </div>
            <section id='intro-stats'>
                <ul>
                    <li>
                        <h3>{age}</h3>
                        <p>years old</p>
                    </li>
                    <li>
                        <h3>679</h3>
                        <p>hours streamed</p>
                    </li>
                    <li>
                        <h3>{chessRating}</h3>
                        <p>chess rating</p>
                    </li>
                </ul>
            </section>
            <img
                alt="scroll for more!"
                src="https://cdn-icons-png.flaticon.com/512/159/159666.png"
            />
    
        </section>
    );
};

export default Intro;