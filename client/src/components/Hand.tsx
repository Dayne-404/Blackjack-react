import { motion } from 'framer-motion';
import { useState } from 'react';
import Card from './Card';

interface HandProps {
    name: string
}

function Hand({name} : HandProps) {
    const [Cards, setCards] = useState<JSX.Element[]>([])
    const largeHand = Cards.length > 3;
    
    const addCard = () => {
        const newCard = <Card key={Cards.length} suit="D" value="3" />
        setCards([...Cards, newCard]);
    }

    return(
        <>
        <motion.div layout className={(largeHand ? "no-gap" : "small-gap") + " player-cards-container"}>
            {Cards.map((card, index) => (
                <motion.div 
                    animate={{x: 0, scale: 1}} 
                    initial={{x: "3rem", scale: 1.5}}
                    transition={{duration: 0.3}} 
                    key={`${name}-card-${index}`}
                    layoutId={`${name}-card-${index}`} 
                    className={(largeHand ? "negative-margins" : "no-margins") + " card-wrapper"}>    
                    {card}
                </motion.div>
            ))}
        </motion.div>
        <button onClick={addCard}>Add Card</button>  {/* TEMP BUTTON */}
        </>
    );
}

export default Hand;