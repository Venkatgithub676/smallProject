// Write your JS code here

import Cookies from 'js-cookie'
import './index.css'

const Login = props => {
  const onClickStore = async () => {
    const userDetails = {
      username: 'rahul',
      password: 'rahul@2021',
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()

    if (response.ok) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
      const {history} = props
      history.replace('/')
    }
  }

  return (
    <div className="login-con">
      <h1>Please Login</h1>
      <button type="button" onClick={onClickStore}>
        Login with Sample Creds
      </button>
    </div>
  )
}
export default Login
