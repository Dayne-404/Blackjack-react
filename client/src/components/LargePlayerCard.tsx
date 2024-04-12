import { useState } from 'react';
import Card from "./Card";
import chad from "../assets/images/chad.jpg";

function LargePlayerCard() {
    const [Cards, setCards] = useState<JSX.Element[]>([
        <Card key="0" suit="D" value="K" />,
        <Card key="1" suit="D" value="1" />,
        <Card key="2" suit="D" value="2" />,
    ])
    
    const largeHand = Cards.length > 3;
    
    const addCard = () => {
        const newCard = <Card key={Cards.length} suit="D" value="3" />
        setCards([...Cards, newCard]);
    }

    return(
        <>
        <div className="large-player-card-container">
            <div className="player-hand-total"><p>[ TOTAL ]</p></div>
            <div className={(largeHand ? "no-gap" : "small-gap") + " player-cards-container"}>
                {Cards.map((card, index) => (
                    <div key={index} className={(largeHand ? "negative-margins" : "no-margins") + " card-wrapper"}>
                        {card}
                    </div>
                ))}
            </div>
            <div className="player-info">
                <img className="player-photo" src={chad} alt="player photo" />
                <h3>[ PLAYER NAME ]</h3>
                <p>[ BET ]</p>
            </div>
            <button onClick={addCard}>Add Card</button>
        </div>
        </>
    );
}

export default LargePlayerCard;