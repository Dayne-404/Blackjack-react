import Hand from './Hand';

import emptyProfilePicture from '../assets/images/empty.jpg';

interface PlayerProps {
    playerName: string,
    total: number,
    bet: number,
    icon?: string, //Probably going to get more complex later...
    className?: string;
}

function LargePlayerCard({playerName, total, bet, icon, className} : PlayerProps) {
    if(!icon)
        icon = emptyProfilePicture;
    
    return(
        <div className={"player-card-container " + className}>
            <div className='player-hand-container'>
                <Hand name={playerName} />
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

export default LargePlayerCard;