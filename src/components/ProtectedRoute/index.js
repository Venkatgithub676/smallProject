// Write your JS code here

import {Redirect, Route} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = props => {
  const loggedIn = Cookies.get('jwt_token')
  console.log(loggedIn === undefined, loggedIn)
  if (loggedIn === undefined) {
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}

export default ProtectedRoute
