import React, {Component} from 'react';
import Headshot from "../Images/Photo.jpg";

//import Header from '.components/headerComponent/header';
import { render } from '@testing-library/react';

class Homepage2 extends Component {
  render() {
  return (
    

    <div  class="homepageRebecca">   
    
    <img src={Headshot} alt = "Headshot"/> 

    <div >
    
    <p>

    Text text rebecca is cool but I am cooler, ok I will model it after that you unfortunatly, are not a super model.

    </p>

    </div>



    </div>   
 
    );
  }
}
export default Homepage2;