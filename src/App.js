import React,{useEffect, useState} from "react";
import "./App.css";

function App() {

	const APP_ID = "28a2e699";
	const APP_KEY = "056544c9a69b8f9ea2916eebb9aec521";

	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		getRecipes();
	}, []);

	const getRecipes = async () => {
		const response = await  fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
		const data = await response.json();
		setRecipes(data.hits);
	}

	return (
		<div className="App">
			<form className="search-form">
				<input className="search-bar" type="text"/>
				<button className="search-button" type="submit">Search</button>
			</form>
		</div>
	);
}

export default App;
