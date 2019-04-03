import React from "react"
import Input from "../components/presentational/Input"
import { connect } from 'react-redux';
import ContainerStyles from "../styles/layout.module.css"
import {submitBathrooms,submitListing} from '../actions'

class Bathrooms extends React.Component {
  state = {
    bathrooms:"", 
    responseText: ""
  }

  handleInput = (evt) => {
    const { value,name } = evt.target;
    this.setState({ [name] : value})
  }

  onSubmit = (evt) => {

    const data = parseInt(this.state.bathrooms)
    
    this.props.submitBathrooms(data)
    this.props.submitListing()

  }

  render(){
    return (
        <div className={ContainerStyles.mainContainer}>
          <div className={ContainerStyles.formTitle}> Bathrooms </div>
          <Input label="How many bathrooms are there?" name={"bathrooms"} value={this.state.bathrooms} handleInput={this.handleInput}/>
          <button onClick={this.onSubmit}> Submit </button>
          <div className={ContainerStyles.formTitle}> {this.state.responseText} </div>
        </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  submitBathrooms: (data) => dispatch(submitBathrooms(data)),
  submitListing: () => dispatch(submitListing())
 })
export default connect(mapStateToProps, mapDispatchToProps)(Bathrooms);

