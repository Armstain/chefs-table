import { useEffect, useState } from "react";
import Recipe from "./Recipe.jsx";

const Recipes = ({ handleRecipeSelection }) => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, []);

    return (
        <div>


            <div className='grid grid-cols-2 gap-3'>
                {
                    recipes.map((recipe, index) => <Recipe handleRecipeSelection={handleRecipeSelection} key={index} recipe={recipe}></Recipe>)
                }

            </div>
        </div>
    );
};

export default Recipes;