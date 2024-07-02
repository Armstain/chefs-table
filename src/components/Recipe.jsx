import { MdAccessTime } from "react-icons/md";
import { FaFire } from "react-icons/fa";

const Recipe = ({ recipe, handleRecipeSelection }) => {
  const { recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = recipe
  return (
    <div>
      <div className=" card w-auto bg-white shadow-xl border-2 border-black  ">
        <figure className="px-7 pt-7  ">
          <img src={recipe_image} alt={recipe_name} className="rounded-xl bg-cover bg-center " />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-black">{recipe_name}</h2>
          <p>{short_description}</p>
          <hr />
          <h1 className="text-black">Ingredients: {ingredients.length} </h1>
          <ul className=''>
            {ingredients.map((ingredients, index) => (
              <li key={index}>{ingredients}</li>
            ))}
          </ul>
          <hr />
          <div className="flex gap-6">
            <div className="flex items-center gap-1">
              <MdAccessTime />  {preparing_time} minutes
            </div>
            <div className="flex items-center gap-1">
              <FaFire /> {calories} calories
            </div>
          </div>
          <div className="card-actions">
            <button onClick={() => handleRecipeSelection(recipe)} className="btn bg-[#0BE58A] text-black rounded-full border-none">Want to Cook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;