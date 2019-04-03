import React from "react"
import { Provider } from 'react-redux'
import configureStore from '../store';
import Layout from "../components/presentational/layout"
import ContainerStyles from "../styles/layout.module.css"
import {sendListing} from "../utils/Listing"
import Bathrooms from "./Bathrooms.js"
import Bedrooms from "./Bedrooms.js"
import Location from "./Location.js"
import PlaceType from "./PlaceType.js"

class App extends React.Component {
  state = {
    currentPage: 0,
  }

  nextPage = (e) => {
    const currentPage = this.state.currentPage;
    this.setState({currentPage : currentPage + 1})
  }
  // state = {
  //   address:"",
  //   accommodates:0, 
  //   beds: 0, 
  //   bedrooms: 0, 
  //   bathrooms: 0,
  //   responseText:""
  // }

  // handleInput = (evt) => {
  //   const { value,name } = evt.target;
  //   this.setState({ [name] : value})
  // }

  // onSubmit = (evt) => {
  //   const { address, accommodates, beds, bedrooms, bathrooms } = this.state;

  //   const data = {
  //     location: {
  //       address: address,
  //     },
  //     bedrooms: {
  //       guests: accommodates,
  //       numOfBedrooms: bedrooms,
  //       numOfBedsAvailable: beds
  //     },
  //     bathrooms: bathrooms 
  //   }
    
  //   sendListing(`${process.env.API_URL}/listings`,data)
  //     .then((res) => {
  //       this.setState({responseText: "Succesfully submitted"})
  //     })
  //     .catch(err => {
  //       this.setState({responseText: "Something went wrong"})
  //     })
  // }

  render(){

    const currentPage = this.state.currentPage === 0 ? <PlaceType advance={this.nextPage}/>
                      : this.state.currentPage === 1 ? <Location advance={this.nextPage}/>
                      : this.state.currentPage === 2 ? <Bedrooms advance={this.nextPage}/>
                      : this.state.currentPage === 3 ? <Bathrooms advance={this.nextPage}/>
                      : <PlaceType advance={this.nextPage}/>

    return (
      <Provider store={configureStore()}>
        <Layout>
          <div className={ContainerStyles.mainContainer}>
            {currentPage}
          </div>
        </Layout>
      </Provider>
    )
  }
}

export default App;