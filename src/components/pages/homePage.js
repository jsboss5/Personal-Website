import React, {Component} from 'react';
import Headshot from "../Images/Photo.jpg";

//import Header from '.components/headerComponent/header';
import { render } from '@testing-library/react';

class Homepage extends Component {
  render() {
  return (
    

    <div  class="homePage">   
    

    <h1>
        About Me
    </h1>
   
    <img src={Headshot} alt = "Headshot"/> 


    <p>
   My name is Joshua Boss, and I'm a sophomore undergraduate at Duke University studying Computer Science, Mathematics and Literature. I am interested in persuing a career in either full stack software engineering or Product Management. I created this webpage using react - I am trying to improve my front end abilities. Thanks for visiting!

    </p>

    </div>   
 
    );
  }
}
export default Homepage;
