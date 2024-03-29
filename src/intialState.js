export const initialState = {
  placeType: {  
    roomType:"",
    propertyType:"", 
  },
  bedrooms: {
    guests: 0,
    numOfBedrooms: 0,
    numOfBedsAvailable: 0,
  },
  bathrooms: 0,
  location: {
    address: "",
    apartmentNumber: "",
    city: "",
    state: "",
    zipCode: 0
  },
  page:0,
  response:{
    isFetching: false,
    caughtError: false,
    body: {}
  },
  listing: {
    reviewScoresRating: "",
    season: "",
    numberOfRatings: "",
  }
}