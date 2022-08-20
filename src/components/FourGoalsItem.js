import React from "react";
const FourGoalsItem = ({header, contents}) => {
    return (
        <li className="four-goals-item">
            <h3>{header}</h3>
            <p>{contents}</p>
        </li>
    );
}

export default FourGoalsItem;