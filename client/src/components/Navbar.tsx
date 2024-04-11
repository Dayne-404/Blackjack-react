import Chip from "../assets/chip.svg?react"

function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-container content-wrapper">
                <a className="logo" href="/"><Chip className='logo' /></a>
                <h1 className="site-title"><a href="/">Blackjack</a></h1>
                <a className="logo" href="/"><Chip className='logo' /></a>
            </div>
        </nav>
    );
}

export default Navbar 