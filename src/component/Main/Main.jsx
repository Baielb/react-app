import React from "react";
import lamp from "../../assets/lamp.svg";
import mebel from "../../assets/mebel.svg";
import css from "./Main.module.css";
import arrowRight from "../../assets/arrowRight.svg";

const Main = () => {
  return (
    <div className={css.main}>
      <div className="container">
        <div className={css.main__banner}>
          <div className={css.banner__text}>
            <h1 className={css.main__title}>
              Идеи, товары и услуги. <br /> Все для красивогодома
            </h1>
            <p>
              У нас есть и готовые модели, и возможность сделать мебель на заказ
              по вашему собственному дизайну.
            </p>
            <div className={css.search}>
              <label htmlFor="search">Найти товары</label>
              <div className={css.select__box}>
                <select name="" id="search">
                  <option disabled selected value="">
                    Поиск по: Товарам
                  </option>
                  <option value="">Товарам</option>
                  <option value="">Статьям</option>
                  <option value="">Фото</option>
                </select>
                <div className={css.selectLine}></div>
                <div className={css.selectBtn}>
                  <img src={arrowRight} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className={css.banner__img}>
            <div className={css.img__top}>
              <img className={css.lamp} src={lamp} alt="" />
            </div>
            <div className={css.img__bottom}>
              <div className={css.mebel__bg}></div>
              <img src={mebel} alt="" />
              <div className={css.koja}>
                <span className={css.circle}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.928223 7.00002H13.0711M6.99966 0.928589L6.99966 13.0714"
                      stroke="white"
                      stroke-width="1.45714"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <p>Итальянская экокожа</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;