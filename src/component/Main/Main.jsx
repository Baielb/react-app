import React from "react";
import css from "./Main.module.css";

const Main = () => {
  return (
    <div className={css.main}>
      <div className="container">
        <div className={css.main__banner}>
          <div className={css.baner__text}>
            <h1 className={css.main__title}>
              Идеи, товары и услуги.
              <br />
              Все для красивого дома
            </h1>
            <p>
              У нас есть и готовые модели, и возможность сделать мебель на заказ
              по вашему собственному дизайну.
            </p>
          </div>
          <div className={css.baner__img}></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
