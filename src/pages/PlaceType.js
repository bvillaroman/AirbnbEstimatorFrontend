import React from "react"
import Input from "../components/presentational/Input"
import ContainerStyles from "../styles/form.module.css"
import ComponentStyles from "../styles/component.module.css"

import { connect } from 'react-redux';
import {submitPlaceType,switchPages} from '../actions'
import Button from '@material-ui/core/Button';
import ArrowForward from '@material-ui/icons/ArrowForward';
import FormLabel from '@material-ui/core/FormLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


class PlaceType extends React.Component {
  state = {
    roomType:"",
    propertyType:"", 
  }  

  handleInput = (evt) => {
    const { value,name } = evt.target;
    console.log(value)
    this.setState({ [name] : value})
  }

  handlePropertyType = property => {
    let value = 1;
    switch(property) {
      case "Apartment": 
        value = 1;
        break;
      case "House": 
        value = 2;
        break;  
      case "Townhouse": 
        value = 3;
        break;    
      case "Loft": 
        value = 4;
        break;
      case "Condominium": 
        value = 5;
        break;       
      case "Serviced Apartment": 
        value = 6;
        break;   
      case "Guest Suite": 
        value = 7;
        break;   
      case "Other": 
        value = 8;
        break;   
      case "Bed & Breakfast": 
        value = 9;
        break;   
      case "Boutique Hotel": 
        value = 10;
        break;  
      case "Resort": 
        value = 11;
        break;    
      case "Guest House": 
        value = 12;
        break;   
      case "Hostel": 
        value = 13;
        break;   
      case "Timeshare": 
        value = 15;
        break;   
      default: 
        value = 1;
        break;   
    }
    return value;
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
      <div>
        <div className={ContainerStyles.formTitle}> Place Type </div>
        <div className={ComponentStyles.inputContainerDropDown}>
          <FormControl >
            <FormLabel>What kind of place are you listing?</FormLabel>
            <Select
              value={this.state.propertyType}
              onChange={this.handleInput}
              name='propertyType'
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value={"Apartment"}>Apartment</MenuItem>
              <MenuItem value={"House"}>House</MenuItem>
              <MenuItem value={"Townhouse"}>Townhouse</MenuItem>
              <MenuItem value={"Loft"}>Loft</MenuItem>
              <MenuItem value={"Condominium"}>Condominium</MenuItem>
              <MenuItem value={"Serviced Apartment"}>Serviced Apartment</MenuItem>
              <MenuItem value={"Guest Suite"}>Guest Suite</MenuItem>
              <MenuItem value={"Other"}>Other</MenuItem>
              <MenuItem value={"Bed & Breakfast"}>Bed & Breakfast</MenuItem>
              <MenuItem value={"Boutique Hotel"}>Boutique Hotel</MenuItem>
              <MenuItem value={"Resort"}>Resort</MenuItem>
              <MenuItem value={"Guest House"}>Guest House</MenuItem>
              <MenuItem value={"Hostel"}>Hostel</MenuItem>
              <MenuItem value={"Timeshare"}>Timeshare</MenuItem>
            </Select>
          </FormControl>
          <FormControl >
            <FormLabel>What type of access are you giving to your guests?</FormLabel>
            <Select
              value={this.state.roomType}
              onChange={this.handleInput}
              name='roomType'
            >
              <MenuItem value={""}>None</MenuItem>
              <MenuItem value={"Entire home/apartment"}>Entire home/apartment</MenuItem>
              <MenuItem value={"Private room"}>Private room</MenuItem>
              <MenuItem value={"Shared room"}>Shared room</MenuItem>
            </Select>
          </FormControl>
        </div>
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

