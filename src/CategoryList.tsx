import { Dispatch } from "react";
import * as Translations from "./data.json";
import { k } from "./App";
import { capitalize } from "./utils/capitalizeString";

function CategoryList({
  setCategory,
}: {
  setCategory: Dispatch<React.SetStateAction<k>>;
}) {
  const categories = Object.keys(Translations).filter(
    (t) => t !== "default"
  ) as k[];

  return (
    <div className="p-4 flex flex-row gap-4 mx-auto justify-center flex-wrap">
      {categories.map((c) => (
        <button
          key={c}
          onClick={() => setCategory(c)}
          className="bg-white w-40 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
          {capitalize(c)}
        </button>
      ))}
    </div>
  );
}
export default CategoryList;
