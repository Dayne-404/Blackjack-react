import Player from '../components/Player';
import Dealer from '../components/Dealer';
// import Deck from '../components/Deck';
import '../styles/responsiveGame.css';

import chad from '../assets/images/chad.jpg';

function Game() {
    return (
        <div>
            <h2 className='table-name'>Table Name</h2>
            <div className="game-board">
                <Dealer total={0} />    
                <div className='players-container'>
                    <Player className='' playerName='Dayne' total={0} bet={0} icon={chad} />
                    <Player className='' playerName='Niko' total={0} bet={0} icon={chad} />
                    <Player className='' playerName='Jeremy' total={0} bet={0} icon={chad} />
                </div>
            </div>
        </div>
    )
}

export default Game;