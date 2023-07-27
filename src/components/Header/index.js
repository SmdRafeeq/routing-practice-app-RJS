import {Link} from 'react-router-dom'

import Contact from '../Contact'
import About from '../About'
import Home from '../Home'

import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        className="website-logo"
        alt="wave"
      />
      <p className="website-name">Wave</p>
    </div>
    <ul className="pages-container">
      <li>
        <Link to="/" className="nav-links">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="nav-links">
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" className="nav-links">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
