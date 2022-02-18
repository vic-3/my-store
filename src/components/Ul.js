import React from 'react';
import  {Link } from 'react-router-dom';
function Ul(props){
 
    return(
      <li className="nav-item">
         
      <Link className="nav-link text-light" to={props.link}>{props.name}</Link>
       
    </li>
    );
  }
  export default Ul;