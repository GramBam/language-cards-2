import "./App.css";
import * as Translations from "./data.json";
import CardList from "./CardList";
import CategoryList from "./CategoryList";
import { useState } from "react";

type t = typeof Translations;
export type k = keyof t;

function App() {
  console.log(Translations["animals"]);

  const [category, setCategory] = useState<k>("conversation");
  return (
    <>
      <CategoryList setCategory={setCategory} />
      <CardList category={Translations[category]} />
    </>
  );
}

export default App;
