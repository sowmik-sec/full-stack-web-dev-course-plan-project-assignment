import "./Courses.css";

const Courses = (props) => {
  const { name, img, duration, id, lorem } = props.course;
  //   console.log("fuck");
  //   console.log(props);
  return (
    <div className="course">
      <img src={img} alt="" />
      <div className="course-detail">
        <h3>{name}</h3>
        <p>{lorem}</p>
        <p>Time required: {duration} hours</p>
        <button className="btn-list">
          <p>Add to list</p>
        </button>
      </div>
    </div>
  );
};

export default Courses;
