import React from "react"
import Layout from "../components/presentational/layout"
import Input from "../components/presentational/Input"
import ContainerStyles from "../styles/layout.module.css"
import {sendListing} from "../utils/Listing"

class App extends React.Component {
  state = {
    address:"",
    accommodates:0, 
    beds: 0, 
    bedrooms: 0, 
    bathrooms: 0,
    responseText:""
  }

  handleInput = (evt) => {
    const { value,name } = evt.target;
    this.setState({ [name] : value})
  }

  onSubmit = (evt) => {
    const { address, accommodates, beds, bedrooms, bathrooms } = this.state;

    const data = {
      location: {
        address: address,
      },
      bedrooms: {
        guests: accommodates,
        numOfBedrooms: bedrooms,
        numOfBedsAvailable: beds
      },
      bathrooms: bathrooms 
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
          <Input label="What is the Address?" name={"address"} value={this.state.address} handleInput={this.handleInput}/>
          <Input label="How many guests?" name={"accommodates"} value={this.state.accommodates} handleInput={this.handleInput}/>
          <Input label="How many beds?" name={"beds"} value={this.state.beds} handleInput={this.handleInput}/>
          <Input label="How many bedrooms?" name={"bedrooms"} value={this.state.bedrooms} handleInput={this.handleInput}/>
          <Input label="How many bathrooms?" name={"bathrooms"} value={this.state.bathrooms} handleInput={this.handleInput}/>
          <button onClick={this.onSubmit}> Submit </button>
          <br/>
          <br/>
          <div>response: {this.state.responseText}</div>
        </div>
      </Layout>
    )
  }
}

export default App;