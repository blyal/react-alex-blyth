import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1 id="top-name" ><Link to="/" style={linkstyle}>ALEX BLYTH</Link></h1>
            <nav id="navbar">
              <ul>
                  <li><Link to="/now" style={linkstyle}>NOW</Link></li>
                  <li><Link to="/blog" style={linkstyle}>BLOG</Link></li>
                  <li><Link to="/code" style={linkstyle}>CODE</Link></li>
                  <li><Link to="/stuff" style={linkstyle}>COOL STUFF</Link></li>
                  <li><Link to="/film" style={linkstyle}>FILM</Link></li>
              </ul>
            </nav>
        </header>
    )
}

const linkstyle = {
    //removes the automatic underlining of the links in the navbar
    textDecorationLine: "none",
    fontFamily: "Monaco, monospace",
    letterSpacing: "0.25em"
  }

export default Header;