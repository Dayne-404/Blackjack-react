import Hand from './Hand';

import emptyProfilePicture from '../assets/images/empty.jpg';

interface PlayerProps {
    playerName: string,
    total: number,
    bet: number,
    icon?: string, //Probably going to get more complex later...
    className?: string,
    hands: string[][];
}

function PlayerCard({playerName, total, bet, icon, hands, className} : PlayerProps) {
    if(!icon)
        icon = emptyProfilePicture;
    
    

    return(
        <div className={"player-card-container " + className}>
            <div className='player-hand-container'>
                {hands.map((hand, index) => (
                    <Hand name={playerName+'-hand-'+index} hand={hand} />
                ))}
                <div className="player-hand-total"><p>{total}</p></div>
            </div>
            <div className="player-info">
                <img className="player-photo" src={icon} alt={playerName + " photo"} />
                <h3 className='player-name'>{playerName}</h3>
                <p>{bet}</p>
            </div>
        </div>
    );
}

export default PlayerCard;