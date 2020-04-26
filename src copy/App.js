import React, {Component} from 'react';

import{
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//components
import Header from './components/headerComponent/header';

import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import Products from './components/pages/products';
//

import './Assets/CSS/default.min.css';   //Import the default.min.css thing
import { render } from '@testing-library/react';

class App extends Component {
  render() {
  return (
    <Router>
    <div className="App">
     
    <Header />
  <Route exact path='/' component={Homepage} />
  <Route exact path='/Products' component={Products} />

    <Footer />

    </div>
    </Router>
  );

}
}
export default App;
