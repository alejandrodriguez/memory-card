import React, { useState, useEffect } from "react";
import Card from "./Card";
import uniqid from "uniqid";

function Gameboard(props) {
    const [cards, setCards] = useState(props.children);

    function shuffle() {
        let shuffledCards = [...cards];
        shuffledCards.sort(() => Math.random() - 0.5);
        setCards(shuffledCards);
    }

    // Randomly display cards on load
    useEffect(() => {
        shuffle();
    }, []);

    const [picturesClicked, setPicturesClicked] = useState([]);
    const [score, setScore] = useState(0);
    const [maxScore, setMaxScore] = useState(0);

    function updateScore(e) {
        console.log(picturesClicked);
        if (!picturesClicked.includes(e.target.src)) {
            const newScore = score + 1;
            setScore(newScore);
            if (newScore > maxScore) {
                setMaxScore(maxScore + 1);
            }
            setPicturesClicked([...picturesClicked].concat(e.target.src));
        } else {
            setScore(0);
            setPicturesClicked([]);
        }
        shuffle();
    }

    return (
        <div className="Gameboard">
            <div>
                <p className="instructions">
                    Click a picture, but don't click the same picture twice!
                </p>
                <p className="score">
                    Score: {score} Max Score: {maxScore}
                </p>
            </div>
            <div className="CardsContainer">
                {cards.map(card => (
                    <Card
                        {...card.props}
                        onClick={e => updateScore(e)}
                        key={uniqid()}
                    />
                ))}
            </div>
        </div>
    );
}

export default Gameboard;
