import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import "./layout.css"

export default ({ children }) => (
  <div>
  <Header />
  <main>
    {children}
  </main>
  <Footer />
  </div>
)
