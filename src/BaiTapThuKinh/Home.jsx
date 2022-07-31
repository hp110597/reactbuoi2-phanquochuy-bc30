import React, { Component } from 'react'
import Content from './Content'
import Header from './Header'
import'./style/style.css'




export default class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Content/>
      </div>
    )
  }
}
