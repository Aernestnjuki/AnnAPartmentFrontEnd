
import ProjectCard from "./ProjectCard"

const ProjectCardContainer = () => {
  return (
    <div className="container">
      <div className="row project-has-grid">
        <ProjectCard color="green"/>
        <ProjectCard color="purple"/>
        <ProjectCard color="blue"/>

        <ProjectCard color="green"/>
        <ProjectCard color="purple"/>
        <ProjectCard color="blue"/>
        
      </div>
    </div>
  )
}

export default ProjectCardContainer