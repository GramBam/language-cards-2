import ReactCardFlip from "react-card-flip";
import { CategoryData } from "./utils/types";
import { useState } from "react";
import { itemColors } from "./utils/constants";

function CardItem({
  categoryData,
  color,
}: {
  categoryData: CategoryData;
  color: string;
}) {
  const [flipped, setFlipped] = useState<boolean>(false);

  return (
    <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
      <button
        onClick={() => setFlipped(!flipped)}
        className={`p-10 w-60 h-40 rounded-lg text-2xl`}
        style={{ backgroundColor: color }}
      >
        <p>{categoryData.english}</p>
      </button>
      <button
        onClick={() => setFlipped(!flipped)}
        className={`p-10 w-60 h-40 rounded-lg text-2xl`}
        style={{ backgroundColor: color }}
      >
        <p>{categoryData.albanian}</p>
      </button>
    </ReactCardFlip>
  );
}
export default CardItem;