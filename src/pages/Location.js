import React from "react"
import Input from "../components/presentational/Input"
import { connect } from 'react-redux';
import ContainerStyles from "../styles/form.module.css"
import {submitLocation,switchPages} from '../actions'
import Button from '@material-ui/core/Button';
import ArrowForward from '@material-ui/icons/ArrowForward';

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
    const disableButton = !(address && city && (zipCode.length === 5))

    return (
        <div>
          <div className={ContainerStyles.formTitle}> Location </div>
          <Input label="Address:" name={"address"} value={this.state.address} handleInput={this.handleInput} required/>
          <Input label="Apartment Number (if any):" name={"apartmentNumber"} value={this.state.apartmentNumber} handleInput={this.handleInput} required/>
          <Input label="City:" name={"city"} value={this.state.city} handleInput={this.handleInput}/>
          <Input label="Zip Code:" name={"zipCode"} value={this.state.zipCode} handleInput={this.handleInput}/>
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

