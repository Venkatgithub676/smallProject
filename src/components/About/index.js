// Write your JS code here
// Write your JS code here

import Cookie from 'js-cookie'
import Header from '../Header'
import './index.css'

const About = props => {
  const onClickLogout = () => {
    const {history} = props
    history.replace('/login')
    Cookie.remove('jwt_token')
  }

  return (
    <div className="login-con">
      <Header />
      <h1>About Route</h1>
      <button type="button" onClick={onClickLogout}>
        Logout
      </button>
    </div>
  )
}

export default About
