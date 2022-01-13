import React from "react";

const PersonCard = props => {

    // console.log("props", props); 
    // console.log("props.person", props.person); 
    

    return(
        <fieldset>
            <legend>PersonCard.jsx</legend>
            <h1>{props.person.lastName}, {props.person.firstName}</h1>
            <p>Age: {props.person.age}</p>
            <p>Hair Color: {props.person.hairColor}</p>
        </fieldset>

    )

}

export default PersonCard;