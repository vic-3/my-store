import React, { Component } from 'react';
import Products from './Product';
import {connect} from "react-redux";
class Container extends Component{
  render(){
    const products=this.props.products;
    return(
      <section className="container-fluid bg-light  p-1 row">
        {
           products.map((info,index)=>{
             return( 
              <Products key={index} name={info.name} details={info.details} image={info.image[0]} id={info.id}  price={info.price} stock={info.stock} seller={info.seller}  />
             
             )
           })
        }
        
      </section>
    );
  }
    
    }
    const mapStateToProps=(state)=>{
      return{
        products:state.products
      }
    }
    export default connect(mapStateToProps)(Container);