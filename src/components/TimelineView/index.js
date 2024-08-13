import {Chrono} from 'react-chrono'

import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="timeline-container">
      <h1 className="main-heading">
        MY JOURNEY OF <br /> CCBP 4.0
      </h1>
      {/* <Chrono items={timelineItemsList} mode="VERTICAL_ALTERNATING" /> */}
      <Chrono items={timelineItemsList} mode="VERTICAL_ALTERNATING">
        {timelineItemsList.map(eachItem =>
          eachItem.categoryId === 'PROJECT' ? (
            <ProjectTimelineCard projectDetails={eachItem} />
          ) : (
            <CourseTimelineCard courseDetails={eachItem} />
          ),
        )}
      </Chrono>
    </div>
  )
}

export default TimelineView
