import React from 'react';

class Slidebox extends React.Component{
    render(){
      return(
        <section className="card inline">
          <div className="card-body">
           <h5>
             {this.props.name}
            </h5>
            <div className="card-img-top">
              <img src={this.props.image} alt={this.props.alt}/>
            </div>
           <div className="card-text">
            <small> {this.props.details}</small>
           </div>
          </div>
  
        </section>
      )
    }
  }
  export default Slidebox;