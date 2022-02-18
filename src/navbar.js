import React from 'react';
class Navbar extends React.Component{
  state={
      counter:0
  }
 counting = () =>{
    this.setState({
        counter:this.state.counter+10
      });
  }
   
    render(){
        return(
            <div className="nav">
                <button className="btn btn-success" onClick={this.counting}>
                    click here 
                    <span className="badge bg-danger">{this.state.counter}</span>
                    <i className="bi-alarm" ></i>
                </button>
                
            </div>
        );
       
    }
}
 export default Navbar;
