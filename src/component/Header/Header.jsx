import css from "./Header.module.css";
import Logo from "../../assets/Logo (4).svg";
import Burger from "../../assets/Burger.svg";
import Delate from "../../assets/deleate.svg";

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

const Header = () => {
  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.header__flex}>
          <div className={css.header__logo}>
            <img src={Logo} alt="" />
          </div>
          <div className={css.header__catalog}>
            <button>
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
          <div className={css.btn}>
            <button>
              <img src={Delate} alt="" />
              <span>Корзина</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
