import CardItem from "./CardItem";
import { itemColors } from "./utils/constants";
import { CategoryData } from "./utils/types";

function CardList({ category }: { category: CategoryData[] }) {
  const randomized = category.sort(() => 0.5 - Math.random());

  return (
    <div className="p-8 m-auto w-6/12">
      <div className="flex flex-row flex-wrap gap-4">
        {randomized.map((c, i) => (
          <CardItem
            key={c.english}
            categoryData={c}
            color={itemColors[i % 5]}
          />
        ))}
      </div>
    </div>
  );
}
export default CardList;
