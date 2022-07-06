import "./Projects.css";
import Project from "./Project";
import { Projects as projectData } from "../../Data/Static/Projects";
import {Link} from 'react-router-dom'
import styled from "styled-components";

const StyledButton = styled.button`
  width: 150px;
  height: 50px;

  /* background-color: var(--tone); */
  background-color: transparent;

  border: 2px solid var(--shade);
  border-radius: 32px;

  font-weight: 700;

  margin: 1rem;
`;

function Projects() {
  return (
    <div className="projectHome container" id="projects">
      <h2>Projects</h2>
      <div className="projectHome__container">
        {projectData?.map((project, index) => {
          if (index < 2) {
            return (
              <Project
                key={index}
                image={project.imageURI}
                title={project.ProjectTitle}
                summary={project.ProjectSummary}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      {/* <button>See all</button> */}
      <Link to="/projects">
        <StyledButton>SEE ALL</StyledButton>
      </Link>
    </div>
  );
}

export default Projects;
