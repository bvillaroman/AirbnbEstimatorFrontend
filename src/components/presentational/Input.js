import React from "react"
import ContainerStyles from "../../styles/component.module.css"

export default ({label,value,name,handleInput}) => (
  <div className={ContainerStyles.inputContainer}>
    <div className={ContainerStyles.label}>{label}: </div>
    <input name={name} value={value} placeholder={`Input ${label}`} onChange={handleInput}/>
  </div>
)
