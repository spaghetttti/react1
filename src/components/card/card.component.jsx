import  React from "react";
import './card.styles.css';
// eslint-disable-next-line
export const Card = (props) => ( 
    <div className = 'card-container'>
        <img src={`https://robohash.org/KKY.png${props.monster.id}?set=set1&size=180x180`} alt="robot"/>
        <h5> <i> {props.monster.name} </i></h5>
        <p> { props.monster.email } </p>
    </div>
)