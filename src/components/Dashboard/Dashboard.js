import React from "react";
import "./Dashboard.css";
import { useEffect, useState } from "react";
import Courses from "../Courses/Courses";

const Dashboard = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="dashboard">
      <div className="courses">
        <h1>Full stack web developing learning.</h1>
        {courses.map((course) => (
          <Courses key={course.id} course={course}></Courses>
        ))}
      </div>
      <div className="course-detail"></div>
    </div>
  );
};

export default Dashboard;
