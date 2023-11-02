import './index.css'

const ProjectItem = props => {
  const {projectDetails} = props
  const {projectId, imageURL,link, title} = projectDetails
  return (
    <>
      <a href={link}  rel="noopener noreferrer" >  
      <li className="project-item-container">
        <img
          className="project-item-image"
          src={imageURL}
          alt={`project-item${projectId}`}
        />
        <div className="project-item-details-container">
          <h1 className="project-item-title">{title}</h1>
        </div>
      </li></a>
    
    </>
  )
}

export default ProjectItem