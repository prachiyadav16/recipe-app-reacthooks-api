import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title , image , ingredients, url}) =>{

  return(
    <div className = {style.recipe}>
     <h1 className={style.title}>{title}</h1>
       <ol className={style.ingredients}>
           {ingredients.map(ingredient =>(
             <li>{ingredient.text} </li>
           ))}
       </ol>
     <img className={style.image} src={image} alt="" />
     <a href={url} className = {style.url}>Click to Know Steps</a>
    </div>
  );

}

export default Recipe;
