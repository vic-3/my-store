import React from 'react';
class Login extends React.Component{
  
    render(){
      return(
        <section className="modal fade" id="loginmodal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title">Login to your account</h3>
                <button type="button" className="btn btn-light border btn-close" data-dismiss="modal"></button>
              </div>
              <div className="modal-body">
                <form method="post">
                  <div className="form-group col-sm-12 p-1">
                    <label><h6>Email address</h6></label>
                  <input type="email" id="log-email" className="form-control" placeholder="Please input your email"/> 
    
                  </div>
                  <div className="form-group col-sm-12 p-1">
                    <label><h6>Your password</h6></label>
                  <input type="password" id="log-pass" className="form-control" placeholder="Please input your password"/> 
    
                  </div>
                  
                   <div className="form-group p-2">
                   <center className="d-grid gap-2">
                    <button className="btn buy-btn text-light" type="button">Login</button>
                    <button className="btn secondary-btn " type="button" >Create account</button>
                   </center>
                   </div>
                  
                
                </form>
                <div className="modal-footer">
    
                  <a href="#demo">forgot password?</a> 
                </div>
              </div>
            </div>
          </div>
        </section>
      )
    }
    }
export default Login;    