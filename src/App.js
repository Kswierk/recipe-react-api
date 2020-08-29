import React, { useEffect, useState } from 'react';
import Recipe from './components/Recipe/Recipe'
import './App.css';

const App = () => {

  const APP_ID = '8157949f';
  const APP_KEY = '73f8424a3fe59da817664101635bf20a';

  const [recipies, setRecipes] = useState([]);

  const [search, setSearch] = useState('');

  const [query, setQuery] = useState('')


  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
  };


  useEffect(() => {
    getRecipes()
  }, [query]);

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />

        <button className="search-button" type="submit">Submit</button>
      </form>
      <div className="recipies">
        {recipies.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            img={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
