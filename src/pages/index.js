import React from "react"
import { Provider } from 'react-redux'
import Layout from "../components/presentational/layout"
import ContainerStyles from "../styles/layout.module.css"
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
  render(){

    const currentPage = this.state.currentPage === 0 ? <PlaceType advance={this.nextPage}/>
                      : this.state.currentPage === 1 ? <Location advance={this.nextPage}/>
                      : this.state.currentPage === 2 ? <Bedrooms advance={this.nextPage}/>
                      : this.state.currentPage === 3 ? <Bathrooms advance={this.nextPage}/>
                      : <div> sorry, there was an error, please refresh page </div>

    return (
      <Layout>
        <div className={ContainerStyles.mainContainer}>
          {currentPage}
        </div>
      </Layout>
    )
  }
}

export default App;