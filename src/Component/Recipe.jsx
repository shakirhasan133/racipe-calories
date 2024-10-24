import { useEffect, useState } from "react";
import Card from "./Card";
import Sidebar from "./Sidebar";
import { TbPhotoExclamation } from "react-icons/tb";

const Recipe = () => {
  const [recipe, setRecipe] = useState([]);
  useEffect(() => {
    fetch("Recipe.json")
      .then((res) => res.json())
      .then((data) => setRecipe(data));
  }, []);

  const [cookData, setCookData] = useState([]);
  const [deletedCookData, setDeletedCookData] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const handleCalculate = (time, calories) => {
    setTotalTime(totalTime + time);
    setTotalCalories(totalCalories + calories);
  };

  const handleCoock = (data) => {
    const newData = recipe.find((cook) => cook.recipe_id === data);
    const isExist = cookData.find((cook) => cook.recipe_id === data);

    if (!isExist) {
      setCookData((prevData) => [...prevData, newData]);
    } else {
      alert("This Recipe already exist");
    }
  };

  const handleRemove = (id) => {
    const deletedData = cookData.find((recipe) => recipe.recipe_id === id);
    const updateCookData = cookData.filter((recipe) => recipe.recipe_id !== id);

    setCookData(updateCookData);
    setDeletedCookData([...deletedCookData, deletedData]);
  };

  useEffect(() => {}, [cookData]);

  return (
    <div>
      <div className=" mx-auto py-6 w-full">
        <h1 className="font-bold text-3xl text-center my-4">Our Recipe </h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          quo.
        </p>
      </div>

      <div className="md:flex border p-5 gap-4 ">
        <div className="md:w-7/12 w-full grid md:grid-cols-2 grid-cols-1 gap-2 ">
          {recipe.map((data) => {
            return (
              <Card
                key={data.recipe_id}
                data={data}
                handleCoock={handleCoock}
              ></Card>
            );
          })}
        </div>

        <div className="md:w-5/12 w-full">
          <Sidebar
            data={cookData}
            handleRemove={handleRemove}
            deletedCookData={deletedCookData}
            handleCalculate={handleCalculate}
            totalTime={totalTime}
            totalCalories={totalCalories}
          ></Sidebar>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
