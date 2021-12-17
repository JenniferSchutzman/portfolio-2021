
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import Home from './pages/home'
// import AboutMe from './pages/aboutMe/aboutMe.jsx'
// import FormerLife from './pages/formerLife/formerLife.jsx'
import Code from './pages/code/index'
// import TechCommunity from './pages/techCommunity/techCommunity.jsx'


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/aboutMeNow" component={AboutMe} /> */}
        {/* <Route exact path="/myFormerLife" component={FormerLife} /> */}
        <Route exact path="/code" element={<Code />} />
        {/* <Route exact path="/involvementInTechCommunity" component={TechCommunity} /> */}
      </Routes>
    </BrowserRouter>
  )
}


export default App;
