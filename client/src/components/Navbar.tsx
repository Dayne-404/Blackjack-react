import Chip from "../assets/chip.svg?react"

function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <div><a href="/"><Chip className='logo' /></a></div>
                <h1 className="site-title"><a href="/">Blackjack</a></h1>
            </div>
        </nav>
    );
}

export default Navbar 