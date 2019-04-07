import {
  SUBMIT_PLACE_TYPE,
  SUBMIT_BEDROOMS,
  SUBMIT_BATHROOMS,
  SUBMIT_LOCATION,
  SUBMIT_LISTING,
  SUBMIT_LISTING_SUCCESS,
  SUBMIT_LISTING_ERROR,
  SWITCH_PAGES,
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
    case SUBMIT_LISTING:
      return  { ...state }
    case SUBMIT_LISTING_SUCCESS:
      return  { ...state, response: action.payload }
    case SUBMIT_LISTING_ERROR:
      return  { ...state, response: action.payload }
    case SWITCH_PAGES:
      return  { ...state, page: action.payload }
    default:
      return state;
  }
};

