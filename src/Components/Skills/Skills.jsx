import React from "react";
import "./Skills.css";
import { skills } from "../../Data/Static/Skills";

// console.log(skills)
const SkillContainer = (props) => {
  // console.log(props);
  return (
    <div className="skill__container">
      <img src={props.image} height="60px" width="60px" alt={props.alt} />
      <h3>{props.name}</h3>
    </div>
  );
};

function Skills() {
  // console.log('hi')
  return (
    <div className="skills" id="skills">
      <h2>SKILLS</h2>
      <div className="skills__container">
        {skills?.map((skill,index) => {
          return (
            <SkillContainer 
              key={index}
              image={skill.imgURI} 
              name={skill.skillName} 
            />
          );
        })}
        
      </div>
    </div>
  );
}

export default Skills;
