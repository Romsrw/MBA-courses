import React from "react";
import { useState } from "react";
import classNames from "classnames";
import IconMinus from "../Icons/IconMinus";
import IconPlus from "../Icons/IconPlus";
import "./CourseModule.scss";

const CourseModule = ({ title, disciplines, isSingle }) => {
  const [isShow, setIsShow] = useState(false);

  const handleSetIsShow = () => {
    if (window.innerWidth < 500) {
      setIsShow((prev) => !prev);
    }
  };
  return (
    <div className={classNames("module", { module__single: isSingle })}>
      <span className="module__line"></span>
      <div
        className={classNames("module__title_wrapper", { active: isShow })}
        onClick={handleSetIsShow}
      >
        {isShow ? <IconMinus /> : <IconPlus />}
        <span className="module__title">{title}</span>
      </div>
      <ul className={classNames("disciplines", { open: isShow })}>
        {disciplines.map((discipline) => (
          <li className="disciplines__item" key={discipline.id}>
            <span className="disciplines__text">{discipline.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CourseModule;
