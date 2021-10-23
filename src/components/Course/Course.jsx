import React from "react";
import CourseModule from "../Module/CourseModule";
import "./Course.scss";

const Course = ({ title, specializedSubjects }) => {
  const modules = [
    {
      title: "1 модуль",
      disciplines: specializedSubjects
        .slice(0, 5)
        .map((item, ind) => ({ id: ind, text: item })),
    },
    {
      title: "2 модуль",
      disciplines: specializedSubjects
        .slice(5, 10)
        .map((item, ind) => ({ id: ind, text: item })),
    },
  ].filter((item) => item.disciplines.length);

  return (
    <section className="course">
      <h3 className="course__title">{title}</h3>
      <div className="course__modules">
        {modules.map((module) => (
          <CourseModule
            isSingle={modules.length === 1}
            key={module.title}
            {...module}
          />
        ))}
      </div>
    </section>
  );
};
export default Course;
