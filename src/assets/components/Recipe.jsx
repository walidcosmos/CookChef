import PropTypes from "prop-types";
import { useState } from "react";

function Recipe({ title, image }) {
  const [liked, setLike] = useState(false);

  function handleClick() {
    setLike(!liked);
  }

  return (
    <div className=" h-96 cursor-pointer " onClick={handleClick}>
      <div className="h-72 overflow-hidden rounded-t-3xl hover:scale-110 duration-200 ">
        <img src={image} alt="recipe" />
      </div>
      <div className="flex flex-col justify-center items-center h-20  border-2 rounded-b-3xl ">
        <h3 className="mb-5">{title}</h3>
        <i
          className={`fa-solid fa-heart text-xl ${liked ? "text-red-500" : ""}`}
        ></i>
      </div>
    </div>
  );
}

Recipe.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Recipe;
