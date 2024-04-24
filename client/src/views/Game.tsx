import Player from '../components/Player';
import Dealer from '../components/Dealer';
// import Deck from '../components/Deck';
import '../styles/responsiveGame.css';

import chad from '../assets/images/chad.jpg';
import { useState } from 'react';

function Game() {
    const [players, setPlayers] = useState([
        {playerName: 'Dayne', hands: [['KD', 'QD'],], total: 0, bet: 0, icon: chad},
        {playerName: 'Niko', hands: [['KD', 'QD']], total: 0, bet: 0, icon: chad},
    ]);
    
    function addPlayer() {
        const newPlayer = {
            playerName: `Player ${players.length + 1}`,
            hands: [[]],
            total: 0,
            bet: 0,
            icon: chad,
        };

        setPlayers([...players, newPlayer]);
    }
    
    return (
        <div className='table-container'>
            <h2 className='table-name'>Table Name</h2>
            <div className="game-board">
                <Dealer total={0} />
                <h2 className='table-text'>Dayne's Blackjack</h2>    
                <div className='players-container'>
                    {players.map((player, index) => (
                        <Player 
                            key={index} 
                            className='' 
                            playerName={player.playerName} 
                            total={player.total} bet={player.bet} 
                            icon={player.icon}
                            hands={player.hands}
                        />
                    ))}
                </div>
            </div>
            <div className='game-button-container'>
                <button onClick={addPlayer} className='game-btn hit-color'>Hit</button>
                <button className='game-btn stand-color'>Stand</button>
                <button className='game-btn double-color'>Double</button>
                <button className='game-btn split-color'>Split</button>
            </div>
        </div>
    )
}

export default Game;