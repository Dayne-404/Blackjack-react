import Navbar from './components/Navbar';
import Menu from './views/Menu';
import "./styles/app.css";

function App() {
	return (
		<div>
			<Navbar />
			<main>
				<Menu />
			</main>
		</div>
	);
}

export default App;
