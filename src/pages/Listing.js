import React from "react"
import Input from "../components/presentational/Input"
import { connect } from 'react-redux';
import ContainerStyles from "../styles/form.module.css"
import {submitListingData,switchPages} from '../actions'
import Button from '@material-ui/core/Button';
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
          <div className={ContainerStyles.formTitle}> Listing Information (optional) </div>
          <Input label="Owner Rating:" name={"reviewScoresRating"} value={this.state.reviewScoresRating} handleInput={this.handleInput} required/>
          <Input label="Season:" name={"season"} value={this.state.season} handleInput={this.handleInput} required/>
          <Input label="Number of ratings on owner?" name={"numberOfRatings"} value={this.state.numberOfRatings} handleInput={this.handleInput} required/>
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

