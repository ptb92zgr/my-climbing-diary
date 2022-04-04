import "./App.css"
import Header from "./Components/Header/Header"
import Menu from "./Components/Menu/Menu"
import RockFinder from "./Components/RockFinder/RockFinder"
import RoutesList from "./Components/RoutesList/RoutesList"
import Map from "./Components/Map/Map"
import Footer from "./Components/Footer/Footer"

function App() {
	return (
		<div className='App'>
			<Menu />
			<Header />
			<RockFinder />
			<RoutesList />
			<Map />
			<Footer />
		</div>
	)
}

export default App
