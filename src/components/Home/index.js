// Write your JS code here

import Cookie from 'js-cookie'
import Header from '../Header'
import './index.css'

const Home = props => {
  const onClickLogout = () => {
    Cookie.remove('jwt_token')
    console.log(Cookie.get('jwt_token'))
    const {history} = props
    history.replace('/login')
  }

  return (
    <div className="login-con">
      <Header />
      <h1>Home Route</h1>
      <button type="button" onClick={onClickLogout}>
        Logout
      </button>
    </div>
  )
}

export default Home
