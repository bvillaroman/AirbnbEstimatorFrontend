
import Axios from "Axios"
export function sendModel(url,model){
  const options = {
    method: 'post',
    url: url,
    data: JSON.stringify(model)
  }

  return Axios(options)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      return err;
    });
}

export function getModel(url,model){
  const options = {
    method: 'post',
    url: url,
    data: JSON.stringify(model)
  }

  console.log(JSON.stringify(model))
  return Axios(options)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      return err;
    });
}