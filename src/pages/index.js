import React from "react"
import Layout from "../components/presentational/layout"
import Input from "../components/presentational/Input"
import ContainerStyles from "../styles/layout.module.css"
import {sendListing} from "../utils/Listing"

class App extends React.Component {
  state = {
    address:"",
    responseText:""
  }

  handleInput = (evt) => {
    const { value,name } = evt.target;
    this.setState({ [name] : value})
  }

  onSubmit = (evt) => {

    const data = {
      location: {
        address: this.state.address
      }
    }
    
    sendListing(`${process.env.API_URL}/listings`,data)
      .then((res) => {
        this.setState({responseText: "Succesfully submitted"})
      })
      .catch(err => {
        this.setState({responseText: "Something went wrong"})
      })
  }

  render(){
    return (
      <Layout>
        <div className={ContainerStyles.mainContainer}>
          <Input label="Address" name={"address"} value={this.state.address} handleInput={this.handleInput}/>
          <button onClick={this.onSubmit}> Submit </button>
          <br/>
          <br/>
          <div>{this.state.responseText}</div>
        </div>
      </Layout>
    )
  }
}

export default App;