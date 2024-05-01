// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div>
    <nav className="nav-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="should be website logo"
        className="logo"
      />
      <ul className="list-container">
        <Link to="/">
          <li>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
              alt="nav home"
              className="home"
            />
            <p>Home</p>
          </li>
        </Link>
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
            className="home"
          />
          <p>Products</p>
        </li>
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
            className="home"
          />
          <p>Cart</p>
        </li>
        <Link to="/login">
          <li>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="nav logout"
              className="home"
            />
            <p>Logout</p>
          </li>
        </Link>
      </ul>
    </nav>
  </div>
)
export default Header
