import React, { useState } from "react";
import css from "./Category.module.css";

const tabs = [
  "Столы",
  "Стулья",
  "Консоли",
  "Кресла",
  "Интерьерные диваны",
  "Распродажа",
];

const Category = () => {
  const [active, setActive] = useState("Столы");

  const handleActive = (tab) => {
    setActive(tab);
  };

  return (
    <div className="container">
      <h2 className={css.category__title}>Популярные категории</h2>
      <div className={css.category__tabs}>
        <ul>
          {tabs.map((tab) => (
            <li
              className={active === tab ? css.active : ""}
              key={tab}
              onClick={() => handleActive(tab)}
            >
              {tab}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;
