import React from 'react';

  class Error extends React.Component{
     
    render(){
      return(
        <div className="alert alert-danger alert-dismissible fade show fixed-bottom col-sm-4" id="success-alert">
          <button type="button" className="btn-close btn "  data-dismiss="alert"></button>
          
          {this.props.message}
        </div>
      )
    }
  }
   
  export default Error;