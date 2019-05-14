import React from "react"
import { connect } from 'react-redux';
import Layout from "../components/presentational/layout"
import ContainerStyles from "../styles/form.module.css"
import Bathrooms from "./Bathrooms.js"
import Bedrooms from "./Bedrooms.js"
import Listing from "./Listing.js"
import Location from "./Location.js"
import PlaceType from "./PlaceType.js"
import {switchPages} from "../actions"

class App extends React.Component {
  render(){
    const pageNumber = this.props.page ? this.props.page : 0;
    const currentPage = pageNumber === 0 ? <PlaceType />
                      : pageNumber === 1 ? <Location />
                      : pageNumber === 2 ? <Bedrooms />
                      : pageNumber === 3 ? <Listing />
                      : pageNumber === 4 ? <Bathrooms />
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

const mapStateToProps = ({reducer}) => ({page: reducer.page})

const mapDispatchToProps = dispatch => ({
  switchPages: (pageNumber) => dispatch(switchPages(pageNumber)),
 })

export default connect(mapStateToProps, mapDispatchToProps)(App);
