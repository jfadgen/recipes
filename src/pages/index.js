import React from "react"
import Layout from "../components/layout"

export default () => (
<Layout>
  <div className="center-align index-menu">
    <h2>Hello, world!</h2>
    <div>This is the beginning of a new website.</div>
    <div>
      <a className="waves-effect waves-light btn-large amber" href="/recipes">Recipes</a>
      <a className="waves-effect waves-light btn-large deep-orange" href="/coocoocachoo">Coocoocachoo</a>
    </div>
  </div>
</Layout>
)
