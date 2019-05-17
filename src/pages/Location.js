import React from "react"
import Input from "../components/presentational/Input"
import { connect } from 'react-redux';
import ContainerStyles from "../styles/form.module.css"
import {submitLocation,switchPages} from '../actions'
import Button from '@material-ui/core/Button';
import ArrowForward from '@material-ui/icons/ArrowForward';
import ArrowBack from '@material-ui/icons/ArrowBack';

class Location extends React.Component {
  state = {
    address: "",
    apartmentNumber: "",
    city: "",
    zipCode: "",
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
    this.props.switchPages(2);
  }

  render(){
    const {address,city,zipCode} = this.state
    const disableButton = !( city )

    return (
        <div>
          <div className={ContainerStyles.formTitle}> Location </div>
          <Input label="Neighborhood:" name={"city"} value={this.state.city} handleInput={this.handleInput}/>
          <Button onClick={() => { this.props.switchPages(0)}}> <ArrowBack /> Place Type</Button>
          <Button disabled={disableButton} onClick={this.onSubmit}>Bedrooms <ArrowForward /></Button>
        </div>
    )
  }
}

const mapStateToProps = ({reducer}) => ({page: reducer.page})

const mapDispatchToProps = dispatch => ({
  switchPages: (pageNumber) => dispatch(switchPages(pageNumber)),
  submitLocation: (data) => dispatch(submitLocation(data))
 })

export default connect(mapStateToProps, mapDispatchToProps)(Location);

