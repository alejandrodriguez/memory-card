import React, { useState, useEffect } from "react";
import Card from "./Card";
import uniqid from "uniqid";

function Gameboard(props) {
    const [cards, setCards] = useState(props.children);
    const [score, setScore] = useState(0);
    const [maxScore, setMaxScore] = useState(0);

    function shuffle() {
        let shuffledCards = [...cards];
        shuffledCards.sort(() => Math.random() - 0.5);
        setCards(shuffledCards);
    }

    // Randomly display cards on load
    useEffect(() => {
        shuffle();
    }, []);

    return (
        <div className="Gameboard">
            <div>
                <span className="instructions">
                    Click a picture, but don't click the same picture twice!
                </span>
                <span className="score">Score: {score}</span>
                <span className="score">Max Score: {maxScore}</span>
            </div>
            <div className="CardsContainer">
                {cards.map(card => (
                    <Card {...card.props} shuffle={shuffle} key={uniqid()} />
                ))}
            </div>
        </div>
    );
}

export default Gameboard;
