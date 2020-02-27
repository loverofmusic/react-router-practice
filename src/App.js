import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Index from './pages/index'
import Job from './pages/job'
import Video from './pages/video'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>一级导航</h1>
        <Router>
          <ul>
            <li><Link to="/">首页</Link></li>
            <li><Link to="/job">职场</Link></li>
            <li><Link to="/video">视频</Link></li>
          </ul>
        
          <Route path="/" exact component={Index}></Route>
          <Route path="/job" component={Job}></Route>
          <Route path="/video" component={Video}></Route>
        </Router>
      </div>
    )
  }
}
