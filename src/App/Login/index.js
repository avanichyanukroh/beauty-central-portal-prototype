import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import 'App/Login/index.css';

class Login extends Component {
      render() {
            return (
                <div className="login-container fadeInDown">
                    <div id="formContent">
                        {/* Tabs Titles */}
                        {/* Icon */}
                        <div className="fadeIn first">
                            <div className="login-header-container">
                                <h2>Beauty Central</h2>
                            </div>
                        </div>
                        {/* Login Form */}
                        <div className="form-group">
                            <input type="text" id="login-input" className="form-control fadeIn second" name="username" placeholder="Username" />
                            <input type="text" id="login-input" className="form-control fadeIn third" name="password" placeholder="Password" />
                            <Link to="/App/Dashboard"><button type="submit" className="btn btn-primary fadeIn fourth">Submit</button></Link>
                        </div>
                        {/* Remind Passowrd */}
                        <div id="formFooter">
                            <a className="underlineHover" href="#">Forgot Password?</a>
                        </div>
                    </div>
                </div>


            );
      }
}

export default Login;
