import React from "react"
import Layout from "../components/presentational/layout"
import Input from "../components/presentational/Input"
import ContainerStyles from "../styles/layout.module.css"

class App extends React.Component {
  state = {
    address:""
  }

  handleInput = (evt) => {
    const { value,name } = evt.target;
    this.setState({ [name] : value})
  }

  onSubmit = (evt) => {

  }

  render(){
    return (
      <Layout>
        <div className={ContainerStyles.mainContainer}>
          <Input label="Address" name={"address"} value={this.state.address} handleInput={this.handleInput}/>
          <button onClick={this.onSubmit}> Submit </button>
        </div>
      </Layout>
    )
  }
}

export default App;