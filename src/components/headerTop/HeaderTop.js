// Components
import HeaderNavBtn from "../headerNavBtn/HeaderNavBtn";

import logo from "./../../img/logo.svg";

const HeaderTop = () => {
  return (
    <div className="header__top">
      <div className="container">
        <div className="header__top-row">
          <a href="#!">
            <img src={logo} alt="LoftHouse" />
          </a>

          <div className="header__nav">
            <nav className="nav">
              <ul className="nav__list">
                <li>
                  <a href="#!">О комплексе</a>
                </li>
                <li>
                  <a href="#!">Район</a>
                </li>
                <li>
                  <a href="#!">Каталог квартир</a>
                </li>
                <li>
                  <a href="#!">Ипотека</a>
                </li>
                <li>
                  <a href="#!">Контакты</a>
                </li>
              </ul>
            </nav>
          </div>

          <HeaderNavBtn />
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
