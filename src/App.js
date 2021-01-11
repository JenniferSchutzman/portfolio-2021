
import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom'

import Home from './pages/home/home.jsx'
// import AboutMe from './pages/aboutMe'
// import FormerLife from './pages/formerLife'
// import MyCode from './pages/formerLife'
// import TechCommunity frmo './pages/TechCommunity'


const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/aboutMe" component={AboutMe} />
        <Route exact path="/formerLife" component={FormerLife} />
        <Route exact path="/MyCode" component={MyCode} />
        <Route exact path="/TechCommunity" component={TechCommunity} /> */}
      </Switch>
    </BrowserRouter>
  )
}


export default App;
