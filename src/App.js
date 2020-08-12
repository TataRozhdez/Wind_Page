import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import About from './pages/About/About'
import Services from './pages/Services/Services'
import Blog from './pages/Blog/Blog'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/blog'>
          <Blog />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/services'>
          <Services />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
