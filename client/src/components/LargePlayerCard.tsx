import chad from "../assets/images/chad.jpg";

function LargePlayerCard() {
    return(
        <>
        <div className="large-player-card-container">
            <div className="player-hand-total"><p>[ TOTAL ]</p></div>
            <div className="player-info">
                <img className="player-photo" src={chad} alt="player photo" />
                <h3>[ PLAYER NAME ]</h3>
                <p>[ BET ]</p>
            </div>
        </div>
        </>
    );
}

export default LargePlayerCard;