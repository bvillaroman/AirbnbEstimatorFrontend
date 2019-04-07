import React from "react"
import Input from "../components/presentational/Input"
import { connect } from 'react-redux';
import ContainerStyles from "../styles/form.module.css"
import {submitBathrooms,submitListing} from '../actions'
import Button from '@material-ui/core/Button';
import ArrowForward from '@material-ui/icons/ArrowForward';

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
        <div>
          <div className={ContainerStyles.formTitle}> Bathrooms </div>
          <Input label="How many bathrooms are there?" name={"bathrooms"} value={this.state.bathrooms} handleInput={this.handleInput}/>
          <Button onClick={this.onSubmit}> Submit <ArrowForward /></Button>
          <div className={ContainerStyles.formTitle}> {this.state.responseText} </div>
        </div>
    )
  }
};

const mapStateToProps = ({reducer}) => ({page: reducer.page})

const mapDispatchToProps = dispatch => ({
  submitBathrooms: (data) => dispatch(submitBathrooms(data)),
  submitListing: () => dispatch(submitListing())
 })
export default connect(mapStateToProps, mapDispatchToProps)(Bathrooms);

