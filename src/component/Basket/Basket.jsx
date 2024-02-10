import css from "./Basket.module.css";

const Basket = () => {
  return (
    <div>
      <div className={css.basket}>
        <div className={css.basket__item}>
          <div>
            <img src="" alt="image" />
          </div>
          <div>
            <h3>Стул ALLY VBP-206</h3>
          </div>
        </div>

        <p className={css.basket__length}>Еще 2 товара</p>
        <button className={css.basket__btn}>В корзину</button>
      </div>
    </div>
  );
};

export default Basket;
