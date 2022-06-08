import React,{useEffect, useState} from "react";
import "./App.css";
import Recipe from "./Recipes";

function App() {

	const APP_ID = "28a2e699";
	const APP_KEY = "056544c9a69b8f9ea2916eebb9aec521";

	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState('');
	const [query, setQuery] = useState('chicken');

	useEffect(() => {
		getRecipes();
	}, [query]);

	const getRecipes = async () => {
		const response = await  fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
		const data = await response.json();
		setRecipes(data.hits);
	}

	const updateSearch = e => {
		setSearch(e.target.value);
	}

	const getSearch = e => {
		e.preventDefault();
		setQuery(search);
		setSearch('');
	}

	return (
		<div className="App">
			<form onSubmit={getSearch} className="search-form">
				<input className="search-bar" type="text" value={search} onChange={updateSearch}/>
				<button className="search-button" type="submit">Search</button>
			</form>
			{recipes.map(recipe => (
				<Recipe
				key={recipe.recipe.label} 
				title={recipe.recipe.label} 
				calories={recipe.recipe.calories} 
				image={recipe.recipe.image}
				/>
			))}
		</div>
	);
}

export default App;
