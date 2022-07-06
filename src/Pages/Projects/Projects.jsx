import { Footer, Navigation } from "../../Components/exports";
import "./Projects.css";
import { Projects as projectsData } from "../../Data/Static/Projects";

const ProjectCard = (props) => {
  return (
    <div className="project__card">
      <div
        className="card-background"
        style={{ backgroundColor: props.backgroundColor }}
      ></div>
      <div className="project__image-container">
        <img src={props.image} alt={props.alt} />
      </div>
      <div className="project__text-container">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <div className="project__link-container">
        <a target="_black" href={props.githublink}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32 0C14 0 0 14 0 32C0 53 19 62 22 62C24 62 24 61 24 60V55C17 57 14 53 13 50C13 50 13 49 11 47C10 46 6 44 10 44C13 44 15 48 15 48C18 52 22 51 24 50C24 48 26 46 26 46C18 45 12 42 12 31C12 27 13 24 15 22C15 22 13 18 15 13C15 13 20 13 24 17C27 15 37 15 40 17C44 13 49 13 49 13C51 20 49 22 49 22C51 24 52 27 52 31C52 42 45 45 38 46C39 47 40 49 40 52V60C40 61 40 62 42 62C45 62 64 53 64 32C64 14 50 0 32 0Z"
              fill="black"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

function Projects() {
  return (
    <div className="projects">
      <Navigation />
      <h2 id="projects__title">PROJECTS</h2>

      <div className="projects__container">
        {projectsData?.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              image={project.imageURI}
              title={project.ProjectTitle}
              summary={project.ProjectSummary}
              backgroundColor={project.backgroundColor}
              description={project.ProjectDescription}
              githublink={project.gitHubLink}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
