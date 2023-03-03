import Cookies from 'js-cookie'
import {Redirect, Route, withRouter} from 'react-router-dom'

const ProtectedRoute = props => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}
export default withRouter(ProtectedRoute)
