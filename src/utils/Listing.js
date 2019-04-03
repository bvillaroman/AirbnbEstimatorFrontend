
import Axios from "Axios"

export function sendListing(url,listingData){
  console.log(listingData)
  const options = {
    method: 'post',
    url: url,
    data: JSON.stringify(listingData)
  }

  return Axios(options)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      return err;
    });
}