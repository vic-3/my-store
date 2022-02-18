import React from 'react';
import Slidebox from './Slide-box';
import {connect} from "react-redux";
class Categories extends React.Component{
    render(){
      const categories=this.props.categories;
      return(
        <section className="d-inline" id="categories">
        <h3 className="p-2">categories</h3>
        {
         categories.map((info,index)=>{
           return( 
            <Slidebox key={index} name={info.name} image={info.image} alt={info.alt}/>
           
           )
         })
      }  
       </section>  
           
      )
    }
  }
  const mapStateToProps=(state)=>{
    return{
      categories:state.categories
    }
    
  }
export default connect(mapStateToProps)(Categories);