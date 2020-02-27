import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = props => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <li>
          <Link onClick={props.onToggleMenu} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/blog">
            Blog
          </Link>
        </li>
        {/*<li><Link onClick={props.onToggleMenu} to="/elements">Elements</Link></li>*/}
      </ul>
      <ul className="actions vertical">
        {/*
        <li>
          <a href="#" className="button special fit">
            Get Started
          </a>
        </li>
      */}
        <li>
          <Link to={"/account"} className="button fit">
            Log In
          </Link>
        </li>
      </ul>
    </div>
    <a className="close" onClick={props.onToggleMenu} href="javascript:;">
      Close
    </a>
  </nav>
)

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Menu
