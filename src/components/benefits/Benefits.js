import bench from "./../../img/benefits/bench.svg";
import bicycle from "./../../img/benefits/bicycle.svg";
import building from "./../../img/benefits/building.svg";
import fountain from "./../../img/benefits/fountain.svg";

const Benefits = () => {
  return (
    <section className="benefits">
      <h2 className="visually-hidden">Преимущества ЖК</h2>

      <div className="container container--sm">
        <div className="benefits__row">
          <div className="benefits__item">
            <img src={bench} alt="" className="benefits__item-img" />
            <p className="benefits__item-text">
              Рядом исторические парки&nbsp;и&nbsp;скверы
            </p>
          </div>

          <div className="benefits__item">
            <img src={building} alt="" className="benefits__item-img" />
            <p className="benefits__item-text">Полностью обустроенный</p>
          </div>

          <div className="benefits__item">
            <img src={fountain} alt="" className="benefits__item-img" />
            <p className="benefits__item-text">10 фонтанов на территории</p>
          </div>

          <div className="benefits__item">
            <img src={bicycle} alt="" className="benefits__item-img" />
            <p className="benefits__item-text">6 км велодорожек</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
