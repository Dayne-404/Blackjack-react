import Hand from "./Hand";

interface DealerProps {
    total: number,
}

function Dealer({ total } : DealerProps) {
    return (
        <div className={"player-card-container"}>
            <div className='player-hand-container'>
                <div className="player-hand-total">
                    <h3>Dealer</h3>
                    <p>{total}</p>
                </div>
                <Hand name="dealer" />
            </div>
        </div>
    );
}

export default Dealer;