import { Dispatch } from "react";
import * as Translations from "../data.json";
import { k } from "../App";
import { capitalize } from "../utils/capitalizeString";

function CategoryList({
  category,
  setCategory,
}: {
  category: k;
  setCategory: Dispatch<React.SetStateAction<k>>;
}) {
  const categories = Object.keys(Translations).filter(
    (t) => t !== "default"
  ) as k[];

  return (
    <div className="p-2 sm:p-8 flex flex-row gap-4 mx-auto justify-center flex-wrap">
      {categories.map((c) => (
        <button
          key={c}
          onClick={() => setCategory(c)}
          className="w-40 hover:bg-gray-100 text-gray-800 font-semibold py-2 border border-gray-400 rounded shadow bg-blue-300"
          style={{
            backgroundColor: c === category ? "#93c5fd" : "white",
          }}
        >
          {capitalize(c)}
        </button>
      ))}
    </div>
  );
}
export default CategoryList;
