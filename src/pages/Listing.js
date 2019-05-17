import React from "react"
import Input from "../components/presentational/Input"
import { connect } from 'react-redux';
import ContainerStyles from "../styles/form.module.css"
import ComponentStyles from "../styles/component.module.css"
import {submitListingData,switchPages} from '../actions'
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ArrowForward from '@material-ui/icons/ArrowForward';
import ArrowBack from '@material-ui/icons/ArrowBack';

class Listing extends React.Component {
  state = {
    reviewScoresRating: "",
    season: "",
    numberOfRatings: ""
  }

  handleInput = (evt) => {
    const { value,name } = evt.target;
    this.setState({ [name] : value})
  }

  onSubmit = (evt) => {

    const data = {  
     ...this.state
    }
    
    this.props.submitListingData(data);
    this.props.switchPages(4);
  }

  render(){
    const {reviewScoresRating, season, numberOfRatings} = this.state
    const disableButton = !(reviewScoresRating && season && numberOfRatings)
    return (
        <div>
          <div className={ContainerStyles.formTitle}> Listing Information </div>
          <Input label="Owner Rating (in a percentage):" name={"reviewScoresRating"} value={this.state.reviewScoresRating} handleInput={this.handleInput} required/>
          <FormControl className={ContainerStyles.season}>
            <FormLabel className={ContainerStyles.seasonLabel }>Season: </FormLabel>
            <Select
              value={this.state.season}
              onChange={this.handleInput}
              name='season'
              className={ContainerStyles.seasonDropDown}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value={"summer"}>Summer</MenuItem>
              <MenuItem value={"winter"}>Winter</MenuItem>
              <MenuItem value={"spring"}>Spring</MenuItem>
              <MenuItem value={"fall"}>Fall</MenuItem>
            </Select>
          </FormControl>
          <Input label="Number of ratings the owner has?" name={"numberOfRatings"} value={this.state.numberOfRatings} handleInput={this.handleInput} required/>
          <Button onClick={() => { this.props.switchPages(2)}}> <ArrowBack />Bedrooms</Button>
          <Button disabled={disableButton} onClick={this.onSubmit}>Bathrooms <ArrowForward /></Button>
        </div>
    )
  }
}

const mapStateToProps = ({reducer}) => ({page: reducer.page})

const mapDispatchToProps = dispatch => ({
  switchPages: (pageNumber) => dispatch(switchPages(pageNumber)),
  submitListingData: (data) => dispatch(submitListingData(data))
 })

export default connect(mapStateToProps, mapDispatchToProps)(Listing);

