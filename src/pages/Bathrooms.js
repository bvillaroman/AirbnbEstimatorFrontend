import React from "react"
import Input from "../components/presentational/Input"
import { connect } from 'react-redux';
import ContainerStyles from "../styles/form.module.css"
import {submitBathrooms,submitListing} from '../actions'
import Button from '@material-ui/core/Button';
import ArrowForward from '@material-ui/icons/ArrowForward';
import ArrowBack from '@material-ui/icons/ArrowBack';
import {sendListing} from "../utils/Listing"
import winterData from "../winterData.json"
import summerData from "../summerData.json"


class Bathrooms extends React.Component {
  state = {
    bathrooms:"", 
    responseText: "",
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

    let winter = []
    let summer = []
    for(const neighborhood in winterData){
      const {
        accommodates,
        beds,
        bedrooms,
        bathrooms,
        bed_type,
        property_type,
        number_of_reviews,
        review_scores_rating,
        intercepts,
        r_score
      } = winterData[neighborhood]
      winter.push({
       location: neighborhood,
       season: "winter",
       models: [
         {
            name: "LRGBM",
            coefficients : {
              accommodates,
              beds,
              bedrooms,
              bathrooms,
              bed_type,
              property_type,
              number_of_reviews,
              review_scores_rating,
              intercepts,
            },
            accuracy: r_score
         }
        ] 
      })  
    }

    for(const neighborhood in summerData){
      const {
        accommodates,
        beds,
        bedrooms,
        bathrooms,
        bed_type,
        property_type,
        number_of_reviews,
        review_scores_rating,
        intercepts,
        r_score
      } = summerData[neighborhood]
      summer.push({
       location: neighborhood,
       season: "summer",
       models: [
         {
            name: "LRGBM",
            coefficients : {
              accommodates,
              beds,
              bedrooms,
              bathrooms,
              bed_type,
              property_type,
              number_of_reviews,
              review_scores_rating,
              intercepts,
            },
            accuracy: r_score
         }
        ] 
      })  
    }
    

    let price ;
    winter.find((item) => {
      const coefficients = item.models[0].coefficients
      if (item.location === this.props.listing.location.city.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase()      
      && item.season === this.props.listing.listing.season){ 
        price = this.calculatePrice(listing,coefficients)
        this.setState({responseText: price})
      }
    })
    
    // const price = this.calculatePrice(listing,coefficients)
    // this.setState({responseText: price})
    // console.log(this.parseLocations())
    // sendListing(`${process.env.API_URL}/listings`,listing)
    // .then((data) => {
    //   const price = data.Prediction ? `$ ${data.Prediction.LinearRegression.toFixed(2)}` : "";
    //   this.setState({responseText: price})
    // })

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
          <Button onClick={() => { this.props.switchPages(3)}}><ArrowBack /> ListingType </Button>
          <Button onClick={this.onSubmit}> Submit <ArrowForward /></Button>
          {/* {this.state.responseText} */}
          <br/>
          <br/>
          <div className={ContainerStyles.formTitle}> {this.state.responseText} </div>
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
  submitListing: () => dispatch(submitListing())
 })
export default connect(mapStateToProps, mapDispatchToProps)(Bathrooms);

