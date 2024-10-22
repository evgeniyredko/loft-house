import mouse from "./../../img/header/mouse.svg";

const HeaderTitle = () => {
  return (
    <div className="container">
      <h1 className="header__title">
        Жилой комплекс <br />в историческом центре
        <a href="#benefits">
          <img src={mouse} alt="Scroll next" className="header__title-icon" />
        </a>
      </h1>
    </div>
  );
};

export default HeaderTitle;
