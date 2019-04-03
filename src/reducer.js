import {
  SUBMIT_PLACE_TYPE,
  SUBMIT_BEDROOMS,
  SUBMIT_BATHROOMS,
  SUBMIT_LOCATION
} from './constants'
import {initialState} from "./intialState"

export default (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_PLACE_TYPE:
      return { ...state, placeType: action.payload };
    case SUBMIT_BEDROOMS:
      return { ...state, bedrooms: action.payload };
    case SUBMIT_BATHROOMS:
      return { ...state, bathrooms: action.payload };
    case SUBMIT_LOCATION:
      return { ...state, location: action.payload };
    default:
      return state;
  }
};

