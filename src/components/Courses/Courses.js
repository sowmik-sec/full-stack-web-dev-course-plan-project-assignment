import "./Courses.css";

const Courses = (props) => {
  const { name, img, duration, id, lorem } = props.course;
  const { durationClickHandle } = props;
  //   console.log(durationClickHandle);
  //   console.log(props);
  return (
    <div className="course">
      <img src={img} alt="" />
      <div className="course-detail">
        <h3>{name}</h3>
        <p>{lorem}</p>
        <p>Time required: {duration} hours</p>
        <button
          onClick={() => durationClickHandle({ duration })}
          className="btn-list"
        >
          <p>Add to list</p>
        </button>
      </div>
    </div>
  );
};

export default Courses;
