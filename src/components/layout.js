/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import Navbar from "./navbar"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => { //Layout is wrapper that includes children
  return (
    <main>
      <Navbar />
      { children }
      <Footer />
    </main>
  )
}

export default Layout
