import React from "react"
import Layout from "../components/layout"

export default () => (
<Layout>
  <div className="center-align">
    <h2>Hello, world!</h2>
    <div>This is the beginning of a new website.</div>
    <div style={{ padding: "2rem" }}>
      <a className="waves-effect waves-light btn-large" href="/recipes">Recipes</a>
    </div>
  </div>
</Layout>
)
