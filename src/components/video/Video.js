import play from "./../../img/video/play.svg";
import videoImg from "./../../img/video/video-img.jpg";

const Video = () => {
  return (
    <section className="video">
      <h2 className="visually-hidden">Видео про ЖК Loft House</h2>
      <div className="container">
        <a
          href="https://www.youtube.com/watch?v=bhJNL9JUsnY"
          className="video__link"
        >
          <img src={play} alt="" className="video__icon" />
          <img src={videoImg} alt="" className="video__img" />
        </a>
      </div>
    </section>
  );
};

export default Video;
