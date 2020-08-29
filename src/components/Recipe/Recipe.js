import React from 'react';
import styles from './recipe.module.scss'

const Recipe = ({ title, calories, img, ingredients }) => {
    return (
        <div className={styles.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img className={styles.img}
                src={img}></img>
        </div>

    );
}

export default Recipe;