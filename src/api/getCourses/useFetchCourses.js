import { useState, useEffect } from "react";

const useFetchCourses = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [courses, setCourses] = useState([]);

  const getCourses = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://ipo-cp.ru/api/v1/bootcamps/605c5f71bc557b46b4f42a56/courses"
      );
      const results = await response.json();
      setCourses(results.data.slice(0, 5));
    } catch (error) {
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getCourses();
  }, []);

  return {
    courses,
    isError,
    isLoading,
  };
};

export default useFetchCourses;
