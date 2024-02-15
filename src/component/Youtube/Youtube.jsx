import React from "react";
import css from "./Youtube.module.css";
import youtube from '../../assets/youtube.svg'

const Youtube = () => {
  return (
    <section className="container">
      <div className={css.bgc}>
        <div className={css.bgc1}>
          <h2>Мы на You-tube</h2>
          <p>
            Специально для вас мы создали канал с полезынми и интересными
            роликами
          </p>
          <button>Смотреть</button>
        </div>
        <div>
            <img src={youtube} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Youtube;
