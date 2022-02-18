import React from 'react';
import { connect } from 'react-redux';
import UtilityBtns from './utility-btns';
import {Link} from "react-router-dom";
import PurchaseBtn from './Purchase-btn';
 


class Products extends React.Component{

  render(){

   
  return(
  <div className="card  col-6 col-sm-4 col-md-3">
    <div className="card-body product-card">
    <Link to={`view/${this.props.id}`}>
      <div className="card-img">
        <img src={this.props.image} alt=" not found" className="card-img-top product-image"/>

      </div>
      </Link>
      <strong><small>{this.props.name}</small></strong>
      <div className="card-text ">
      <span className="right">{this.props.app.currency}{this.props.price}</span> <br/>
        <small className="text-secondary">
          
          {this.props.details}
          
          <UtilityBtns id={this.props.id}/>



        </small>
      </div>
      <hr/>
      <div className="d-grid gap-2">
        <PurchaseBtn/>

        
      </div>
      
    </div>
  </div>
  );
  }
 
}
const mapStateToProps=(state)=>{
  return{
    cart:state.cart,
    app:state.application
  }
}
const mapDispatchToProps=(dispatch)=>{
  //console.log("working");
  return{
    toCart: (id)=>{dispatch({
    "type":"ADD_ITEM",
    "payload":{
        "id":id
        
      }
  });
}
  }
}
 

  export default connect(mapStateToProps, mapDispatchToProps)(Products);