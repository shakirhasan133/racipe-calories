import { MdAccessTime, MdOutlineLocalFireDepartment } from "react-icons/md";

const Card = ({ data, handleCoock }) => {
  const {
    recipe_image,
    recipe_id,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = data;
  return (
    <div>
      <div className="rounded-lg border-2 p-6 h-[650px] w-full shadow-lg mb-4 ">
        <img
          className="w-full rounded-lg h-[190px] object-fill"
          src={recipe_image}
          alt={`Image of ${recipe_name}`}
        />
        <h2 className="font-bold my-3">{recipe_name}</h2>
        <p className=" mb-3">{short_description}</p>
        <hr />

        <h3 className="font-bold text-xl py-2">
          Ingredients {ingredients.length}
        </h3>
        <ul className="list-disc list-inside">
          {ingredients.map((data, i) => (
            <li key={i}>{data}</li>
          ))}
        </ul>

        <div className="flex items-center gap-3 mt-4">
          <div className="flex items-center gap-2">
            <MdAccessTime></MdAccessTime>
            <p>{preparing_time}</p>
          </div>

          <div className="flex items-center gap-2">
            <MdOutlineLocalFireDepartment></MdOutlineLocalFireDepartment>
            <p>{calories}</p>
          </div>
        </div>

        <div className="text-center my-5">
          <button
            onClick={() => handleCoock(recipe_id)}
            className=" bg-[#0BE58A] px-2 py-1 rounded-md font-semibold text-white"
          >
            Want to Cook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
