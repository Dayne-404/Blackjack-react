import Hand from "./Hand";

interface DealerProps {
    total: number,
}

function Dealer({ total } : DealerProps) {
    return (
        <div className="large-player-card-container">
            <h3>Dealer</h3>
            <Hand name="dealer" />
            <div className="player-hand-total"><p>{total}</p></div>
        </div>
    );
}

export default Dealer;