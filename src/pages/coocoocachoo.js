import React from "react"
import Layout from "../components/layout"

export default () => (

  <Layout>
    <div class="row">
      <div class="col s12">
        <h4>Songs with Coo Coo Ca Choo</h4>
      </div>
    </div>

    <div class="row">
    <div class="col s12">
    <ul style={{ paddingLeft: "2rem" }}>
      <li>
        <h5>I am the Walrus</h5>
        <div class="video-container">
          <iframe title="I am the Walrus" width="560" height="315" src="https://www.youtube.com/embed/UKIs1J_nB4A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </li>
      <li>
        <h5>Mrs. Robinson</h5>
        <div class="video-container">
          <iframe title="Mrs. Robinson" width="560" height="315" src="https://www.youtube.com/embed/9C1BCAgu2I8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </li>
      <li>
        <h5>Alvin Stardust - My Coo Ca Cho</h5>
        <div class="video-container">
          <iframe title="Alvin Stardust" width="560" height="315" src="https://www.youtube.com/embed/b0ZqNBd_orI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </li>
      <li>
        <h5>This Bloodhound gang song.</h5>
        <div class="video-container">
          <iframe title="Bloodhound Gang" width="560" height="315" src="https://www.youtube.com/embed/db5Gq28rsRU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </li>
    </ul>
    </div>
    </div>

    <div class="row">
      <div class="col s12">
        <h4>Where else can I get my coocoocachoo fix?</h4>
        <ul>
          <li>
          This South African coffee company. https://coocoocachoo.co.za/
          </li>
          <li>
          Urban Dictionary - <a href="https://www.urbandictionary.com/define.php?term=Coo%20coo%20ca%20choo">Coo Coo Ca Choo</a> or <a href="https://www.urbandictionary.com/define.php?term=Koo%20Koo%20Kachu">Koo Koo Kachu</a>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
)
