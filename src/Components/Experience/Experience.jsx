import { useEffect, useState } from "react";
import "./Experience.css";

import { Education } from "../../Data/Static/Education";
import { Experiences } from "../../Data/Static/Experience";

// import ExperienceCard from './ExperienceCard'

function Experience() {
  const [activated, setActivated] = useState(true);
  const [show, setShow] = useState([]);

  const handleChange1 = () => {
    setActivated(true);
  };

  const handleChange2 = () => {
    setActivated(false);
  };

  useEffect(() => {
    if (activated) {
      setShow(Experiences);
      console.log(Experiences);
    } else {
      setShow(Education);
      console.log(Education);
    }
    return () => {
      console.log("unmounted");
    };
  }, [activated]);

  return (
    <div className="experience container" id="experience">
      <div className="experience__toggle-btn">
        <button
          className={activated === true ? "activated" : "none"}
          onClick={handleChange1}
        >
          Experience
        </button>
        <button
          className={activated === false ? "activated" : "none"}
          onClick={handleChange2}
        >
          Education
        </button>
      </div>
      <div className="experience__card">
        {/* <ExperienceCard /> */}
        {console.log(show)}
      </div>
    </div>
  );
}

export default Experience;
