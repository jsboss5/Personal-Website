import React, {Component} from 'react';


//import Header from '.components/headerComponent/header';
import { render } from '@testing-library/react';

class Homepage extends Component {
  render() {
  return (
    <div  class="homePage">   

    <h1>
        Bio
    </h1>

    <p>
   My name is Joshua Boss, and I'm sophomore at Duke studying Computer Science, Mathematics and Literature. I am interested in persuing a career in either full stack software engineering or Product Management. I created this webpage using react - I am trying to improve my front end abilities. Thanks for visiting!

    </p>

    </div>   
 
    );
  }
}
export default Homepage;
