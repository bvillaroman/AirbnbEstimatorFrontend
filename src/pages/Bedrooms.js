import React from "react"
import Input from "../components/presentational/Input"
import ContainerStyles from "../styles/form.module.css"
import { connect } from 'react-redux';
import { submitBedrooms,switchPages } from "./../actions"
import Button from '@material-ui/core/Button';
import ArrowForward from '@material-ui/icons/ArrowForward';
import ArrowBack from '@material-ui/icons/ArrowBack';

class Bedrooms extends React.Component {
  state = {
    guests:"",
    numOfBedrooms:"", 
    numOfBedsAvailable: ""
  }

  handleInput = (evt) => {
    const { value,name } = evt.target;
    this.setState({ [name] : value})
  }

  onSubmit = (evt) => {

    const data = {  
     ...this.state
    }
    
    this.props.submitBedrooms(data)
    this.props.switchPages(3)
  }
  

  render(){
    return (
        <div >
          <div className={ContainerStyles.formTitle}> Bedrooms </div>
          <Input label="How many guests are you accomodating?" name={"guests"} value={this.state.guests} handleInput={this.handleInput}/>
          <Input label="How many bedrooms are there?" name={"numOfBedrooms"} value={this.state.numOfBedrooms} handleInput={this.handleInput}/>
          <Input label="How Many beds are there?" name={"numOfBedsAvailable"} value={this.state.numOfBedsAvailable} handleInput={this.handleInput}/>
          <Button onClick={() => { this.props.switchPages(1)}}><ArrowBack /> Location </Button>
          <Button onClick={this.onSubmit}> Listing Type <ArrowForward /></Button>
        </div>
    )
  }
}
const mapStateToProps = ({reducer}) => ({page: reducer.page})

const mapDispatchToProps = dispatch => ({
  switchPages: (pageNumber) => dispatch(switchPages(pageNumber)),
  submitBedrooms: (data) => dispatch(submitBedrooms(data))
 })
export default connect(mapStateToProps, mapDispatchToProps)(Bedrooms);

