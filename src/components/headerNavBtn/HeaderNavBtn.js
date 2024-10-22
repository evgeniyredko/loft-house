import { useState, useEffect } from "react";

const HederNavBtn = () => {
  const [navIconMenu, setNavIcon] = useState("show");

  useEffect(() => {
    document.querySelector(".nav-icon").classList.toggle("nav-icon--active");
    document
      .querySelector(".header__top-row")
      .classList.toggle("header__top-row--mobile");
    document.body.classList.toggle("no-scroll");
  }, [navIconMenu]);

  const toggleNav = () => {
    setNavIcon((currentValue) => {
      return currentValue === "hide" ? "show" : "hide";
    });
  };

  return (
    <div className="header__nav-btn">
      <button className="nav-icon-btn" onClick={toggleNav}>
        <div className="nav-icon"></div>
      </button>
    </div>
  );
};

export default HederNavBtn;
