import React from "react";
import Course from "../Course/Course";
import RectangleInfo from "../Rectangle/RectangleInfo";
import "./TrainingProgram.scss";

const TrainingProgram = ({ courses }) => {
  const courseInfo = {
    red: {
      title: ["Практические модули"],
      text: [
        "Работа над собственными проектами:\nпрактика групповых взаимодействий,\nкейс-методы, эссе",
      ],
    },
    dark: {
      title: ["Итоговая аттестация"],
      text: [
        "Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование по бизнес-проектированию)",
        "Защита итоговой аттестационной работы",
      ],
    },
  };

  return (
    <main className="program">
      {courses.map((course) => (
        <Course
          key={course._id}
          title={course.title}
          specializedSubjects={course.specializedSubjects}
        />
      ))}
      <div className="rectangles">
        <RectangleInfo type="red" courseInfo={courseInfo.red} />
        <RectangleInfo type="dark" courseInfo={courseInfo.dark} />
      </div>
    </main>
  );
};

export default TrainingProgram;
