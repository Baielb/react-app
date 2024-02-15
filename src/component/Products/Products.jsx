import React, { useEffect, useState } from "react";
import css from "./Products.module.css";
import { URL } from "../../constants/api";

const Products = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch(URL);
      const items = await res.json();
      console.log(items, "-----ef----------");
      setData(items);
    };
    getProducts();
  }, []);

  if (data === null) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="container">
      <div className={css.df}>
        {data.map((el) => {
          return (
            <div className={css.card} key={el.id}>
              <img width={130} src={el.image} alt="" />
              <h3>{el.name}</h3>
              <p>{el.color}</p>
              <h4>
                {el.price} руб
                {el.old_price > 0 ? <span>{el.old_price}</span> : null}
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
