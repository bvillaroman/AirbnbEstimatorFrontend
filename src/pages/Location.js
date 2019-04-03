import React from "react"
import Layout from "../components/presentational/layout"
import Input from "../components/presentational/Input"
import { connect } from 'react-redux';
import ContainerStyles from "../styles/layout.module.css"
import {sendListing} from "../utils/Listing"
import {submitLocation} from '../actions'


class Location extends React.Component {
  state = {
    address: "",
    apartmentNumber: "",
    city: "",
    state: "",
    zipCode: "",
    country: ""
  }

  handleInput = (evt) => {
    const { value,name } = evt.target;
    this.setState({ [name] : value})
  }

  onSubmit = (evt) => {

    const data = {  
     ...this.state
    }
    
    this.props.submitLocation(data);
    this.props.advance();
  }

  render(){
    return (
        <div className={ContainerStyles.mainContainer}>
          <div className={ContainerStyles.formTitle}> Location </div>
          <Input label="Address:" name={"address"} value={this.state.address} handleInput={this.handleInput}/>
          <Input label="Apartment Number (if any):" name={"apartmentNumber"} value={this.state.apartmentNumber} handleInput={this.handleInput}/>
          <Input label="City:" name={"city"} value={this.state.city} handleInput={this.handleInput}/>
          <Input label="Zip Code:" name={"zipCode"} value={this.state.zipCode} handleInput={this.handleInput}/>
          <button onClick={this.onSubmit}> Submit </button>
        </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
 })

const mapDispatchToProps = dispatch => ({
  submitLocation: (data) => dispatch(submitLocation(data))
 })

export default connect(mapStateToProps, mapDispatchToProps)(Location);

