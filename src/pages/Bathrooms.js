import React from "react"
import Layout from "../components/presentational/layout"
import Input from "../components/presentational/Input"
import { connect } from 'react-redux';
import ContainerStyles from "../styles/layout.module.css"
import {sendListing} from "../utils/Listing"
import Header from "../components/presentational/Header";

class Bathrooms extends React.Component {
  state = {
    bathrooms:"", 
  }

  handleInput = (evt) => {
    const { value,name } = evt.target;
    this.setState({ [name] : value})
  }

  onSubmit = (evt) => {

    const data = {  
     ...this.state
    }
    
    this.props.advance()
  }

  render(){
    return (
        <div className={ContainerStyles.mainContainer}>
          <div className={ContainerStyles.formTitle}> Bathrooms </div>
          <Input label="How many bathrooms are there?" name={"bathrooms"} value={this.state.bathrooms} handleInput={this.handleInput}/>
          <button onClick={this.onSubmit}> Submit </button>
        </div>
    )
  }
}

export default connect()(Bathrooms);

