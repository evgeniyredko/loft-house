import logo from "./../../img/logo.svg";
import facebook from "./../../img/socials/facebook.svg";
import instagram from "./../../img/socials/instagram.svg";
import vk from "./../../img/socials/vk.svg";
import youtube from "./../../img/socials/youtube.svg";

const Footer = () => {
  return (
    <div className="container">
      <div className="footer__grid">
        <div className="footer__logo">
          <a href="#!">
            <img src={logo} alt="LoftHouse" />
          </a>
        </div>

        <div className="footer__nav">
          <nav>
            <ul className="footer__nav-list">
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

        <div className="footer__nav">
          <nav>
            <ul className="footer__nav-list">
              <li>
                <a href="#!">Поселение и переезд</a>
              </li>
              <li>
                <a href="#!">Сервисные услуги</a>
              </li>
              <li>
                <a href="#!">Экологическая устойчивость</a>
              </li>
              <li>
                <a href="#!">Инвестиционные возможности</a>
              </li>
              <li>
                <a href="#!">Программа лояльности</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="footer__address">
          <ul className="footer__nav-list">
            <li>Адрес: Наб. реки Фонтанки 10-15</li>
            <li>
              Телефон: <a href="tel:+78121234567">8 (812) 123-45-67</a>
            </li>
            <li>Отдел продаж: 10:00 - 20:00</li>
            <li>
              E-mail:
              <a className="link-bold" href="mailto:vip@lofthouse.ru">
                vip@lofthouse.ru
              </a>
            </li>
          </ul>
          <ul className="footer__socials">
            <li>
              <a href="#!">
                <img src={youtube} alt="" />
              </a>
            </li>
            <li>
              <a href="#!">
                <img src={vk} alt="" />
              </a>
            </li>
            <li>
              <a href="#!">
                <img src={facebook} alt="" />
              </a>
            </li>
            <li>
              <a href="#!">
                <img src={instagram} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
