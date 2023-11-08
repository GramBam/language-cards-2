import "./App.css";
import * as Translations from "./data.json";
import CardList from "./components/CardList";
import CategoryList from "./components/CategoryList";
import { useState } from "react";

type t = typeof Translations;
export type k = keyof t;

function App() {
  const [category, setCategory] = useState<k>("conversation");

  return (
    <>
      <CategoryList category={category} setCategory={setCategory} />
      <CardList category={Translations[category]} />
    </>
  );
}

export default App;
