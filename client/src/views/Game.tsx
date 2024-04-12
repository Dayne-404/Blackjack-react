import Player from '../components/Player';
import Dealer from '../components/Dealer';
import Deck from '../components/Deck';
import '../styles/game.css';

import chad from '../assets/images/chad.jpg';

function Game() {
    return (
        <div className="content-wrapper medium-top-padding center medium-bottom-padding">
            <h2 className='table-name'>Table Name</h2>
            <div className="game-board center">    
                <div className='game-dealer-container'>
                    <Dealer total={0}/>
                </div>
                <Deck></Deck>
                <h2 className='table-text'>DAYNE'S BLACKJACK</h2>
                <div className='game-players-container'>
                    <Player playerName='Dayne' total={0} bet={0} icon={chad} className='small-bottom-margin'></Player>
                    <Player playerName='Niko' total={0} bet={0} icon={chad}></Player>
                    <Player playerName='Joe' total={0} bet={0} icon={chad}></Player>
                    <Player playerName='Anthony' total={0} bet={0} icon={chad}></Player>
                    <Player playerName='Jeremy' total={0} bet={0} icon={chad} className='small-bottom-margin'></Player>
                </div>
            </div>
            
            <div className='game-button-container'>
                <div className='main-actions-wrapper'>

                </div>
                <div className='extra-actions-wrapper'>

                </div>
            </div>
        </div>
    )
}

export default Game;