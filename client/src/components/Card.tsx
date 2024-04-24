import aceDiamonds from '../assets/cards/ace_of_diamonds.svg?react';
import twoDiamonds from '../assets/cards/2_of_diamonds.svg?react';
import threeDiamonds from '../assets/cards/3_of_diamonds.svg?react';
import fourDiamonds from '../assets/cards/4_of_diamonds.svg?react';
import fiveDiamonds from '../assets/cards/5_of_diamonds.svg?react';
import sixDiamonds from '../assets/cards/6_of_diamonds.svg?react';
import sevenDiamonds from '../assets/cards/7_of_diamonds.svg?react';
import eightDiamonds from '../assets/cards/8_of_diamonds.svg?react';
import nineDiamonds from '../assets/cards/9_of_diamonds.svg?react';
import tenDiamonds from '../assets/cards/10_of_diamonds.svg?react';
import jackDiamonds from '../assets/cards/jack_of_diamonds.svg?react';
import queenDiamonds from '../assets/cards/queen_of_diamonds.svg?react';
import kingDiamonds from '../assets/cards/king_of_diamonds.svg?react';

const cardsDict: { [key: string]: React.ComponentType } = {
    '1D': aceDiamonds,
    '2D': twoDiamonds,
    '3D': threeDiamonds,
    '4D': fourDiamonds,
    '5D': fiveDiamonds,
    '6D': sixDiamonds,
    '7D': sevenDiamonds,
    '8D': eightDiamonds,
    '9D': nineDiamonds,
    '10D': tenDiamonds,
    'JD': jackDiamonds,
    'QD': queenDiamonds,
    'KD': kingDiamonds
}
interface CardProps {
    cardString: string
    style?: React.CSSProperties;
}

function Card({cardString}: CardProps) {
    const CardComponent = cardsDict[cardString];
    
    if(!CardComponent)
        return;

    return (
         <CardComponent />
    )
}

export default Card;