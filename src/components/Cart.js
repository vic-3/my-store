import React from 'react';

import {connect} from "react-redux";
import Fullcartproperty from './FullCartproperty';
function Emptycartproperty(){
  return(
    <div className="card">
    <div className="card-body">
    <center>
      <i className="fas fa-shopping-cart text-secondary empty-cart-icon"></i> 
      <p>Your cart is empty</p>
      <button className="btn  buy-btn text-light" data-dismiss="modal">continue shopping <i className="fas fa-shopping-basket"></i></button>
      </center>
    </div>
  </div>
  )
}

class Cart extends React.Component{
  
    constructor(props){
      super(props);
      //var cart=this.props.cart;
      var detailedCart=this.props.cart;
      
      this.state={
        total:this.props.cartTotal,
        detailedCart:detailedCart,
      }
     
      
    }
  
    componentDidUpdate=()=>{
      var newCart=JSON.stringify(this.props.cart);
      localStorage.setItem("cart",newCart);
      console.log(this.props.cart)
     }
    calculateTotal=()=>{
      //console.log(this.props.total)
    
    }
    
    render(){
      var isCartEmpty;
      if(Object.keys(this.props.cart).length>0){
        isCartEmpty=<Fullcartproperty/>
         
    }
      else{
        isCartEmpty=<Emptycartproperty/>
      }
      
      return(
        <section className="modal cart fade " id="cart">
          <div className="modal-dialog">
            <div className="modal-content ">
              <div className="modal-header display-5 sticky sticky-top bg-light">
                Cart
                <button type="button" className="btn btn-light border btn-close" data-dismiss="modal"></button>
              </div>
              <div className="modal-body">
                {isCartEmpty}
              <br/>
              </div>
              <div className="fixed fixed-bottom bg-light p-2 d-grid gap-2">
                <button className="btn checkout-btn text-light" onClick={this.calculateTotal}><i className="fas fa-shopping-bag"> </i> Checkout <span>(${this.props.total})</span></button>
              </div>
            </div>
          </div>
        </section>
      )
    }
  }
const mapStateToProps=(state)=>{
  return{
    cart:state.cart,
    products:state.products,
    total:state.cartTotal
  }
} 
  
export default connect(mapStateToProps)(Cart);  