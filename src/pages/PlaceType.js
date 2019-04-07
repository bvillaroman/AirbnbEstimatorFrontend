import React from "react"
import Input from "../components/presentational/Input"
import ContainerStyles from "../styles/form.module.css"
import { connect } from 'react-redux';
import {submitPlaceType,switchPages} from '../actions'
import Button from '@material-ui/core/Button';
import ArrowForward from '@material-ui/icons/ArrowForward';

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
    this.props.switchPages(1)
  }

  render(){
    return (
      <div >
        <div className={ContainerStyles.formTitle}> Place Type </div>
        <Input label="What kind of place are you listing?" name={"placeType"} value={this.state.placeType} handleInput={this.handleInput}/>
        <Input label="What type of property are you listing?" name={"propertyType"} value={this.state.propertyType} handleInput={this.handleInput}/>
        <Input label="What will guests have access to?" name={"guestSpace"} value={this.state.guestSpace} handleInput={this.handleInput}/>
        <Button onClick={this.onSubmit}>Location <ArrowForward /></Button>
      </div>
    )
  }
}

const mapStateToProps = ({reducer}) => ({page: reducer.page})


const mapDispatchToProps = dispatch => ({
  switchPages: (pageNumber) => dispatch(switchPages(pageNumber)),
  submitPlaceType: (data) => dispatch(submitPlaceType(data))
 })
export default connect(mapStateToProps, mapDispatchToProps)(PlaceType);

