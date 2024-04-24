import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Card from './Card';

interface HandProps {
    name: string;
    hand: string[] | undefined;
}

function Hand({ name, hand }: HandProps) {
    const [cards, setCards] = useState<string[]>(hand || []);
    const largeHand = cards?.length > 3;

    useEffect(() => {
        if (hand) {
            setCards(hand);
        }
    }, [hand]);

    const addCard = () => {
        const newCard = "QD";
        setCards([...cards, newCard]);
    }

    return (
        <>
            <motion.div layout className="hand-container">
                {cards?.map((card, index) => (
                    <motion.div
                        animate={{ x: 0, scale: 1 }}
                        initial={{ x: "3rem", scale: 1.5 }}
                        transition={{ duration: 0.3 }}
                        key={`${name}-card-${index}`}
                        layoutId={`${name}-card-${index}`}
                        className={(largeHand ? "negative-margin" : "no-margin") + " card"}>
                        <Card key={index} cardString={card} />
                    </motion.div>
                ))}
            </motion.div>
            <button onClick={addCard}>Add Card</button>
        </>
    );
}

export default Hand;
