import React from "react"
import Input from "../components/presentational/Input"
import ContainerStyles from "../styles/form.module.css"
import ComponentStyles from "../styles/component.module.css"

import { connect } from 'react-redux';
import {submitPlaceType,switchPages} from '../actions'
import Button from '@material-ui/core/Button';
import ArrowForward from '@material-ui/icons/ArrowForward';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


class PlaceType extends React.Component {
  state = {
    placeType:"",
    propertyType:"", 
    guestSpace: ""
  }

  handleInput = (evt) => {
    const { value,name } = evt.target;
    console.log(value)
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
        <div className={ComponentStyles.inputContainerDropDown}>
          <FormControl className={ComponentStyles.inputContainerDropDown}>
            <InputLabel >What kind of place are you listing?</InputLabel>
            <Select
              value={this.state.placeType}
              onChange={this.handleInput}
              inputProps={{
                name: 'placeType',
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={'Apartment'}>Apartment</MenuItem>
              <MenuItem value={'House'}>House</MenuItem>
              <MenuItem value={'Townhouse'}>Townhouse</MenuItem>
              <MenuItem value={'Loft'}>Loft</MenuItem>
              <MenuItem value={'Condominium'}>Condominium</MenuItem>
              <MenuItem value={'Serviced apartment'}>Serviced apartment</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={ComponentStyles.inputContainerDropDown}>
            <InputLabel >What type of property are you listing?</InputLabel>
            <Select
              value={this.state.propertyType}
              onChange={this.handleInput}
              inputProps={{
                name: 'propertyType',
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={'Entire home/apt'}>Entire home/apartment</MenuItem>
              <MenuItem value={'Private room '}>Private room </MenuItem>
              <MenuItem value={'Shared room'}>Shared room</MenuItem>
            </Select>
          </FormControl>
        </div>
        {/* <Input label="What kind of place are you listing?" name={"placeType"} value={this.state.placeType} handleInput={this.handleInput}/>
        <Input label="What type of property are you listing?" name={"propertyType"} value={this.state.propertyType} handleInput={this.handleInput}/>
        <Input label="What will guests have access to?" name={"guestSpace"} value={this.state.guestSpace} handleInput={this.handleInput}/> */}
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

