import React from "react"
import Layout from "../components/presentational/layout"
import Input from "../components/presentational/Input"
import ContainerStyles from "../styles/layout.module.css"
import {sendListing} from "../utils/Listing"
import { connect } from 'react-redux';
import {submitPlaceType} from '../actions'

class PlaceType extends React.Component {
  state = {
    placeType:"",
    propertyType:"", 
    guestSpace: ""
  }

  handleInput = (evt) => {
    const { value,name } = evt.target;
    this.setState({ [name] : value})
  }

  onSubmit = (evt) => {
    const data = {  
     ...this.state
    }

    this.props.submitPlaceType(data);
    this.props.advance()
  }

  render(){
    return (
      <div className={ContainerStyles.mainContainer}>
        <div className={ContainerStyles.formTitle}> Place Type </div>
        <Input label="What kind of place are you listing?" name={"placeType"} value={this.state.placeType} handleInput={this.handleInput}/>
        <Input label="What type of property are you listing?" name={"propertyType"} value={this.state.propertyType} handleInput={this.handleInput}/>
        <Input label="What will guests have access to?" name={"guestSpace"} value={this.state.guestSpace} handleInput={this.handleInput}/>
        <button onClick={this.onSubmit}> Submit </button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
 })

const mapDispatchToProps = dispatch => ({
  submitPlaceType: (data) => dispatch(submitPlaceType(data))
 })
export default connect(mapStateToProps, mapDispatchToProps)(PlaceType);

