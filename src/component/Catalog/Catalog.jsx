import css from "./Catalog.module.css";
import { catalog_1, catalog_2, catalog_3 } from "../../constants/constants";

const Catalog = () => {
  return (
    <div className={css.catalog__parent}>
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
        </div>
        <div className={css.catalog__two}></div>
        <div className={css.discounts}>Скидки на журнальные столики до 30%</div>
      </div>
    </div>
  );
};

export default Catalog;
