import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <div className="course-container">
      <div className="title-duration-container">
        <div className="title-container">
          <h1 className="course-title">{courseTitle}</h1>
        </div>
        <div className="duration-container">
          <div className="icon-container">
            <AiFillClockCircle />
          </div>
          <p className="duration">{duration}</p>
        </div>
      </div>

      <div className="description-container">
        <p>{description}</p>
      </div>
      <ul className="tags-list-container">
        {tagsList.map(eachTag => (
          <li key={eachTag.id} className="list-item">
            <p>{eachTag.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
