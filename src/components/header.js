import React from "react"

export default ({ children }) => (
  <div>
    <nav className="teal lighten-2">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">Juniper Swift</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/recipes">Recipes</a></li>
          </ul>
        </div>
      </nav>
  </div>
)
