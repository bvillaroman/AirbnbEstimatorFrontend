import {
  SUBMIT_PLACE_TYPE,
  SUBMIT_BEDROOMS,
  SUBMIT_BATHROOMS,
  SUBMIT_LOCATION
} from './constants'

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