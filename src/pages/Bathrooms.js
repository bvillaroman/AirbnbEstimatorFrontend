import React from "react"
import Input from "../components/presentational/Input"
import { connect } from 'react-redux';
import ContainerStyles from "../styles/form.module.css"
import {submitBathrooms,switchPages} from '../actions'
import Button from '@material-ui/core/Button';
import ArrowForward from '@material-ui/icons/ArrowForward';
import ArrowBack from '@material-ui/icons/ArrowBack';
import {getModel,sendModel} from "../utils/Listing"

class Bathrooms extends React.Component {
  state = {
    bathrooms:0, 
    responseText: "",
    lr:"",
    svr: "",

  }

  handleInput = (evt) => {
    const { value,name } = evt.target;
    this.setState({ [name] : value})
  }

  onSubmit = (evt) => {

    const data = parseInt(this.state.bathrooms)
    
    this.props.submitBathrooms(data)
    // this.props.submitListing()
    const listing = {
      accommodates: this.props.listing.bedrooms.guests,
      bathrooms: parseInt(this.state.bathrooms),
      bed_type: this.handleBedType(this.props.listing.placeType.roomType),
      bedrooms: this.props.listing.bedrooms.numOfBedrooms,
      beds: this.props.listing.bedrooms.numOfBedsAvailable,
      property_type: this.handlePropertyType(this.props.listing.placeType.propertyType),
      number_of_reviews: this.props.listing.listing.numberOfRatings,
      review_scores_rating: this.props.listing.listing.reviewScoresRating
    }
    
    const model = { 
      location: this.props.listing.location.city.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase() ,
      season: this.props.listing.listing.season 
    }

    this.setState({
      responseText: "loading..",
    }, () => {
      getModel(`${process.env.API_URL}/models/model`,model)
      .then((model)=> {
        const lr = model[0].models[0].coefficients
        const svm = model[0].models[1].coefficients
  
        const lrtext = `$${this.calculatePrice(listing,lr)},\n  R^2 score: ${model[0].models[0].accuracy.toFixed(3)}`
        const svrtext = `$${this.calculatePrice(listing,svm)},\n R^2 score: ${model[0].models[1].accuracy.toFixed(3)}`
  
        this.setState({responseText: "",lr:lrtext, svr: svrtext, })
      })
      .catch((err)=> {

        this.setState({responseText: "sorry, pls try again"})
      })
    })
  }
  

  calculatePrice = (listing,coefficients) => {
    const m1 = parseFloat(listing.accommodates * coefficients.accommodates)
    const m2 = parseFloat(listing.beds * coefficients.beds)
    const m3 = parseFloat(listing.bedrooms * coefficients.bedrooms)
    const m4 = parseFloat(listing.bathrooms * coefficients.bathrooms)
    const m5 = parseFloat(listing.bed_type * coefficients.bed_type)
    const m6 = parseFloat(listing.property_type * coefficients.property_type)
    const m7 = parseFloat(listing.number_of_reviews * coefficients.number_of_reviews)
    const m8 = parseFloat(listing.review_scores_rating * coefficients.review_scores_rating)

    // return m1
    return (m1 + m2 + m3 + m4 + m5 + m6 + m7 + m8 + coefficients.intercepts).toFixed(2)
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

  handleBedType = bed => {
    let value = 1;
    switch(bed) {
      case "Entire home/apartment": 
        value = 1;
        break;
      case "Private room": 
        value = 2;
        break;  
      case "Shared room": 
        value = 3;
        break;      
      default: 
        value = 1;
        break;   
    }
    return value;
  }

  render(){
    return (
        <div>
          <div className={ContainerStyles.formTitle}> Bathrooms </div>
          <Input label="How many bathrooms are there?" name={"bathrooms"} value={this.state.bathrooms} handleInput={this.handleInput}/>
          <Button onClick={() => { this.props.switchPages(3)}}><ArrowBack /> Listing </Button>
          <Button onClick={this.onSubmit}> Submit <ArrowForward /></Button>
          <br/>
          <br/>
          <div className={ContainerStyles.formTitle}> Listing Data </div>
          <div className={ContainerStyles.formTitle}> {this.state.responseText} </div>

          <div className={ContainerStyles.formPrice}> Number of bedrooms: {this.props.listing.bedrooms.numOfBedrooms} </div>
          <div className={ContainerStyles.formPrice}> Number of beds: {this.props.listing.bedrooms.numOfBedsAvailable} </div>
          <div className={ContainerStyles.formPrice}> Number of bathrooms: {this.state.bathrooms} </div>
          <div className={ContainerStyles.formPrice}> Number of guests: {this.props.listing.bedrooms.guests} </div>
          <div className={ContainerStyles.formPrice}> Property Type: {this.props.listing.placeType.propertyType} </div>
          <div className={ContainerStyles.formPrice}> Number of Reviews: {this.props.listing.listing.numberOfRatings} </div>
          <div className={ContainerStyles.formPrice}> Review Score (out of 100%): {this.props.listing.listing.reviewScoresRating}% </div>
          <div className={ContainerStyles.formPrice}> Neighborhood: {this.props.listing.location.city}</div>
          <div className={ContainerStyles.formPrice}> Season: {this.props.listing.listing.season} </div>

          <div className={ContainerStyles.formTitle}> {this.state.responseText} </div>

          <div className={ContainerStyles.formTitle}> Price </div>
          <div className={ContainerStyles.formPrice}> Linear Regression: {this.state.lr} </div>
          <div className={ContainerStyles.formPrice}> Support Vector Regression: {this.state.svr} </div>

        </div>
    )
  }
};

const mapStateToProps = ({reducer}) => ({
  page: reducer.page,
  response: reducer.response,
  listing: reducer
})

const mapDispatchToProps = dispatch => ({
  submitBathrooms: (data) => dispatch(submitBathrooms(data)),
  switchPages: (pageNumber) => dispatch(switchPages(pageNumber)),
 })
export default connect(mapStateToProps, mapDispatchToProps)(Bathrooms);

