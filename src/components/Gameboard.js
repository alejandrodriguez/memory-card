import React, { useState, useEffect } from "react";

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

    return <div className="Gameboard">{cards}</div>;
}

export default Gameboard;
