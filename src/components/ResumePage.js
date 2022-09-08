import React from "react";

const ResumePage = ({ name, description, cards, id }) => (
    <section className="resume-page" id={id} style={id === "experience" ? {
        "margin-bottom": 0,
    } : null}>
        <header className="resume-page__header">
            <span>
                <h2 id='previous_item'>{name}</h2>
                <h2 id='current_item'>{name}</h2>
                <h2>{name}</h2>
                <h2>{name}</h2>
                <h2>{name}</h2>
                <h2>{name}</h2>
                <h2>{name}</h2>
                <h2>{name}</h2>
                <h2>{name}</h2>
            </span>

            <p>{description}</p>
        </header>
        <div className="resume-page__cards">
            {cards}
        </div>
    </section>
);

export default ResumePage;