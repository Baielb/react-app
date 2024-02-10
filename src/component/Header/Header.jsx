import React, { useState } from "react";
import css from "./Header.module.css";
import Logo from "../../assets/Logo (4).svg";
import Burger from "../../assets/Burger.svg";
import Delate from "../../assets/deleate.svg";
import Basket from "../Basket/Basket";

const menu = [
  {
    name: "Доставка",
  },
  {
    name: "Способы оплаты",
  },
  {
    name: "Контакты",
  },
  {
    name: "Гарантии и возврат",
  },
  {
    name: "Политика конфиденциальности",
  },
];

const Header = (props) => {
  const { handleToggleCatalog, handleToggleBasket } = props;
  const [showBasket, setShowBasket] = useState(false); // Add state for showBasket

  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.header__flex}>
          <div className={css.header__logo}>
            <img src={Logo} alt="" />
          </div>
          <div className={css.header__catalog}>
            <button onClick={handleToggleCatalog}>
              <img src={Burger} alt="" />
              <span>Каталог</span>
            </button>
          </div>
          <div className={css.menu}>
            {menu.map(({ name }) => (
              <a key={name} href="">
                {name}
              </a>
            ))}
          </div>
          <div className={css.basket}>
            <button>
              <img src={Delate} alt="" />
              <p onClick={() => setShowBasket(!showBasket)}>Корзина</p>
              {showBasket && <Basket />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
