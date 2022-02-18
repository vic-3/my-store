import React from "react";
import {connect} from "react-redux";
import { toast } from "react-toastify";
import PurchaseBtn from "../components/Purchase-btn";
import UtilityBtns from "../components/utility-btns";


class View extends React.Component{
    
        state={
            qty:1
        }
    reduceQty=()=>{
        if(this.state.qty>1){
            this.setState({
                qty: this.state.qty-1
            });
        }  
    }
    increaseQty=()=>{
        const {id}=this.props.match.params;
        
        const products=this.props.products;
        
       var item= products.find(product=>product.id===parseInt(id));
        if(this.state.qty<item.stock){
            this.setState({
                qty: this.state.qty+1
            });
        }
        else{
            toast("maximum quantity reached")
        }
        
    }
    
    render(){
        const {id}=this.props.match.params;
        const products=this.props.products;
        
       var item= products.find(product=>product.id===parseInt(id));
       
        return(
            <section className="card">
                <div className="card-body">
                    <div className="d-inline float-end"><UtilityBtns id={item.id}/></div>
                <img src={"../"+item.image[0]} className="img-responsive" alt={item.alt}/>
                <h2 className="text-center">{item.name} </h2>
                
                <div className="p-2 text-secondary clearfix">
                <small className="text-secondary float-end">product id: #{id}</small>
                    <div className="mb-3"><b>Unit price: </b><div className="btn btn-disabled text-mute border">{this.props.app.currency}{item.price}</div> </div>
                    <p><b>Description:</b></p>
                    {item.description}
                    
                </div>
                <div className="clearfix">
                <div className="float-end badge bg-secondary" >Qty: {this.state.qty}</div>
                </div>
                <div className="p-2 text-secondary d-inline">
                
                    <div className="btn-group w-50">
                        <button className="btn border w-25" onClick={this.reduceQty}>-</button>
                        <button className="btn border w-50">{this.props.app.currency}{item.price*this.state.qty}</button>
                        <button className="btn border w-25"  onClick={this.increaseQty}>+</button>
                    </div>
                </div>
                </div>
                <div className="card-footer d-grid">
                    <PurchaseBtn/>
                    </div>
            </section>
            
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        products:state.products,
        app:state.application
    }

}


export default connect(mapStateToProps)(View);