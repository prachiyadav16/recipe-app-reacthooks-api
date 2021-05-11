import React , {useEffect , useState} from 'react';
import Header from './header'
import Recipe from './recipes';
import './App.css';


const App = () => {

  const APP_ID = "c77d7943";
  const APP_KEY = "742d07606cca4ca9f5ac67b944265024";

  const[recipes , setRecipes] = useState([]);
  const[search , setSearch] = useState("");
  const[query , setQuery] = useState('chicken');


   useEffect(() => {
     getRecipes();
   } , [query]);

   const getRecipes = async () => {
     const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY} `);
     const data = await response.json();
     setRecipes(data.hits);
     console.log(data.hits);
   };

   const updateSearch = e => {
     setSearch(e.target.value);
     console.log(search);
   };

   const getSearch = e =>{
     e.preventDefault();
     setQuery(search);
     setSearch("");

   };

  return(
    <div className = "App">
      <div className = "header">
          <Header />
      </div>
     <form className = "search-form"
       onSubmit = {getSearch}>
       <input className ="search-bar"
         type = "text"
         value = {search}
         onChange = {updateSearch} />
       <button className ="search-button" type="submit" >Search</button>
     </form>
     <div className="recipes">
       {recipes.map(recipe => (
         <Recipe
         key = {recipe.recipe.label}
         title = {recipe.recipe.label}
         image = {recipe.recipe.image}
         ingredients = {recipe.recipe.ingredients}
          url={recipe.recipe.url} />

       ))}
     </div>
 </div>

  );

}



export default App;
