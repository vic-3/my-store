import React, { Component } from 'react';
import {Slide} from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import {connect} from "react-redux";



    class Slideshow extends Component{

        render(){
            const slideImages = this.props.slide;
            
            return(
                <div className="slide-container">
                    <Slide>
                        {slideImages.map((slideImage,index)=>{
                            
                            return(
                                
                             <div className="each-slide" key={index}>
                                 <img src={slideImage.url} className="w-100" alt="slide"/>
                                 <div style={{backgroundImage:`url(${slideImage.url})`}}>
                                     <span>{slideImage.caption}</span>
                                 </div>
                             </div>
                        )})}
                    </Slide>
                    <img src="images/or.webp" alt="alternate" className="img-responsive w-50 mt-2"/>
                    <img src="images/ha.webp" alt="alternate" className="img-responsive w-50 mt-2"/>
                
                </div>
            )
        }
        
    }
const mapStateToProps=(state)=>{
    return{
        slide:state.slideShow
    }
}
export default connect(mapStateToProps)(Slideshow);