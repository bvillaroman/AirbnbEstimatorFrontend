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
import { sendListing } from "./utils/Listing"

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

export function submitListingWorker() {
  return (dispatch,getState) => {
    const listing = getState()
    return sendListing(`${process.env.API_URL}/listings`,listing)
        .then(response => response.json())
        .then(json => dispatch(submitListingSuccess(json)))
        .catch(err => dispatch(submitListingError(err)))
  }
}

export function submitListing() {

  return (dispatch, getState) => {
    const givenListing = getState().reducer;
    const listing = {
      bathrooms: givenListing.bathrooms,
      bedrooms: givenListing.bedrooms,
      location: givenListing.location,
      placeType: givenListing.placeType,
    }
    return sendListing(`${process.env.API_URL}/listings`,listing)
            .then((res) => { dispatch(submitListingSuccess(res)) })
            .catch((err) => {dispatch(submitListingError(err))})

    // if (shouldFetchPosts(getState(), subreddit)) {
    //   // Dispatch a thunk from thunk!
    //   return dispatch(fetchPosts(subreddit))
    // } else {
    //   // Let the calling code know there's nothing to wait for.
    //   return Promise.resolve()
    // }
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