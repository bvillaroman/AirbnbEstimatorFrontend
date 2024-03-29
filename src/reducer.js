import {
  SUBMIT_PLACE_TYPE,
  SUBMIT_BEDROOMS,
  SUBMIT_BATHROOMS,
  SUBMIT_LOCATION,
  SUBMIT_LISTING_DATA,
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
    case SUBMIT_LISTING_DATA:
      return { ...state, listing: action.payload };
    case SUBMIT_LOCATION:
      return { ...state, location: action.payload };
    case SUBMIT_LISTING:
      return  { ...state, response: {
        isFetching: true,
      } }
    case SUBMIT_LISTING_SUCCESS:
      return  { ...state, response: {
        isFetching: false,
        body: action.payload }
      }
    case SUBMIT_LISTING_ERROR:
      return  { ...state, response: {
        isFetching: false,
        caughtError: true,
        body: action.payload 
      }
      }
    case SWITCH_PAGES:
      return  { ...state, page: action.payload }
    default:
      return state;
  }
};

