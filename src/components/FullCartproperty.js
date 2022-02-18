import React from 'react';
//import $ from 'jquery';
import Cartitem from './Cart-item';
import {connect} from "react-redux";

class Fullcartproperty extends React.Component{
    
    
    checkProductInCart=(item,index)=>{
       
            for(var j=0; j<Object.keys(this.props.cart).length; j++){
                this.props.cart[j].find(this.props.products.id)
            }
        
        if(parseInt(this.props.products.id)===parseInt(this.props.cart))
        return(
            <Cartitem key={index} image={item.image} name={item.name}/> 
        
        )
            
    }
    render(){
        var detailedCart=this.props.cart;
        
        return(
            detailedCart.map((info,index)=>{
                return(
                    <Cartitem key={index} name={info.name} image={info.image} price={info.price} stock={info.stock} index={index}/>
                )
            })
            
        )
      
    }
   
  }


  const mapStateToProps=(state)=>{
    return{
      cart:state.cart,
      products:state.products
    }
  } 
    
  export default connect(mapStateToProps)(Fullcartproperty);  