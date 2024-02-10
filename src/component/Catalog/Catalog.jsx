import css from "./Catalog.module.css";
import { catalog_1, catalog_2, catalog_3, catalog_4, catalog_5, catalog_6 } from "../../constants/constants";

const Catalog = () => {
  return (
    <div className={css.catalog__parent}>
      <div className="container">
        <div className={css.catalog}>
          <div className={css.catalog__one}>
            <div>
              <h3>Мебель из массива</h3>
              <ul>
                {catalog_1.map((el) => (
                  <li key={el.name}>{el.name}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Столы</h3>
              <ul>
                {catalog_2.map((el) => (
                  <li key={el.name}>{el.name}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Стулья</h3>
              <ul>
                {catalog_3.map((el) => (
                  <li key={el.name}>{el.name}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Консоли</h3>
              <ul>
                {catalog_4.map((el) => (
                  <li key={el.name}>{el.name}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Кресла</h3>
              <ul>
                {catalog_5.map((el) => (
                  <li key={el.name}>{el.name}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Остальное</h3>
              <ul>
                {catalog_6.map((el) => (
                  <li key={el.name}>{el.name}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className={css.catalog__two}></div>
          <div className={css.discounts}>
            Скидки на журнальные столики до 30%
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
