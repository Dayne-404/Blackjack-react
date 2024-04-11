import LargePlayerCard from '../components/LargePlayerCard';
import '../styles/game.css';

function Game() {
    return (
        <>
        <LargePlayerCard />
        <div className="content-wrapper medium-top-padding center">
            <h2 className='table-name'>Table Name</h2>
            <div className="game-board center">
                
            </div>
            <div className='game-button-container'>
                <div className='main-actions-wrapper'>

                </div>
                <div className='extra-actions-wrapper'>

                </div>
            </div>
        </div>
        </>
    )
}

export default Game;