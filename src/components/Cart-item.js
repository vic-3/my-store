
import React from 'react';
import {connect} from 'react-redux';
import { toast } from 'react-toastify';
class Cartitem extends React.Component{
    constructor(props){
  
      super(props);
      this.state={
        stock:this.props.stock,
        qty:1,
        gross:this.props.price
      }
     
    }
    
    increment=()=>{
      var stockcount;
      if(this.state.qty>=this.state.stock){
        stockcount=this.state.stock;
      }
      else{
        stockcount=this.state.qty+1;
      }
      this.setState({
        qty:stockcount,
        gross:this.props.price*stockcount
  
      })
    }
    decrement=()=>{
      var stockcount;
      if(this.state.qty===0){
        stockcount=0;
      }
      else{
        stockcount=this.state.qty-1;
      }
      this.setState({
        qty:stockcount,
        gross:this.props.price*stockcount
  
      })
      
    }
     removeitem=()=>{
       
       this.props.removeItem(this.props.cart[this.props.index].id);
       var newCart=JSON.stringify(this.props.cart);
        localStorage.setItem("cart",newCart);
        toast("Item removed from cart");
        //console.log(this.props.cart)
       
     }
     
    render(){
      return(
        <div className="container m-1">
        <section className="card ">
          <div className="card-body">
          <div className="row">
            <div className="col col-6">
             
              <img src={this.props.image} alt={this.props.alt}  className="card-img-top "/>
             
           <br/><br/>
                Quantity: <div className="btn-group">
                  <button className="btn border btn-sm" onClick={this.decrement}>-</button>
                  <input type="button" className="btn border bg-light btn-sm" value={this.state.qty} readOnly/>
                  <button className="btn border btn-sm" onClick={this.increment}>+</button>
                </div>
                <span className="p-1 text-secondary"> ${this.props.price} </span>
              
            </div>
  
            <div className="col col-6">
            <div className="card-text">
              <h6>{this.props.name}</h6>
              <span className="text-secondary">{this.props.stock} remaining</span>
            </div>
            <br/>
            <p className="btn-group "><button className="btn fw-bold btn-sm border"disabled >$</button><input type="button" value={this.state.gross} className="gross-btn btn btn-sm fw-bold border" disabled/>  </p>
            </div>
            </div>
             <hr/>
             <div className="btn-group w-100">
             <button className="btn border text-secondary btn-sm"><i className="fas fa-heart"></i> save</button>
             <button className="btn border text-secondary  btn-sm" onClick={this.removeitem}><i className="fas fa-trash-alt"></i> remove</button>
             </div>
            
  
          </div>
        </section>
        </div>
      )
    }
  }
  
  const mapStateToProps=(state)=>{
    return{
      cart:state.cart
    }

    
  }

  const mapDispatchToProps=(dispatch)=>{
    return{
      removeItem: (id)=>{
        dispatch({
          "type":"REMOVE_ITEM",
          "payload":{
            "id":id
          }
        })
      }
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Cartitem);  