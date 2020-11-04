import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from './Components/Navibar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home';
import Users from './Pages/Users';
import About from './Pages/About';
import Footer from './Components/Footer'




class App extends React.Component {

  render() {
    return (
      <>
        <Router>
          <Navibar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/users' component={Users} />
            <Route exact path='/about' component={About} />
          </Switch>
        </Router>
        <Footer />
      </>


    );
  }
}


export default App;
