import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Flutter from './video/Flutter'
import Reactstudy from './video/Reactstudy'
import Vue from './video/Vue'

export default class Video extends Component {
  render() {
    return (
      <div>
        <p>视频页面</p>
        <h1>二级导航</h1>
        <Router>
          <ul>
            <li><Link to="/video/flutter">flutter</Link></li>
            <li><Link to="/video/react">react</Link></li>
            <li><Link to="/video/vue">vue</Link></li>
          </ul>
        
          <Route path="/video/flutter" component={Flutter}></Route>
          <Route path="/video/react" component={Reactstudy}></Route>
          <Route path="/video/vue" component={Vue}></Route>
        </Router>
      </div>
    )
  }
}
