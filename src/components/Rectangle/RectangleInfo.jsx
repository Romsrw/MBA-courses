import React from "react";
import classNames from "classnames";
import "./RectangleInfo.scss";

const RectangleInfo = ({ courseInfo, type }) => {
  return (
    <div
      className={classNames("rectangle", {
        rectangle__dark: type === "dark",
        rectangle__red: type === "red",
      })}
    >
      <h4 className="rectangle__title">{courseInfo.title}</h4>
      {courseInfo.text.length > 1 ? (
        <ul className="attestation">
          {courseInfo.text.map((item, index) => (
            <li className="attestation__item" key={index}>
              <span className="attestation__text">{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <span className="rectangle__text">{courseInfo.text}</span>
      )}
    </div>
  );
};

export default RectangleInfo;
