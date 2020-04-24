import React from "react"

export default ({ children }) => (
  <div>
    <nav className="cyan lighten-1">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">Juniper Swift</a>
          <ul id="nav-mobile" className="right">
            <li><a href="/recipes">Recipes</a></li>
          </ul>
        </div>
      </nav>
  </div>
)
