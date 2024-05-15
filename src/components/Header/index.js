import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="header-container">
    <div className="img-container">
      <img
        className="nxt-logo"
        alt="website logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      />
    </div>
    <ul className="items-container">
      <Link className="nav-link" to="/">
        <li>Home</li>
      </Link>
      <Link className="nav-link" to="/products">
        <li>Products</li>
      </Link>
      <Link className="nav-link" to="/Cart">
        <li>Cart</li>
      </Link>
      <button type="button" className="but">
        Logout
      </button>
    </ul>
  </nav>
)

export default Header
