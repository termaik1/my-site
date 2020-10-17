import React from "react";

import mobileImg from "./../../assets/mobile.jpg";

import "./Progress.scss";

const Progress = () => {
  return (
    <div className="progress">
      <div className="progress__content">
        <p>Сертификат слушателя онлайн курса "Мобильная грамотность".</p>
        <img src={mobileImg} alt="mobileImg" />
      </div>
    </div>
  );
};

export default Progress;
