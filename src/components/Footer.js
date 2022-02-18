
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
class Footer extends React.Component{
  
    render(){
      return(
        <footer className="p-3 text-light">
          
          <center>
            <div className=" btn-group">
            <button className="btn"><i className="fab fa-facebook text-light"> </i></button>
            <button className="btn"><i className="fab fa-instagram text-light"> </i></button>
            <button className="btn"><i className="fab fa-twitter text-light"> </i></button>
            </div>
            </center>
            
            
            
            
          <div className='form-group mb-3'>
            <p className='text-white'>Get the lates and greatest offers from us by subscribing to our newsletter</p>
            <input type="email" className='form-control border ' placeholder='Your email address'/>
            <p className='pt-2' align='center'>
            <button className='btn buy-btn text-light'>Subscribe</button>
              </p>
            </div>
            <div className='text-light mb-3 nav flex-column container'>
            <div className="row">
              <div className="col-6">
                <li className='nav-item '><Link to="/" className='text-light nav-link'>Home</Link>   </li>
                <li  className='nav-item'><Link to="/about"  className='text-light nav-link'>About</Link>   </li>
                <li  className='nav-item'><Link to="/contact"  className='text-light nav-link'>Contact</Link>   </li>
                <li  className='nav-item'><Link to="/blog"  className='text-light nav-link'>Blog</Link>   </li>
              </div>
              <div className="col-6">
                <li className='nav-item '><Link to="/" className='text-light nav-link'>Terms</Link>   </li>
                <li  className='nav-item'><Link to="/"  className='text-light nav-link'>Disclaimer</Link>   </li>
                <li  className='nav-item'><Link to="/"  className='text-light nav-link'>FAQ</Link>   </li>
                <li  className='nav-item'><Link to="/"  className='text-light nav-link'>Payments</Link>   </li>
              </div>
                </div>
            </div>
            <center className=''>
            <p className=''>
            <i className="fas fa-copyright"></i> {this.props.app.companyName}
            </p>
          </center>
        </footer>
      )
    }
  }
  const mapStateToProps=(state)=>{
    return{
      app:state.application
    }
  }
  export default connect(mapStateToProps)(Footer);