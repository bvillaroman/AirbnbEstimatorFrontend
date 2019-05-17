import {
  SUBMIT_PLACE_TYPE,
  SUBMIT_BEDROOMS,
  SUBMIT_BATHROOMS,
  SUBMIT_LOCATION,
  SUBMIT_LISTING_DATA,
  SUBMIT_LISTING_SUCCESS,
  SUBMIT_LISTING_ERROR,
  SWITCH_PAGES,
} from './constants'
import { getModel } from "./utils/Listing"

export const switchPages = pageNumber => dispatch => {
  dispatch({ 
    type: SWITCH_PAGES,
    payload: pageNumber
  })
}

export const submitPlaceType = data => dispatch => {
 dispatch({ 
    type: SUBMIT_PLACE_TYPE,
    payload: data
  })
}

export const submitBedrooms = data => dispatch => {
  dispatch({ 
    type: SUBMIT_BEDROOMS,
    payload: data
  })
}

export const submitBathrooms = data => dispatch => {
  dispatch({ 
    type: SUBMIT_BATHROOMS,
    payload: data
  })
}

export const submitLocation = data => dispatch => {
  dispatch({ 
    type: SUBMIT_LOCATION,
    payload: data
  })
}

export const submitListingData = data => dispatch => {
  dispatch({ 
    type: SUBMIT_LISTING_DATA,
    payload: data
  })
}

export function getCoefficients() {

  return (dispatch, getState) => {
    const givenModel = getState().reducer;
    const model = {
      location: givenModel.location,
      season: givenModel.season
    }
    return getModel(`${process.env.API_URL}/models`,model)
            .then((res) => { dispatch(submitListingSuccess(res)) })
            .catch((err) => {dispatch(submitListingError(err))})
  }
}

export const submitListingSuccess = (response) => dispatch => {
  dispatch({ 
    type: SUBMIT_LISTING_SUCCESS,
    payload: response
  })
}
export const submitListingError = (error) => dispatch => {
  dispatch({ 
    type: SUBMIT_LISTING_ERROR,
    payload: error
  })
}