import "./App.css"
import Header from "./Components/Header/Header"
import Menu from "./Components/Menu/Menu"
import RockFinder from "./Components/RockFinder/RockFinder"
import RoutesList from "./Components/RoutesList/RoutesList"
import Map from "./Components/Map/Map"

function App() {
	return (
		<div className='App'>
			<Menu />
			<Header />
			<RockFinder />
			<RoutesList />
			<Map/>
		</div>
	)
}

export default App
