import React from 'react'
import ReactGA from 'react-ga'

import Header from './components/Header'
import About from './components/About'
import Footer from './components/Footer'

const App = () => {
  ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID || '')
  ReactGA.pageview(window.location.pathname + window.location.search)
  return (
    <React.Fragment>
      <Header />
      <About />
      <Footer />
    </React.Fragment>
  )
}
export default App
