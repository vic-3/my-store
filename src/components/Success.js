import React from 'react';
class Success extends React.Component{
  
    render(){
      return(
        <div className="alert alert-success alert-dismissible fade show clear-fix fixed-bottom col-sm-4" id="success-alert">
          <button type="button" className="btn-close btn "  data-dismiss="alert"></button>
          {this.props.message}
        </div>
      )
    }
  }
  export default Success;