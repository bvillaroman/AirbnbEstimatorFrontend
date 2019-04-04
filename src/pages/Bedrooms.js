import React from "react"
import Layout from "../components/presentational/layout"
import Input from "../components/presentational/Input"
import ContainerStyles from "../styles/layout.module.css"
import {sendListing} from "../utils/Listing"
import { connect } from 'react-redux';
import { submitBedrooms } from "./../actions"
import Button from '@material-ui/core/Button';
import ArrowForward from '@material-ui/icons/ArrowForward';

class Bedrooms extends React.Component {
  state = {
    guests:"",
    numOfBedrooms:"", 
    numOfBedsAvailable: ""
  }

  handleInput = (evt) => {
    const { value,name } = evt.target;
    this.setState({ [name] : value})
  }

  onSubmit = (evt) => {

    const data = {  
     ...this.state
    }
    
    this.props.submitBedrooms(data)
    this.props.advance()
  }

  render(){
    return (
        <div >
          <div className={ContainerStyles.formTitle}> Bedrooms </div>
          <Input label="How many guests are you accomodating?" name={"guests"} value={this.state.guests} handleInput={this.handleInput}/>
          <Input label="How many bedrooms are there?" name={"numOfBedrooms"} value={this.state.numOfBedrooms} handleInput={this.handleInput}/>
          <Input label="How Many beds are there?" name={"numOfBedsAvailable"} value={this.state.numOfBedsAvailable} handleInput={this.handleInput}/>
          <Button onClick={this.onSubmit}> Bathrooms <ArrowForward /></Button>
        </div>
    )
  }
}
const mapStateToProps = state => ({
  ...state
 })

const mapDispatchToProps = dispatch => ({
  submitBedrooms: (data) => dispatch(submitBedrooms(data))
 })
export default connect(mapStateToProps, mapDispatchToProps)(Bedrooms);

