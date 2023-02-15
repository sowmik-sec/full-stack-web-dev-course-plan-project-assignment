import React from "react";
import "./Dashboard.css";
import { useEffect, useState } from "react";
import Courses from "../Courses/Courses";
import User from "../User/User";

const Dashboard = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="dashboard">
      <div className="course-section">
        <div>
          <h1 className="title">Full stack web developing learning.</h1>
          <h3>Select which course you want to take</h3>
        </div>
        <div className="courses">
          {courses.map((course) => (
            <Courses key={course.id} course={course}></Courses>
          ))}
        </div>
      </div>
      <div className="course-detail">
        <User
          name={"Habib"}
          location={"Bhurungamari, Kurigram"}
          img={
            "https://media.licdn.com/dms/image/C5603AQFAxOpn9OGohA/profile-displayphoto-shrink_200_200/0/1648402343523?e=1681948800&v=beta&t=dGvAOK--5cBI6ZLLIvBGQMmzLMBPCwdkvfgUOPksmkQ"
          }
        ></User>
      </div>
    </div>
  );
};

export default Dashboard;
