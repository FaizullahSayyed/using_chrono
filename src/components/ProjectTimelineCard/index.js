import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    imageUrl,
    projectTitle,
    duration,
    description,
    projectUrl,
  } = projectDetails
  console.log(projectDetails)

  return (
    <div className="project-container">
      <div className="image-container">
        <img src={imageUrl} alt="project" className="project-image" />
      </div>
      <div className="title-duration-container">
        <div className="title-container">
          <h1 className="title">{projectTitle}</h1>
        </div>
        <div className="duration-container">
          <div className="icon-container">
            <AiFillCalendar />
            <p className="duration">{duration}</p>
          </div>
        </div>
      </div>

      <div className="description-container">
        <p className="description">{description}</p>
      </div>
      <div className="link-container">
        <a href={projectUrl} className="link">
          Visit
        </a>
      </div>
    </div>
  )
}

export default ProjectTimelineCard
