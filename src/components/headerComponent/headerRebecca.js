import React, {Component} from 'react';
import Headshot from "../Images/Photo.jpg";
import ReactDOM from 'react-dom';
import {SocialIcon} from 'react-social-icons';
import hamburger from "../Images/HamburgerIcon.png";

import{
  Link    //Within react - you don't use anchor tags - don't want to navigate to another page
  //custom element
} from 'react-router-dom';
//import Header from '.components/headerComponent/header';
import { render } from '@testing-library/react';

class Header2 extends Component {
  
  
  
  render() {
  return (
    <header>   

{/* <img src={Headshot} alt = "Headshot" /> */}

    <nav className = "left">

        <ul>
        <li className="linkedIn">
           <SocialIcon url="https://www.linkedin.com/in/joshua-boss-a50b9b179/"/>      
         </li>

           <li>
              <SocialIcon url ="https://github.com/jsboss5"/>
           </li>



        </ul>

    </nav>
    
   
   
   
   
    <nav class="bigScreenNav">

        <ul class= "bigNav">

           <li className="first">
           <Link to="/">Home</Link>            </li>

           <li>
              <Link to="/oldPage">oldPage</Link> 
           </li>
           <li className="last">
           <Link to="/">Contacts</Link> 
           </li>
       
          
        </ul> 
      
    </nav>


<nav class="littleScreenNav">



</nav>


<div>
      <button onclick = "myFunction()">
          <img class = "dropbtn" src = {hamburger} alt = ""/> 
      </button>
    
    <div class = "menu">

          <li class = "item1">
            <a href="/"> Home </a>
          </li>
          <li class = "item2">
            <a href="/"> Items </a>
          </li>
          <li class = "item3">
            <a href="/"> yuh </a>
          </li>
    </div>




</div>


<script>
    myFunction(){




}
  
</script>


    </header>   
 




    );
  }
}
export default Header2;
