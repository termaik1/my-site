import React from "react";

import _ from "lodash";

import qrCode1 from "./../../assets/qr-code1.gif";
import qrCode2 from "./../../assets/qr-code2.gif";

import "./Materials.scss";

const qrCodes = [
  {
    link:
      "https://docs.google.com/forms/d/12eaTVaPLcTZcaW4inQm-QHU5-LesscsvnzoZb-9sMW8/edit?usp=sharing",
    qrCode: qrCode1,
  },
  {
    link:
      "https://docs.google.com/forms/d/1tMZ7gXS5-4vwubRvZwBk1xTKbKrZJrR2_SAHh0nYxK4/edit?usp=sharing",
    qrCode: qrCode2,
  },
];

const Materials = () => {
  return (
    <div className="materials">
      <div className="materials__content inquirer">
        <div className="inquirer__qr-code qr-code">
          <div className>Тест "Информационные технологии в образовании"</div>
          <div className="qr-code__container">
            {_.map(qrCodes, (item, key) => (
              <div className="qr-code__content" key={key}>
                <img src={item.qrCode} alt="qrCode" />
                <a
                  target="_blank"
                  without
                  rel="noopener noreferrer"
                  href={item.link}
                >
                  Перейти по ссылке
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Materials;
