import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import './index.css'

const apiStatusConstants = {
  initial: '|INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class ProfileDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    profileDetails: {},
  }

  componentDidMount() {
    this.getProfile()
  }

  getProfile = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/profile'
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const updatedData = {
        name: data.profile_details.name,
        profileImageUrl: data.profile_details.profile_image_url,
        shortBio: data.profile_details.short_bio,
      }

      this.setState({
        apiStatus: apiStatusConstants.success,
        profileDetails: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderProfileView = () => {
    const {profileDetails} = this.state
    const {name, profileImageUrl, shortBio} = profileDetails
    return (
      <div className="profile-container">
        <img src={profileImageUrl} alt="profile" className="profile-image" />
        <h1 className="heading">{name}</h1>
        <p>{shortBio}</p>
      </div>
    )
  }

  renderFailureView = () => (
    <div className="failure-container">
      <button type="button" onClick={this.getProfile} data-testid="button">
        Retry
      </button>
    </div>
  )

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  render() {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderProfileView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }
}
export default ProfileDetails
