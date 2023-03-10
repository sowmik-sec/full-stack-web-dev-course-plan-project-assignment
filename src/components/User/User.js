import "./User.css";
import React, { useEffect, useState } from "react";
import { loadLocalStorage } from "../../utilities/loadStorage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const User = ({ name, location, img, duration }) => {
  const [breakTime, setBreakTime] = useState(10);
  useEffect(() => {
    const ls = loadLocalStorage();
    if (ls != null) {
      setBreakTime(ls);
    }
  }, []);
  const handleBreakTime = (time) => {
    setBreakTime(time);
    localStorage.setItem("break-time", JSON.stringify(time));
  };
  const notify = () => {
    toast.success("Your courses selected successfully");
  };
  return (
    <div className="user-section">
      <div className="user">
        <div>
          <img src={img} alt="" />
        </div>

        <div>
          <p>{name}</p>
          <p>{location}</p>
        </div>
      </div>
      <h3>Add a break in minute</h3>
      <div className="break-min">
        <button onClick={() => handleBreakTime(10)} className="time-min">
          <p>10</p>
        </button>
        <button onClick={() => handleBreakTime(20)} className="time-min">
          <p>20</p>
        </button>
        <button onClick={() => handleBreakTime(30)} className="time-min">
          <p>30</p>
        </button>
        <button onClick={() => handleBreakTime(40)} className="time-min">
          <p>40</p>
        </button>
        <button onClick={() => handleBreakTime(50)} className="time-min">
          <p>50</p>
        </button>
      </div>
      <div>
        <h3>Total duration: {duration} hours</h3>
      </div>
      <div className="break-time">
        <div>
          <h3>Break Time</h3>
        </div>
        <div>{breakTime} mins</div>
      </div>
      <button onClick={notify} className="activity">
        <p>Activity Completed</p>
      </button>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default User;
