import img01 from "./../../img/cards/01.jpg";
import img02 from "./../../img/cards/02.jpg";
import img03 from "./../../img/cards/03.jpg";
import img04 from "./../../img/cards/04.jpg";

const Apartments = () => {
  return (
    <section className="apartments">
      <div className="container">
        <div className="apartments__title">
          <h2 className="title-2">Наши квартиры</h2>
        </div>

        <div className="apartments__cards">
          <a href="#!" className="card">
            <img
              className="card__img"
              src={img01}
              alt="Пентхаус “Loft Олимп”"
            />
            <h3 className="card__title">Пентхаус “Loft Олимп”</h3>
          </a>

          <a href="#!" className="card">
            <img
              className="card__img"
              src={img02}
              alt="Пентхаус “Loft Олимп”"
            />
            <h3 className="card__title">Апартаменты “Nice Loft”</h3>
          </a>

          <a href="#!" className="card">
            <img
              className="card__img"
              src={img03}
              alt="Пентхаус “Loft Олимп”"
            />
            <h3 className="card__title">Апартаменты “Loft Studio”</h3>
          </a>

          <a href="#!" className="card">
            <img
              className="card__img"
              src={img04}
              alt="Пентхаус “Loft Олимп”"
            />
            <h3 className="card__title">Loft квартира “Престиж”</h3>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Apartments;
