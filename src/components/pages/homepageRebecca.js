import React, {Component} from 'react';
import Headshot from "../Images/Photo.jpg";

//import Header from '.components/headerComponent/header';
import { render } from '@testing-library/react';

class Homepage2 extends Component {
  render() {
  return (
    

    <div  class="homepageRebecca">   
    
            <img src={Headshot} alt = "Headshot"/> 

        {/* this is my opaque block */}
            <div >
            
                  <p>

                  My name is Joshua Boss, and I'm a sophomore undergraduate at Duke University studying Computer Science, Mathematics and Literature. I am interested in persuing a career in either full stack software engineering or Product Management. I created this webpage using react - I am trying to improve my front end abilities. Thanks for visiting!

                  </p>

            </div>

          <h1>
            Joshua Boss
          </h1>
          
          <hr class = "top"/>

          <hr class = "bottom"/>


    </div>   
 
    );
  }
}
export default Homepage2;