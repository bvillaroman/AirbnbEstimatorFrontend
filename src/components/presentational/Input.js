import React from "react"
import ComponentStyles from "../../styles/component.module.css"

export default ({label,value,name,handleInput}) => (
   <div className={ComponentStyles.inputContainer}>
    <div className={ComponentStyles.label}>{label} </div> 
    <input label={label} name={name} value={value} onChange={handleInput}/> 
  </div>
)
