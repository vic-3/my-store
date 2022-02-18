import { Component } from "react";
import { connect } from "react-redux";
import { toast } from 'react-toastify';

class Utility extends Component{
    tocart=()=>{
    
        this.props.toCart(this.props.id);
        var newCart=JSON.stringify(this.props.cart);
        if(this.props.cart.find(item=>item.id===this.props.id)){
          toast("Item already in cart");
        }
        else{
          toast("Item added to cart");
        }
        
        //var oldCart=JSON.parse(localStorage.getItem("cart"));
        
        localStorage.setItem("cart",newCart);
        
     }

    render(){
        return(
            <div className="btn-group">
            <button className="btn btn-light border"><i className="far fa-heart"></i></button>
            <button className="btn btn-light border" value={this.props.id} 
            onClick={this.tocart}><i className="fas fa-shopping-basket"></i></button>
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return{
      cart:state.cart
      
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

export default connect(mapStateToProps,mapDispatchToProps)(Utility)