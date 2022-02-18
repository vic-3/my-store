import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link} from 'react-router-dom';
import Ul from './Ul';
class Nav extends Component{
  render(){

 
    return(
      <nav className="navbar navbar-expand-sm  text-light p-2 sticky sticky-top" >
         
        <button className="navbar-toggler btn" id="search-btn" data-target="#collapsible-search" data-toggle="collapse"><i className="fas fa-search text-light"></i></button>
        <Link className="navbar-brand text-light" to="/">{this.props.app.siteName}</Link>
        <button className="navbar-toggler border border-light"   type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
           <span className="fas fa-bars text-light"></span>
        </button>
       
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav clearfix">
            
          <Ul name="About" link="/about"/> 
          <Ul name="Blog" link="/blog"/> 
          <Ul name="Contact" link="/contact"/> 
           
          </ul>
        </div>
        <div className="collapse navbar-collapse" id="collapsible-search">
          <div className="form-group p-4">
            <input  type="search" className="form-control" placeholder="search products & categories"/>
          </div>
        </div>
        
      </nav>
    );
  }
  }
  const mapStateToProps=(state)=>{
    return{
      app:state.application
    }
  }
  export default connect(mapStateToProps)(Nav);