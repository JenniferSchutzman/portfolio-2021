
import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom'

import Home from './pages/home/home.jsx'
// import AboutMe from './pages/aboutMe/aboutMe.jsx'
// import FormerLife from './pages/formerLife/formerLife.jsx'
// import MyCode from './pages/myCode/code.jsx'
// import TechCommunity from './pages/techCommunity/techCommunity.jsx'


const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/aboutMeNow" component={AboutMe} />
        <Route exact path="/myFormerLife" component={FormerLife} />
        <Route exact path="/myCode" component={MyCode} />
        <Route exact path="/involvementInTechCommunity" component={TechCommunity} /> */}
      </Switch>
    </BrowserRouter>
  )
}


export default App;
