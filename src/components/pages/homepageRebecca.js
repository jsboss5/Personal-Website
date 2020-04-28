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

                  My name Is Joshua Boss, and I’m a sophomore undergraduate student at Duke University, studying Computer science, Mathematics and Literature. I am interested in pursuing a career in either full stack software engineering or Product Management. I am particularly intrigued by projects and work centered on social equity issues and climate change. I created this webpage as a brief window into me, and an opportunity to improve my react, javascript, html, css, and general front-end development skills. Feel free to check out the other pages to learn more about me. Thanks for visiting!

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