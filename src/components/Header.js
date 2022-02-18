import React from 'react';
import { connect } from 'react-redux';
class Header extends React.Component{
  
  render(){
    var cartLength=this.props.cart.length
    return(
      <header className="p-3 bg-light">
      <h1 className="">Logo <div className="btn-group clearfix" id="header-btns">
        <button className="btn btn-light border float-right" id="login" data-toggle="modal" data-target="#loginmodal"><i className="fas fa-user"></i></button>
        <button className="btn btn-light border float-right" id="cartbtn" data-toggle="modal" data-target="#cart"><i className="fas fa-shopping-basket"></i> <small className="badge bg-secondary badge-sm">{cartLength}</small></button>
        
        </div></h1> 
      </header>
    );
  }
    
  }
  const mapStateToProps=(state)=>{
    return{
      cart:state.cart
    }
    
  }
  export default connect(mapStateToProps)(Header);