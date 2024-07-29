// Write your JS code here

import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav>
    <Link to="/" className="home-nav">
      Home
    </Link>
    <Link to="/about">About</Link>
  </nav>
)

export default Header
