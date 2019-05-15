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
    availability: "",
    minimumNights: "",
    hostIsSuperhost: "",
    hostResponseRate: ""
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
    const {reviewScoresRating, availability, minimumNights, hostIsSuperhost, hostResponseRate} = this.state
    const disableButton = !(reviewScoresRating && availability && minimumNights && hostIsSuperhost && hostResponseRate)
    return (
        <div>
          <div className={ContainerStyles.formTitle}> Listing Information (optional) </div>
          <Input label="Owner Rating:" name={"reviewScoresRating"} value={this.state.reviewScoresRating} handleInput={this.handleInput} required/>
          <Input label="Availability:" name={"availability"} value={this.state.availability} handleInput={this.handleInput} required/>
          <Input label="Minimum Stay:" name={"minimumNights"} value={this.state.minimumNights} handleInput={this.handleInput}/>
          <Input label="Is the host a superhost?" name={"hostIsSuperhost"} value={this.state.hostIsSuperhost} handleInput={this.handleInput}/>
          <Input label="Response Rate for the host?" name={"hostResponseRate"} value={this.state.hostResponseRate} handleInput={this.handleInput}/>
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

