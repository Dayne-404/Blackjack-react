import Player from '../components/Player';
import Dealer from '../components/Dealer';
// import Deck from '../components/Deck';
import '../styles/responsiveGame.css';

import chad from '../assets/images/chad.jpg';

function Game() {
    return (
        <div className='table-container'>
            <h2 className='table-name'>Table Name</h2>
            <div className="game-board">
                <Dealer total={0} />    
                <div className='players-container'>
                    <Player className='' playerName='Dayne' total={0} bet={0} icon={chad} />
                    <Player className='' playerName='Niko' total={0} bet={0} icon={chad} />
                    <Player className='' playerName='Anthony' total={0} bet={0} icon={chad} />
                </div>
            </div>
            <div className='game-button-container'>
                <button className='game-btn hit-color'>Hit</button>
                <button className='game-btn stand-color'>Stand</button>
                <button className='game-btn double-color'>Double</button>
                <button className='game-btn split-color'>Split</button>
            </div>
        </div>
    )
}

export default Game;