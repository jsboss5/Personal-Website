import React, {Component} from 'react';
import Logo from "./Photo.jpg";

import{
  Link    //Within react - you don't use anchor tags - don't want to navigate to another page
  //custom element
} from 'react-router-dom';
//import Header from '.components/headerComponent/header';
import { render } from '@testing-library/react';

class Header extends Component {
  render() {
  return (
    <header>   

<img src={Logo} alt = "website Logo " />

    <nav>

        <ul>

           <li className="first">
           <Link to="/">Home</Link>            </li>

           <li>
              <Link to="/Products">Products</Link> 
           </li>
           <li className="last">
           <Link to="/">Contacts</Link> 
           </li>
        </ul> 

    </nav>

    </header>   
 
    );
  }
}
export default Header;
