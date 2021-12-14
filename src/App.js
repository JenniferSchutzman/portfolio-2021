
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import Home from './pages/home.jsx'
// import AboutMe from './pages/aboutMe/aboutMe.jsx'
// import FormerLife from './pages/formerLife/formerLife.jsx'
// import MyCode from './pages/myCode/code.jsx'
// import TechCommunity from './pages/techCommunity/techCommunity.jsx'


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/aboutMeNow" component={AboutMe} />
        <Route exact path="/myFormerLife" component={FormerLife} />
        <Route exact path="/myCode" component={MyCode} />
        <Route exact path="/involvementInTechCommunity" component={TechCommunity} /> */}
      </Routes>
    </BrowserRouter>
  )
}


export default App;
