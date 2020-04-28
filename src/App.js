import React, {Component} from 'react';


import{
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//components
import Header from './components/headerComponent/header';
import Homepage2 from './components/pages/homepageRebecca'; 
import Footer from './components/footerComponent/footer';
import Header2 from './components/headerComponent/headerRebecca';
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
   
   {/* As of now this one is the same as below */}
    <Header2 />

  
     {/* one below is original attempt */}
    {/* <Header /> */}
 
 
  {/* One below is first attempt */}
  {/* <Route exact path='/' component={Homepage} />  */}
  
  {/* one below is rebeccas attempt */}
  <Route exact path='/' component={Homepage2} /> 
  <Route exact path='/oldPage' component={Homepage} />

  

{/* One below is first attempt */}
    {/* <Footer /> */}

    </div>
    </Router>
  );

}
}
export default App;
