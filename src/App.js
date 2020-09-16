import React, { Component } from 'react'
import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'
import Content from './Content'
import Headerpastor from './Headerpastor'

// import Aside from './Aside'

export default class App extends Component {
  render() {
    return (
      <div>
        <Headerpastor/>
        {/* <Menu/> */}
        {/* <Content/> */}
        <Footer/>

      </div>
    )
  }
}
