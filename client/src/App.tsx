import Navbar from './components/Navbar';
//import Menu from './views/Menu';
import Game from './views/Game';
import "./styles/app.css";

function App() {
	return (
		<div>
			<Navbar />
			<main>
				<Game />
			</main>
		</div>
	);
}

export default App;
