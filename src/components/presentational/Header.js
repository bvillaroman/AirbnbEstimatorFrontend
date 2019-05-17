import React from "react"
import {Link} from "gatsby"
import HeaderStyles from "../../styles/header.module.css"

export default ({children}) => (
  <div className={HeaderStyles.headerContainer}>
    <div className={HeaderStyles.title} to="/">Airbnb Price Estimator</div>
  </div>
)
