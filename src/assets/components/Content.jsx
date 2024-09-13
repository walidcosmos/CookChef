import { useState } from "react";
import Recipe from "./Recipe";
import { data } from "../data/recipes";

function Content() {
  const [searchTerm, setSearchTerm] = useState(""); // State to store input

  // Function to check if the recipe title starts with the input value
  const checkRecipe = (recipe) => {
    return recipe.title.toLowerCase().startsWith(searchTerm.toLowerCase());
  };

  // Filter the recipes based on the search input
  const filteredRecipies = data.filter(checkRecipe);

  return (
    <div className="flex-auto flex-col justify-center items-center  p-5">
      <h1 className="my-7 ">Découvrez nos nouvelles recettes</h1>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex flex-row w-full mb-6 border-2 rounded-3xl my-8 px-5 py-2">
          <i className="fa-solid fa-magnifying-glass mr-4"></i>
          <input
            type="text"
            placeholder="Rechercher"
            className="flex-auto outline-0 border-0 border-gray-500 font-serif"
            onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
          />
        </div>

        <div className="grid place-content-center grid-cols-[repeat(3,_350px)] gap-y-20 gap-x-20">
          {filteredRecipies.map((r) => (
            <Recipe title={r.title} image={r.image} key={r._id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Content;
