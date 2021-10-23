import React from "react";
import "./App.scss";
import useFetchCourses from "./api/getCourses/useFetchCourses";
import Loader from "./components/Loader/Loader";
import TrainingProgram from "./components/TrainingProgram/TrainigProgram";

const App = () => {
  const { courses, isLoading, isError } = useFetchCourses();
  if (isError) {
    return <div>...error</div>;
  }
  return (
    <div className="page">
      <div className="container">
        <div className="header">
          <h2 className="header__title">Специализированные дисциплины</h2>
        </div>
        {isLoading ? <Loader /> : <TrainingProgram courses={courses} />}
      </div>
    </div>
  );
};

export default App;
