import React from "react"
import Helmet from "react-helmet"
import Header from "./Header"
// import PropTypes from "prop-types"

export default ({children}) => (
  <div>
    <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
    </Helmet>
    <Header />
    {children}
  </div>
)
