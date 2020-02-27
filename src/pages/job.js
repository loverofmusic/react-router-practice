import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Getup from './job/Getup'
import Salary from './job/Salary'

export default class Job extends Component {
  render() {
    return (
      <div>
        <p>职场页面</p>
        <h1>二级导航</h1>
        <Router>
          <ul>
            <li><Link to="/job/getup">起床</Link></li>
            <li><Link to="/job/salary">薪资</Link></li>
          </ul>
        
          <Route path="/job/getup" component={Getup}></Route>
          <Route path="/job/salary" component={Salary}></Route>
        </Router>
      </div>
    )
  }
}
