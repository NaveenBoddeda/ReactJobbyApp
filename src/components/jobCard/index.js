import {Link} from 'react-router-dom'
import {BsFillBriefcaseFill, BsStarFill} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'

import './index.css'

const JobCard = props => {
  const {jobCardDetails} = props
  const {
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
    id,
  } = jobCardDetails
  return (
    <Link to={`/jobs/${id}`} className="link-style">
      <div className="job-card-container">
        <div className="job-card-heading-container">
          <img
            src={companyLogoUrl}
            alt="company logo"
            className="company-logo"
          />
          <div className="heading-description">
            <h1>{title}</h1>
            <div className="rating-container">
              <BsStarFill className="star-color" />
              <p className="rating">{rating}</p>
            </div>
          </div>
        </div>
        <div className="location-jobtype-package-container">
          <div className="location">
            <MdLocationOn />
            <p className="des">{location}</p>
            <BsFillBriefcaseFill className="breifcase-logo" />
            <p className="des">{employmentType}</p>
          </div>
          <p>{packagePerAnnum}</p>
        </div>
        <hr className="line" />
        <p>Description</p>
        <p>{jobDescription}</p>
      </div>
    </Link>
  )
}
export default JobCard
