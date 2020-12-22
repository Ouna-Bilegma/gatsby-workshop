import React, { Component } from "react"
import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"
import "./index.styles.scss"
import Helmet from "react-helmet"

class Home extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Oyuna | Web Dev</title>
        </Helmet>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}
export default Home
