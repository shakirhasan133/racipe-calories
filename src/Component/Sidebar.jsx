import { useState } from "react";

const Sidebar = ({
  data,
  handleRemove,
  deletedCookData,
  handleCalculate,
  totalCalories,
  totalTime,
}) => {
  return (
    <div className=" border-2 rounded-lg shadow-lg">
      <div className="w-full  rounded-lg">
        <div className="overflow-x-auto">
          <h1 className="text-center font-bold text-2xl py-3">
            Want to Cook {data.length}
          </h1>
          <hr />
          <table className="table mt-5">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {data.map((data, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{data.recipe_name}</td>
                  <td>{data.preparing_time}</td>
                  <td>{data.calories}</td>
                  <td>
                    <button
                      onClick={() => (
                        handleRemove(data.recipe_id),
                        handleCalculate(data.preparing_time, data.calories)
                      )}
                      className="bg-[#0BE58A] px-2 py-1 rounded-md font-semibold text-white"
                    >
                      Preparing
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/*  */}
      <div className="w-full rounded-lg mt-10 pb-6">
        <div className="overflow-x-auto">
          <h1 className="text-center font-bold text-2xl pb-3">
            Currently Cooking {deletedCookData.length}
          </h1>
          <hr />
          <table className="table mt-5">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {deletedCookData.map((data, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{data.recipe_name}</td>
                  <td>{data.preparing_time}</td>
                  <td>{data.calories}</td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td></td>
                <td>
                  Total <br /> {totalTime} minutes
                </td>
                <td>
                  Total <br /> {totalCalories} calories
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
